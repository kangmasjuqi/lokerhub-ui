import { NavLink } from "react-router-dom";
import {
  Briefcase,
  FormInput,
  ListChecks,
  Users,
} from "lucide-react"; // requires lucide-react

const Sidebar = () => (
  <aside className="w-64 bg-white border-r h-screen p-6 shadow-lg flex flex-col">
    <h2 className="text-2xl font-bold text-blue-700 mb-6">Dashboard</h2>
    <nav className="space-y-3 text-gray-700 font-medium">
      <NavItem to="/" icon={<Briefcase size={18} />} label="Vacancy Detail" />
      <NavItem to="/form" icon={<FormInput size={18} />} label="Applicant Form" />
      <NavItem to="/tests" icon={<ListChecks size={18} />} label="Test Picker" />
      <NavItem to="/applicants" icon={<Users size={18} />} label="Applicants List" />
    </nav>
  </aside>
);

const NavItem = ({
  to,
  icon,
  label,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        isActive
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "hover:bg-gray-100"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
