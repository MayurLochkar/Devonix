import React, { useState } from "react";

const DevelopmentPath = () => {
  const [activeTab, setActiveTab] = useState("Roadmap");

  const tabs = ["Roadmap", "YouTube", "Docs", "Concepts", "Tools", "Projects"];

  const content = {
    Roadmap: [
      {
        title: "Foundation",
        duration: "2 weeks",
        topics: ["HTML", "CSS", "JavaScript", "Git", "Terminal"],
        link: "https://developer.mozilla.org/en-US/docs/Web",
      },
      {
        title: "Frontend",
        duration: "4 weeks",
        topics: ["React.js", "Next.js", "Tailwind CSS", "UI Libraries"],
        link: "https://react.dev/",
      },
      {
        title: "Backend",
        duration: "3 weeks",
        topics: ["Node.js", "Express.js", "REST APIs", "Authentication"],
        link: "https://expressjs.com/",
      },
      {
        title: "Database",
        duration: "3 weeks",
        topics: ["SQL vs NoSQL", "MongoDB & Mongoose", "PostgreSQL & Prisma"],
        link: "https://www.mongodb.com/developers/basics",
      },
      {
        title: "Advanced Backend",
        duration: "4 weeks",
        topics: ["GraphQL", "WebSockets (Socket.io)", "Microservices"],
        link: "https://graphql.org/learn/",
      },
      {
        title: "Project",
        duration: "5 weeks",
        topics: [
          "Full-stack Project Development",
          "System Design",
          "Version Control (Git Workflow)",
        ],
        link: "https://github.com/git-guides",
      },
    ],
    YouTube: [
      {
        title: "CodeWithHarry",
        description: "Full-Stack tutorials in Hindi",
        link: "https://www.youtube.com/@CodeWithHarry",
      },
      {
        title: "Hitesh Choudhary",
        description: "Practical MERN & Dev Roadmaps",
        link: "https://www.youtube.com/@HiteshChoudharydotcom",
      },
      {
        title: "Thapa Technical",
        description: "Full mern stack tutorials",
        link: "https://www.youtube.com/@ThapaTechnical",
      },
      {
        title: "Akshay Saini",
        description: "JS deep dives (closures, hoisting, async)",
        link: "https://www.youtube.com/@akshaymarch7",
      },
    ],
    Docs: [
      {
        title: "MDN Web Docs",
        description: "Detailed documentation for web technologies.",
        link: "https://developer.mozilla.org/",
      },
      {
        title: "React Official Docs",
        description: "Comprehensive React guide and examples.",
        link: "https://react.dev/",
      },
      {
        title: "Node Official Docs",
        description: "Comprehensive Node guide and examples.",
        link: "https://nodejs.org/docs/latest/api/",
      },
      {
        title: "MongoDB Official Docs",
        description: "NoSQL database documentation.",
        link: "https://www.mongodb.com/docs/",
      },
      {
        title: "PostgreSQL Official Docs",
        description: "Advanced SQL database documentation.",
        link: "https://www.postgresql.org/docs/",
      },
    ],
    Concepts: [
      {
        title: "APIs & REST",
        description: "Understand API structure and HTTP methods.",
        link: "https://restfulapi.net/",
      },
      {
        title: "State Management",
        description: "Master React state, hooks, and context.",
        link: "https://react.dev/learn",
      },
    ],
    Tools: [
      {
        title: "VS Code",
        description: "Most popular editor for development.",
        link: "https://code.visualstudio.com/",
      },
      {
        title: "Postman",
        description: "Tool for API testing and debugging.",
        link: "https://www.postman.com/",
      },
      {
        title: "Vercel",
        description: "Frontend deployment platform.",
        link: "https://vercel.com/",
      },
      {
        title: "GitHub",
        description: "Version control and collaboration.",
        link: "https://github.com/",
      },
    ],
    Projects: [
      {
        title: "MERN E-commerce Platform",
        description: "Complete online store with payments and admin panel.",
        link: "https://github.com/",
      },
      {
        title: "Collaborative Task Manager",
        description: "Trello-like app with real-time collaboration.",
        link: "https://github.com/",
      },
      {
        title: "Dynamic Portfolio Generator",
        description: "Generate portfolio from dashboard inputs.",
        link: "https://github.com/",
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"   // ✅ PAGE-LEVEL AOS
      className="min-h-screen py-10 px-6 text-gray-100"
    >
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
          🚀 Development Learning Path
        </h1>

        <p className="text-gray-400 mb-8">
          Full-Stack Development Roadmap (Indian Style - Minimal Platform, Max Knowledge)
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 text-white border-transparent shadow-lg scale-105"
                  : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-cyan-500 hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[activeTab].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"              // ✅ CARD AOS
              data-aos-delay={index * 100}   // ✅ STAGGER
              className={`p-8 border rounded-2xl shadow-lg transition-all duration-300 ${
                activeTab === "Roadmap"
                  ? "bg-[#111827] hover:shadow-2xl hover:-translate-y-3 hover:border-cyan-500 h-72"
                  : "bg-[#111827] hover:shadow-xl hover:-translate-y-2 hover:border-cyan-500"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                {item.title}
              </h2>

              {item.duration && (
                <p className="text-sm text-green-400 mb-4">⏱️ {item.duration}</p>
              )}

              {item.topics ? (
                <div className="flex flex-wrap gap-3 mb-4">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-700/20 text-cyan-300 rounded-md text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mb-4 text-base leading-relaxed">
                  {item.description}
                </p>
              )}

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-cyan-400 font-semibold hover:text-cyan-200 transition-all duration-300"
              >
                🔗 Visit Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPath;
