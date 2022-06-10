import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminDashboardSidebar from "./components/AdminDashboardSidebar";
import AdminNavbar from "./pages/Admin/AdminNavbar";

function AdminDashboardCompositeComponent() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    const path = location.pathname;

    setTitle(path.slice(7));
  }, [location.pathname])

  return (
    <div className="flex h-full">
      <AdminDashboardSidebar />
      <div>
        <AdminNavbar title={title}/>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboardCompositeComponent;
