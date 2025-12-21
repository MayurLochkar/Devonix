// import React, { useRef, useEffect } from "react";

// const FluidBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const particleCount = 150; // more small balls
//     let mouse = { x: canvas.width / 2, y: canvas.height / 2, radius: 100 };

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = 2 + Math.random() * 3;
//         this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.5;
//       }

//       update() {
//         // Move particle
//         this.x += this.speedX;
//         this.y += this.speedY;

//         // Bounce on edges
//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

//         // Mouse repulsion
//         const dx = this.x - mouse.x;
//         const dy = this.y - mouse.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < mouse.radius) {
//           const angle = Math.atan2(dy, dx);
//           const force = (mouse.radius - dist) * 0.05;
//           this.x += Math.cos(angle) * force;
//           this.y += Math.sin(angle) * force;
//         }
//       }

//       draw() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Create particles
//     for (let i = 0; i < particleCount; i++) particles.push(new Particle());

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         p.update();
//         p.draw();
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();

//     // Mouse move
//     const handleMouse = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };
//     window.addEventListener("mousemove", handleMouse);

//     // Resize
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouse);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
// };

// export default FluidBackground;
