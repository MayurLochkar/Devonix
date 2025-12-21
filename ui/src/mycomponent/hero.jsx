import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const Button = ({
    children,
    size = "lg",
    variant = "default",
    className = "",
    onClick,
  }) => {
    const baseStyle =
      "rounded-xl font-semibold transition-all duration-500 ease-in-out flex items-center justify-center shadow-lg relative overflow-hidden";
    const sizes = {
      lg: "px-8 py-3 text-lg",
      md: "px-6 py-2 text-base",
    };
    const variants = {
      default:
        "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:scale-105 hover:shadow-[0_0_20px_#3b82f6]",
      outline:
        "border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-[0_0_20px_#22d3ee]",
    };
    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <section
      data-aos="fade-up"   
      className="relative overflow-hidden bg-[#0f172a] min-h-[100vh] flex flex-col justify-center items-center text-center px-6"
      style={{
        marginTop: 0,
        paddingTop: "4rem",
      }}
    >
      <div className="absolute -top-32 left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-24 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)]"></div>

      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-500/30 hover:scale-105 transition">
          <Sparkles className="h-4 w-4 text-cyan-400 animate-spin-slow" />
          <span>AI Interview Experience Reimagined</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
          Prepare Smarter, Not Harder
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
          Simulate real AI interviews, analyze your resume, and follow a guided roadmap to master your dream career — all in one platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button size="lg" className="group relative w-full sm:w-auto">
            <span className="flex items-center gap-2 relative z-10">
              Start Interview
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-500 opacity-30 group-hover:opacity-100 transition-opacity duration-700"></span>
          </Button>

          <Button size="lg" variant="outline" className="group w-full sm:w-auto">
            <a href="#chatbot" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-cyan-300 group-hover:text-cyan-400 transition" />
              Try AI Career Coach
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const MessageSquare = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);
