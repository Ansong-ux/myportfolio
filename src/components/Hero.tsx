import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import RubiksCube from './RubiksCube';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-transparent">
      <div className="absolute top-1/4 right-0 transform translate-x-1/2 opacity-5 pointer-events-none md:block hidden">
        <RubiksCube size={400} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left bg-transparent"
          >
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6 block">
              00 / INTRODUCTION
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-blue-700 leading-none mb-4 uppercase">
              Sasu Thomas<br />Ansong
            </h1>
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-8 leading-relaxed">
              Computer Engineering Student | Frontend Developer & Designer
            </p>
            <p className="text-sm leading-relaxed text-slate-700 mb-10 max-w-lg">
              I bridge the gap between engineering and design, crafting beautiful, responsive user interfaces and building robust structural models in 3D.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 shadow-sm transition-all transform hover:-translate-y-1"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest hover:text-blue-600 hover:bg-slate-50 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mx-auto flex justify-center items-center h-full mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-blue-100 flex items-center justify-center shadow-inner overflow-hidden border border-blue-200 group">
               {/* User's Uploaded Profile Picture */}
               <img src="/profile.jpg" alt="Sasu Thomas Ansong" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" onError={(e) => {
                 (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%233b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`;
               }} />
               <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>
            
            {/* Floating badges */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
