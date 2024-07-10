import React, { useState, ChangeEvent, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadImage from "../usefull/upload_image";
import DisplayResult from "./display_result";
import { imageContent } from "../models/imagePrediction";
import NewDisplayResult from "./new_display_result";
// interface Props {
//   onImageUrl: (imageUrl: string) => void;
// }

const Disease = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadImage, setUploadImage] = useState<boolean>(false);
  const [content, setContent] = useState<imageContent>({
    cause: "",
    crop: "",
    cure: "",
    disease: "",
  });
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [detected, setDetected] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  //   const [imageUrl, setImageUrl] = useState<string>("");
  const handleImageUrl = (imageUrl: string) => {
    setImageUrl(imageUrl); // Set the imageUrl in the parent component
  };

  const handleUploadImage = (uploadImage: boolean) => {
    setUploadImage(uploadImage); // Set the imageUrl in the parent component
  };

  const handleContent = (content: imageContent) => {
    setContent(content); // Set the imageUrl in the parent component
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal");
    setModalOpen(false);
  };
  const handleDetected = () => {
    setDetected(true);
  };
  useEffect(() => {
    console.log("content : ", content);
  }, [content]);

  const handleResize = () => {
    console.log("handleScreen SIze");
    console.log(window.innerWidth);

    setScreenSize(window.innerWidth);
  };

  let paddingTop;
  let marginBottom;
  let height;
  let top;

  if (screenSize >= 1550) {
    console.log("largeraa");
    paddingTop = "7%"; // Extra-large screens
    marginBottom = "0%";
    height = "80%";
    top = 200;
  } else if (screenSize <= 1540) {
    console.log("smaller");
    paddingTop = "30%"; // Large screens
    marginBottom = "20%";
    height = "95%";
    top = 320;
  } else if (screenSize <= 1000) {
    console.log("1555444444444440000000");
    paddingTop = "5%"; // Large
    marginBottom = "17%";
    height = "100%";
    top = 320;
  } else {
    paddingTop = "2%";
    marginBottom = "0";
    height = "100%";
    top = 320;

    // Default or smaller screens
  }
  const backgroundImage2 = `${process.env.PUBLIC_URL}/images/background/centered.jpg`;
  window.removeEventListener("resize", handleResize);

  return (
    <div
      style={{
        // height: "50rem",
        // minHeight: "50rem",
        // alignContent: "center",
        // alignItems: "center",
        // textAlign: "center",
        // paddingTop: "5%",
        display: "grid",
        width: "100%",
        // justifyContent: "space-between",
        // paddingLeft: "25%",
        // paddingInline: "30%",
      }}
    >
      {/* {!uploadImage && ( */}
      <div>
        <Box
          sx={{
            height: "100vh",
            position: "relative",
            display: "grid",
            alignItems: "center",
            // justifyContent: "center",
            // flexDirection: "column",
            // padding: 3,
            // color: "#fff",
            // textAlign: "center",
            paddingTop,
            marginBottom,
            // paddingBottom,

            "&::before": {
              content: '""',
              position: "absolute",
              top,
              left: 100,
              width: "60%",
              height,
              backgroundImage: `url(${backgroundImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2, // Adjust opacity here (0 to 1)
            },
          }}
          id={"disease"}
        >
          <UploadImage
            onImageUrl={handleImageUrl}
            onUploadImage={handleUploadImage}
            onContent={handleContent}
            handleCancel={handleCloseModal}
            modalOpen={modalOpen}
            handleDetected={handleDetected}
          />
        </Box>
      </div>
      <div>
        {uploadImage && (
          <NewDisplayResult
            passImageUrl={imageUrl}
            content={content}
            detected={detected}
          />
        )}
      </div>
    </div>
  );
};

export default Disease;
