import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function InfluencerCompositeComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default InfluencerCompositeComponent;
