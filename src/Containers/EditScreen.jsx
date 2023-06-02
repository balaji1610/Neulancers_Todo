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
import { useState, useEffect } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditScreen({
  open,
  handleEditCancelClick,
  EditId,
  Dataarray,
  setDataArray,
}) {
  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];

  const [currentValue, setCurrentValue] = useState("");
  const [currentDropdown, setDropdown] = useState("");
  const currentdata = () => {
    const eed = Dataarray.map((el, index) => {
      if (index === EditId) {
        return el.taskname;
      }
    });

    setCurrentValue(eed.join(""));
  };

  const getcurrentDropdown = () => {
    const lit = Dataarray.map((elm, index) => {
      if (index === EditId) {
        return elm.status;
      }
    });
    setDropdown(lit.join(""));
  };

  const handleChangeTodo = (e) => {
    if (currentValue.length < 45) {
      setCurrentValue(e.target.value);
    }
  };

  const handleDropdown = (e) => {
    setDropdown(e.target.value);
  };

  const handleEditClearClick = () => {
    setCurrentValue(" ");
  };

  useEffect(() => {
    currentdata();
    getcurrentDropdown();
  }, []);

  const submitClick = (e) => {
    e.preventDefault();

    const updateItems = Dataarray.map((elm, index) => {
      return index === EditId
        ? { ...elm, taskname: currentValue, status: currentDropdown }
        : elm;
    });

    setDataArray(updateItems);
    setCurrentValue(" ");
  };

  console.log(Dataarray, "Dataarray");
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
          <h1 style={{ textAlign: "center" }}>EDIT TASK</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form onSubmit={submitClick}>
              <h5>Task Name :</h5>{" "}
              <InputComponent
                value={currentValue}
                maxlength="45"
                style={{
                  width: "50vh",
                  height: "8vh",
                  border: "2px solid #000000",
                }}
                onChange={handleChangeTodo}
              />
              <div style={{ float: "left", marginTop: "3px" }}>
                <BtnComponent
                  type="button"
                  className="btn btn-warning"
                  label="Clear"
                  onClick={handleEditClearClick}
                />
              </div>
              <div style={{ float: "right" }}>
                <span style={{ color: "red", display: "inline-block" }}>
                  <h4>{currentValue.length}</h4>
                </span>
                <h4 style={{ color: "#000000", display: "inline-block" }}>
                  /45
                </h4>
              </div>
              <div
                class="d-flex justify-content-center"
                style={{ marginTop: "15px" }}
              >
                <div>
                  {" "}
                  <h5>Add Status :</h5>
                  <Dropdown
                    value={currentDropdown}
                    options={options}
                    onChange={handleDropdown}
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
                  onClick={handleEditCancelClick}
                />
                <BtnComponent
                  type="submit"
                  className="btn btn-success"
                  label="Update"
                />
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
