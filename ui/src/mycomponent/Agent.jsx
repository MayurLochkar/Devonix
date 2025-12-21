import React, { useState, useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { Brain, User, Mic, MicOff, MessageSquare, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js";

// Helper function for conditional classnames
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Vapi Public Key
const VAPI_PUBLIC_KEY = process.env.REACT_APP_VAPI_KEY;

// Initialize Vapi
const vapi = new Vapi(VAPI_PUBLIC_KEY);

const Agent = () => {
  const [status, setStatus] = useState("Not started");
  const [isCalling, setIsCalling] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const transcriptEndRef = useRef(null);
  const navigate = useNavigate();

  // Face detection
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    loadModels();
  }, []);

  // Start camera
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(console.error);
  }, []);

  // ✅ FINAL NERVOUS LOGIC (ONLY CHANGE)
  // ✅ REAL-TIME NERVOUS DETECTION (WORKING)
const prevExpRef = useRef(null);

useEffect(() => {
  const interval = setInterval(async () => {
    if (!videoRef.current) return;

    const detection = await faceapi
      .detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (!detection) return;

    const exp = detection.expressions;

    // First frame
    if (!prevExpRef.current) {
      prevExpRef.current = exp;
      setEmotion("Calm 🙂");
      return;
    }

    // Calculate expression change
    const diff =
      Math.abs(exp.happy - prevExpRef.current.happy) +
      Math.abs(exp.fear - prevExpRef.current.fear) +
      Math.abs(exp.sad - prevExpRef.current.sad) +
      Math.abs(exp.angry - prevExpRef.current.angry);

    prevExpRef.current = exp;

    // 🔥 REALISTIC nervous threshold
    if (diff > 0.25) {
      setEmotion("Nervous 😰");
    } else {
      setEmotion("Calm 🙂");
    }
  }, 1200);

  return () => clearInterval(interval);
}, []);

  // ✅ END CHANGE

  // Start interview
  const startInterview = () => {
    setMessages([]);
    const ASSISTANT_ID = "c7f0fc21-71a5-4648-8119-a589fea45e61";
    setStatus("Connecting...");
    vapi.start(ASSISTANT_ID);
  };

  // Stop interview
  const stopInterview = () => {
    vapi.stop();
  };

  // Vapi listeners
  useEffect(() => {
    const handleCallStart = () => {
      setStatus("Interview in progress...");
      setIsCalling(true);
    };

    const handleCallEnd = () => {
      setStatus("Interview ended ✅");
      setIsCalling(false);
    };

    const handleSpeechStart = () => setIsSpeaking(true);
    const handleSpeechEnd = () => setIsSpeaking(false);

    const handleMessage = (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [
          ...prev,
          { role: message.role, content: message.transcript },
        ]);
      }
    };

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("speech-start", handleSpeechStart);
    vapi.on("speech-end", handleSpeechEnd);
    vapi.on("message", handleMessage);

    return () => vapi.stop();
  }, []);

  return (
    <div className="flex w-full h-screen bg-[#0f172a] text-white font-sans">
      {/* Main */}
      <div className="flex flex-col flex-grow items-center justify-center p-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Interviewer
          </h1>
          <p className="text-cyan-300 mt-2">{status}</p>
        </div>

        {/* Avatars */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
          {/* AI */}
          <div className="flex flex-col items-center gap-4 p-8 bg-slate-800/50 rounded-2xl border border-cyan-500/20 shadow-lg w-72 h-72 justify-center">
            <div
              className={cn(
                "relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600",
                isSpeaking && "shadow-[0_0_25px_#22d3ee]"
              )}
            >
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-cyan-300">AI Interviewer</h2>
          </div>

          {/* YOU */}
          <div className="flex flex-col items-center gap-4 p-8 bg-slate-800/50 rounded-2xl border border-cyan-500/20 shadow-lg w-72 h-72 justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-40 h-40 rounded-2xl border-2 border-cyan-400 object-cover shadow-lg"
            />
            <h2 className="text-2xl font-bold text-cyan-300">You</h2>
            <p
              className={`text-sm font-semibold ${
                emotion.includes("Nervous") ? "text-red-400" : "text-green-400"
              }`}
            >
              {emotion}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex items-center gap-6 flex-wrap justify-center">
          <button onClick={startInterview} disabled={isCalling} className="px-8 py-3 rounded-full bg-cyan-600">
            <Mic className="inline mr-2" />
            Start Interview
          </button>

          <button onClick={stopInterview} disabled={!isCalling} className="px-8 py-3 rounded-full bg-red-600">
            <MicOff className="inline mr-2" />
            End Interview
          </button>

          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-blue-600"
          >
            <Home className="inline mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Transcript */}
      <div className="w-[380px] h-full bg-slate-900/80 border-l-2 border-slate-700 flex flex-col">
        <div className="p-4 border-b-2 border-slate-700">
          <h3 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
            <MessageSquare size={20} />
            Live Transcript
          </h3>
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="text-sm">{msg.content}</div>
          ))}
          <div ref={transcriptEndRef} />
        </div>
      </div>
    </div>
  );
};

export default Agent;
