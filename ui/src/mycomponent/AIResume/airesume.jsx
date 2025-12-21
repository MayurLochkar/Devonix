import React, { useState } from "react";

// --- Upload Component ---
function Upload({ file, setFile, onAnalyzed, onUploadSuccess }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      console.error("Please upload a resume!");
      return;
    }

    // ✅ Check if the uploaded file seems like a resume
    const fileName = file.name.toLowerCase();
    const resumeKeywords = ["resume", "cv", "curriculum", "vitae"];
    const isResumeFile =
      resumeKeywords.some((word) => fileName.includes(word)) &&
      file.type === "application/pdf";

    if (!isResumeFile) {
      alert("❌ Please upload a valid Resume PDF file only (e.g., resume.pdf or cv.pdf).");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("http://localhost:5000/api/ai/resume", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onAnalyzed(data);
      onUploadSuccess();
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111827]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl p-6 text-center transition-all duration-300 hover:border-cyan-400/50 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        📤 Upload Your Resume
      </h2>

      <label className="w-full max-w-md mx-auto flex flex-col items-center px-4 py-10 bg-[#0f172a]/70 text-blue-300 rounded-lg shadow-inner tracking-wide uppercase border-2 border-dashed border-gray-700 cursor-pointer hover:bg-[#1e293b] hover:text-white transition-colors duration-300">
        <svg
          className="w-12 h-12 mb-3"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          {file ? file.name : "Select a Resume (PDF only)"}
        </span>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
          accept=".pdf"
        />
      </label>
      <p className="text-sm text-gray-400 mt-4">
        Supported format: Only PDF Resume
      </p>

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg
                   hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none animate-glow"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Analyzing...
          </div>
        ) : (
          "Analyze Resume"
        )}
      </button>
    </div>
  );
}

// --- Analysis Component ---
function Analysis({ result }) {
  if (!result)
    return (
      <div className="bg-[#111827]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl p-6 text-white text-center animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          🧠 Resume Analysis
        </h2>
        <p className="text-gray-400">
          Please upload your resume first to see the analysis here.
        </p>
      </div>
    );

  return (
    <div className="bg-[#111827]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl p-6 text-white transition-all duration-300 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        🧠 Resume Analysis
      </h2>
      <div className="space-y-4">
        <p className="text-gray-300 text-lg">
          <strong className="text-cyan-300 font-semibold">Summary:</strong>
          <span className="ml-2 text-gray-200">
            {result.summary || "No summary available."}
          </span>
        </p>
        <div>
          <strong className="text-cyan-300 font-semibold text-lg">
            Suggestions:
          </strong>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 pl-2">
            {result.suggestions && result.suggestions.length > 0 ? (
              result.suggestions.map((s, i) => (
                <li
                  key={i}
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  {s}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No suggestions available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- Chat Component ---
function Chat({ analysisContext }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const apiUrl = "http://localhost:5000/api/ai/chat";

    let systemPrompt = "";
    let messageToSend = "";

    if (analysisContext && analysisContext.summary && analysisContext.suggestions) {
      systemPrompt = `
You are an expert AI resume and career assistant.
Respond ONLY in short, crisp bullet points (• or ✅).
Each point should be clear, professional, and under 15 words.
Focus strictly on resume or career improvement.
`;
      const contextString = `Resume Summary: ${analysisContext.summary}. Suggestions: ${analysisContext.suggestions.join(", ")}.`;
      messageToSend = `${systemPrompt}\n\nContext: ${contextString}\n\nUSER QUESTION: "${input}"`;
    } else {
      systemPrompt = `
You are a professional AI assistant for resumes and tech careers.
Always respond in 4–6 short bullet points (• or ✅).
Keep it professional, no long paragraphs.
`;
      messageToSend = `${systemPrompt}\n\nUSER QUESTION: "${input}"`;
    }

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const result = await res.json();
      const aiReply =
        result.reply
          ?.replace(/\n+/g, "\n")
          .split("\n")
          .map((line) => (line.trim() ? `• ${line.trim()}` : ""))
          .join("\n") || "• Sorry, I couldn’t process that.";

      const aiMsg = { sender: "ai", text: aiReply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg = { sender: "ai", text: "• Sorry, I couldn’t connect to the AI server." };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-[#111827]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl p-6 text-white flex flex-col transition-all duration-300 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        💬 Chat with AI
      </h2>

      <div className="bg-[#0f172a]/70 rounded-xl p-4 h-72 overflow-y-auto mb-4 custom-scrollbar whitespace-pre-line">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 p-4">
            {analysisContext
              ? "Your resume is loaded. Ask for feedback or tips!"
              : "Ask me about resume tips, job prep, or DSA topics."}
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-2 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-xl shadow-md whitespace-pre-line ${
                m.sender === "user"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "bg-[#1e293b] text-cyan-200"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <span className="inline-block px-4 py-2 rounded-xl shadow-md bg-[#1e293b] text-cyan-200 animate-pulse">
              ...
            </span>
          </div>
        )}
      </div>

      <div className="flex">
        <input
          className="flex-1 px-4 py-3 rounded-l-lg bg-[#0f172a] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-r-lg text-white font-semibold transition-colors duration-200"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function App() {
  const [analysis, setAnalysis] = useState(null);
  const [activeTab, setActiveTab] = useState("upload");
  const [file, setFile] = useState(null);

  const TabButton = ({ tabName, label }) => {
    const isActive = activeTab === tabName;
    const isDisabled = !analysis && tabName === "analysis";
    return (
      <button
        onClick={() => !isDisabled && setActiveTab(tabName)}
        disabled={isDisabled}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
            : "bg-[#1e293b]/70 text-gray-300 hover:bg-[#334155]"
        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
         data-aos="fade-up"
      id="airesume"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-gray-100"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[150px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[150px] opacity-40 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 py-14 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 mb-6 text-center drop-shadow-lg">
          AI Resume Analyzer
        </h1>

        <div className="flex space-x-4 bg-[#111827]/70 backdrop-blur-md border border-gray-700 rounded-full p-2 shadow-lg">
          <TabButton tabName="upload" label="Upload" />
          <TabButton tabName="analysis" label="Analysis" />
          <TabButton tabName="chat" label="Chat" />
        </div>

        <div className="w-full max-w-3xl mt-8 space-y-8">
          {activeTab === "upload" && (
            <Upload
              file={file}
              setFile={setFile}
              onAnalyzed={setAnalysis}
              onUploadSuccess={() => setActiveTab("analysis")}
            />
          )}
          {activeTab === "analysis" && <Analysis result={analysis} />}
          {activeTab === "chat" && <Chat analysisContext={analysis} />}
        </div>
      </div>

      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 10px rgba(34,211,238,0.3); } 50% { box-shadow: 0 0 20px rgba(34,211,238,0.6); } }
        .animate-glow { animation: glow 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
}
