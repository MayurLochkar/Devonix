import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All your component imports
import Navbar from "./mycomponent/navbar";
import Hero from "./mycomponent/hero";
import How from "./mycomponent/how";
import SplashCursor from "./mycomponent/splashcursor";
import SplitText from "./mycomponent/splittext";
import DSALearningPath from "./mycomponent/dsa";
import DevelopmentPath from "./mycomponent/dev";
import Ml from "./mycomponent/ml";
import Agent from "./mycomponent/Agent";
import AiResume from "./mycomponent/AIResume/airesume";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ProtectedRoute from "./mycomponent/protectedroute";
import Footer from "./mycomponent/footer";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      {/* Global components */}
      <Navbar />
      <SplitText />

      <Routes>
        {/* ===== MAIN HOMEPAGE ===== */}
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]">
              <SplashCursor />
              <Hero />
              <How />
              <AiResume />
              <DSALearningPath />
              <DevelopmentPath />
              <Ml />
            </div>
          }
        />

        {/* ===== AUTH PAGES ===== */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ===== PROTECTED PAGE ===== */}
        <Route
          path="/agent"
          element={
            <ProtectedRoute>
              <Agent userName="Mayur" profileImage="/user.png" />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ===== GLOBAL FOOTER ===== */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
