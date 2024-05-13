import React from "react";
import logo from "../imgs/logo.png";

const LoginPage = ({ setLogedIn, setPickedPage }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-32">
      <img src={logo} />
      <div className="flex flex-col gap-6 mt-16">
        <button
          className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white text-2xl font-bold"
          onClick={() => {
            setLogedIn(true);
            setPickedPage("SelectDestinationPage");
          }}
        >
          Login with Gmail
        </button>
        <button
          className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white text-2xl font-bold"
          onClick={() => {
            setLogedIn(true);
            setPickedPage("SelectDestinationPage");
          }}
        >
          Login with Apple
        </button>
        <button
          className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white text-2xl font-bold"
          onClick={() => {
            setLogedIn(true);
            setPickedPage("SelectDestinationPage");
          }}
        >
          Login with Number
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
<button>Login with Gmail</button>;
