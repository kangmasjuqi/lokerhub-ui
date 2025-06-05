import { useEffect, useState } from "react";

type Vacancy = {
  id: number;
  title: string;
  location: string;
  salary: string;
  desc: string;
};

// EXPECTED typical API response 
// {
//     "vacancies": [
//         {
//             "id": 1,
//             "title": "Software Engineer",
//             "location": "New York",
//             "salary": "90,000 - 120,000",
//             "desc": "Build scalable backend systems."
//         },
//         {
//             "id": 2,
//             "title": "Data Scientist",
//             "location": "San Francisco",
//             "salary": "110,000 - 140,000",
//             "desc": "Analyze large data sets to gain insights."
//         }
//     ]
// }

const VacancyList = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("/api/vacancies");
        const data = await response.json();
        setVacancies(data.vacancies || []);
      } catch (err) {
        setError("Failed to load vacancies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Open Job Vacancies
      </h1>

      {loading && <p className="text-gray-500">Loading vacancies...</p>}
      {error && (
        <div className="text-red-600 bg-red-100 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vacancies.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {job.title}
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              📍 <strong>Location:</strong> {job.location}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              💰 <strong>Salary:</strong> {job.salary}
            </p>
            <p className="text-gray-700 mt-2 text-sm">{job.desc}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

      {vacancies.length === 0 && !loading && !error && (
        <p className="text-gray-500 text-center mt-6">No vacancies found.</p>
      )}
    </div>
  );
};

export default VacancyList;
