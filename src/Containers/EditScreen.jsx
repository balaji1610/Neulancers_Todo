import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BtnComponent from "../Components/BtnComponent";
import InputComponent from "../Components/InputComponent";

import { useState, useEffect } from "react";

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

  const currentdata = () => {
    const eed = Dataarray.map((el, index) => {
      if (index === EditId) {
        return el.taskname;
      }
    });

    setCurrentValue(eed.join(""));
  };

  const handleChangeTodo = (e) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    currentdata();
  }, []);

  const submitClick = (e) => {
    e.preventDefault();

    Dataarray.map((elm, index) => {
      if (index === EditId) {
        return (elm.taskname = currentValue);
      }
    });
    setCurrentValue(" ");
  };

  console.log(Dataarray, "Dataarray");
  return (
    <div>
      <Dialog
        open={open}
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
                  <h3>
                    {/* {
                      Dataarray.find((items, index) => index === EditId)
                        .taskname.length
                    } */}
                  </h3>
                </span>
                <h3 style={{ color: "#000000", display: "inline-block" }}>
                  /45
                </h3>
              </div>
              ADD STATUS :
              {/* <Dropdown
                value={
                  Dataarray.find((items, index) => index === EditId).status
                }
                options={options}
              /> */}
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
                    label="OK"
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
