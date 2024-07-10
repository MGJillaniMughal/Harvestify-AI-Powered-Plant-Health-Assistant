import React, { useState } from "react";
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

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending the data to an API.
    console.log("Form data submitted:", formData);
  };
  const backgroundImage = `${process.env.PUBLIC_URL}/images/image1.jpg`;

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          // padding: "2rem 2rem",
          borderRadius: 10,
          // backgroundColor: "white",
          opacity: 1,
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          sx={{
            // backgroundColor: "black",
            opacity: 1,
            width: "100%",
            paddingBottom: 5,
          }}
        >
          <Grid item xs={12} lg={12} xl={12}>
            {/* <CardMedia
              component="img"
              height="200"
              width="500"
              image={`${process.env.PUBLIC_URL}/images/image1.jpg`} // Replace with your image path
              alt="Contact Us Background"
              sx={{ zIndex: -1, width: "500px" }}
            /> */}
            <Box
              sx={{
                height: "100%",
                position: "relative",
                display: "grid",
                alignItems: "center",
                width: "100%",
                // justifyContent: "center",
                // flexDirection: "column",
                // padding: 3,
                // color: "#fff",
                // textAlign: "center",
                // paddingBottom,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: -300,
                  width: 850,
                  height: "20vh",
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 1, // Adjust opacity here (0 to 1)
                  borderRadius: "15px 15px 0px 0px",
                },
                padding: "0px 0px 70px 0px",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  justifyContent: "flex-start",
                  width: "100%",
                  // top: "75%",
                  // left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 35,
                  zIndex: 1,
                }}
              > */}
              <Typography
                gutterBottom
                // align="center"
                sx={{
                  fontSize: 45,
                  color: "white",
                  zIndex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 5,
                }}
              >
                Contact Us
              </Typography>
              {/* </div> */}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              paddingLeft: 50,
              backgroundColor: "white",
              background: "white",
              "&::before": {
                //   content: '""',
                //   position: "absolute",
                //   top: 230,
                //   // left: -300,
                //   width: 850,
                //   height: "62vh",
                //   // backgroundImage: `url(${backgroundImage})`,
                //   backgroundColor: "white",
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   opacity: 1, // Adjust opacity here (0 to 1)
                //   borderRadius: "0px 0px 15px 15px",
                opacity: 1,
              },
            }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": { marginBottom: "1rem", width: "90%" },
                paddingLeft: 10,
              }}
            >
              <TextField
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                required
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                required
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                required
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactUs;
