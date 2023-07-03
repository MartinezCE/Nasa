import React, { useState } from "react";
import "./styles.css";
const Bgv = require("../../assets/bgv.mp4");

const Login = ({ handleRender }) => {
  const [user, setUser] = useState("");
  const [localStrg, setLocalStrg] = useState(false);

  const getName = (e) => {
    setUser(e.target.value);
  };
  const handleCheck = (e) => {
    setLocalStrg(e.isTrusted);
  };

  const handleLogin = () => {
    localStrg
      ? window.localStorage.setItem("user", user)
      : window.sessionStorage.setItem("user", user);
  };

  const handleClick = () => {
    handleRender();
    handleLogin();
  };

  return (
    <div>
      <div className="shadow" />
      <video src={Bgv} autoPlay muted loop className="bgVideo" />
      <div className="form">
        <h1 className="text-2xl sm:text-5xl text-white xl:text-8xl ">
          Welcome Earthling!
        </h1>

        <div className="content-intpu text-sm sm:text-xl  xl:text-3xl">
          <h2 className="mb-8">Enter your name</h2>
          <input
            onChange={getName}
            className="input "
            type="text"
            placeholder="Name"
            required
          />
          <div className="mt-8">
            <input
              className="checkbox"
              type="checkbox"
              id="recordarme"
              onChange={handleCheck}
            />
            <label className="ml-4">Remind me</label>
          </div>
        </div>
        <button onClick={handleClick} className="mb-8 btn text-xl">
          log in
        </button>
      </div>
    </div>
  );
};

export default Login;
