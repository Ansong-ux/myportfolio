/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ChessKing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" fill="currentColor" {...props}>
    <path d="M 96 15 L 94 15 L 94 28 L 81 28 L 81 35 L 94 35 L 94 48 L 106 48 L 106 35 L 119 35 L 119 28 L 106 28 L 106 15 Z M 70 50 C 70 50 85 45 100 45 C 115 45 130 50 130 50 L 125 65 L 140 65 C 140 65 135 100 100 100 C 65 100 60 65 60 65 L 75 65 Z M 72 105 L 128 105 L 125 155 L 75 155 Z M 65 160 C 65 160 55 175 100 177 C 145 175 135 160 135 160 Z M 55 180 L 145 180 L 142 195 L 58 195 Z" />
  </svg>
);

export default function App() {
  return (
    <div className="w-full relative selection:bg-blue-200 selection:text-blue-900 min-h-screen">
      {/* Chessboard Global Background Fixed */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50 overflow-hidden flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 30h30v30H30zM0 0h30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Blended King Piece */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ChessKing className="w-[120vw] h-[120vw] md:w-[700px] md:h-[700px] text-blue-900 opacity-[0.08] mix-blend-multiply" />
        </div>

        {/* Blending gradients to make it look perfect and soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50/90 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 20%, #f8fafc 100%)' }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
