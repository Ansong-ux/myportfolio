import React from 'react';
import { motion } from 'motion/react';
import { Layout, Box, Cpu, Video } from 'lucide-react';

const services = [
  {
    title: 'Frontend & UI/UX',
    desc: 'Designing and building modern, responsive user interfaces.',
  },
  {
    title: '3D Modeling & Rendering',
    desc: 'Creating high-fidelity 3D assets, environments, and product renderings.',
  },
  {
    title: '3D Animation & Physics',
    desc: 'Bringing models to life with keyframe animation and fluid dynamics.',
  },
  {
    title: 'Hardware & Circuit Design',
    desc: 'Designing digital logic systems and simulating electronic circuits.',
  },
  {
    title: 'Presentation Design',
    desc: 'Crafting highly engaging, visually appealing, and structured presentation slides.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">04 / SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">What I Offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-dashed border-blue-200 p-8 rounded-2xl flex justify-between items-start gap-4 hover:border-blue-400 transition-colors bg-slate-50/50"
            >
              <div>
                 <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4 block">Service 0{index + 1}</span>
                 <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">{service.title}</h3>
                 <p className="text-sm font-mono text-slate-600 leading-relaxed max-w-md">
                   {service.desc}
                 </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                 +
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
