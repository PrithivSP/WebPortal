import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-div">
        <form action="" className="login-cont">
            <img src="" alt="" srcset="" />
          <div className="username-cont">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="password-cont">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="submit-cont">
            <button className="submit-btn">
                Login
            </button>
          </div>
          <div className="login-signup">
            <a href="" className="login-signup-link">New user ? Sign Up</a>
          </div>
        </form>
    </div>
  );
}