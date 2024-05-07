import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="login-div">
        <form action="" className="login-cont">
            <img src="" alt="" srcset="" />
          <div className="username-cont">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="email-cont">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="password-cont">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="submit-cont">
            <button className="submit-btn">
                Sign up
            </button>
          </div>
          <div className="login-signup">
            <a href="" className="login-signup-link">Already a user ? Login</a>
          </div>
        </form>
    </div>
  );
}