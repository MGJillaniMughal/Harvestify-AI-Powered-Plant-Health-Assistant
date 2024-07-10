import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { imageContent } from "../models/imagePrediction";

interface Props {
  passImageUrl: string;
  content: imageContent;
  detected: boolean;
}

const DisplayResult: React.FC<Props> = ({
  passImageUrl,
  content,
  detected,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  React.useEffect(() => {
    setImageUrl(passImageUrl);
  }, [passImageUrl]);

  React.useEffect(() => {
    console.log("DISPLAY RESULT : ", content);
  }, [content]);

  const backgroundImage = `${process.env.PUBLIC_URL}/images/background/big_leaves.png`;

  return (
    <Box
      sx={{
        // height: "100vh",
        position: "relative",
        display: "grid",
        alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "column",
        // padding: 3,
        // textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, // Adjust opacity here (0 to 1)
        },
      }}
    >
      <div
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   padding: "2rem",
      //   // borderRadius: "15px",
      // }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            paddingInline: "5%",
          }}
        >
          <div>
            <h1 style={{ fontSize: 90, display: "flex" }}>
              <span style={{ color: "green" }}>Classif</span>
              <span style={{ color: "black" }}>ication</span>
            </h1>
            <div>
              <p style={{ fontSize: "5rem" }}>{content.crop}</p>
            </div>
            <div style={{ fontSize: "2.5rem", display: "flex" }}>
              <p>Disease: </p>
              <p style={{ paddingInline: "1%", color: "red" }}>
                {content.disease}
              </p>
            </div>
          </div>
          <Box>
            {imageUrl && (
              <img
                height="400"
                src={imageUrl}
                alt="Uploaded Image"
                style={{ borderRadius: 30 }}
              />
            )}
            <CardContent>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </Box>
        </div>
        {detected && (
          <div
            style={{
              marginInline: "5%",
              fontSize: "1.5rem",
              display: "grid",
              marginBlock: "5%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "2.5rem",
                fontStretch: "5%",
                fontWeight: "bold",
              }}
            >
              Cause of Disease
            </p>
            <p>{content.cause}</p>
            {content.cure && (
              <p
                style={{
                  fontSize: "2.5rem",
                  fontStretch: "5%",
                  fontWeight: "bold",
                }}
              >
                Cure of Disease
              </p>
            )}
            <p>{content.cure}</p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default DisplayResult;
