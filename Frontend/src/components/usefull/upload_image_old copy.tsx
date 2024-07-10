import React, { useState, ChangeEvent } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { imageContent } from "../models/imagePrediction";
import { Card } from "react-bootstrap";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

interface Props {
  onImageUrl: (imageUrl: string) => void;
  onUploadImage: (upload: boolean) => void;
  onContent: (content: imageContent) => void;
  handleCancel: () => void;
  modalOpen: boolean;
  handleDetected: () => void;
}

const OldUploadImage: React.FC<Props> = ({
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
            "http://127.0.0.1:5000/disease-predict",
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

  const truncateFileName = (name: string) => {
    return name.length > 10 ? name.substring(0, 10) + "..." : name;
  };

  return (
    <div style={{ height: "100%", borderRadius: "50%" }}>
      <Modal open={modalOpen} onClose={handleCancel}>
        <div>
          {!imageUrl && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                height: 600,
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
              <div>
                <h1 style={{ color: "green" }}>
                  <b>Upload Image</b>
                </h1>
                <h5>Choose a JPG Image to Upload </h5>
                <Box
                  sx={{
                    border: "8px dashed #5D902E",
                    borderRadius: "15px",
                    // padding: "10%",
                    height: "80%",
                    paddingInline: 10,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                    backgroundColor: "#E4FFCB",
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
                        marginBlock: "3rem",
                        backgroundColor: "green",
                        borderRadius: 25,
                        height: 50,
                        paddingInline: 30,
                        fontStretch: "extra expanded",
                        fontWeight: "bold",
                      }}
                    >
                      Browse
                    </Button>
                  </label>
                </Box>
              </div>

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
                  onClick={() => formik.handleSubmit()}
                >
                  Upload
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
          )}

          {imageUrl && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                height: 600,
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
                  onClick={() => formik.handleSubmit()}
                >
                  Upload
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
          )}
        </div>
      </Modal>
    </div>
  );
};

export default OldUploadImage;
