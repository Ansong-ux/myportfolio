import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Box, Cpu, Code } from 'lucide-react';

const projects = [
  {
    title: 'Tesla Car Model',
    category: '3D Modeling',
    tech: 'Blender',
    desc: 'Designed and modeled a high-quality 3D Tesla car from scratch.',
    theme: 'dark-slate',
    image: '/tesla.jpeg',
    github: 'https://github.com/Ansong-ux/Blenderanimation-files.git'
  },
  {
    title: 'UG Attendance System',
    category: 'Web Development',
    tech: 'React, Next.js',
    desc: 'Smart Attendance Management system with UI for Student and Lecturer portals.',
    theme: 'dark-blue',
    image: '/attendance.png',
    link: 'https://graceful-torrone-c90bcf.netlify.app/'
  },
  {
    title: '32-bit ALU Design',
    category: 'Hardware Engineering',
    tech: 'Logisim',
    desc: 'Designed and simulated a 32-bit Arithmetic Logic Unit.',
    theme: 'dark-slate',
    image: '/alu.png',
    github: 'https://github.com/Ansong-ux/16BITCPU-32BITVHDLIMPLEMENTATION.git'
  },
  {
    title: 'Basketball physics',
    category: '3D Modeling',
    tech: 'Blender',
    desc: 'Created and rendered a realistic 3D basketball with accurate textures and lighting.',
    theme: 'light',
    image: '/backetball.jpeg',
    github: 'https://github.com/Ansong-ux/Blenderanimation-files.git'
  },
  {
    title: 'Earbud Animation',
    category: '3D Animation',
    tech: 'Blender',
    desc: 'Modeled and textured a 3D earbud with smooth vertical motion keyframing.',
    theme: 'dark-blue',
    image: '/earbud.png',
    github: 'https://github.com/Ansong-ux/Blenderanimation-files.git'
  },
  {
    title: 'Drone Modeling',
    category: '3D Design',
    tech: 'Blender',
    desc: 'Modeled a multi-rotor drone for aerodynamic and structural visualization.',
    theme: 'light',
    image: '/drone.jpeg',
    github: 'https://github.com/Ansong-ux/Blenderanimation-files.git'
  },
  {
    title: 'Arduino Nano Layout',
    category: 'Electronics',
    tech: 'KiCad',
    desc: 'Designed and modeled an Arduino Nano PCB layout and 3D visualization.',
    theme: 'light',
    image: '/pcb.png'
  },
  {
    title: 'Modified Xv6 OS',
    category: 'Software Engineering',
    tech: 'C, OS',
    desc: 'Modified the base Xv6 Scheduling Algorithm to include a quicker 2x faster algorithm.',
    theme: 'dark-slate',
  },
  {
    title: 'Fluid Simulations',
    category: '3D Simulation',
    tech: 'Blender',
    desc: 'Created realistic flame and fluid simulations with optimizations.',
    theme: 'light',
    github: 'https://github.com/Ansong-ux/Blenderanimation-files.git'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">03 / ARCHIVE</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            let bgClass = "bg-slate-100 border border-slate-200 text-slate-900";
            let tagClass = "text-slate-400";
            let descClass = "text-slate-600";
            
            if (project.theme === 'dark-blue') {
              bgClass = "bg-blue-600 border border-blue-600 text-white";
              tagClass = "text-blue-200";
              descClass = "text-blue-100 opacity-90";
            } else if (project.theme === 'dark-slate') {
              bgClass = "bg-slate-900 border border-slate-800 text-white";
              tagClass = "text-slate-400";
              descClass = "text-slate-300";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${bgClass}`}
              >
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={project.image} 
                      alt="" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${tagClass}`}>
                      0{index + 1} / {project.category}
                    </span>
                    
                    <div className="flex gap-2">
                      {('github' in project) && project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center ${project.theme === 'light' ? 'bg-white text-slate-800 shadow-sm border border-slate-100 hover:text-blue-600 transition-colors' : 'bg-white/10 text-white hover:bg-white/20 transition-colors'}`}>
                          <Github size={14} />
                        </a>
                      )}
                      {('link' in project) && project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center ${project.theme === 'light' ? 'bg-white text-slate-800 shadow-sm border border-slate-100 hover:text-blue-600 transition-colors' : 'bg-white/10 text-white hover:bg-white/20 transition-colors'}`}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold tracking-tight mb-2 uppercase">{project.title}</h3>
                    <p className={`text-xs leading-relaxed font-mono ${descClass}`}>
                      {project.desc}
                    </p>
                    <div className={`mt-4 text-[10px] font-bold tracking-widest uppercase ${tagClass}`}>
                      TECH: {project.tech}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
