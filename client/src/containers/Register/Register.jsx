import React, {useRef } from "react";
import {useHistory} from "react-router"
import { Link } from "react-router-dom";
import {registerUser} from "../../app"
import "./Register.css";

export default function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const verify = useRef()

  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const u = username.current.value
    const mail = email.current.value
    const p = password.current.value
    const v = verify.current.value

    if (v !== p){
      verify.current.setCustomValidity("Passwords don't match!")
    }

    if (u && mail && p && v) {
      console.log("it's all here")
      const standardized = `@${u}`
      const safe = mail.toLowerCase()
      const user = {
        username: standardized,
        email: safe,
        password: p,
      }
      registerUser(user)
        .then(()=>{
          history.push("/login")
        })
    }

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
          <form className="loginBox" onSubmit={handleRegister} >
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
            <input placeholder="Password Again" type="password" required ref={verify} className="loginInput" />
            <button className="loginButton" type="submit" >Sign Up</button>
            <button className="loginRegisterButton">
             <Link to={`/login`} className="loginRegisterButton"> 
              Already have an account?
            </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
