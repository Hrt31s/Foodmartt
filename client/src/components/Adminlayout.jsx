
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
     <Sidebar/>
      <main className="flex-grow p-4">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminLayout;
