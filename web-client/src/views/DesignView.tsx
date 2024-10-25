import React, { useRef, useEffect } from "react";
import { DesignScreen } from "./DesignScreen";

export const DesignView = () => {
  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
      const sceneReady = container.current.dataset.sceneReady;
      if (!sceneReady) {
        container.current.dataset.sceneReady = true;
        console.log("Start Viewer");
        const screen = new DesignScreen(container.current);
        screen.initializeComponent();
        return () => {};
      }
    }
  });

  return (
    <div
      style={{ width: "800px", height: "600px", background: "#ccffcc" }}
      ref={container}
    ></div>
  );
};
