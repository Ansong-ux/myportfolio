import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">01 / OVERVIEW</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-between border border-blue-100"
          >
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4 block">The Architect</span>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-tight">
                I build logic. I design realities.
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed text-sm font-medium">
                I'm a Computer Engineering student at the University of Ghana, but more importantly, I'm a creator. I thrive in the intersection of hardware logic, software architecture, and 3D visual design.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                From crafting seamless <span className="text-blue-600 font-bold">React interfaces</span> and simulating hyper-realistic <span className="text-emerald-600 font-bold">3D environments in Blender</span>, to writing custom <span className="text-rose-600 font-bold">Operating System algorithms in C</span>—I don't just use technology; I dissect it, understand it, and build it from the ground up.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4 bg-white border border-blue-100 p-4 rounded-xl w-fit">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Available</span>
              <span className="text-slate-800 font-black tracking-tighter text-lg">For Hire</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-rows-3 gap-6"
          >
            {[
              {
                icon: <GraduationCap className="text-blue-600" size={24} />,
                title: 'Education',
                desc: 'BSc Computer Engineering (2024–2028), University of Ghana, Accra.',
              },
              {
                icon: <BookOpen className="text-blue-600" size={24} />,
                title: 'Relevant Coursework',
                desc: 'Data Structures & Algorithms, Digital Circuits, Networks & Security, Discrete Math.',
              },
              {
                icon: <Award className="text-blue-600" size={24} />,
                title: 'Organizations',
                desc: 'ARMS (Robotics & Automation Workshops), Nkabom Community (Entrepreneurship).',
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[11px] font-mono text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
