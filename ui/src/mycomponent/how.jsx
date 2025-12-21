import React from "react";
import { useNavigate } from "react-router-dom";
import { Mic, BarChart2 } from "lucide-react";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: "1",
      title: "Choose Your Role",
      desc: "Select your target position and skill level. Our AI customizes questions specifically for your career goals.",
      icon: "🎯",
      hoverColor: "group-hover:text-cyan-400",
      borderHover: "group-hover:border-cyan-400",
    },
    {
      id: "2",
      title: "Practice Live",
      desc: "Engage in real-time conversations with our AI interviewer. Experience realistic interview scenarios with voice interaction.",
      icon: (
        <Mic className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-400" />
      ),
      hoverColor: "group-hover:text-blue-400",
      borderHover: "group-hover:border-blue-400",
    },
    {
      id: "3",
      title: "Get Feedback",
      desc: "Receive detailed analysis of your performance with personalized recommendations to improve your interview skills.",
      icon: (
        <BarChart2 className="w-8 h-8 transition-colors duration-300 group-hover:text-purple-400" />
      ),
      hoverColor: "group-hover:text-purple-400",
      borderHover: "group-hover:border-purple-400",
    },
  ];

  return (
    // ✅ Added ID here for smooth scroll target
    <div
       data-aos="fade-up" 
      id="how"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-gray-100 py-20 px-6 text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
        How It Works
      </h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Get interview-ready in just 3 simple steps with our AI-powered platform
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`group rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${step.borderHover}`}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-16 h-16 mb-4 rounded-full flex justify-center items-center bg-gray-800 text-2xl font-semibold border-2 border-gray-700 transition-all duration-500 ${step.hoverColor} ${step.borderHover}`}
              >
                {step.icon || step.id}
              </div>
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-cyan-400">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/agent")}
        className="mt-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
      >
        Start Your First Interview
      </button>
    </div>
  );
};

export default HowItWorks;
