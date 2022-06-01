import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BrandDashboardSidebar from "./components/BrandDashboardSidebar";
import Breadcrumbs from "./components/Breadcrumbs";
import BrandNavbar from "./pages/brand/BrandNavbar";

function BrandDashboardCompositeComponent() {
  const location = useLocation();
  // const isDashboard = location?.pathname === "/brand/dashboard";
  // const isSupport = location?.pathname === "/brand/support";

  const [breadCumbs, setBreadCumbs] = useState()
  const [title, setTitle] = useState('');

  useEffect(() => {
    const path = location.pathname;

    // (path.startsWith("/brand/campaign")) ? setTitle(path.slice(7, path.lastIndexOf('/'))) : setTitle(path.slice(7));
    setTitle(path.slice(7));
    (path === "/brand/dashboard" || path === "/brand/support") ? setBreadCumbs(false) : setBreadCumbs(true);

    // console.log();
  }, [location.pathname])
  return (
    <div className="flex h-full">
      <BrandDashboardSidebar />
      <div className="w-full overflow-hidden">
        <BrandNavbar title={title} />
        {breadCumbs && <div className='flex items-center px-8 py-5 bg-[#F2F2F2]'>
          <Breadcrumbs />
        </div>}
        <Outlet />
      </div>
    </div>
  );
}

export default BrandDashboardCompositeComponent;
