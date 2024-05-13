import SelectDestinationPage from "./pages/SelectDestinationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SelectTripType from "./pages/SelectTripType.jsx";
import RatePage from "./pages/RatePage.jsx";
import TrackDriver from "./pages/TrackDriver.jsx";
import { useState } from "react";
import ThankYouPage from "./pages/ThankYouPage.jsx";

export default function App() {
  const [LogedIn, setLogedIn] = useState(false);
  const [pickedPage, setPickedPage] = useState("");
  return (
    <>
      {LogedIn ? null : (
        <LoginPage setLogedIn={setLogedIn} setPickedPage={setPickedPage} />
      )}
      {LogedIn && pickedPage === "SelectDestinationPage" ? (
        <SelectDestinationPage setLogedIn={setLogedIn} setPickedPage={setPickedPage} />
      ) : null}

      {LogedIn && pickedPage === "SelectTripType" ? (
        <SelectTripType setPickedPage={setPickedPage} />
      ) : null}
      {LogedIn && pickedPage === "TrackDriver" ? (
        <TrackDriver setPickedPage={setPickedPage} />
      ) : null}
      {LogedIn && pickedPage === "RatePage" ? (
        <RatePage setPickedPage={setPickedPage} />
      ) : null}
      {LogedIn && pickedPage === "ThnakYouPage" ? (
        <ThankYouPage setLogedIn={setLogedIn} setPickedPage={setPickedPage} />
      ) : null}
    </>
  );
}
