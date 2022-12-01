import "./index.css";
import userProfile from "./images/user.png";
import userEmail from "./images/userEmail.jpg";
import userPassword from "./images/userPass.png";

function App() {
  return (
    <div className="main-content">
      <div className="content">
        <div className="form-content">
          <div className="image-container">
            <div className="image-logo">
              <img
                src={userProfile}
                alt="userProfile"
                className="user-profile"
              />
            </div>
          </div>
          <div>
            <h1>Login Form</h1>
          </div>
          <div>
            <img src={userEmail} alt="userEmail" className="user-email" />
            <input type="text" placeholder="user name" className="user-name" />
          </div>
          <div className="input-two">
            <img src={userPassword} alt="userPassword" className="user-email" />
            <input type="password" placeholder="user password" className="user-name" />
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
          <div>
            <p className="links">
              <a href="#">Forgot password</a> or <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
