// src/components/Layout.tsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react"; // Optional icon

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-40 md:static transition-transform duration-300 transform bg-white h-full shadow-md w-64 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white shadow px-4 py-3 md:hidden flex items-center justify-between">
          <button onClick={() => setOpen(true)} className="text-gray-700">
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-bold">Job Portal</h1>
        </div>

        {/* Routed content */}
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
