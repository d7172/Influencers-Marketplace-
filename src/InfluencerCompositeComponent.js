import React from "react";
import { Outlet } from "react-router-dom";
import InfluencerFooter from "./components/InfluencerFooter";
import Navbar from "./components/Navbar";

function InfluencerCompositeComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <InfluencerFooter />
    </div>
  );
}

export default InfluencerCompositeComponent;
