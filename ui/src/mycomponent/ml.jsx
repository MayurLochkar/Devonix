import React, { useState } from "react";

const DevelopmentPath = () => {
  const [activeTab, setActiveTab] = useState("Roadmap");

  const tabs = ["Roadmap", "YouTube", "Libraries", "Projects", "Tools"];

  const content = {
    Roadmap: [
      {
        title: "Python Foundation",
        duration: "2–3 weeks",
        topics: ["Syntax", "Loops", "OOP", "NumPy", "Pandas"],
        link: "https://docs.python.org/3/tutorial/",
      },
      {
        title: "Data Science",
        duration: "2–3 weeks",
        topics: ["EDA", "Data Cleaning", "Visualization", "Statistics"],
        link: "https://www.kaggle.com/learn/data-cleaning",
      },
      {
        title: "ML Core",
        duration: "3–4 weeks",
        topics: ["Supervised", "Unsupervised", "Metrics", "Model Tuning"],
        link: "https://scikit-learn.org/stable/",
      },
      {
        title: "ML Project",
        duration: "3–4 weeks",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Evaluation Metrics",
          "Model Tuning",
        ],
        link: "https://scikit-learn.org/stable/",
      },
      {
        title: "Deep Learning",
        duration: "3–4 weeks",
        topics: [
          "Neural Networks",
          "CNN",
          "Neural Networks",
          "TensorFlow",
          "PyTorch",
        ],
        link: "https://www.tensorflow.org/",
      },
      {
        title: "Backend API",
        duration: "3–4 weeks",
        topics: [
          "RESTful APIs",
          "Node.js / Express.js",
          "Database Integration",
          "Middleware",
        ],
        link: "https://expressjs.com/",
      },
    ],
    YouTube: [
      {
        title: "Krish Naik",
        description: "Practical ML tutorials with real datasets.",
        link: "https://www.youtube.com/@krishnaik06",
      },
      {
        title: "CampusX",
        description: "Machine Learning and Data Science from scratch.",
        link: "https://www.youtube.com/@campusx-official",
      },
      {
        title: "PW Skills",
        description: "End-to-end Data Science in Hindi series.",
        link: "https://www.youtube.com/@PWSkillsTech",
      },
      {
        title: "Code Basics",
        description: "ML projects + Pandas + Excel for ML.",
        link: "https://www.youtube.com/@codebasics",
      },
    ],
    Libraries: [
      {
        title: "NumPy",
        description: "Powerful array operations for ML and scientific computing.",
        link: "https://numpy.org/doc/",
      },
      {
        title: "Pandas",
        description: "Data manipulation and analysis made simple.",
        link: "https://pandas.pydata.org/docs/",
      },
      {
        title: "Statistics",
        description: "State model , scipy.",
        link: "https://www.statsmodels.org/stable/",
      },
      {
        title: "Visualization",
        description: "Streamlit , ploty .",
        link: "https://plotly.com/python/",
      },
    ],
    Projects: [
      {
        title: "ML Model Deployment",
        description: "Deploy ML model using Flask and Render.",
        link: "https://render.com/",
      },
      {
        title: "Data Dashboard",
        description: "Visualize your model insights with Plotly and Dash.",
        link: "https://dash.plotly.com/",
      },
    ],
    Tools: [
      {
        title: "VS Code",
        description: "Best IDE for Python + ML development.",
        link: "https://code.visualstudio.com/",
      },
      {
        title: "Anaconda",
        description: "Simplify Python package management.",
        link: "https://www.anaconda.com/",
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"
      className="relative overflow-hidden min-h-screen py-10 px-6 text-gray-100"
      style={{
        background: "radial-gradient(circle at top, #0c1a2e 0%, #050b18 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
          🤖 ML + Python Backend Path
        </h1>

        <p className="text-gray-400 mb-8">
          Machine Learning + Data Science + Python (Flask & Django)
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[activeTab].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="p-6 border rounded-2xl shadow-lg bg-[#111827] hover:bg-[#1a2235] hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300 group"
            >
              <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                {item.title}
              </h2>

              {item.duration && (
                <p className="text-sm text-green-400 mb-3">
                  ⏱️ {item.duration}
                </p>
              )}

              {item.topics ? (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-700/20 text-cyan-300 rounded-md text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mb-3">{item.description}</p>
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
