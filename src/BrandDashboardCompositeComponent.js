import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BrandDashboardSidebar from "./components/BrandDashboardSidebar";
import BrandNavbar from "./pages/brand/BrandNavbar";

function BrandDashboardCompositeComponent() {
  const location = useLocation();
  // const isDashboard = location?.pathname === "/brand/dashboard";
  // const isSupport = location?.pathname === "/brand/support";

  const [title, setTitle] = useState('');

  useEffect(() => {
    const path = location.pathname;

    // (path.startsWith("/brand/campaign")) ? setTitle(path.slice(7, path.lastIndexOf('/'))) : setTitle(path.slice(7));
    setTitle(path.slice(7));
    // (path === "/brand/dashboard" || path === "/brand/support") ? setBreadCumbs(false) : setBreadCumbs(true);

    // console.log();
  }, [location.pathname])
  return (
    <div className="flex h-full">
      <BrandDashboardSidebar />
      <div className="w-full overflow-hidden">
        <BrandNavbar title={title} />
        <Outlet />
      </div>
    </div>
  );
}

export default BrandDashboardCompositeComponent;
