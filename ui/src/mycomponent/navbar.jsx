"use client";

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X,Home, Sparkles, Brain, BookOpen, LogOut } from "lucide-react";
import { AuthContext } from "../context/authcontext"; // AuthContext ko import karein

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({ children, onClick, variant = "default", size = "sm", className = "" }) => {
    const baseStyle = "rounded-lg font-semibold transition-all duration-300 overflow-hidden relative z-10";
    const variants = {
        default: "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:scale-105 hover:shadow-[0_0_15px_#3b82f6]",
        ghost: "text-cyan-300 hover:text-white hover:bg-cyan-500/10",
        outline: "border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_10px_#22d3ee]",
    };
    const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base" };
    return (
        <button onClick={onClick} className={cn(baseStyle, variants[variant], sizes[size], className)}>
            {children}
        </button>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // AuthContext se user ki information lein
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setCurrentUser(null);
    };

    // ✅ Updated navLinks with hash IDs for smooth scroll
    const navLinks = [
         { href: "#hero", label: "Home", icon: Home },
        { href: "#how", label: "AI Interview", icon: Sparkles },
        { href: "#resources", label: "Resources", icon: BookOpen },
        { href: "#airesume", label: "AI Resume Analyzer", icon: Brain },
    ];

    // ✅ Smooth scroll function
    const handleSmoothScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md",
                    isScrolled ? "bg-[#0f172a]/95" : "bg-[#0f172a]/95"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link to="/" className="group flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 hover:scale-110 transition-transform shadow-[0_0_15px_#3b82f6]">
                                <Brain className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                InterviewAI
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)} // ✅ Smooth scroll handler
                                        className="group relative text-sm font-medium text-cyan-300 hover:text-white transition"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Icon className="h-4 w-4 text-cyan-400 group-hover:text-white transition-transform group-hover:scale-125" />
                                            {link.label}
                                        </span>
                                        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                                    </a>
                                );
                            })}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            {currentUser ? (
                                <>
                                    <span className="text-white font-medium">
                                        Welcome, {currentUser.name} 👋
                                    </span>
                                    <Button onClick={handleLogout} variant="outline" size="sm" className="flex items-center gap-2">
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <Link to="/signin">
                                    <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_#2563eb]">
                                        Sign In
                                    </button>
                                </Link>
                            )}
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-cyan-300 hover:text-white transition"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
