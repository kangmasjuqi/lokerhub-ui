// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import VacancyList from "./pages/VacancyList";
import VacancyDetail from "./pages/VacancyDetail";
import SampleDetail from "./pages/SampleDetail";
import ApplicantForm from "./pages/ApplicantForm";
import TestPicker from "./pages/TestPicker";
import ApplicantTable from "./pages/ApplicantTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <VacancyList /> },
      { path: "detail/:id", element: <VacancyDetail /> },
      { path: "sample", element: <SampleDetail /> },
      { path: "form", element: <ApplicantForm /> },
      { path: "tests", element: <TestPicker /> },
      { path: "applicants", element: <ApplicantTable /> },
    ],
  },
]);

export default router;
