import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./page.css";
import Navbar from "./Navbar";
import ViewModal from "./ViewModal";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], // Initialize an empty array to store the fetched users
      loading: true, // Add a loading state to handle the API call
      error: null, // Add an error state to handle API call errors
      modalViewState: {
        open: false,
        id: "",
        username: "",
        email: "",
        location: "",
      },
    };
  }

  componentDidMount() {
    fetch("http://localhost:9090/displayUsers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, loading: false, error: null });
      })

      .catch((error) => {
        this.setState({ loading: false, error: "Error fetching data" });
      });
  }

  handleOpen(userid) {
    fetch("http://localhost:9090/displayUsers/" + userid)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          modalViewState: {
            ...this.state.modalViewState,
            open: true,
            id: data.id,
            username: data.username,
            email: data.email,
            location: data.location,
          },
        });
      });
  }

  handleClose() {
    this.setState({
      ...this.state,
      modalViewState: {
        ...this.state.modalViewState,
        open: false,
      },
    });
  }

  render() {
    const { users, loading, error, modalViewState } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }));

    return (
      <div>
        <Navbar />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">USERNAME</StyledTableCell>
                <StyledTableCell align="center">EMAIL ADDRESS</StyledTableCell>
                <StyledTableCell align="center">LOCATION</StyledTableCell>
                <StyledTableCell align="left">ACTION</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell align="center">{user.id}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.location}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        onClick={this.handleOpen.bind(this, user.id)}
                      >
                        VIEW
                      </Button>
                      <Button variant="outlined">EDIT</Button>
                      <Button variant="outlined" sx={{ color: "#cb0000" }}>
                        DELETE
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ViewModal
          modalViewState={modalViewState}
          handleOpen={this.handleOpen.bind(this)}
          handleClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
