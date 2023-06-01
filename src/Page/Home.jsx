import TopHomeScreen from "../Containers/TopHomeScreen";
import AddScreen from "../Containers/AddScreen";
import { useState } from "react";
import { Todoitems } from "../Utillis/Todoitems";
import MainHomeScreen from "../Containers/MainHomeScreen";

let id = 1;
export default function Home() {
  const [Dataarray, setDataArray] = useState(Todoitems);

  //AddscrenModule
  const [addmodel, setModel] = useState(false);

  //AddModel
  const [textarea, setTextArea] = useState("");
  const [getStatus, setGetStatus] = useState("");

  //Add screenMoudle Operations
  const AddscrenModuleOperations = (function () {
    const handleAddicon = () => {
      setModel(true);
      console.log(Dataarray);
    };

    const handleCancelAddicon = () => {
      setModel(false);
    };

    const changeTextarea = (e) => {
      const value = e.target.value;
      if (value.length <= 45) {
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

    return {
      handleAddicon,
      handleCancelAddicon,
      changeTextarea,
      changeGetValue,
      SubmitHandleClick,
    };
  })();
  const {
    handleAddicon,
    handleCancelAddicon,
    changeTextarea,
    changeGetValue,
    SubmitHandleClick,
  } = AddscrenModuleOperations;

  //Edit Screen Module

  const EditScreenModule = (function () {
    const hadleEditClick = (id) => {
      alert(id);
    };
    return { hadleEditClick };
  })();

  const { hadleEditClick } = EditScreenModule;

  //Delete Screen Module

  const DeleteScreenModule = (function () {
    const handleDeleteClick = (id) => {
      alert(id);
    };
    return { handleDeleteClick };
  })();
  const { handleDeleteClick } = DeleteScreenModule;
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

      <MainHomeScreen
        onClickEdit={hadleEditClick}
        onClickDelete={handleDeleteClick}
        Dataarray={Dataarray}
      />
    </div>
  );
}
