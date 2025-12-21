import React, { useState } from "react";

const RoadmapCard = ({ title, level, description, recommended, url, index }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="p-6 rounded-2xl border-2 border-gray-700 bg-[#111827] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
          {title}
        </h3>
        {recommended && (
          <span className="text-xs font-semibold bg-purple-800/30 text-purple-300 px-3 py-1 rounded-full">
            RECOMMENDED
          </span>
        )}
      </div>

      <span
        className={`text-sm font-medium ${
          level === "Beginner" ? "text-green-400" : "text-yellow-400"
        }`}
      >
        {level}
      </span>

      <p className="mt-3 text-gray-300 text-sm">{description}</p>

      <button
        onClick={handleClick}
        className="mt-5 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 text-white font-medium py-2 rounded-lg hover:scale-105 hover:shadow-lg transition-all"
      >
        Visit Resource 🔗
      </button>
    </div>
  );
};

const DSALearningPath = () => {
  const [activeTab, setActiveTab] = useState("Roadmaps");

  const tabs = ["Roadmaps", "YouTube", "Platforms", "Bonus"];

  const content = {
    Roadmaps: [
      {
        title: "Striver's A2Z DSA Sheet",
        level: "Beginner",
        description:
          "Structured day-wise plan from basics to advanced. Covers Leetcode 150, and must-do GFG topics.",
        recommended: true,
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      },
      {
        title: "Love Babbar's 450 DSA Sheet",
        level: "Intermediate",
        description:
          "Legacy sheet, still very effective. Covers questions from all major platforms.",
        recommended: false,
        url: "https://450dsa.com/",
      },
      {
        title: "Fraz's Leetcode 75 + 150 Sheet",
        level: "Intermediate",
        description:
          "Focuses on Leetcode patterns. Covers blind 75 + system design basics.",
        recommended: true,
        url: "https://takeuforward.com/striver-a2z-dsa-sheet/",
      },
      {
        title: "Code Help By Babbar DSA Sheet",
        level: "Intermediate",
        description: ". Covers blind 75 + system design basics.",
        recommended: true,
        url: "https://www.codehelp.in/",
      },
    ],
    YouTube: [
      {
        title: "Striver",
        level: "Beginner",
        description: "A2Z DSA playlist — clean Hindi explanations.",
        recommended: true,
        url: "https://www.youtube.com/@takeUforward",
      },
      {
        title: "Love Babbar",
        level: "Intermediate",
        description: "450 DSA questions explained in detail.",
        recommended: false,
        url: "https://www.youtube.com/@CodeHelp",
      },
      {
        title: "Code with Harry",
        level: "Intermediate",
        description: "https://www.youtube.com/@CodeWithHarry",
        recommended: false,
        url: "https://www.youtube.com/@TheAdityaVerma",
      },
      {
        title: "Code with Fraz",
        level: "Intermediate",
        description: "https://www.youtube.com/@CodeWithFraz",
        recommended: false,
        url: "https://www.youtube.com/@mohammadfraz",
      },
    ],
    Platforms: [
      {
        title: "LeetCode",
        level: "Beginner",
        description:
          "Platform for structured DSA & interview prep with real company questions.",
        recommended: true,
        url: "https://leetcode.com/",
      },
      {
        title: "GeeksforGeeks",
        level: "Intermediate",
        description: "Practice + notes + interview archives.",
        recommended: false,
        url: "https://www.geeksforgeeks.org/",
      },
      {
        title: "CodeStudio by Coding Ninjas",
        level: "Intermediate",
        description: "Interview problems, guides, and mock tests.",
        recommended: false,
        url: "https://www.codingninjas.com/codestudio",
      },
    ],
    Bonus: [
      {
        title: "AlgoExpert",
        level: "Advanced",
        description: "Premium DSA + System Design interview prep resource.",
        recommended: false,
        url: "https://www.algoexpert.io/",
      },
      {
        title: "Neetcode.io",
        level: "Advanced",
        description: "Curated list of Leetcode problems with topic patterns.",
        recommended: true,
        url: "https://neetcode.io/",
      },
      {
        title: "InterviewBit",
        level: "Intermediate",
        description:
          "Step-by-step interview prep roadmap + coding platform.",
        recommended: false,
        url: "https://www.interviewbit.com/",
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"
      id="resources"
      className="relative overflow-hidden min-h-screen py-12 px-6 text-gray-100"
      style={{
        background: "radial-gradient(circle at top, #0c1a2e 0%, #050b18 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 mb-3">
          🧠 DSA Learning Path
        </h1>

        <p className="text-gray-400 mb-8">
          Choose from Roadmaps, YouTube, Platforms, or Bonus resources — all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 text-white border-transparent shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-cyan-400 hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[activeTab].map((item, index) => (
            <RoadmapCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSALearningPath;
