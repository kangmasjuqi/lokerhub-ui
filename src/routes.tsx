// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import VacancyDetail from "./pages/VacancyDetail";
import ApplicantForm from "./pages/ApplicantForm";
import TestPicker from "./pages/TestPicker";
import ApplicantTable from "./pages/ApplicantTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <VacancyDetail /> },
      { path: "form", element: <ApplicantForm /> },
      { path: "tests", element: <TestPicker /> },
      { path: "applicants", element: <ApplicantTable /> },
    ],
  },
]);

export default router;
