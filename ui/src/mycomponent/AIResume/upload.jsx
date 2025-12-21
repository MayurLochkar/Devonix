// import React, { useState } from "react";

// export default function Upload({ onAnalyzed }) {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!file) return alert("Please upload a resume!");
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("resume", file);

//     const res = await fetch("http://localhost:5000/api/ai/resume", {
//       method: "POST",
//       body: formData,
//     });
//     const data = await res.json();
//     setLoading(false);
//     onAnalyzed(data);
//   };

//   return (
//     <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 text-white text-center">
//       <h2 className="text-2xl font-semibold mb-4 text-cyan-400">📤 Upload Your Resume</h2>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
//                    file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
//       />
//       <button
//         onClick={handleUpload}
//         disabled={loading}
//         className="mt-5 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white transition"
//       >
//         {loading ? "Analyzing..." : "Analyze Resume"}
//       </button>
//     </div>
//   );
// }
