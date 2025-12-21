// import React, { useState } from "react";

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     const userMsg = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setLoading(true);

//     const res = await fetch("http://localhost:5000/api/ai/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });
//     const data = await res.json();

//     const aiMsg = { sender: "ai", text: data.reply };
//     setMessages((prev) => [...prev, aiMsg]);
//     setLoading(false);
//   };

//   return (
//     <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 text-white flex flex-col">
//       <h2 className="text-2xl font-semibold mb-4 text-cyan-400">💬 Chat with AI</h2>
//       <div className="bg-gray-800 rounded-xl p-4 h-64 overflow-y-auto mb-4">
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`my-2 ${m.sender === "user" ? "text-right" : "text-left"}`}
//           >
//             <span
//               className={`inline-block px-3 py-2 rounded-lg ${
//                 m.sender === "user"
//                   ? "bg-cyan-600 text-white"
//                   : "bg-gray-700 text-cyan-300"
//               }`}
//             >
//               {m.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={loading}
//           className="px-6 bg-cyan-600 hover:bg-cyan-700 rounded-r-lg transition"
//         >
//           {loading ? "..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// }



// // import React, { useState, useEffect, useRef } from "react";
// // import Vapi from "@vapi-ai/web";
// // import { Brain, User, Mic, MicOff, MessageSquare } from "lucide-react";

// // // Helper function for conditional classnames
// // const cn = (...classes) => classes.filter(Boolean).join(" ");

// // // Vapi Public Key (from .env file)
// // const VAPI_PUBLIC_KEY = process.env.REACT_APP_VAPI_KEY;

// // // Initialize Vapi
// // const vapi = new Vapi(VAPI_PUBLIC_KEY);

// // const Agent = () => {
// //   const [status, setStatus] = useState("Not started");
// //   const [isCalling, setIsCalling] = useState(false);
// //   const [isSpeaking, setIsSpeaking] = useState(false);
  
// //   // 1. New State for Messages
// //   const [messages, setMessages] = useState([]);
// //   const transcriptEndRef = useRef(null);

// //   // Auto-scroll to the latest message
// //   useEffect(() => {
// //     transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   // Function to start the interview call
// //   const startInterview = () => {
// //     // Clear previous transcript when starting a new interview
// //     setMessages([]); 
// //     const ASSISTANT_ID = "c7f0fc21-71a5-4648-8119-a589fea45e61";
// //     if (!ASSISTANT_ID) {
// //       alert("Please add your Assistant ID to the code.");
// //       return;
// //     }
// //     setStatus("Connecting...");
// //     vapi.start(ASSISTANT_ID);
// //   };

// //   // Function to stop the interview call
// //   const stopInterview = () => {
// //     vapi.stop();
// //   };
  
// //   // Vapi event listeners
// //   useEffect(() => {
// //     const handleCallStart = () => {
// //       setStatus("Interview in progress...");
// //       setIsCalling(true);
// //     };

// //     const handleCallEnd = () => {
// //       setStatus("Interview ended ✅");
// //       setIsCalling(false);
// //     };
    
// //     const handleSpeechStart = () => setIsSpeaking(true);
// //     const handleSpeechEnd = () => setIsSpeaking(false);
    
// //     // 2. Handle Transcript Messages
// //     const handleMessage = (message) => {
// //       if (message.type === 'transcript' && message.transcriptType === 'final') {
// //         const newMessage = {
// //           role: message.role,
// //           content: message.transcript,
// //         };
// //         setMessages((prevMessages) => [...prevMessages, newMessage]);
// //       }
// //     };

// //     const handleError = (error) => {
// //       console.error(error);
// //       setStatus("An error occurred ❌");
// //       setIsCalling(false);
// //     };

// //     vapi.on("call-start", handleCallStart);
// //     vapi.on("call-end", handleCallEnd);
// //     vapi.on("speech-start", handleSpeechStart);
// //     vapi.on("speech-end", handleSpeechEnd);
// //     vapi.on("message", handleMessage); // Listen for new messages
// //     vapi.on("error", handleError);

