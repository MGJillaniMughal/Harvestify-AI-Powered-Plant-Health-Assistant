import AppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";

function ScrolledNav() {
  return (
    // On Start Transparent one

    // Only Appear when scrolled
    <AppBar
      className="navbar navbar-expand-lg navbar-light"
      style={{ height: 80, background: "rgb(37 85 42)", paddingInline: "5%" }}
    >
      <div className="container-fluid">
        <div
          className="navbar-brand"
          style={{
            fontSize: 30,
            backgroundColor: "rgb(122 173 104)",
            color: "white",
            fontWeight: 50,
            // boxShadow: " 10px 2px 5px #888888",
            transition: "transform 0.3s",
            marginInline: "5%",
            marginTop: 5,
          }}
        >
          Harvestify
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
              fontSize: 20,
              // fontWeight: "bold",
              textAlign: "center",
              paddingInline: "15%",
            }}
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                style={{ color: "white", textAlign: "center" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                style={{ color: "white", textAlign: "center" }}
              >
                Crop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                style={{ color: "white", textAlign: "center" }}
              >
                Fertilizer
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => window.location.replace("#disease")}
            >
              <NavLink
                to="#disease"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                style={{ color: "white", textAlign: "center" }}
              >
                Disease
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                style={{ color: "white", textAlign: "center" }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </AppBar>
  );
}
export default ScrolledNav;
