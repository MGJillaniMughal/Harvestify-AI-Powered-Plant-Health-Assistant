import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Modal,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import { imageContent } from "../models/imagePrediction";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "react-bootstrap";
import Button from "@mui/material/Button";

interface Props {
  passImageUrl: string;
  content: imageContent;
  detected: boolean;
}

const NewDisplayResult: React.FC<Props> = ({
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
  const [cause, setCause] = useState(true);
  const [cure, setCure] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const handleCauseToggle = () => {
    console.log("clicked");
    setCause(!cause);
  };
  const handleCureToggle = () => {
    setCure(!cure);
  };
  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <Modal open={showModal} onClose={handleModal}>
      <div>
        {/* <Box
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
      > */}
        {detected && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              bgcolor: "background.paper",
              // border: "2px solid #000",
              borderRadius: 8,
              borderColor: "white",
              boxShadow: 24,
              //   p: 4,
              display: "grid",
              justifyContent: "center",
              textAlign: "center",
              overflow: "auto",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.05, // Adjust opacity here (0 to 1)
              },
            }}
          >
            <div
              style={{
                justifyContent: "right",
                width: "100%",
                textAlign: "right",
                alignItems: "right",
                padding: 4,
              }}
            >
              <IconButton
                // variant="outlined"
                onClick={handleModal}
                size="small"
                color="error"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div
              style={{
                textAlign: "right",
                paddingInline: "5%",
                paddingTop: "3%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 0,
                  paddingBottom: 0,
                  // marginTop: "5%",
                  // paddingInline: "5%",
                }}
              >
                <div>
                  <h1 style={{ fontSize: 50, display: "flex", color: "green" }}>
                    {/* <span style={{ color: "green" }}>Classif</span>
              <span style={{ color: "black" }}>ication</span> */}
                    {content.disease}
                  </h1>
                  <div>
                    <p style={{ fontSize: "2.5rem", textAlign: "center" }}>
                      {content.crop}
                    </p>
                  </div>
                </div>
                <Box>
                  {imageUrl && (
                    <img
                      height="200"
                      width="400"
                      src={imageUrl}
                      alt="Uploaded Image"
                      style={{ borderRadius: 30 }}
                    />
                  )}
                </Box>
                {/* <Box> */}

                {/* </Box> */}
              </div>
              <div
                style={{
                  //   marginInline: "5%",
                  fontSize: "1.7rem",
                  display: "grid",
                  //   backgroundColor: "rgba(255, 255, 255, 0.8)",
                  //   padding: "1rem",
                  borderRadius: "10px",
                  //   overflow: "hidden",
                  paddingBottom: "5%",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 10,
                    marginTop: "5%",
                    paddingInline: 6,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      justifyContent: "space-between",
                      textAlign: "center",
                      width: "100%",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    onClick={handleCauseToggle}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Cause
                    </Typography>
                    <IconButton>
                      {cause ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  <Box sx={{ paddingInline: 5 }}>
                    <Collapse in={cause}>
                      {Array.isArray(content.cause) ? (
                        content.cause.map((causeItem, index) => (
                          <Typography
                            key={index}
                            variant="body1"
                            sx={{
                              paddingBottom: 4,
                              justifyContent: "left",
                              textAlign: "left",
                            }}
                          >
                            {causeItem}
                          </Typography>
                        ))
                      ) : (
                        <Typography variant="body1" sx={{ paddingBottom: 4 }}>
                          {content.cause}
                        </Typography>
                      )}
                    </Collapse>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 10,
                    marginTop: "5%",
                    paddingInline: 6,
                    width: "100%",
                  }}
                >
                  {content.cure && (
                    <div>
                      <Box
                        sx={{
                          display: "flex",
                          cursor: "pointer",
                          justifyContent: "space-between",
                          textAlign: "center",
                          width: "100%",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                        onClick={handleCureToggle}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: 20,
                            color: "green",
                            fontWeight: "bold",
                          }}
                        >
                          Cure
                        </Typography>
                        <IconButton>
                          {cure ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      </Box>
                      <Box sx={{ paddingInline: 5 }}>
                        <Collapse in={cure}>
                          {Array.isArray(content.cure) ? (
                            content.cure.map((cureItem, index) => (
                              <Typography
                                key={index}
                                variant="body1"
                                sx={{ paddingBottom: 4, textAlign: "left" }}
                              >
                                {cureItem}
                              </Typography>
                            ))
                          ) : (
                            <Typography
                              variant="body1"
                              sx={{ paddingBottom: 4 }}
                            >
                              {content.cure}
                            </Typography>
                          )}
                        </Collapse>
                      </Box>
                    </div>
                  )}
                </Box>
              </div>
            </div>
          </Box>
        )}
        {!detected && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              bgcolor: "background.paper",
              // border: "2px solid #000",
              borderRadius: 8,
              borderColor: "white",
              boxShadow: 24,
              //   p: 4,
              display: "grid",
              textAlign: "center",
              overflow: "auto",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.05, // Adjust opacity here (0 to 1)
              },
            }}
          >
            <div
              style={{
                justifyContent: "right",
                width: "100%",
                textAlign: "right",
                alignItems: "right",
                padding: 4,
              }}
            >
              <IconButton
                // variant="outlined"
                onClick={handleModal}
                size="small"
                color="error"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div
              style={{
                width: "100%",
                paddingInline: "10%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 0,
                  paddingBottom: 0,
                  width: "100%",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: 45,
                      display: "flex",
                      color: "green",
                      textAlign: "left",
                    }}
                  >
                    {/* <span style={{ color: "green" }}>Classif</span>
                      <span style={{ color: "black" }}>ication</span> */}
                    No Disease Found
                  </h1>
                  <div>
                    <p style={{ fontSize: "2.5rem", textAlign: "left" }}>
                      {content.crop}
                    </p>
                  </div>
                </div>
                <Box>
                  {imageUrl && (
                    <img
                      height="200"
                      width="400"
                      src={imageUrl}
                      alt="Uploaded Image"
                      style={{ borderRadius: 30 }}
                    />
                  )}
                </Box>
                {/* <Box> */}

                {/* </Box> */}
              </div>
            </div>
          </Box>
        )}

        {/* </Box> */}
      </div>
    </Modal>
  );
};

export default NewDisplayResult;
