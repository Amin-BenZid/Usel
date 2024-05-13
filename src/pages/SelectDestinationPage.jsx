import React from "react";
import GoogleMapReact from "google-map-react";
import "./Styles.css";
import SideBar from "./SideBar";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SelectDestinationPage({ setLogedIn, setPickedPage }) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <SideBar
        setLogedIn={setLogedIn}
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
      />
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className="flex justify-center items-center">
        <div className="pt-4 flex gap-2">
          <input
            className="bg-red w-60 h-11 border border-black rounded-md p-2"
            placeholder="Going to.."
          />
          <button
            className="bg-[#FF3F3F] text-white font-bold h-11 w-20 rounded-md"
            onClick={() => {
              setPickedPage("SelectTripType");
            }}
          >
            search
          </button>
        </div>
      </div>
    </>
  );
}
