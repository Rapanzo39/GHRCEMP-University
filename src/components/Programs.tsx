import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Laptop, Stethoscope, Briefcase, Landmark, Palette } from 'lucide-react';

const programs = [
  {
    icon: <Laptop size={32} />,
    title: 'Computer Science & Engineering',
    desc: 'Master AI, software development, and systems engineering in our cutting-edge tech hub.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50'
  },
  {
    icon: <Stethoscope size={32} />,
    title: 'Medicine & Health Sciences',
    desc: 'Prepare for a career in global health, clinical research, and patient care.',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Business & Economics',
    desc: 'Develop leadership skills and financial acumen to navigate global markets.',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50'
  },
  {
    icon: <Landmark size={32} />,
    title: 'Law & Public Policy',
    desc: 'Shape the future of justice, governance, and international relations.',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50'
  },
  {
    icon: <Palette size={32} />,
    title: 'Arts & Humanities',
    desc: 'Explore human culture, creativity, and critical thinking.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50'
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Natural Sciences',
    desc: 'Uncover the mysteries of the universe through rigorous scientific inquiry.',
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-50'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-blue-600 font-semibold uppercase tracking-wider mb-2">Academics</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Explore Our Programs</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Discover over 120 undergraduate and graduate degree programs designed to ignite your passion and prepare you for a rapidly changing world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${program.lightColor} text-white flex items-center justify-center mb-6 overflow-hidden relative group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 ${program.color} opacity-10 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`relative z-10 ${program.color.replace('bg-', 'text-')} group-hover:text-white transition-colors`}>
                  {program.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                {program.desc}
              </p>

              <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700">
                Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 px-8 py-3 rounded-full font-medium transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
