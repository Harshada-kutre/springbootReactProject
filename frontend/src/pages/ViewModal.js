import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default class ViewModal extends Component {
  render() {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    return (
      <div>
        <Modal
          open={this.props.modalViewState.open}
          onClose={this.props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ID : {this.props.modalViewState.id}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              USERNAME : {this.props.modalViewState.username}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              EMAIL ADDRESS : {this.props.modalViewState.email}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              LOCATION : {this.props.modalViewState.location}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}
