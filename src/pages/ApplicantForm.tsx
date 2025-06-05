import { useState } from "react";

const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    age: "",
    gender: "",
    email: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting data:", formData);
    // Optionally send to API here
  };

  const handleReset = () => {
    setFormData({
      fullname: "",
      address: "",
      age: "",
      gender: "",
      email: "",
      resume: null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10"
    >
      <h1 className="text-2xl font-bold text-gray-800">Applicant Profile</h1>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Full Name</label>
        <input
          name="fullname"
          required
          value={formData.fullname}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="e.g. John Doe"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Address</label>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="Your full address"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Age</label>
        <input
          name="age"
          type="number"
          required
          min={18}
          max={70}
          value={formData.age}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="e.g. 25"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Gender</label>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="m"
              checked={formData.gender === "m"}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="f"
              checked={formData.gender === "f"}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="example@domain.com"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Upload Resume (PDF)</label>
        <input
          name="resume"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
      </div>

      <div className="flex gap-4 justify-end mt-6">
        <button
          type="reset"
          className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplicantForm;
