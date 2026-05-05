import React from 'react';
import { motion } from 'motion/react';
import { Code2, PenTool, Database, Cpu } from 'lucide-react';
import RubiksCube from './RubiksCube';

const skillCategories = [
  {
    title: 'Development & Languages',
    icon: <Code2 className="text-blue-400 mb-6" size={24} />,
    theme: 'dark',
    skills: ['JavaScript / HTML / CSS', 'Python', 'C++', 'Next.js', 'Django', 'Git & GitHub', 'Responsive Web']
  },
  {
    title: 'Design & 3D Animation',
    icon: <PenTool className="text-blue-500 mb-6" size={24} />,
    theme: 'light',
    skills: ['Blender 3D Modeling', 'Rendering & Texturing', 'Physics Simulations', 'UI/UX Design (Figma)', 'Graphic Design', 'Presentation Slides', 'Unity Game Dev']
  },
  {
    title: 'Core CS & Theory',
    icon: <Database className="text-blue-500 mb-6" size={24} />,
    theme: 'light',
    skills: ['Data Structures & Algo', 'SQL (PostgreSQL)', 'Computer Networks', 'Security Basics', 'Discrete Mathematics', 'Problem Solving']
  },
  {
    title: 'Engineering & Circuit',
    icon: <Cpu className="text-blue-500 mb-6" size={24} />,
    theme: 'light',
    skills: ['CAD & KiCad', 'SolidWorks', 'Engineering Design', 'Digital Circuits', 'Logisim', 'Hardware Architecture']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">02 / TECH STACK & ABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">My Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 flex flex-col justify-between ${
                  category.theme === 'dark' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-50 border border-slate-200 text-slate-900'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    {category.icon}
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${category.theme === 'dark' ? 'text-blue-400' : 'text-slate-400'}`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight mb-6">{category.title}</h3>
                </div>
                
                <div className="flex flex-col gap-2 text-[11px] font-mono">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className={category.theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Rubiks Cube Column */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-8 border border-slate-200 overflow-hidden relative min-h-[300px]"
          >
             <span className="absolute top-6 left-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10">THE TOOLBOX</span>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.blue.100)_0%,transparent_70%)] pointer-events-none opacity-50"></div>
             <div className="mt-8">
               <RubiksCube size={180} />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
