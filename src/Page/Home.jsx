import { useState, useEffect } from "react";
import TopHomeScreen from "../Containers/TopHomeScreen";
import MainHomeScreen from "../Containers/MainHomeScreen";
import AddScreen from "../Containers/AddScreen";
import EditScreen from "../Containers/EditScreen";
import DeleteScreen from "../Containers/DeleteScreen";
import Footer from "../Containers/Footer";
export default function Home() {
  // const [Dataarray, setDataArray] = useState([]);
  // Load items from local storage on component mount

  const [Dataarray, setDataArray] = useState(() => {
    return JSON.parse(localStorage.getItem("Dataarray")) || [];
  });

  // useEffect(() => {
  //   const storedItems = localStorage.getItem("Dataarray");
  //   if (storedItems) {
  //     setDataArray(JSON.parse(storedItems));
  //   }
  // }, []);

  // Save items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("Dataarray", JSON.stringify(Dataarray));
  }, [Dataarray]);
  //AddscrenModule
  const [addmodel, setModel] = useState(false);

  //AddModel
  const [textarea, setTextArea] = useState("");
  const [getStatus, setGetStatus] = useState("");

  //Add screenMoudle Operations
  const AddscrenModuleOperations = (function () {
    const handleAddicon = () => {
      setModel(true);
    };

    const handleCancelAddicon = () => {
      setTextArea("");
      setGetStatus("");
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
    const handleAddClear = () => {
      setTextArea("");
    };
    const SubmitHandleClick = (e) => {
      e.preventDefault();
      setTextArea("");
      setGetStatus("");

      const DataStructure = {
        id: Dataarray.length + 1,
        taskname: textarea,
        status: getStatus,
      };
      const updateData = [...Dataarray, DataStructure];
      setDataArray(updateData);
    };

    return {
      handleAddicon,
      handleCancelAddicon,
      changeTextarea,
      changeGetValue,
      SubmitHandleClick,
      handleAddClear,
    };
  })();
  const {
    handleAddicon,
    handleCancelAddicon,
    changeTextarea,
    changeGetValue,
    SubmitHandleClick,
    handleAddClear,
  } = AddscrenModuleOperations;

  //Edit Screen Module
  const [editScreen, SetEditScreen] = useState(false);
  const [EditId, setEditId] = useState("");
  const EditScreenModule = (function () {
    const hadleEditClick = (el) => {
      SetEditScreen(true);
      setEditId(el);
      console.log(EditId, "EditId");
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
    const handleDeleteClick = (arg) => {
      setDeleteItem(true);
      setEditId(arg);
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
          handleAddClear={handleAddClear}
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
          EditId={EditId}
          Dataarray={Dataarray}
          setDataArray={setDataArray}
        />
      )}

      {deleteItem && (
        <DeleteScreen
          open={deleteItem}
          handleDeleteCancel={handleDeleteCancel}
          EditId={EditId}
          Dataarray={Dataarray}
          setDataArray={setDataArray}
        />
      )}
      <Footer />
    </div>
  );
}
