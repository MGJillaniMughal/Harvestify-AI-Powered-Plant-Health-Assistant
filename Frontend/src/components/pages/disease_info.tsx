import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LeafDiseases = () => {
  const diseases = [
    {
      name: "Powdery Mildew",
      description:
        "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as white powdery spots on the leaves and stems.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/powdery_mildew.jpg`,
    },
    {
      name: "Leaf Spot",
      description:
        "Leaf spot diseases are caused by fungi, bacteria, or viruses and are characterized by spots on the leaves. These spots can be of various sizes and colors.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/leaf_spot.jpg`,
    },
    {
      name: "Rust",
      description:
        "Rust is a fungal disease that causes orange, yellow, or brown pustules on the undersides of leaves. It can significantly reduce plant vigor.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/rust.jpg`,
    },
    {
      name: "Blight",
      description:
        "Blight refers to various plant diseases that result in the browning and death of leaves, flowers, and stems.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/baterial_blight.jpg`,
    },
    {
      name: "Downy Mildew",
      description:
        "Downy mildew is a type of oomycete infection that causes fluffy white to gray growth on the undersides of leaves.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/downy-mildew.jpg`,
    },
    {
      name: "Anthracnose",
      description:
        "Anthracnose is a fungal disease causing dark, sunken lesions on leaves, stems, flowers, and fruits.",
      imageUrl: `${process.env.PUBLIC_URL}/images/disease/anthracnose.jpg`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < diseases.length ? prevIndex + 3 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : diseases.length - 3
    );
  };

  return (
    <Box sx={{ paddingInline: "10%" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: 35,
          color: "green",
          fontWeight: "bold",
          textAlign: "center",
          // padding: "2%",
        }}
      >
        Common Leaf Diseases
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Grid container spacing={4} sx={{ marginTop: 3 }}>
          {diseases
            .slice(currentIndex, currentIndex + 3)
            .map((disease, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: 350,
                    maxWidth: 400,
                    boxShadow: "10px 2px 5px #888888",
                    // borderRadius: "50px",
                    // display: "flex",
                    // flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.10)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={disease.imageUrl}
                    alt={disease.name}
                  />
                  <CardContent sx={{ height: 250, textAlign: "center" }}>
                    <Typography variant="h6" component="div">
                      {disease.name}
                    </Typography>
                    <Typography variant="body2">
                      {disease.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: -50,
            transform: "translateY(-50%)",
            color: "green",
            fontWeight: "bold",
          }}
          onClick={handlePrev}
        >
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            color: "green",
            fontWeight: "bold",
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LeafDiseases;
