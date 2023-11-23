import React, { FC } from "react";
import "./modal.scss";
import { Button, Modal as MuiModal } from "@mui/material";

interface IModal {
  open: boolean;
  onHandleClose: () => void;
}
const Modal: FC<IModal> = ({ open, onHandleClose }) => {
  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={"modal"}>
        <div className={"modal--content"}>
          <p className={"modal--title"}>User created successfully</p>
          <Button className={"modal--btn"} onClick={onHandleClose}>
            Go Home
          </Button>
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
