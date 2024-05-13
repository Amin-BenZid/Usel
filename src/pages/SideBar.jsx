import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaUser } from "react-icons/fa";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item flex flex-col gap-8 items-center justify-center" href="/">
        <FaUser size={40} />
        <p className="text-xl font-bold">Amin Bz</p>
        <p className="text-sm text-red-400">Edit Profile</p>
      </a>

      <a className="menu-item font-bold mt-8" href="/about">
        Your Trips
      </a>

      <a className="menu-item font-bold mt-8" href="/services">
        Notifications
      </a>

      <a className="menu-item font-bold mt-8" href="/contact">
        Help
      </a>

      <a className="menu-item font-bold mt-8" href="/contact">
        Free Trips
      </a>

      <a className="menu-item font-bold mt-8" href="/contact">
        Settings
      </a>
      <button
        className="menu-item font-bold mt-8"
        onClick={() => {
          props.setLogedIn(false);
        }}
      >
        LogOut
      </button>
    </Menu>
  );
};
