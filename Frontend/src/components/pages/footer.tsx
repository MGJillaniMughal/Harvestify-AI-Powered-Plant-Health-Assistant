import React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#7aad68", // Soft green background color
          color: "white", // White text color
          py: 10,
          borderTop: "1px solid",
          borderColor: "divider",
          // height: 400,
          paddingInline: "10%",
        }}
      >
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontSize: 45,
                backgroundColor: "#25552a",
                color: "white",
                // fontWeight: 50,
                // fontWeight: "bold",
                textAlign: "center",
                width: "75%",
              }}
            >
              Harvestify
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} style={{ fontSize: "30%", color: "white" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
            >
              Links
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
              >
                Home
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/crops"
                color="inherit"
                underline="none"
              >
                Crops
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/fertilizer"
                color="inherit"
                underline="none"
              >
                Fertilizer
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/disease"
                color="inherit"
                underline="none"
              >
                Disease
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} style={{ fontSize: "30%", color: "white" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
            >
              Legal
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
              >
                Privacy policy
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/crops"
                color="inherit"
                underline="none"
              >
                Terms and Conditions
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} style={{ fontSize: "30%", color: "white" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
            >
              Users
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
              >
                Framers
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/crops"
                color="inherit"
                underline="none"
              >
                Agr-Retailers
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/fertilizer"
                color="inherit"
                underline="none"
              >
                For common person
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/disease"
                color="inherit"
                underline="none"
              >
                for businesses
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} style={{ fontSize: "30%", color: "white" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
              >
                +333 346 346 366
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/crops"
                color="inherit"
                underline="none"
              >
                sales@harvestify.com
              </Link>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontSize: 18, color: "white" }}
            >
              <Link
                component={RouterLink}
                to="/fertilizer"
                color="inherit"
                underline="none"
              >
                Street Avenue 48, USA
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            paddingTop: 5,
          }}
        >
          <FacebookIcon style={{ fontSize: 40, margin: "1%" }} />
          <TwitterIcon style={{ fontSize: 40, margin: "1%" }} />
          <InstagramIcon style={{ fontSize: 40, margin: "1%" }} />
        </Box>
      </Box>
    </div>
  );
};
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
export default Footer;
