// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  FormInput,
  ListChecks,
  Users,
  X,
} from "lucide-react";

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => (
  <aside className="w-64 h-full bg-white p-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-blue-700">Menu</h2>
      {closeSidebar && (
        <button className="md:hidden" onClick={closeSidebar}>
          <X />
        </button>
      )}
    </div>
    <nav className="space-y-2 text-gray-800">
      <NavItem to="/" icon={<Briefcase size={18} />} label="Vacancy List" close={closeSidebar} />
      <NavItem to="/sample" icon={<Briefcase size={18} />} label="Sample Detail" close={closeSidebar} />
      <NavItem to="/form" icon={<FormInput size={18} />} label="Applicant Form" close={closeSidebar} />
      <NavItem to="/tests" icon={<ListChecks size={18} />} label="Test Picker" close={closeSidebar} />
      <NavItem to="/applicants" icon={<Users size={18} />} label="Applicants List" close={closeSidebar} />
    </nav>
  </aside>
);

const NavItem = ({
  to,
  icon,
  label,
  close,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  close?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={close}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-md transition ${
        isActive
          ? "bg-blue-100 text-blue-700"
          : "hover:bg-gray-100 text-gray-700"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
