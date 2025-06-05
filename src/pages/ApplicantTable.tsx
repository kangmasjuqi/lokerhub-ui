import { useState } from "react";

const generateApplicants = () =>
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Applicant ${i + 1}`,
    age: 25 + (i % 5),
    email: `applicant${i + 1}@mail.com`,
    minSalary: 2500 + (i % 5) * 250,
    score: Math.floor(Math.random() * 100),
  }));

const ApplicantTable = () => {
  const [applicants, setApplicants] = useState(generateApplicants);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<"score" | "minSalary" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const limit = 10;
  const totalPages = Math.ceil(applicants.length / limit);

  const sortData = () => {
    if (!sortBy) return applicants;

    return [...applicants].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      return sortOrder === "asc" ? valA - valB : valB - valA;
    });
  };

  const handleSort = (field: "score" | "minSalary") => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sorted = sortData();
  const paginated = sorted.slice((page - 1) * limit, page * limit);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Applicant List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="px-4 py-3 text-left border">#</th>
              <th className="px-4 py-3 text-left border">Name</th>
              <th className="px-4 py-3 text-left border">Age</th>
              <th className="px-4 py-3 text-left border">Email</th>
              <th
                className="px-4 py-3 text-left border cursor-pointer hover:underline"
                onClick={() => handleSort("minSalary")}
              >
                Min Salary
                {sortBy === "minSalary" && (sortOrder === "asc" ? " ↑" : " ↓")}
              </th>
              <th
                className="px-4 py-3 text-left border cursor-pointer hover:underline"
                onClick={() => handleSort("score")}
              >
                Score
                {sortBy === "score" && (sortOrder === "asc" ? " ↑" : " ↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((a) => (
              <tr
                key={a.id}
                className="hover:bg-blue-50 transition-colors even:bg-gray-50"
              >
                <td className="px-4 py-2 border">{a.id}</td>
                <td className="px-4 py-2 border">{a.name}</td>
                <td className="px-4 py-2 border">{a.age}</td>
                <td className="px-4 py-2 border">{a.email}</td>
                <td className="px-4 py-2 border">${a.minSalary}</td>
                <td className="px-4 py-2 border">{a.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              page === i + 1
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApplicantTable;
