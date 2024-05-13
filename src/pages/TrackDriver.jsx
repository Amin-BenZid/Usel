import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaUser, FaStar } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import "@smastrom/react-rating/style.css";
import "./Styles.css";
import SideBar from "./SideBar";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TrackDriver = ({ setPickedPage }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="flex flex-col">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div style={{ height: "20vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className="h-[70vh] flex flex-col items-center p-12">
        <h1 className="font-bold text-xl">YOUR DRIVER IS ON HIS WAY</h1>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className=" flex gap-20 mt-3">
          <div className="flex items-center gap-2">
            <FaUser size={40} />
            <div>
              <p className="font-bold">Amin Bz</p>
              <div className="flex items-center gap-2">
                <FaStar color="yellow" />
                <p className="font-bold">4.9</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoCarSport size={50} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div className="flex mt-8 font-bold">
          <p>Time estimated : 4:10 Min</p>
        </div>
        <button
          className="bg-black w-56 h-14 absolute bottom-20 rounded-md text-white text-xl font-bold"
          onClick={() => {
            setPickedPage("RatePage");
          }}
        >
          TRIP DONE
        </button>
      </div>
    </div>
  );
};

export default TrackDriver;
