# Harvestify: AI-Powered Plant Health Assistant

![Harvestify Banner](/Web%20App%20Interface.png)

## Introduction

Welcome to **Harvestify: AI-Powered Plant Health Assistant**! This application is designed to help gardeners and farmers keep their plants healthy by leveraging advanced AI and machine learning technologies. With Harvestify, you can simply upload a photo of your plant's leaf, and our app will instantly diagnose any diseases and provide treatment suggestions.

## Features

- **Disease Detection**: Upload a photo of a plant leaf, and Harvestify will identify any diseases and provide detailed information about them.
- **Crop Recommendation**: Get recommendations for the best crops to plant based on soil and weather conditions.
- **Fertilizer Suggestion**: Receive personalized fertilizer suggestions to enhance plant growth and health.
- **Real-Time Analysis**: Instant analysis of plant health with quick and accurate results.
- **User-Friendly Interface**: Simple and intuitive interface for easy navigation and use.

## Installation

To get started with Harvestify locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/MGJillaniMughal/Harvestify-AI-Powered-Plant-Health-Assistant.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd Harvestify-AI-Powered-Plant-Health-Assistant
    ```
3. **Install the required dependencies**:
    ```sh
    pip install -r requirements.txt
    ```
4. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables (e.g., API keys, secret keys).

## Usage

1. **Run the application locally**:
    ```sh
    python app.py
    ```
2. **Access the application**:
    - Open your web browser and go to `http://localhost:5000`.

3. **Upload an Image**:
    - Navigate to the "Disease Detection" page.
    - Upload a photo of the plant leaf you want to analyze.
    - Click "Submit" to get the disease prediction and treatment suggestions.

## Deployment on Microsoft Azure

Harvestify is also hosted on Microsoft Azure. You can access the live application [here](https://your-azure-app-url).

To deploy the application to Azure, follow these steps:

1. **Create an Azure App Service** and configure it for a Python web app.
2. **Deploy the code**:
    - You can use Azure DevOps, GitHub Actions, or any other CI/CD tool to automate the deployment process.
    - Alternatively, you can manually deploy using FTP, Git, or ZIP deployment.

3. **Configure environment variables** in Azure App Service settings.
4. **Ensure all dependencies** are specified in the `requirements.txt` file.

## Project Structure

```plaintext
Harvestify-AI-Powered-Plant-Health-Assistant/
│
├── static/
│   ├── css/
│   ├── images/
│   └── js/
│
├── templates/
│   ├── index.html
│   ├── crop.html
│   ├── fertilizer.html
│   ├── disease.html
│   ├── crop-result.html
│   ├── fertilizer-result.html
│   └── disease-result.html
│
├── app.py
├── requirements.txt
├── models/
│   ├── resnet50_model.h5
│   ├── RandomForest.pkl
│   └── ...
│
└── README.md



## Contributing

We welcome contributions to Harvestify! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes** and **commit them**:
    ```sh
    git commit -m "Add your commit message"
    ```
4. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
5. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- Thanks to all the contributors who have made this project possible.
- Special thanks to the AI and machine learning communities for their support and resources.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [m.g.jillani123@gmail.com](mailto:m.g.jillani123@gmail.com)
- **Phone**: +92 321 1174167
- **Address**: Lahore, Pakistan

---

Let's keep our plants healthy together with Harvestify!
