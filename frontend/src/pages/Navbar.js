import { Link } from "@mui/material";
import React, { Component } from "react";
import "../pages/page.css";
import Button from "@mui/material/Button";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <h1>USER PORTAL</h1>
        <Link href="/home" className="nav-button">
          <Button variant="contained" sx={{ background: "#0096FF" }}>
            HOME
          </Button>
        </Link>
        <Link href="/addUser" className="nav-button">
          <Button variant="contained" sx={{ background: "#0096FF" }}>
            ADD USER
          </Button>
        </Link>
        <Link href="/" className="nav-button">
          <Button variant="contained" sx={{ background: "#0096FF" }}>
            LOGOUT
          </Button>
        </Link>
      </div>
    );
  }
}
