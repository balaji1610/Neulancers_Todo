import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Editicon from "../Images/edit.png";
import Deleteicon from "../Images/delete.png";
import ImageComponent from "../Components/ImageComponent";

import TodoIcon from "../Images/todo.png";
import PendingICON from "../Images/pending.png";
import CompletedICON from "../Images/completed.png";
export default function MainHomeScreen({
  onClickEdit,
  onClickDelete,
  Dataarray,
}) {
  const imageStatus = {
    Todo: TodoIcon,
    Pending: PendingICON,
    Completed: CompletedICON,
  };

  return (
    <div>
      <div className="container text-center">
        <div
          className="col-md-12 col-sm-12"
          style={{ overflowX: "hidden", height: "55vh" }}
        >
          <table class="table ">
            <thead class="table-primary">
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Dataarray.map((item, index) => {
                const { taskname, status } = item;
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>

                    <td>
                      <h4
                        style={{
                          textDecoration:
                            status === "Completed" && "line-through",
                          color: "#000000",
                        }}
                      >
                        <span style={{ color: "#000000" }}>{taskname}</span>
                      </h4>
                    </td>
                    <td>
                      <Tooltip title={status}>
                        <Button>
                          {" "}
                          <ImageComponent
                            width="40"
                            height="40"
                            src={imageStatus[status]}
                            alt="box-important--v1"
                            style={{ display: "inline-block" }}
                          />
                        </Button>
                      </Tooltip>
                    </td>
                    <td>
                      <span
                        style={{ display: "inline-block" }}
                        onClick={() => onClickEdit(index)}
                      >
                        <ImageComponent
                          width="32"
                          height="32"
                          src={Editicon}
                          alt="EditIcon"
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    </td>
                    <td>
                      <span
                        style={{ display: "inline-block" }}
                        onClick={() => onClickDelete(index)}
                      >
                        {" "}
                        <ImageComponent
                          width="32"
                          height="32"
                          src={Deleteicon}
                          alt="DeleteIcon"
                          style={{ cursor: "pointer" }}
                        />
                      </span>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
