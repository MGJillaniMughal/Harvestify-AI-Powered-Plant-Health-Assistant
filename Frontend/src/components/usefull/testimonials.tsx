import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { testimonials, Testimonial } from "../models/testimonials";

const TestimonialComponent: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "5rem", backgroundColor: "#fff" }}>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 550,
                height: 350,
                margin: "auto",
                backgroundColor: "#EEEFEC",
                boxShadow: " 10px 2px 5px #888888",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                paddingInline: "5%",
                borderRadius: 10,
              }}
            >
              <CardContent sx={{ textAlign: "center", paddingBottom: 3 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{
                    fontSize: 30,
                    paddingBottom: 15,
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                  style={{ paddingBottom: 15 }}
                >
                  {testimonial.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ marginTop: 1, fontSize: 15, fontSmooth: 25 }}
                >
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialComponent;
