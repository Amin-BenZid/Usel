import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCarSharp } from "react-icons/io5";
import { LiaCarSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import "./Styles.css";
import SideBar from "./SideBar";

const SelectTripType = ({ setPickedPage }) => {
  return (
    <div className=" flex flex-col justify-center items-center p-12 gap-12">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div>
        <div className="flex font-bold text-xl gap-8 mb-4">
          <FaLocationDot />
          My location
        </div>
        <div className="h-[1px] w-60 bg-gray-500"></div>
        <div className="flex font-bold text-xl gap-8 mt-4">
          <FaLocationDot />
          Destination
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8 mt-10">
        <button className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white flex items-center gap-10">
          <div className="ml-4">
            <IoCarSharp size={60} />
          </div>
          <div className="text-left">
            <h1 className="font-bold text-xl">SHARED</h1>
            <p className="text-[10px]">Shared ride with other going that way</p>
          </div>
        </button>
        <button className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white flex items-center gap-10">
          <div className="ml-4">
            <LiaCarSolid size={60} />
          </div>
          <div className="text-left">
            <h1 className="font-bold text-xl">STANDARD</h1>
            <p className="text-[10px]">Affardable rides,all to yourslelf</p>
          </div>
        </button>
        <button className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white flex items-center gap-10">
          <div className="ml-4">
            <IoCarSportOutline size={60} />
          </div>
          <div className="text-left">
            <h1 className="font-bold text-xl">DELUXE</h1>
            <p className="text-[10px]">Newer cars with extra tegroom</p>
          </div>
        </button>
        <button className="bg-[#FF3F3F] w-80 h-16 rounded-md text-white flex items-center gap-10">
          <div className="ml-4">
            <IoCarSport size={60} />
          </div>
          <div className="text-left">
            <h1 className="font-bold text-xl">PREMIUM</h1>
            <p className="text-[10px]">Luxury rides with professional drivers</p>
          </div>
        </button>
      </div>
      <button
        className="bg-black w-56 h-14 rounded-md text-white text-xl font-bold"
        onClick={() => {
          setPickedPage("TrackDriver");
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default SelectTripType;
