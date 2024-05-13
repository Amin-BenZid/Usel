import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaUser, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "./Styles.css";
import SideBar from "./SideBar";

import "@smastrom/react-rating/style.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const RatePage = ({ setPickedPage }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className="h-[70vh] flex flex-col items-center p-12">
        <h1 className="font-bold text-xl">YOU ARRIVED</h1>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className=" flex gap-4 mt-3">
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
            <p className="text-[10px] text-gray-600">FINAL COST</p>
            <p className="text-[10px] font-bold">25 DT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[10px] text-gray-600">TIME TAKEN</p>
            <p className="text-[10px] font-bold">20:10 Min</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div>
          <div className="flex font-bold text-xl gap-8 mb-4 mt-6 items-center">
            <FaLocationDot />
            My location
          </div>
          <div className="h-[1px] w-60 bg-gray-500"></div>
          <div className="flex font-bold text-xl gap-8 mt-4 items-center">
            <FaLocationDot />
            Destination
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-4 mb-4"></div>
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="text-xl font-bold">HOW WAS YOUR TRIP ?</p>
          <p className="text-center text-gray-400 text-sm w-56">
            Your feedback will help us improving driving experience better .
          </p>
          <div className="">
            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
          </div>
          <button
            className="bg-black w-56 h-14   rounded-md text-white text-xl font-bold"
            onClick={() => {
              setPickedPage("ThnakYouPage");
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatePage;
