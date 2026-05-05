import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">05 / CONNECTIVITY</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="p-8 md:p-12 bg-blue-600 text-white flex flex-col justify-between rounded-2xl relative overflow-hidden">
            {/* Decals */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 rounded-2xl"></div>
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest block mb-6">Contact Information</span>
              <p className="text-blue-100 mb-12 text-sm leading-relaxed max-w-sm">
                Reach out via email or connect on social media. I will respond within 24 hours.
              </p>
              
              <div className="space-y-6 text-sm font-mono tracking-tight">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-300" size={16} />
                  <a href="mailto:sasuthomasansong@gmail.com" className="hover:underline text-blue-50">sasuthomasansong@gmail.com</a>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-300" size={16} />
                  <p className="text-blue-50">(+233) 536-262-554</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-300" size={16} />
                  <p className="text-blue-50">Accra, Ghana (Amasaman)</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-16 relative z-10">
              <a href="https://github.com/Ansong-ux" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
                <Github size={14} />
              </a>
              <a href="https://www.linkedin.com/in/sasu-thomas-5b2330359/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="https://leetcode.com/u/sasuthomasansong/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
