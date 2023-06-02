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
          <h1>EDIT SCREEN</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {EditId}

            <form onSubmit={submitClick}>
              Task Name :{" "}
              <InputComponent
                value={currentValue}
                maxlength="45"
                style={{ width: "76vh", height: "10vh" }}
                onChange={handleChangeTodo}
              />
              <div>
                <span style={{ color: "red", display: "inline-block" }}>
                  <h3>{currentValue.length}</h3>
                </span>
                <h3 style={{ color: "#000000", display: "inline-block" }}>
                  /45
                </h3>
              </div>
              ADD STATUS :
              <Dropdown
                value={currentDropdown}
                options={options}
                onChange={handleDropdown}
              />
              <div class="d-flex flex-row mb-3">
                <div class="p-2">
                  <BtnComponent
                    type="button"
                    className="btn btn-secondary"
                    label="Cancel"
                    onClick={handleEditCancelClick}
                  />
                </div>
                <div class="p-2">
                  {" "}
                  <BtnComponent
                    type="submit"
                    className="btn btn-primary"
                    label="Update"
                  />
                </div>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
