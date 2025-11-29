"use client"
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

// --- Main Page Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* v0 Generated Sections */}
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}