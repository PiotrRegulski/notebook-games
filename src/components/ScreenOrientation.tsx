"use-client";

import React, { useEffect, useState } from "react";
import Playground from "./gamecore/Playground";

const ScreenOrientaion = () => {
  const [orientation, setOrientation] = useState("");
  useEffect(() => {
    // Function to update the orientation state
    function updateOrientation() {
      setOrientation(window.screen.orientation.type);
    }
    // Initial update of the orientation state
    updateOrientation();
    // Add an event listener for orientation change
    window.addEventListener("orientationchange", updateOrientation);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, [orientation]);
  return (
    <>
      {orientation === "landscape-primary" ||
      orientation === "landscape-secondary" ? (
        <div className=" text-white">
          <Playground />
        </div>
      ) : (
        <div className=" w-full border-dashed border-2 border-sky-500  mt-10 rounded-md object-center  ">
          {/* dodawanie tła */}
          <div
            style={{
              backgroundImage: `url(${"backgroundscreenorientation.jpg"})`,
            }}
            className=" bg-cover bg-top"
          >
            <p className="  text-white text-center p-2 h-24  ">
              To start the game, please rotate your device screen.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenOrientaion;
