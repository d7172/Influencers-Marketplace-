import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import InfDashboardSidebar from "./components/InfDashboardSidebar";
import InfNavbar from "./pages/influencer/Dashboard/InfNavbar";

function InfDashboardCompositeComponent() {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const path = location.pathname;

    setTitle(path.slice(12));
  }, [location.pathname])
  return (
    <div className="flex h-full">
      <aside className="h-screen sticky top-0">
        <InfDashboardSidebar />
      </aside>
      <main>
        <InfNavbar title={title} />
        <Outlet />
      </main>
    </div>
  );
}

export default InfDashboardCompositeComponent;
