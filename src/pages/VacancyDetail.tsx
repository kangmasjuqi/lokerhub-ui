import { useState } from "react";

const VacancyDetail = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => setIsSaved(!isSaved);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Frontend Developer</h1>
        <p className="text-gray-500 mt-1">Posted: June 5, 2025 • Remote</p>
      </div>

      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="font-semibold text-lg">Description</h2>
          <p>Build and maintain UI components, collaborate with backend developers, and ensure responsive design.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Salary</h2>
          <p>$3,000 – $4,000 / month</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Location</h2>
          <p>Remote (Timezone flexible)</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Benefits</h2>
          <ul className="list-disc pl-5">
            <li>Health insurance</li>
            <li>Work-from-home stipend</li>
            <li>Annual bonuses</li>
            <li>Learning & Development budget</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Contact</h2>
          <p>Email: <a href="mailto:hr@company.com" className="text-blue-600 underline">hr@company.com</a></p>
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
