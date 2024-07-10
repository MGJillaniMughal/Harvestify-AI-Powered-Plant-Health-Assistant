import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function TransparentNav() {
  return (
    <div
      className="banner"
      style={{
        top: 0,
        height: "2rem",
        width: "80%",
        left: "3rem",
        position: "absolute",
        color: "#fff",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "space-between",
        marginBottom: 100,
        zIndex: 1,
        display: "flex",
        paddingTop: 50,
      }}
    >
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          paddingInline: "5%",
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            paddingRight: 30,
            paddingInline: "16%",
            fontSize: 30,
          }}
        >
          Harvestify
        </Typography>
      </div>

      <div style={{ width: "60%" }}>
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
  );
}
export default TransparentNav;
