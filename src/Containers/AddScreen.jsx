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
  handleAddClear,
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
          <h1 style={{ textAlign: "center" }}>ADD TASK</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <form onSubmit={SubmitHandleClick}>
                <h5>Task Name :</h5>{" "}
                <InputComponent
                  value={textarea}
                  placeholder="write a description"
                  maxlength="45"
                  onChange={inputChange}
                  style={{
                    width: "50vh",
                    height: "8vh",
                    border: "2px solid #000000",
                  }}
                />
                <div style={{ float: "left", marginTop: "3px" }}>
                  <BtnComponent
                    type="button"
                    className="btn btn-warning"
                    label="Clear"
                    onClick={handleAddClear}
                  />
                </div>
                <div style={{ float: "right" }}>
                  <span style={{ color: "red", display: "inline-block" }}>
                    <h4>{textarea.length}</h4>
                  </span>
                  <h4 style={{ color: "#000000", display: "inline-block" }}>
                    /45
                  </h4>
                </div>
                <div
                  class="d-flex justify-content-center"
                  style={{ marginTop: "15px" }}
                >
                  {" "}
                  <div>
                    {" "}
                    <h5>Add Status :</h5>
                    <Dropdown
                      value={getStatus}
                      options={options}
                      onChange={dropdown}
                      style={{
                        width: "19vh",
                        height: "6vh",
                        border: "2px solid #000000",
                      }}
                    />
                  </div>
                </div>
                <div
                  class="d-flex justify-content-around"
                  style={{ marginTop: "20px" }}
                >
                  <BtnComponent
                    type="button"
                    className="btn btn-secondary"
                    label="Cancel"
                    onClick={onClick}
                  />
                  <BtnComponent
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      textarea.length && getStatus.length > 0 ? false : true
                    }
                    label="Add"
                    // style={{
                    //   cursor:
                    //     textarea.length && getStatus.length > 0
                    //       ? "pointer"
                    //       : "not-allowed",
                    // }}
                  />
                </div>
                <div class="d-flex flex-row mb-3">
                  <div class="p-2"></div>
                  <div class="p-2"> </div>
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
