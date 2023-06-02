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
        <div
          className="col-md-12 col-sm-12"
          style={{ overflowX: "hidden", height: "50vh" }}
        >
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
              {Dataarray.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>

                    <td>{item.taskname}</td>
                    <td>{item.status}</td>
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
