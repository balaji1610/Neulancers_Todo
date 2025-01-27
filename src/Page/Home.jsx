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

  const [editScreen, SetEditScreen] = useState(false);
  const [EditId, setEditId] = useState("");
  const [deleteItem, setDeleteItem] = useState(false);

  //Add screenMoudle Operations
  //   The function AddscrenModuleOperations is a module-like pattern that
  // groups related operations into a single unit.
  // It handles various operations such as showing/hiding a modal,
  // managing form inputs, clearing inputs, and updating a data array.

  // It returns an object containing several functions,
  const AddscrenModuleOperations = () => {
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

      const updateData = [
        ...Dataarray,
        {
          id: Dataarray.length + 1,
          taskname: textarea,
          status: getStatus,
        },
      ];
      setDataArray(updateData);
      setModel(false);
    };

    return {
      handleAddicon,
      handleCancelAddicon,
      changeTextarea,
      changeGetValue,
      SubmitHandleClick,
      handleAddClear,
    };
  };

  const {
    handleAddicon,
    handleCancelAddicon,
    changeTextarea,
    changeGetValue,
    SubmitHandleClick,
    handleAddClear,
  } = AddscrenModuleOperations();

  //Edit Screen Module

  const EditScreenModule = () => {
    const hadleEditClick = (el) => {
      SetEditScreen(true);
      setEditId(el);
    };

    const handleEditCancelClick = () => {
      SetEditScreen(false);
    };

    return { hadleEditClick, handleEditCancelClick };
  };

  const { hadleEditClick, handleEditCancelClick } = EditScreenModule();

  //Delete Screen Module
  const DeleteScreenModule = () => {
    const handleDeleteClick = (arg) => {
      setDeleteItem(true);
      setEditId(arg);
    };
    const handleDeleteCancel = () => {
      setDeleteItem(false);
    };
    return { handleDeleteClick, handleDeleteCancel };
  };
  const { handleDeleteClick, handleDeleteCancel } = DeleteScreenModule();

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
