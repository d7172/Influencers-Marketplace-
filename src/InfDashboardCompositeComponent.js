import React from "react";
import { Outlet } from "react-router-dom";
import InfDashboardSidebar from "./components/InfDashboardSidebar";
import InfNavbar from "./pages/influencer/Dashboard/InfNavbar";

function InfDashboardCompositeComponent() {
  return (
    <div className="flex h-full">
      <InfDashboardSidebar />
      <div>
        <InfNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default InfDashboardCompositeComponent;
