import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import axios from "axios";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      username: "",
      email: "",
      location: "",
    };
  }

  onchangeField = (event) => {
    this.setState({
      ...this.setState,
      [event.target.name]: event.target.value,
    });
  };

  submitForm = (event) => {
    //event.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:9090/user", this.state)
      .then(() => {
        alert("User Added Succesfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Box
          className="form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h3 className="header">ADD NEW USER</h3>
          <TextField
            id="user"
            label="Username"
            variant="outlined"
            name="username"
            onChange={this.onchangeField.bind(this)}
            required
          />
          <br />
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            name="email"
            onChange={this.onchangeField.bind(this)}
            required
          />
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            name="location"
            onChange={this.onchangeField.bind(this)}
            required
          />
          <br />
          <br />
          <Button
            href="/home"
            onClick={this.submitForm.bind(this)}
            variant="contained"
          >
            SUBMIT
          </Button>
          <Button
            href="/home"
            variant="contained"
            sx={{ background: "#cb0000" }}
          >
            CANCEL
          </Button>
        </Box>
      </div>
    );
  }
}
