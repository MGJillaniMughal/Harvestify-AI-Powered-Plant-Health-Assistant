import React, { useState, ChangeEvent } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Margin } from "@mui/icons-material";

const Crop = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Here you can implement the upload functionality
    console.log("Uploading file:", selectedFile);
  };

  return (
    <div style={{ height: "100%" }}>
      <Box
        sx={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
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
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
          </Button>
        </label>
        <Typography variant="body2" mt={2}>
          {selectedFile ? selectedFile.name : "No file selected"}
        </Typography>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Upload
        </Button>
      </Box>
    </div>
  );
};

export default Crop;
