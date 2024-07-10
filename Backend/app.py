# Importing essential libraries and modules
from flask import Flask, request, jsonify
import requests
import io
from PIL import Image
import json
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import json
import base64
import re

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/', methods=['GET'])
def status():
    return jsonify({'status': 'ok'})

def split_cause_into_list(data):
    # Use regular expression to split the text by numbered items
    # The pattern r'\d+\.' matches numbers followed by a dot (e.g., '1.' , '2.')
    parts = re.split(r'(\d+\.\s)', data)
    # Remove any empty strings and reconstruct the list to keep the numbered items together with their text
    crop = [parts[i] + parts[i + 1] for i in range(1, len(parts) - 1, 2)]
    return crop

def remove_tags(text):
    try:
        # Remove HTML tags
        soup = BeautifulSoup(text, 'html.parser')
        plain_text = soup.get_text()
        print("plain text       :       ", plain_text)
        sections = plain_text.split('\n')
        sections = [val.strip() for val in sections if val.strip() != ""]
        multi_data = sections[0].split(':')
        crop = multi_data[1].split('Disease')[0].strip()
        disease = multi_data[2].strip()
        print("disease :    ", disease)
        data = {}
        if disease != "None":
            try:
                cause_index = sections.index("Cause of disease:")
                print("Cause of disease         :       ", sections[cause_index])
            except ValueError:
                cause_index = None
            try:
                cure_index = sections.index("How to prevent/cure the disease:")
            except ValueError:
                cure_index = None
            cause = ""
            cure = ""
            if cause_index is not None and cure_index is not None:
                for i in range(cause_index + 1, cure_index):
                    cause += sections[i] + " "
                for i in range(cure_index + 1, len(sections)):
                    cure += sections[i] + " "
            elif cause_index is not None:
                print("Entered Cause of index")
                for i in range(cause_index + 1, len(sections)):
                    cause += sections[i] + " "
            elif cure_index is not None:
                for i in range(cure_index + 1, len(sections)):
                    cure += sections[i] + " "
            data["crop"] = crop
            data["disease"] = disease
            data["cause"] = cause.strip()
            data['cause'] = split_cause_into_list(data['cause'])
            data["cure"] = cure.strip()
            data['cure'] = split_cause_into_list(data['cure'])
            return data, "detected"
        else:
            data["crop"] = crop
            data["disease"] = disease
            data['cause'] = ''
            data["cure"] = ''
            return data, "not detected"
    except ValueError as ve:
        print("ValueError occurred:", ve)
    except Exception as e:
        print("An error occurred:", e)

def preprocess_image(image_bytes):
    """
    Preprocess the image to the format expected by the model.
    :param image_bytes: Image in bytes
    :return: Preprocessed image
    """
    print("entered image preprocess")
    image = Image.open(io.BytesIO(image_bytes))
    image = image.resize((224, 224))  # Assuming model expects 224x224 images
    buffer = io.BytesIO()
    image.save(buffer, format="JPEG")
    encoded_string = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return encoded_string

def predict_image_with_azure(img):
    headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
    "Accept-Encoding": "*",
    "Connection": "keep-alive",
    'Content-Type': 'application/json'
    }
    scoring_uri = 'http://23f5559f-b661-4905-9716-374fe665723b.centralus.azurecontainer.io/score'
    encoded_string = preprocess_image(img)
    # For disease prediction
    data = {'type': 'disease', 'image': encoded_string}
    input_data = json.dumps(data)
    response = requests.post(scoring_uri, data=input_data, headers=headers)
    if response.status_code == 200:
        response_json = response.json()
        print(type(response_json))
        response = json.loads(response_json)
        print(json.loads(response_json))
        print(type(response))
        prediction = response.get('prediction', 'No disease found')
        print("prediction   :   ", prediction)
        description = response.get('description', 'No Description')
        return prediction, description
    else:
        response.raise_for_status()

@app.route('/disease-predict', methods=['POST'])
def new_disease_prediction():
    if 'file' not in request.files or 'imageUrl' not in request.form:
        return jsonify({'error': 'File or image URL not provided'}), 400
    file = request.files['file']
    image_url = request.form['imageUrl']
    if file and image_url:
        try:
            print("file :   ", file)
            img = file.read()
            _, prediction = predict_image_with_azure(img)
            data, msg = remove_tags(prediction)
            print("Removed Tags  :   ", data)
            return jsonify({'prediction': data, 'msg': msg})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    return jsonify({'error': 'Invalid request'}), 400

if __name__ == "__main__":
    app.run(debug=True)