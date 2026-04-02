import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
              Admissions Open 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Shape Your Future at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">GHRCEMP University</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Empowering the next generation of leaders, innovators, and creators through world-class education and groundbreaking research.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/30">
                Explore Programs
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all backdrop-blur-md hover:-translate-y-1 flex items-center justify-center">
                Schedule a Tour
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="hidden lg:block absolute bottom-10 right-10 z-10 w-80">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6 text-white border-l-4 border-l-blue-500"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-lg">Global Reach</h3>
          </div>
          <p className="text-slate-200 text-sm">Join a diverse community with students from over 120 countries worldwide.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
