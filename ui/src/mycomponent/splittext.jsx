"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function SplitText() {
  useEffect(() => {
    const text = document.querySelector(".split-text");
    if (!text) return;

    const chars = text.textContent.split("");
    text.innerHTML = chars.map((ch) => `<span>${ch}</span>`).join("");

    gsap.fromTo(
      ".split-text span",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.045,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center mt-14 h-[15vh] bg-[#0f172a]">
      <h1 className="split-text text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:drop-shadow-[0_0_35px_rgba(56,189,248,1)] transition-all duration-500">
        Welcome to AI Interviewer
      </h1>
    </div>
  );
}
