import React from "react";
import "./Styles.css";
import SideBar from "./SideBar";

const ThankYouPage = ({ setLogedIn }) => {
  return (
    <>
      <SideBar
        setLogedIn={setLogedIn}
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
      />
      <div className="bg-orange-400 h-[100vh] items-center justify-center flex">
        <p className="font-bold">THANK YOU</p>
      </div>
    </>
  );
};

export default ThankYouPage;
