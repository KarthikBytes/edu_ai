import React from 'react';
import { Play, TrendingUp, MessageSquare, BarChart, CheckCircle, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    // Added overflow-x-hidden to prevent horizontal scrollbar from background elements
    <div className="min-h-screen w-full text-slate-800 bg-white overflow-x-hidden" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* 1. Load Manrope Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
        `}
      </style>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50"
      >
        {/* Changed to w-full and added padding */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-xl font-extrabold text-white">
                E
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                EduAI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Features</a>
              <a href="#" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>

            {/* Desktop Buttons */}
            {/* Desktop Buttons */}
<div className="hidden md:flex items-center gap-4">
  {/* Option 1: Using Link (Best Practice for Navigation) */}
  <Link 
    to="/login" 
    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
  >
    Login
  </Link>

  <Link 
    to="/signup" 
    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
  >
    Sign Up
  </Link>
</div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden flex items-center justify-center">
              <Menu className="h-6 w-6 text-slate-600" />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white">
        {/* Changed to w-full and added padding */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl" // Keep max-width on content for readability
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[11px] font-extrabold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                New AI Features Available
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                AI-Powered <br />
                Student <br />
                <span className="text-blue-500">Career Guidance</span> <br />
                System
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
                Discover your perfect career path with personalized AI insights. We analyze your strengths, grades, and interests to guide you towards a successful future with precision.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 transition transform hover:-translate-y-1">
                  Get Started
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-sm transition">
                  <Play className="w-4 h-4 fill-slate-700" /> See How It Works
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              {/*
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm tracking-tighter">★★★★★</div>
                  <p className="text-sm text-slate-600 font-bold">Trusted by 10,000+ students</p>
                </div>
                </motion.div>
                */}
                </motion.div>
              
            

            {/* Right Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative w-full h-full flex justify-center lg:justify-end"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Students working" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Card 1 */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow"
                >
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Career Match</p>
                    <p className="text-sm font-extrabold text-slate-900">98% Accuracy</p>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute bottom-8 right-8 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg flex items-center gap-3"
                >
                   <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">AI Analysis</p>
                    <p className="text-sm font-extrabold text-slate-900">Personalized</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Background Blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white pointer-events-none"></div>
        {/* Changed to w-full and added padding */}
        <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="text-blue-500 font-extrabold uppercase tracking-widest text-xs mb-3">Core Features</h3>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Empowering Education with AI</h2>
            <p className="text-slate-600 font-medium text-lg">Our system provides comprehensive tools for both students and educators to navigate the complex career landscape effectively.</p>
          </motion.div>

          {/* Staggered Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<MessageSquare className="w-6 h-6 text-white" />}
                color="bg-blue-400"
                title="AI Career Prediction"
                desc="Analyze grades, interests, and extracurriculars to predict future career success with high accuracy using advanced machine learning models."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<CheckCircle className="w-6 h-6 text-white" />}
                color="bg-purple-400"
                title="Chatbot Guidance"
                desc="Get 24/7 instant answers to your career, college, and course-related questions from our intelligent, context-aware AI assistant."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<BarChart className="w-6 h-6 text-white" />}
                color="bg-green-400"
                title="Teacher Monitoring"
                desc="Real-time insights dashboard for educators to track student progress, identify at-risk students, and support career aspirations proactively."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Added padding to wrapper for full-width effect */}
      <section className="py-10 px-4 md:px-12 lg:px-16 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Removed max-w-6xl mx-auto, added w-full
          className="w-full bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl"
        >
           {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 px-8 py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to shape your future?</h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg font-medium">
              Join thousands of students and teachers using EduAI to make smarter, data-driven career decisions today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-8 py-3.5 rounded-lg font-bold transition shadow-lg shadow-blue-500/25">
                Sign Up Now
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-sm font-bold text-slate-900 bg-white hover:text-blue-600 transition-colors px-8 py-3.5 rounded-lg">
                Request Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        {/* Changed to w-full and added padding */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs font-extrabold">E</div>
                 <span className="text-lg font-extrabold text-slate-900">EduAI</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                Empowering the next generation with AI-driven career guidance and educational insights for a better tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-500">Features</a></li>
                <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-500">For Schools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, color, title, desc }) => (
  // Added w-full to cards to ensure they fill the grid
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group w-full">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Home;
