import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardSidebar from "./components/AdminDashboardSidebar";
import AdminNavbar from "./pages/Admin/AdminNavbar";

function AdminDashboardCompositeComponent() {
  return (
    <div className="flex h-full">
      <AdminDashboardSidebar />
      <div>
        <AdminNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboardCompositeComponent;