import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledBox, StyledButton, StyledContactWrapper } from "./StyledContactUsModal";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const ContactUsModal = ({ open, handleClose, instructors }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
        >
          Please contact:
        </Typography>
        <StyledContactWrapper>
          <Typography id="modal-modal-description">Marko Melad:</Typography>
          <StyledButton href={"tel:+201226931211"}>+201226931211</StyledButton>
        </StyledContactWrapper>
        {/* {instructorName && (
          <>
            <Divider />
            <StyledContactWrapper>
              <Typography id="modal-modal-description">{instructorName}:</Typography>
              <StyledButton href={`tel:${instructorNumber}`}>
                {instructorNumber}
              </StyledButton>
            </StyledContactWrapper>
          </>
        )} */}
        {instructors?.length > 0 &&
          instructors.map((inst) => (
            <span key={inst.id}>
              <Divider />
              <StyledContactWrapper>
                <Typography id="modal-modal-description">
                  {inst.name}:
                </Typography>
                <StyledButton href={`tel:${inst.phoneNumber}`}>
                  {inst.phoneNumber}
                </StyledButton>
              </StyledContactWrapper>
            </span>
          ))}
      </StyledBox>
    </Modal>
  );
};
