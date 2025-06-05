import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import VacancyList from './pages/VacancyDetail';
import SampleDetail from './pages/SampleDetail';
import ApplicantForm from './pages/ApplicantForm';
import TestPicker from './pages/TestPicker';
import ApplicantTable from './pages/ApplicantTable';
import './index.css';

function App() {
  return (
    <body className="dark:bg-gray-900 dark:text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
            <Breadcrumb />
            <Routes>
            <Route path="/" element={<VacancyList />} />
            <Route path="/sample" element={<SampleDetail />} />
            <Route path="/form" element={<ApplicantForm />} />
            <Route path="/tests" element={<TestPicker />} />
            <Route path="/applicants" element={<ApplicantTable />} />
            </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
