import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import BtnComponent from "../Components/BtnComponent";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DeleteScreen({
  open,
  handleDeleteCancel,
  EditId,
  Dataarray,
  setDataArray,
}) {
  const handleDeleteYes = () => {
    const deleteItem = Dataarray.filter((elm, index) => {
      return index !== EditId;
    });
    setDataArray(deleteItem);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3
              style={{
                color: "#616161",
                marginTop: "5vh",
                marginBottom: "5vh",
                fontWeight: "bold",
              }}
            >
              Are You Want To Delete This Item ?{" "}
            </h3>

            <div className="container text-center">
              <div className="col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    {" "}
                    <BtnComponent
                      type="button"
                      className="btn btn-secondary"
                      label="Cancel"
                      onClick={handleDeleteCancel}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    {" "}
                    <BtnComponent
                      type="button"
                      className="btn btn-danger"
                      label="Delete"
                      onClick={handleDeleteYes}
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
