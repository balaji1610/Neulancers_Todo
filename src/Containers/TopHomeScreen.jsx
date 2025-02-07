import CurrentDate from "./CurrentDate";

import ImageComponent from "../Components/ImageComponent";
import AddPlusIcon from "../Images/AddPlusIcon.png";

export default function TopHomeScreen({ onClick }) {
  return (
    <div>
      <div className="container text-center TopHomeScreen_Top">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-4 col-sm-4" style={{ marginTop: "40px" }}>
              {" "}
              <CurrentDate />
            </div>
            <div className="col-md-4 col-sm-4">
              <h1
                style={{
                  color: "#0288D1",
                  fontVariant: "bold",
                  fontFamily: "Times New Roman",
                }}
              >
                To<span style={{ color: "red" }}>-</span>do
                <span style={{ color: "red" }}>-</span>List
              </h1>{" "}
            </div>
            <div className="col-md-4 col-sm-4">
              <span
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  marginTop: "25px",
                }}
                onClick={onClick}
              >
                {" "}
                <ImageComponent
                  src={AddPlusIcon}
                  width="70"
                  height="70"
                  alt="AddPlusIcon"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
