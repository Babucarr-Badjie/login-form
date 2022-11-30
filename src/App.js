import "./index.css";
import logo from "./images/user-circle.svg"

function App() {
  return (
    <div className="main-content">
      <div className="content">
        <div className="form-content">
          <div className="image-container">
            <div className="image-logo">
              <img src={logo} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
