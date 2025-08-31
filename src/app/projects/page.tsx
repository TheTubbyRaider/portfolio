

"use client";
import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}




export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300 py-16 px-4 flex flex-col items-center font-sans">
      <a
        href="/"
        className="mb-8 px-5 py-2 bg-blue-800 text-white rounded-full shadow hover:bg-blue-600 transition hover:scale-105 self-start"
      >
        ← Back to Home
      </a>
      <h1 className="text-4xl font-extrabold text-blue-900 mb-10 drop-shadow text-center animate-fade-in">Featured Projects</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        {/* Smart Inventory Management System */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl border border-blue-100">
          <a
            href="https://github.com/coding-noble/Smart-Inventory-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-blue-800 hover:underline mb-2"
          >
            Smart Inventory Management System
          </a>
          <p className="text-gray-700 mb-4 text-base">
            Collaborative project for smart inventory management. Led all frontend development, UI/UX design, CSS, and supported backend and HTML integration. Delivered a seamless, modern user experience.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Frontend</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Design</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Collaboration</span>
          </div>
        </div>
        {/* wdd230 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl border border-blue-100">
          <a
            href="https://github.com/TheTubbyRaider/wdd230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-blue-800 hover:underline mb-2"
          >
            wdd230
          </a>
          <p className="text-gray-700 mb-4 text-base">
            Web development coursework featuring HTML, CSS, and JavaScript. Includes responsive layouts, form handling, and interactive components. Highlights clean design and user-friendly features.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Frontend</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">UI/UX</span>
          </div>
        </div>
        {/* WDD-330homework */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl border border-blue-100">
          <a
            href="https://github.com/TheTubbyRaider/WDD-330homework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-blue-800 hover:underline mb-2"
          >
            WDD-330homework
          </a>
          <p className="text-gray-700 mb-4 text-base">
            Advanced JavaScript coursework with dynamic content, modular code, and API integration. Demonstrates interactivity and thoughtful UX decisions.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Frontend</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">JavaScript</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">UI/UX</span>
          </div>
        </div>
        {/* CSE-341-Backend */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl border border-blue-100">
          <a
            href="https://github.com/TheTubbyRaider/CSE-341-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-blue-800 hover:underline mb-2"
          >
            CSE-341-Backend
          </a>
          <p className="text-gray-700 mb-4 text-base">
            Backend-focused project using Node.js and Express. Demonstrates RESTful API development, endpoints, and database work supporting front-end UI.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Backend</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Node.js</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">API</span>
          </div>
        </div>
        {/* cse340backenddev */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-xl border border-blue-100">
          <a
            href="https://github.com/TheTubbyRaider/cse340backenddev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-blue-800 hover:underline mb-2"
          >
            cse340backenddev
          </a>
          <p className="text-gray-700 mb-4 text-base">
            Backend-heavy project showing server-side logic and data flow. Complements front-end work and demonstrates full-stack capabilities.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Backend</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Full-Stack</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
      `}</style>
    </div>
  );
}
