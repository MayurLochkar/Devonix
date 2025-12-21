// // --- 1. Expanded, Multi-Layered Analysis Data (5 Total) ---
// const analysesData = [
//   { // #1: Strong Mid-Level Developer
//     overallScore: 88,
//     strengths: [
//       { point: "Excellent Project Experience", detail: "Your projects effectively use modern tech like React and Node.js, which is highly valued in the industry." },
//       { point: "Quantifiable Achievements", detail: "Including metrics like 'improved performance by 15%' makes your impact clear and impressive to recruiters." },
//     ],
//     weaknesses: [
//       { point: "Skills Section Organization", detail: "Your skills are strong, but grouping them into categories like 'Languages', 'Frameworks', and 'Tools' would improve readability." },
//       { point: "Verbose Experience Descriptions", detail: "Some bullet points are a bit long. Try making them more concise and focused on the result of your action." },
//     ],
//     suggestions: [
//       { point: "Categorize Skills", detail: "Group your listed skills to help recruiters quickly identify your expertise in different areas." },
//       { point: "Use the STAR Method", detail: "For your experience points, structure them using the STAR (Situation, Task, Action, Result) method to make them more impactful." },
//     ],
//   },
//   { // #2: Junior Developer / Recent Graduate
//     overallScore: 79,
//     strengths: [
//       { point: "Solid Educational Background", detail: "Your degree and institution are well-regarded and provide a strong theoretical foundation." },
//       { point: "Good Range of Technical Skills", detail: "Listing a variety of skills shows a strong desire to learn and a broad base of knowledge." },
//     ],
//     weaknesses: [
//       { point: "Lack of a Detailed Projects Section", detail: "For developers with less experience, a detailed projects section is critical to showcase skills. It's a major missed opportunity here." },
//       { point: "Generic Objective Statement", detail: "The objective is not tailored. A professional summary focused on your skills and goals would be much more effective." },
//     ],
//     suggestions: [
//       { point: "Create a Dedicated Projects Section", detail: "Add a new section for your 2-3 best personal or academic projects. Describe the tech stack and the problem you solved for each." },
//       { point: "Write a Professional Summary", detail: "Replace the objective with a 2-3 sentence summary that highlights your key skills and what you're looking for in your next role." },
//     ],
//   },
//   { // #3: Senior Developer with Outdated Format
//     overallScore: 85,
//     strengths: [
//       { point: "Extensive and Relevant Experience", detail: "Your years of experience are your biggest asset and are clearly laid out." },
//       { point: "Clear Career Progression", detail: "The resume shows a logical and impressive growth from junior to senior roles." },
//     ],
//     weaknesses: [
//       { point: "Outdated Formatting", detail: "The resume's layout feels a bit dated. A more modern, clean format would improve its visual appeal." },
//       { point: "Overly Long and Dense", detail: "For a senior role, the resume is a bit long. Focusing on the last 10 years of experience is often sufficient." },
//     ],
//     suggestions: [
//       { point: "Modernize Your Template", detail: "Consider using a clean, modern template. Many free options are available on sites like Canva or Overleaf." },
//       { point: "Be Concise", detail: "Summarize or remove earlier, less relevant roles to keep the resume focused and preferably under two pages." },
//     ],
//   },
//   { // #4: Well-Rounded Candidate
//     overallScore: 94,
//     strengths: [
//       { point: "Excellent Balance of Skills", detail: "You've shown a great mix of technical expertise and crucial soft skills like 'Leadership' and 'Communication'." },
//       { point: "Strong, Impactful Summary", detail: "The professional summary at the top is powerful and immediately grabs the reader's attention." },
//     ],
//     weaknesses: [
//       { point: "Missing Links", detail: "There are no links to a personal portfolio, GitHub, or LinkedIn profile, which are standard for tech roles." },
//       { point: "Generic Skill Descriptions", detail: "Simply listing skills is good, but adding context (e.g., 'JavaScript (ES6+)') can be more powerful." },
//     ],
//     suggestions: [
//       { point: "Include Professional Links", detail: "Add a section at the top for your LinkedIn, GitHub, and personal portfolio links. Make sure they are clickable." },
//       { point: "Add Context to Skills", detail: "Briefly add your experience level or specific versions for key technologies in your skills section." },
//     ],
//   },
//   { // #5: Career Changer
//     overallScore: 75,
//     strengths: [
//       { point: "Highlights Transferable Skills", detail: "You've done a good job of showing how skills from your previous career are relevant to tech." },
//       { point: "Strong Project-Based Evidence", detail: "The detailed projects section is crucial for a career changer, and yours is well-written." },
//     ],
//     weaknesses: [
//       { point: "Unclear Narrative", detail: "The professional summary doesn't immediately explain the career transition, which might confuse recruiters." },
//       { point: "Lacks Tech-Specific Keywords", detail: "The resume could be optimized with more keywords relevant to the specific tech roles you're targeting." },
//     ],
//     suggestions: [
//       { point: "Address the Career Change Directly", detail: "Use your professional summary to briefly and positively frame your transition into tech." },
//       { point: "Optimize for Applicant Tracking Systems (ATS)", detail: "Research job descriptions for your target role and incorporate relevant keywords and technologies throughout your resume." },
//     ],
//   }
// ];

