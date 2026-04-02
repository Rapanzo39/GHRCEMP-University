import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building, Microscope, MapPin, ArrowRight } from 'lucide-react';

const stats = [
  { icon: <Users size={28} />, value: '15,000+', label: 'Students Worldwide' },
  { icon: <BookOpen size={28} />, value: '120+', label: 'Academic Programs' },
  { icon: <Award size={28} />, value: '98%', label: 'Employment Rate' },
  { icon: <Building size={28} />, value: '50+', label: 'Research Centers' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative space-y-6">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Students studying" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <motion.img 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Library" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover mt-8"
              />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 dark:bg-slate-800 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-2">About GHRCEMP</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                A legacy of excellence, <br className="hidden md:block"/> a future of innovation.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                Founded in 1952, GHRCEMP University has been at the forefront of academic excellence and groundbreaking research. We believe in nurturing curious minds and providing them with the tools to solve the world's most pressing challenges.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/50 p-1.5 rounded-full text-blue-600 dark:text-blue-400">
                    <Microscope size={18} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">State-of-the-art research laboratories and facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/50 p-1.5 rounded-full text-blue-600 dark:text-blue-400">
                    <Users size={18} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Distinguished faculty comprising industry leaders and Nobel laureates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/50 p-1.5 rounded-full text-blue-600 dark:text-blue-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">A vibrant 500-acre campus in the heart of the innovation district</span>
                </li>
              </ul>
              
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-colors">
                Learn more about our history
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
