import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./page.css";
import Link from "@mui/material/Link";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      username: "",
      password: "",
    };
  }

  handleSubmit() {
    fetch("http://localhost:9090/userLogin")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].username === this.state.username &&
            data[i].password === this.state.password
          ) {
            this.setState({
              ...this.state,
              status: true,
            });
            console.log("LOGGING IN");
          }
          console.log("ERROR LOGGING IN");
        }
      })
      .catch((error) => {
        console.log("Error submitting");
      });
  }

  onChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <main className="form">
        <h1 className="header">Login Page</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="user"
            label="USERNAME"
            variant="outlined"
            name="username"
            onChange={this.onChange.bind(this)}
            required
          />
          <br />
          <TextField
            id="pwd"
            label="PASSWORD"
            variant="outlined"
            type="password"
            name="password"
            onChange={this.onChange.bind(this)}
            required
          />
          <br />
          <br />
          <Link href="">Forgot Password</Link>
          <Button
            variant="contained"
            onClick={this.handleSubmit.bind(this)}
            href={this.state.status && "/home"}
          >
            SUBMIT
          </Button>
        </Box>
      </main>
    );
  }
}
export default Login;
