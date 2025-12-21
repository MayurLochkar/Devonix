import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-gray-300 border-t border-slate-800/50 backdrop-blur-md">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl opacity-30" />

      <div className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Left Section */}
        <div className="flex items-center space-x-2 text-cyan-400">
          <Sparkles size={18} className="animate-pulse text-cyan-400" />
          <span className="text-sm md:text-base">
            © {new Date().getFullYear()} Interview AI. All rights reserved.
          </span>
        </div>

        {/* Right Section */}
        <div className="text-sm md:text-base text-slate-400 hover:text-cyan-300 transition-all duration-300">
          Made with 💙 by{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-400 hover:to-cyan-400 transition-all duration-500">
            Mayur Lochkar
          </span>
        </div>
      </div>

      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse"></div>
    </footer>
  );
}
