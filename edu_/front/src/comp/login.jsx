import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Main Container - Manrope Font applied here
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6 font-['Manrope']">
      
      {/* Font Import (Google Fonts) */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');`}
      </style>

      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[1000px] flex overflow-hidden min-h-[600px]">
        
        {/* LEFT SECTION: Login Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          
          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Select Role</label>
            <div className="bg-gray-100 p-1 rounded-full flex relative">
              <button
                onClick={() => setRole('student')}
                className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${
                  role === 'student' ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setRole('teacher')}
                className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${
                  role === 'teacher' ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Teacher
              </button>
              
              {/* Sliding Background for Toggle */}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#5B9BD5] rounded-full transition-all duration-300 ${
                  role === 'teacher' ? 'left-[calc(50%+2px)]' : 'left-1'
                }`}
              ></div>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#5B9BD5]" />
              </div>
              <input
                type="email"
                placeholder="name@university.edu"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all placeholder-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#5B9BD5]" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all placeholder-gray-400 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#5B9BD5] border-gray-300 rounded focus:ring-[#5B9BD5]" />
              <span className="ml-2 text-sm text-gray-500 font-medium">Remember me</span>
            </label>
            <a href="#" className="text-sm font-semibold text-[#5B9BD5] hover:text-[#4a8ac0]">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#5B9BD5] hover:bg-[#4a8ac0] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(91,155,213,0.39)] transition-all transform hover:-translate-y-0.5 mb-6">
            Sign In
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center mb-6">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Google Button */}
          <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-3">
             <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google logo" />
            Google
          </button>

          <p className="mt-8 text-center text-sm text-gray-500 font-medium">
            Don't have an account? <Link to="/signup" className="text-[#5B9BD5] font-bold hover:underline">Sign Up</Link>
          </p>
        </div>

        {/* RIGHT SECTION: Visual Panel (Aqua/Teal Gradient) */}
        <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] items-center justify-center p-12 text-white overflow-hidden">
          
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2C7A7B] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Floating Elements Container */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* 3D-ish Floating Icons (CSS only representation) */}
            <div className="relative w-full h-64 mb-8">
               {/* Icon 1: Chart */}
               <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
               </div>

               {/* Icon 2: Cap */}
               <div className="absolute top-12 right-1/4 transform translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-5 rounded-2xl shadow-lg animate-bounce duration-[4000ms]">
                  <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                  </div>
               </div>

               {/* Icon 3: Pie Chart */}
               <div className="absolute bottom-4 left-1/3 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl shadow-lg animate-bounce duration-[3500ms]">
                   <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                   </div>
               </div>
            </div>

            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Shape Your Future<br />with AI Guidance
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-sm mx-auto font-medium">
              Discover personalized career paths tailored to your potential. Join thousands of students navigating their future with confidence.
            </p>

            {/* Footer Text */}
            <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-wider text-white/60 uppercase">
              <span>Trusted by 500+ Institutions</span>
              <span>•</span>
              <span>AI-Powered Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
