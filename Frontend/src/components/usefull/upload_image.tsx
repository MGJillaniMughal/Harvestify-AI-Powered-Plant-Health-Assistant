import React, { useState, ChangeEvent } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { imageContent } from "../models/imagePrediction";
import { Card } from "react-bootstrap";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface Props {
  onImageUrl: (imageUrl: string) => void;
  onUploadImage: (upload: boolean) => void;
  onContent: (content: imageContent) => void;
  handleCancel: () => void;
  modalOpen: boolean;
  handleDetected: () => void;
}

const UploadImage: React.FC<Props> = ({
  onImageUrl,
  onUploadImage,
  onContent,
  handleCancel,
  modalOpen,
  handleDetected,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<object>({});
  const [result, setResult] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      imageUrl: "",
    },
    validationSchema: Yup.object({
      imageUrl: Yup.string().required("Image URL is required"),
    }),
    onSubmit: async (values) => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("imageUrl", values.imageUrl);

        try {
          const response = await axios.post(
            "https://myflaskaimlapp.azurewebsites.net/disease-predict",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("RESPONSE : ", response);
          setPrediction(response.data.prediction);
          onContent(response.data.prediction);
          console.log("UPLOAD IMAGE PAGE  : ", response.data.prediction);
          if (response.data.msg == "detected") {
            handleDetected();
          }
          onUploadImage(true);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file); // Create URL for the selected file
      setImageUrl(url); // Set the image URL directly
      onImageUrl(url);
      formik.setFieldValue("imageUrl", url);
    }
  };

  // const truncateFileName = (name: string) => {
  //   return name.length > 10 ? name.substring(0, 10) + "..." : name;
  // };

  const handleDetetct = () => {
    console.log("triggered Handle Detect");
    console.log("On Detect  :   ", imageUrl);
    console.log("On Detect  :   ", result);
    formik.handleSubmit();
    setResult(true);
  };

  const handleUpload = () => {
    console.log("triggered handleUpload");

    onUploadImage(false);
    setResult(false);
    console.log("On browse  :   ", imageUrl);
    console.log("On browse  :   ", result);
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",

        // justifyContent: "space-between",
      }}
    >
      {/* <Modal open={modalOpen} onClose={handleCancel}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          // alignItems: "center",
          textAlign: "left",
          width: "80%",
          paddingLeft: "15%",
          color: "#212121",
        }}
      >
        <div style={{ marginRight: "10%" }}>
          <h1 style={{ color: "green", fontSize: 35, fontWeight: "bold" }}>
            Easy Steps to Healthier Plants
          </h1>
          <h5 style={{ fontSize: 18, padding: "1rem 0" }}>
            Discover the health of your plants in just a few clicks. Follow
            these steps to detect and understand plant diseases using our app:
          </h5>
          <div>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <h3 style={{ paddingRight: 5 }}>
                <CameraAltIcon sx={{ color: "green" }} />
              </h3>
              <h3>Snap a Picture</h3>
            </div>
            <p style={{ fontSize: "1rem", padding: "0 0 1rem 2rem" }}>
              Simply take a clear photo of the plant leaf you suspect might be
              diseased.
            </p>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
                // padding: "1rem 0",
              }}
            >
              <h3 style={{ paddingRight: 5 }}>
                <UploadFileIcon sx={{ color: "green" }} />
              </h3>
              <h3>Upload Your Photo</h3>
            </div>
            <p style={{ fontSize: "1rem", padding: "0 0 1rem 2rem" }}>
              Upload the photo directly through our app. It's fast and secure.
            </p>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
                // padding: "1rem 0",
              }}
            >
              <h3 style={{ paddingRight: 5 }}>
                <TravelExploreIcon sx={{ color: "green" }} />
              </h3>
              <h3>Instant Analysis</h3>
            </div>

            <p style={{ fontSize: "1rem", padding: "0 0 1rem 2rem" }}>
              Our advanced AI algorithms will analyze the photo to detect signs
              of disease immediately.
            </p>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
                // padding: "1rem 0",
              }}
            >
              <h3 style={{ paddingRight: 5 }}>
                <VerifiedIcon sx={{ color: "green" }} />
              </h3>
              <h3>Get Results</h3>
            </div>

            <p style={{ fontSize: "1rem", padding: "0 0 1rem 2rem" }}>
              View a detailed report on your plant's condition, including the
              type of disease detected and suggestions for treatment.
            </p>
          </div>
        </div>
        <Box
          sx={{
            height: "55%",
            paddingInline: 10,
            border: "8px dashed #5D902E",
            borderRadius: "15px",
            textAlign: "center",
            overflow: "hidden",
            "&:hover img": {
              transform: "scale(1.1)",
            },
            marginTop: "9%",
            backgroundColor: "#E4FFCB",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginTop: "20%" }}>
            <div>
              <CloudUploadOutlinedIcon
                style={{ fontSize: 80, color: "green" }}
              />
            </div>
            <div>
              <p style={{ fontSize: 18 }}>
                <b>Drag and Drop Image Here</b>
              </p>
            </div>
          </div>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              // startIcon={<CloudUploadIcon />}
              style={{
                // marginBottom: "2rem",
                backgroundColor: "green",
                borderRadius: 25,
                height: 50,
                paddingInline: 30,
                fontStretch: "extra expanded",
                fontWeight: "bold",
              }}
              onClick={handleUpload}
            >
              Browse
            </Button>
          </label>
        </Box>
      </div>

      {imageUrl && !result && (
        <Modal open={modalOpen} onClose={handleCancel}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 700,
              bgcolor: "background.paper",
              // border: "2px solid #000",
              borderRadius: 8,
              borderColor: "white",
              boxShadow: 24,
              p: 4,
              display: "grid",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <>
              <div
                className="navbar-brand"
                style={{
                  fontSize: 30,
                  backgroundColor: "rgb(122 173 104)",
                  color: "white",
                  fontWeight: 50,
                  width: "40%",
                  marginInline: "30%",
                  // boxShadow: " 10px 2px 5px #888888",
                  transition: "transform 0.3s",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                Harvestify
              </div>
              <div
                style={{
                  display: "grid",
                  // alignContent: "center",
                  // alignItems: "center",
                  // justifyContent: "center",
                  paddingTop: "15%",
                }}
              >
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  style={{
                    width: 500,
                    height: 300,
                    borderRadius: 20,
                    transition: "transform 0.8s ease-in-out",
                  }}
                />

                <div
                  style={{
                    height: 40,
                    backgroundColor: "#E4FFCB",
                    padding: 5,
                    borderRadius: 10,
                    boxShadow: " 5px 2px 5px #888888",
                    fontStretch: "expanded",
                    fontFamily: "sans-serif",
                  }}
                >
                  {selectedFile?.name
                    ? selectedFile.name.length > 40
                      ? selectedFile.name.substring(0, 40) + "..."
                      : selectedFile.name
                    : "No file selected"}
                </div>
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={() => formik.handleSubmit()}
                  disabled={!selectedFile}
                  style={{
                    width: "100%",
                    marginTop: "10%",
                  }}
                >
                  Upload
                </Button> */}
              </div>
            </>
            <div
              style={{
                display: "flex",
                marginTop: 40,
                justifyContent: "space-between",
                marginInline: 20,
                height: 50,
                fontSize: 50,
              }}
            >
              <Button
                variant="contained"
                component="span"
                // startIcon={<CloudUploadIcon />}
                style={{
                  backgroundColor: "green",
                  width: "30%",
                  borderRadius: 20,
                }}
                onClick={handleDetetct}
              >
                Detect
              </Button>
              <Button
                variant="contained"
                component="span"
                // startIcon={<CloudUploadIcon />}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "30%",
                  borderRadius: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      )}

      {/* </Modal> */}
    </div>
  );
};

export default UploadImage;
