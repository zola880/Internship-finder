import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Search, Briefcase, FileText, HelpCircle, Building } from "lucide-react";
import { INTERNSHIPS } from "../data/internships";
import InternshipCard from "../components/InternshipCard";

const Home = () => {
  const featuredInternships = INTERNSHIPS.filter(i => i.status === "Open").slice(0, 3);

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-indigo-500/10 dark:from-indigo-500/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md text-xs font-semibold mb-6 border border-zinc-200 dark:border-zinc-700"
          >
            <Briefcase className="w-3 h-3" />
            Student Internship Portal
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight"
          >
            Your Next Internship <br />
            <span className="text-indigo-600">Starts Here.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            A dedicated space for Ethiopian students to discover verified opportunities, get professional advice, and jumpstart their careers.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/internships"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              View Openings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/career-advice"
              className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-lg font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-center gap-2"
            >
              Career Guidance
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Platform Overview</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">We've simplified the process of finding internships into four straightforward steps.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Search", desc: "Filter through verified listings in tech, business, and engineering.", icon: Search },
            { title: "Review", desc: "Check company requirements, locations, and application deadlines.", icon: Building },
            { title: "Apply", desc: "Submit your documentation via the official company portals.", icon: FileText },
            { title: "Get Advice", desc: "Use our resource center for CV tips and interview prep.", icon: HelpCircle },
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Internships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">Featured Opportunities</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Hand-picked internships from top Ethiopian companies.</p>
          </div>
          <Link to="/internships" className="hidden sm:flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-indigo-600 rounded-[3rem] mx-4 sm:mx-8 py-20 px-8 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 tracking-tight text-center">Platform Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              "Verified internship listings from trusted companies",
              "Direct links to official company websites",
              "Resource module for CV and interview preparation",
              "Easy and streamlined application process",
              "Bookmark and track your favorite opportunities",
              "Professional student profile management"
        </div>
      </section>
    </div>
  );
};

export default Home;
