import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  CardMedia,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PlanHealthComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // marginTop: "2rem",
        // padding: "3rem",
        // borderRadius: "15px",
        backgroundColor: "#DDF7C0",
        // boxShadow: 3,
        paddingInline: "10%",
        paddingBlock: "4rem",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          height="400"
          image={`${process.env.PUBLIC_URL}/images/image2.jpg`} // Replace with your image path
          alt="Healthy Plants"
          sx={{
            borderRadius: "15px",
            maxHeight: "90%",
            maxWidth: "90%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ flex: 1, padding: "2rem" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: "green", fontWeight: "bold", fontSize: 35 }}
        >
          Keep Your Plants Healthy with Harvestify
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />
        <List>
          <ListItem
            sx={{
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              padding: "1rem",
            }}
          >
            <ListItemIcon>
              <CheckCircleIcon color="success" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Monitor Watering
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: "1rem" }}>
                  Check Moisture every 7 days
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              padding: "1rem",
            }}
          >
            <ListItemIcon>
              <CheckCircleIcon color="success" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Check for Diseases
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: "1rem" }}>
                  Inspect Leaves regularly
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              padding: "1rem",
            }}
          >
            <ListItemIcon>
              <CheckCircleIcon color="success" sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Apply Treatment
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: "1rem" }}>
                  Treat as Needed every time a disease is detected
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default PlanHealthComponent;
