// // App.tsx
// import React from "react";
// import Navbar from "./components/pages/navbar";

// const App: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// };

// export default App;

// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/navbar";
import Footer from "./components/pages/footer";
import Home from "./components/pages/home";
import Disease from "./components/pages/disease";
import Crop from "./components/pages/crop";
import Fertilizer from "./components/pages/fertilizer";
import ContactUs from "./components/pages/contact_us";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Container,
} from "@mui/material";

// const Home = () => <div>Home</div>;
// const Crop = () => <div>Crop</div>;
// const Fertilizer = () => <div>Fertilizer</div>;
// const Disease = () => <div>Disease</div>;
const Contact = () => <div>Contact Us</div>;

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Montserrat,sans-serif" }}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Box>
          {/* <div className="container mt-3"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop" element={<Crop />} />
            <Route path="/fertilizer" element={<Fertilizer />} />
            <Route path="#disease" element={<Disease />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          {/* </div> */}
        </Box>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
