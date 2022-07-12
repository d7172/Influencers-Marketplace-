import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BrandDashboardSidebar from "./components/BrandDashboardSidebar";
import BrandNavbar from "./pages/brand/BrandNavbar";

function BrandDashboardCompositeComponent() {
  const location = useLocation();
  // const isDashboard = location?.pathname === "/brand/dashboard";
  // const isSupport = location?.pathname === "/brand/support";

  const [title, setTitle] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setTitle(path.slice(7));
  }, [location.pathname]);
  return (
    <div className="flex h-full">
      <aside className="h-screen sticky top-0">
        <BrandDashboardSidebar />
      </aside>
      <main className="w-full overflow-hidden">
        <BrandNavbar title={title} />
        <Outlet />
      </main>
    </div>
  );
}

export default BrandDashboardCompositeComponent;
