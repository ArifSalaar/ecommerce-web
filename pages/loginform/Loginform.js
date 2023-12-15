import React, { useState } from "react";

import Signup from "../Signup/Signup";

import "./Loginform.css";

function Loginform({ CloseModel }) {
  const [RegisterForm, setRegistrationform] = useState(false);


  return (
    <div>
      <div
        className="container-fluid fixed-top position-fixed pt-5  bgtransparent"
        onRequestClose={() => CloseModel(false)}
      >
        <div
          class=" row justify-content-center  d-flex mt-5  "
          data-aos="slide-down"
        >
          <div className="col-4 center ">
            <button
              className="float-end closex"
              onClick={() => CloseModel(false)}
            >
              X
            </button>
            <h1>Login</h1>
            <form method="post" autoComplete="off">
              <div class="txtfield">
                <input type="text" autoComplete="off" autoSave="on"/>
                <span></span>
                <label>Username</label>
              </div>
              <div class="txtfield  ">
                <input type="password" autoComplete="off" autoSave="on"/>
                <span></span>
                <label>Password </label>
                
              </div>
              <div class="pass">Forgot Password?</div>
              <input type="submit" value="Login" />
              <div class="signup_link">
                Not a member?{" "}
                <a
                  className="linkcol"
                  onClick={() => { setRegistrationform(true)}}
                >
                  Signup
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {RegisterForm && <Signup closereg={setRegistrationform} />}
    </div>
  );
}

export default Loginform;
