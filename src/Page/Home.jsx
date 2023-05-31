import TopHomeScreen from "../Containers/TopHomeScreen";
import AddScreen from "../Containers/AddScreen";
import { useState } from "react";
// import { Todoitems } from "../Utillis/Todoitems";
let id = 1;
export default function Home() {
  const [Dataarray, setDataArray] = useState([
    { id: "", taskname: "", status: "" },
  ]);

  //AddscrenModule
  const [addmodel, setModel] = useState(false);
  const AddscrenModule = (function () {
    const handleAddicon = () => {
      setModel(true);
      console.log(Dataarray);
    };

    const handleCancelAddicon = () => {
      setModel(false);
    };

    return {
      handleAddicon,
      handleCancelAddicon,
    };
  })();
  const { handleAddicon, handleCancelAddicon } = AddscrenModule;

  //AddModel
  const [textarea, setTextArea] = useState("");
  const [getStatus, setGetStatus] = useState("");

  const changeTextarea = (e) => {
    const value = e.target.value;
    if (value.length <= 25) {
      setTextArea(value);
    }
  };

  const changeGetValue = (e) => {
    setGetStatus(e.target.value);
  };

  const SubmitHandleClick = (e) => {
    e.preventDefault();
    setTextArea("");
    setGetStatus("");
    const update = [
      ...Dataarray,
      { id: id++, taskname: textarea, status: getStatus },
    ];

    setDataArray(update);
  };
  console.log(Dataarray, "Dataarray");
  return (
    <div>
      <TopHomeScreen onClick={handleAddicon} />

      {addmodel && (
        <AddScreen
          onClick={handleCancelAddicon}
          inputChange={changeTextarea}
          dropdown={changeGetValue}
          SubmitHandleClick={SubmitHandleClick}
          textarea={textarea}
          getStatus={getStatus}
        />
      )}

      {Dataarray.map((elm) => {
        const { id, taskname, status } = elm;
        return (
          <>
            <ul>
              <li key={id}>
                <p> {taskname}</p>
                <p> {status}</p>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
