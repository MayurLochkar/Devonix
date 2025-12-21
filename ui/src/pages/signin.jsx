import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ✅ firebase import
import mayurImage from "./mayur.jpg";

export default function App() {
  return <SignIn />;
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ home page
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${mayurImage})` }}
    >
      <div className="w-full min-h-screen flex items-center justify-center bg-black bg-opacity-60 p-4">
        <div className="w-full max-w-4xl flex bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Left */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
              Sign In
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
              >
                Sign In
              </button>

              {error && (
                <p className="text-red-400 mt-4 text-center">{error}</p>
              )}
            </form>

            <p className="text-gray-300 mt-8 text-center">
              New to our site?{" "}
              <Link to="/signup" className="text-white font-bold hover:underline">
                Sign up now.
              </Link>
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={mayurImage}
              alt="AI generated visual"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
