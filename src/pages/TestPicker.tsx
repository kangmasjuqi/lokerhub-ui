import { useState } from "react";

const tests = [
  { name: "MBTI", description: "Understand your personality traits." },
  { name: "DISC", description: "Explore behavioral styles for teamwork." },
  { name: "Math", description: "Test your numerical reasoning skills." },
  { name: "Logic", description: "Evaluate your problem-solving ability." },
];

const TestPicker = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const handlePick = (testName: string) => {
    setSelectedTest(testName);
    console.log("Test selected:", testName);
    // Add navigation or modal here if needed
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pick an Online Test
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <div
            key={test.name}
            onClick={() => handlePick(test.name)}
            className={`border rounded-xl p-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl ${
              selectedTest === test.name
                ? "bg-blue-50 border-blue-400"
                : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {test.name}
            </h2>
            <p className="text-gray-600 mb-4">{test.description}</p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Take {test.name} Test
            </button>
          </div>
        ))}
      </div>

      {selectedTest && (
        <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
          ✅ <strong>{selectedTest}</strong> selected! You can now proceed to take the test.
        </div>
      )}
    </div>
  );
};

export default TestPicker;
