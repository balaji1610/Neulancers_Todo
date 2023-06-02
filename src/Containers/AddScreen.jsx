import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import BtnComponent from "../Components/BtnComponent";
import InputComponent from "../Components/InputComponent";
import Dropdown from "../Components/DropdownComponent";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddScreen({
  open,
  onClick,
  inputChange,
  dropdown,
  SubmitHandleClick,
  textarea,
  getStatus,
}) {
  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1>AddScreen</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <form onSubmit={SubmitHandleClick}>
                Task Name :{" "}
                <InputComponent
                  value={textarea}
                  placeholder="Write A Text"
                  maxlength="45"
                  onChange={inputChange}
                  style={{ width: "76vh", height: "10vh" }}
                />
                <div>
                  <span style={{ color: "red", display: "inline-block" }}>
                    <h3>{textarea.length}</h3>
                  </span>
                  <h3 style={{ color: "#000000", display: "inline-block" }}>
                    /45
                  </h3>
                </div>
                ADD STATUS :
                <Dropdown
                  value={getStatus}
                  options={options}
                  onChange={dropdown}
                />
                <div class="d-flex flex-row mb-3">
                  <div class="p-2">
                    <BtnComponent
                      type="button"
                      className="btn btn-secondary"
                      label="Cancel"
                      onClick={onClick}
                    />
                  </div>
                  <div class="p-2">
                    {" "}
                    <BtnComponent
                      type="submit"
                      className="btn btn-primary"
                      label="Add"
                      style={{
                        cursor:
                          textarea.length && getStatus.length > 0
                            ? "pointer"
                            : "not-allowed",
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
