import CurrentDate from "./CurrentDate";

export default function TopHomeScreen() {
  return (
    <div>
      <div className="container text-center TopHomeScreen_Top">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              {" "}
              <CurrentDate />
            </div>
            <div className="col-md-4 col-sm-4">
              <h1>TO-DO-APP</h1>{" "}
            </div>
            <div className="col-md-4 col-sm-4">3 </div>
          </div>
        </div>
      </div>
    </div>
  );
}
