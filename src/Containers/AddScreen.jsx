import { useState } from "react";
import BtnComponent from "../Components/BtnComponent";
import InputComponent from "../Components/InputComponent";
import Dropdown from "../Components/DropdownComponent";
export default function AddScreen({
  onClick,
  inputChange,
  dropdown,
  SubmitHandleClick,
  textarea,
  getStatus,
}) {
  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];
  return (
    <div>
      <div style={{ border: "2px solid red" }}>
        <h1>AddScreen</h1>
        <form onSubmit={SubmitHandleClick}>
          Task Name :{" "}
          <InputComponent
            value={textarea}
            placeholder="Write A Text"
            maxlength="45"
            onChange={inputChange}
            style={{ width: "76vh", height: "10vh" }}
          />
          ADD STATUS :
          <Dropdown value={getStatus} options={options} onChange={dropdown} />
          <div class="d-flex flex-row mb-3">
            <div class="p-2">
              <BtnComponent
                type="button"
                className="btn btn-secondary"
                label="Cancel"
                onClick={onClick}
              />
            </div>
            <div class="p-2">
              {" "}
              <BtnComponent
                type="submit"
                className="btn btn-primary"
                label="Add"
                style={{
                  cursor:
                    textarea.length && getStatus.length > 0
                      ? "pointer"
                      : "not-allowed",
                }}
              />
            </div>
          </div>
        </form>

        <div>
          <span style={{ color: "red", display: "inline-block" }}>
            <h3>{textarea.length}</h3>
          </span>
          <h3 style={{ color: "#000000", display: "inline-block" }}>/45</h3>
        </div>
      </div>
    </div>
  );
}
