import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BtnComponent from "../Components/BtnComponent";
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3
              style={{
                color: "red",
                marginTop: "5vh",
                marginBottom: "5vh",
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
                      className="btn btn-primary"
                      label="Yes"
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
