import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LeafDiseases from "./disease_info";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  CardMedia,
} from "@mui/material";
import Disease from "./disease";
import TestimonialComponent from "../usefull/testimonials";
import PlanHealthComponent from "../usefull/healthy";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  // Random images
  const images = [
    { src: `${process.env.PUBLIC_URL}/images/image1.jpg`, alt: "Image 1" },
    { src: `${process.env.PUBLIC_URL}/images/image4.jpg`, alt: "Image 4" },
    { src: `${process.env.PUBLIC_URL}/images/image3.jpg`, alt: "Image 3" },
  ];

  const backgroundImage = `${process.env.PUBLIC_URL}/images/background/side.jpg`;
  const backgroundImage2 = `${process.env.PUBLIC_URL}/images/background/centered.jpg`;
  const backgroundImage3 = `${process.env.PUBLIC_URL}/images/background/image3.jpg`;

  // const bannerImage = `${process.env.PUBLIC_URL}/images/image1.jpg`;
  const bannerImage = `${process.env.PUBLIC_URL}/images/banner-img-1.jpg`;
  // const bannerImage = `${process.env.PUBLIC_URL}/images/banner-img-2.jpg`;

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          // padding: 3,
          overflow: "hidden",
          alignContent: "center",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: -1,
          },
        }}
      >
        <div
          className="banner"
          style={{
            top: 20,
            height: "90%",
            // width: "104rem",
            // width: "104rem",
            width: "87%",

            // left: "7rem",
            position: "absolute",
            // backgroundColor: "black",
            // position: "relative",
            // width: "300px",
            // padding: "20px",
            // margin: "20px auto",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "space-between",
            marginBottom: 100,
            marginTop: "1.5%",
          }}
        >
          <Typography variant="h2" sx={{ paddingBottom: 2 }}>
            Healthy Plants, One Click Away
          </Typography>
          <Typography variant="h4" sx={{ paddingBlock: 5 }}>
            Snap, Upload, Heal Your Greens
          </Typography>
          <Typography variant="h5" style={{ paddingInline: "10%" }}>
            Keep your plants healthy with Harvestify. Simply upload a photo of
            your plant's leaf, and our app instantly identifies any diseases.
            It's plant care made easy!
          </Typography>
        </div>
      </Box>

      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          display: "grid",
          textAlign: "center",
          // paddingInline: "10%",
          // paddingTop: "5%",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            position: "relative",
            display: "grid",
            alignItems: "center",
            // justifyContent: "center",
            // flexDirection: "column",
            // padding: 3,
            color: "#fff",
            // textAlign: "center",
            paddingBottom: "2%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "103%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2, // Adjust opacity here (0 to 1)
            },
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              paddingInline: "10%",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              direction="row"
              alignItems="center"
              sx={{
                paddingTop: "5%",
              }}
            >
              <Grid item xs={8}>
                <Typography
                  variant="h6"
                  paragraph
                  align="center"
                  sx={{
                    fontSize: 60,
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  About Us
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="h6"
                  paragraph
                  align="center"
                  sx={{ color: "black", fontSize: 20, marginTop: "2%" }}
                >
                  Hello from Harvestify! We're on a mission to make plant care
                  straightforward and stress-free. Born from a love of gardening
                  and a knack for technology, we created an app that diagnoses
                  plant diseases with just a photo. At Harvestify, we harness
                  the power of advanced deep learning models to revolutionize
                  agriculture. Our cutting-edge technology detects crop diseases
                  with unparalleled accuracy. Join us as we help gardeners and
                  farmers around the world keep their plants healthy and
                  thriving. Your greener garden journey starts here!
                </Typography>
              </Grid>
            </Grid>
            <CardMedia
              component="img"
              height="500"
              image={`${backgroundImage3}`} // Replace with your image path
              alt="Healthy Plants"
              sx={{
                marginTop: "5%",
                borderRadius: "15px",
                maxHeight: "90%",
                maxWidth: "40%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <LeafDiseases />
          </div>
        </Box>
      </div>
      <Box
      // sx={{
      //   // height: "100vh",
      //   position: "relative",
      //   display: "grid",
      //   alignItems: "center",
      //   // justifyContent: "center",
      //   // flexDirection: "column",
      //   // padding: 3,
      //   // textAlign: "center",
      //   "&::before": {
      //     content: '""',
      //     position: "absolute",
      //     top: 0,
      //     left: 0,
      //     width: "60%",
      //     height: "100%",
      //     backgroundImage: `url(${backgroundImage2})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     opacity: 0.2, // Adjust opacity here (0 to 1)
      //   },
      // }}
      >
        <Disease />
      </Box>
      <PlanHealthComponent />
      <TestimonialComponent />
    </div>
  );
}

export default Home;
