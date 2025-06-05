// src/pages/VacancyDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Vacancy = {
  id: string;
  title: string;
  location: string;
  salary: string;
  desc: string;
};

// EXPECTED typical API response 
// {
//   "vacancy": {
//     "id": "1",
//     "title": "Software Engineer with ID 1",
//     "location": "New York",
//     "salary": "90,000 - 120,000",
//     "desc": "Build scalable backend systems."
//   }
// }

const VacancyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/vacancies/${id}`)
      .then((res) => res.json())
      .then((data) => setVacancy(data.vacancy));
  }, [id]);

  const handleSave = () => setIsSaved(!isSaved);

  if (!vacancy) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{vacancy.title}</h1>
        <p className="text-gray-500 mt-1">Location: {vacancy.location}</p>
      </div>

      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="font-semibold text-lg">Description</h2>
          <p>{vacancy.desc}</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Salary</h2>
          <p>{vacancy.salary}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow transition">
          Apply Now
        </button>
        <button
          onClick={handleSave}
          className={`px-5 py-2 ${
            isSaved ? "bg-yellow-500 hover:bg-yellow-600" : "bg-gray-200 hover:bg-gray-300"
          } text-gray-800 font-medium rounded-full shadow transition`}
        >
          {isSaved ? "Saved" : "Save Job"}
        </button>
        <button className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow transition">
          Share
        </button>
      </div>
    </div>
  );
};

export default VacancyDetail;
