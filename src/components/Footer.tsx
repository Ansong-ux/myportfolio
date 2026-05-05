import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-slate-100/50 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Available for collaboration</span>
           </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="https://github.com/Ansong-ux" className="hover:text-blue-600 transition-colors">GitHub / sasuthomas</a>
          <a href="https://linkedin.com/in/sasu-thomas-5b2330359/" className="hover:text-blue-600 transition-colors">LinkedIn / sasuthomas</a>
          <span>v1.0.0 - {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
