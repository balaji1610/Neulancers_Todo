import TopHomeScreen from "../Containers/TopHomeScreen";
import AddScreen from "../Containers/AddScreen";
import { useState } from "react";
import { Todoitems } from "../Utillis/Todoitems";
import MainHomeScreen from "../Containers/MainHomeScreen";
import EditScreen from "../Containers/EditScreen";
import DeleteScreen from "../Containers/DeleteScreen";
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
  const [editScreen, SetEditScreen] = useState(false);
  const EditScreenModule = (function () {
    const hadleEditClick = () => {
      SetEditScreen(true);
    };

    const handleEditCancelClick = () => {
      SetEditScreen(false);
    };
    return { hadleEditClick, handleEditCancelClick };
  })();

  const { hadleEditClick, handleEditCancelClick } = EditScreenModule;

  //Delete Screen Module
  const [deleteItem, setDeleteItem] = useState(false);
  const DeleteScreenModule = (function () {
    const handleDeleteClick = () => {
      setDeleteItem(true);
    };
    const handleDeleteCancel = () => {
      setDeleteItem(false);
    };
    return { handleDeleteClick, handleDeleteCancel };
  })();
  const { handleDeleteClick, handleDeleteCancel } = DeleteScreenModule;
  return (
    <div>
      <TopHomeScreen onClick={handleAddicon} />

      {addmodel && (
        <AddScreen
          open={addmodel}
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

      {editScreen && (
        <EditScreen
          open={editScreen}
          handleEditCancelClick={handleEditCancelClick}
        />
      )}

      {deleteItem && (
        <DeleteScreen
          open={deleteItem}
          handleDeleteCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
}
