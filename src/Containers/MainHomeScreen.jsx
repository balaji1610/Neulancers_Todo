import Editicon from "../Images/edit.png";
import Deleteicon from "../Images/delete.png";
import ImageComponent from "../Components/ImageComponent";

export default function MainHomeScreen({
  onClickEdit,
  onClickDelete,
  Dataarray,
}) {
  return (
    <div>
      <div className="container text-center">
        <div className="col-md-12 col-sm-12">
          <table class="table ">
            <thead class="table-primary">
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Status</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELTE</th>
              </tr>
            </thead>
            <tbody>
              {Dataarray.map((item) => {
                const { id, taskname, status } = item;
                return (
                  <tr>
                    <th scope="row">{id}</th>

                    <td>{taskname}</td>
                    <td>{status}</td>
                    <td>
                      <span
                        style={{ display: "inline-block" }}
                        onClick={() => onClickEdit(id)}
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
                        onClick={() => onClickDelete(id)}
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