// // --- 2. Greatly Expanded Keyword Vocabulary ---
// const keywords = {
//     strength: ['strength', 'strong', 'good', 'positive', 'highlight', 'well', 'best part', 'what did i do right', 'plus points', 'asset', 'advantage', 'strongest', 'impressive', 'stand out', 'kudos', 'great', 'excellent', 'what works'],
//     weakness: ['weakness', 'improve', 'negative', 'drawback', 'fix', 'better', 'area of improvement', 'lacking', 'what\'s wrong', 'mistake', 'error', 'shortcoming', 'flaw', 'what to change', 'concern', 'issue', 'missing'],
//     suggestion: ['suggestion', 'tip', 'advice', 'recommend', 'what can i do', 'what should i do', 'action', 'next step', 'how to', 'guidance', 'help', 'coach me', 'give me ideas', 'plan', 'feedback', 'example'],
//     more: ['more', 'else', 'another', 'continue', 'go on', 'next', 'elaborate', 'detail', 'in detail', 'expand on that', 'and what else', 'further'],
//     greeting: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening', 'how are you', 'start', 'begin', 'yo', 'wassup'],
//     affirmation: ['yes', 'ok', 'okay', 'sure', 'yep', 'yeah', 'right', 'correct', 'thanks', 'thank you', 'got it', 'alright'],
//     negation: ['no', 'nope', 'nah', 'not really', 'don\'t'],
// };

// // --- 3. Core Logic & Resume Validation ---
// const simpleHash = (str) => {
//     let hash = 0;
//     if (str.length === 0) return hash;
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charCodeAt(i);
//         hash = ((hash << 5) - hash) + char;
//         hash = hash & hash;
//     }
//     return Math.abs(hash);
// };

// export const analyzeResume = (resumeText) => {
//     const hash = simpleHash(resumeText);
//     return analysesData[hash % analysesData.length];
// };

// export const validateResume = (text) => {
//   const resumeKeywords = ['experience', 'education', 'skills', 'projects', 'objective', 'summary', 'awards', 'contact', 'profile', 'work history', 'employment', 'qualifications'];
//   const textLower = text.toLowerCase();
//   let foundKeywords = 0;
//   for (const keyword of resumeKeywords) {
//     if (textLower.includes(keyword)) {
//       foundKeywords++;
//     }
//   }
//   return foundKeywords >= 3;
// };

// // --- 4. The Powerful, Upgraded Bot Logic ---
// export const getCoachResponse = (userInput, analysisContext, conversationState) => {
//     if (!analysisContext) return { reply: "Analysis data is not available.", newState: {} };

//     const input = userInput.toLowerCase();
//     const contains = (list) => list.some(k => input.includes(k));

//     // Handle Yes/No responses first
//     if (contains(keywords.affirmation)) {
//         return { reply: "Great! Is there anything else I can help you with today?", newState: { lastTopic: null } };
//     }
//     if (contains(keywords.negation)) {
//         return { reply: "Okay, no problem. Let me know if you change your mind!", newState: { lastTopic: null } };
//     }

//     // Handle "improve strength"
//     if (contains(['how', 'improve']) && contains(keywords.strength)) {
//         return {
//             reply: "That's a great mindset! To build on an existing strength, you can:\n• Mentor someone else in that skill.\n• Take on a project that pushes that skill to its limits.\n• Write a technical blog about it to solidify your expertise.",
//             newState: { lastTopic: 'strength' }
//         };
//     }

//     // Handle "tell me more"
//     if (contains(keywords.more) && conversationState.lastTopic) {
//         const lastTopicData = analysisContext[conversationState.lastTopic];
//         if (Array.isArray(lastTopicData) && lastTopicData.length > 0) {
//             const detailText = lastTopicData.map(item => `• ${item.point}: ${item.detail}`).join('\n\n');
//             return {
//                 reply: `Of course. Here are the detailed points for ${conversationState.lastTopic}:\n\n${detailText}`,
//                 newState: { lastTopic: conversationState.lastTopic }
//             };
//         }
//     }

//     // Handle main topics
//     let mainTopic = null;
//     if (contains(keywords.strength)) mainTopic = 'strengths';
//     else if (contains(keywords.weakness)) mainTopic = 'weaknesses';
//     else if (contains(keywords.suggestion)) mainTopic = 'suggestions';
//     else if (contains(keywords.greeting)) mainTopic = 'greeting';

//     if (mainTopic) {
//         let reply = "";
//         switch (mainTopic) {
//             case 'strengths':
//                 reply = "Your key strengths are:\n" + analysisContext.strengths.map(s => `• ${s.point}`).join('\n') + "\n\nYou can ask 'tell me more about strengths' for details.";
//                 break;
//             case 'weaknesses':
//                 reply = "The main areas for improvement are:\n" + analysisContext.weaknesses.map(w => `• ${w.point}`).join('\n') + "\n\nYou can ask 'tell me more about weaknesses' for details.";
//                 break;
//             case 'suggestions':
//                 reply = "Here are some actionable suggestions:\n" + analysisContext.suggestions.map(s => `• ${s.point}`).join('\n') + "\n\nYou can ask 'tell me more about suggestions' for details.";
//                 break;
//             case 'greeting':
//                 reply = "Hello! I'm Axel, your AI Career Coach. How can I help with your resume analysis?";
//                 break;
//         }
//         return { reply, newState: { lastTopic: mainTopic } };
//     }
    
//     // Fallback response
//     return {
//         reply: "I can help with strengths, weaknesses, or suggestions. You can also ask me to 'tell me more' about a topic. What would you like to know?",
//         newState: { lastTopic: null },
//     };
// };