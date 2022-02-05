import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core"
import { login } from "../../app"
import "./Login.css";

export default function Login() {
  const email = useRef()
  const password = useRef()

  const isPending = useSelector((state) => state.user.pending)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
      const safe = email.current.value.toLowerCase()
    login({ email: safe, password: password.current.value })
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">Foolish Passions</h4>
          <span className="loginDecription">
            Connect with dancers near and far on Foolish Passions
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton" type="submit" disabled={isPending}>{isPending ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to={`/register`} > 
            <button className="loginRegisterButton">
              {isPending ? <CircularProgress color="white" size="20px" /> : "Create a New Account"}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