// //     return () => {
// //       vapi.off("call-start", handleCallStart);
// //       vapi.off("call-end", handleCallEnd);
// //       vapi.off("speech-start", handleSpeechStart);
// //       vapi.off("speech-end", handleSpeechEnd);
// //       vapi.off("message", handleMessage); // Clean up message listener
// //       vapi.off("error", handleError);
// //     };
// //   }, []);

// //   // 3. New UI Layout with Sidebar
// //   return (
// //     <div className="flex w-full h-screen bg-[#0f172a] text-white font-sans">
      
// //       {/* Main Content */}
// //       <div className="flex flex-col flex-grow items-center justify-center p-4">
// //         {/* Title */}
// //         <div className="mb-12 text-center">
// //           <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
// //             AI Interviewer
// //           </h1>
// //           <p className="text-cyan-300 mt-2">{status}</p>
// //         </div>

// //         {/* Avatar Containers */}
// //         <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
// //           <div className="flex flex-col items-center gap-4 p-8 bg-slate-800/50 rounded-2xl border border-cyan-500/20 shadow-lg w-64 h-64 justify-center">
// //             <div className={cn(
// //               "relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 transition-all duration-300",
// //               isSpeaking ? "shadow-[0_0_25px_#22d3ee]" : "shadow-[0_0_15px_#3b82f6]"
// //             )}>
// //               <Brain className="h-12 w-12 text-white" />
// //               {isSpeaking && <span className="absolute h-full w-full rounded-full bg-cyan-400/50 animate-ping"></span>}
// //             </div>
// //             <h2 className="text-2xl font-bold text-cyan-300">AI Interviewer</h2>
// //           </div>
// //           <div className="flex flex-col items-center gap-4 p-8 bg-slate-800/50 rounded-2xl border border-cyan-500/20 shadow-lg w-64 h-64 justify-center">
// //             <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-700">
// //               <User className="h-12 w-12 text-cyan-400" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-cyan-300">You</h2>
// //           </div>
// //         </div>
        
// //         {/* Action Buttons */}
// //         <div className="mt-16 flex items-center gap-6">
// //           <button onClick={startInterview} disabled={isCalling} className="..."><Mic/>Start</button>
// //           <button onClick={stopInterview} disabled={!isCalling} className="..."><MicOff/>End</button>
// //         </div>
// //       </div>
      
// //       {/* Transcript Sidebar */}
// //       <div className="w-[380px] h-full bg-slate-900/80 border-l-2 border-slate-700 flex flex-col">
// //         <div className="p-4 border-b-2 border-slate-700">
// //           <h3 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
// //             <MessageSquare size={20} />
// //             Live Transcript
// //           </h3>
// //         </div>
// //         <div className="flex-grow p-4 overflow-y-auto space-y-4">
// //           {messages.length === 0 ? (
// //             <div className="flex items-center justify-center h-full text-slate-500">
// //               Start the interview to see the transcript...
// //             </div>
// //           ) : (
// //             messages.map((msg, index) => (
// //               <div key={index} className={cn(
// //                 "flex flex-col w-fit max-w-xs p-3 rounded-lg",
// //                 msg.role === 'assistant' ? "bg-slate-800 self-start" : "bg-blue-800 self-end"
// //               )}>
// //                 <span className={cn(
// //                   "text-xs font-bold mb-1",
// //                   msg.role === 'assistant' ? "text-cyan-400" : "text-green-400"
// //                 )}>
// //                   {msg.role === 'assistant' ? 'AI Interviewer' : 'You'}
// //                 </span>
// //                 <p className="text-sm text-white">{msg.content}</p>
// //               </div>
// //             ))
// //           )}
// //           <div ref={transcriptEndRef} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Agent;