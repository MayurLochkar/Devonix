// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDODeUY3E6xTTq_-8BzLdyvLOQsS3LPSRc",
  authDomain: "interview-ai-f80ef.firebaseapp.com",
  projectId: "interview-ai-f80ef",
  storageBucket: "interview-ai-f80ef.appspot.com", // ✅ corrected
  messagingSenderId: "260928037924",
  appId: "1:260928037924:web:61a00b46954be6c805e4b1",
  measurementId: "G-N79HGW2V8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ AUTH (THIS WAS MISSING)
export const auth = getAuth(app);

// Analytics (optional – works only on https / localhost)
export const analytics = getAnalytics(app);

export default app;
