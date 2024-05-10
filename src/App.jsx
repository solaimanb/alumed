import React, { useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // Locomotive Smooth Scroll Trigger
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#myScrollContainer"),
        smooth: true,
        lerp: 0.01,
      });
    })();
  }, []);

  return (
    <Router>
      <div id="myScrollContainer">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
