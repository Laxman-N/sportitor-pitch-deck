import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Pause, Volume2, VolumeX, ArrowRight, TrendingUp, Users, Target, Award, Globe, Zap, Shield, Star, Activity, BarChart3, DollarSign, MapPin, Smartphone, Trophy, Rocket, Heart, CheckCircle, AlertCircle, Calendar, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Youtube, Download, Briefcase, Building, GraduationCap, ShoppingCart, Flag, Building2, IndianRupee, Clock, Map, TrendingDown, Sparkles, X, Search, Menu } from 'lucide-react';
/* eslint-disable no-unused-vars */
const SportitorAdvancedPitchDeck = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const audioRef = useRef(null);
  const sectionsRef = useRef([]);

  // Generate particles for background effects
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Determine active section
      const sections = sectionsRef.current;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const sections = [
    'Home', 'Problem', 'Solution', 'Users', 'Revenue', 'Market',
    'Traction', 'Partnerships', 'Projects', 'Funding', 'Vision', 'App', 'Contact'
  ];

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(60px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInDown {
          from { 
            opacity: 0; 
            transform: translateY(-60px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-60px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeInRight {
          from { 
            opacity: 0; 
            transform: translateX(60px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slideInRotate {
          from {
            opacity: 0;
            transform: translateY(50px) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 200% 200%;
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out;
        }

        .animate-slide-rotate {
          animation: slideInRotate 1s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, #009845 0%, #C7EA46 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 152, 69, 0.3);
        }

        .parallax-element {
          transition: transform 0.3s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #009845 0%, #C7EA46 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #C7EA46 0%, #009845 100%);
        }

        /* Delay classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#009845] to-[#C7EA46] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection(0)}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#009845] to-[#C7EA46] rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform">
                <Trophy size={24} className="text-white" />
              </div>
              <span className="text-xl md:text-2xl font-black text-gradient">SPORTITOR</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {sections.slice(0, 8).map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`text-sm font-semibold transition-colors hover:text-[#C7EA46] ${activeSection === index ? 'text-[#C7EA46]' : 'text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-[#009845] to-[#C7EA46] rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-morphism"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-morphism border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === index
                    ? 'bg-[#009845]/20 text-[#C7EA46]'
                    : 'text-gray-300 hover:bg-white/5'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero/Cover */}
      <section
        ref={el => sectionsRef.current[0] = el}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #C7EA46 100%)'
        }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white opacity-20 animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Stadium Lights Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C7EA46] rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#009845] rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 scroll-animate animate-bounce-in">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl shadow-2xl transform hover:rotate-12 transition-transform duration-500 backdrop-blur-sm border border-white/20">
              <Trophy size={48} className="text-white md:w-16 md:h-16" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-white scroll-animate delay-100">
            SPORTITOR
          </h1>

          <p className="text-2xl md:text-4xl mb-4 text-white/90 font-bold scroll-animate delay-200">
            Revolutionizing Sports Infrastructure
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-12 scroll-animate delay-300">
            Empowering Athletes • Building Communities • Creating Champions
          </p>

          <div className="flex flex-wrap justify-center gap-4 scroll-animate delay-400">
            <div className="px-6 py-3 md:px-8 md:py-4 glass-morphism rounded-2xl">
              <p className="text-base md:text-lg font-semibold text-white">Investor Pitch 2024</p>
            </div>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#009845] rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all font-bold flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate delay-500">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-white/60 text-sm">Scroll to explore</span>
              <ChevronDown size={24} className="text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section
        ref={el => sectionsRef.current[1] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Visual */}
            <div className="scroll-animate">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                  alt="Sports Challenge"
                  className="w-full h-[400px] md:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">The Current Reality</h3>
                  <p className="text-lg md:text-xl opacity-90">Athletes face numerous barriers to success</p>
                </div>
              </div>
            </div>

            {/* Right side - Problems */}
            <div className="space-y-6">
              <div className="scroll-animate">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
                  The <span className="text-gradient">Problem</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#009845] to-[#C7EA46] mb-8"></div>
              </div>

              {[
                {
                  icon: <X size={28} />,
                  title: "Fragmented Ecosystem",
                  description: "No unified platform connecting players, coaches, and facilities across the sports industry",
                  stat: "87% struggle to find quality services"
                },
                {
                  icon: <Search size={28} />,
                  title: "Discovery Challenges",
                  description: "Athletes waste valuable training time trying to locate qualified coaches and proper facilities",
                  stat: "3+ hours wasted per booking"
                },
                {
                  icon: <Building size={28} />,
                  title: "Infrastructure Gaps",
                  description: "Poor stadium management systems leading to underutilization and revenue loss",
                  stat: "₹500Cr annual losses"
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  className={`glass-morphism rounded-2xl p-6 hover-lift scroll-animate delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{problem.title}</h3>
                      <p className="text-gray-300 mb-3 leading-relaxed">{problem.description}</p>
                      <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30">
                        <span className="text-red-400 font-semibold text-sm">{problem.stat}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Impact visualization */}
              <div className="glass-morphism rounded-2xl p-6 border border-red-500/30 scroll-animate delay-400">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-sm opacity-70 mb-1">Total Market Impact</p>
                    <p className="text-4xl md:text-5xl font-black text-gradient">₹2,000 Cr</p>
                    <p className="text-sm opacity-70 mt-1">Lost annually due to inefficiencies</p>
                  </div>
                  <TrendingDown size={48} className="text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section
        ref={el => sectionsRef.current[2] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #006B31 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              The Solution - <span className="text-[#C7EA46]">Sportitor</span>
            </h2>
            <div className="w-32 h-1 bg-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A comprehensive platform unifying the entire sports ecosystem
            </p>
          </div>

          {/* Central phone with features */}
          <div className="relative mb-16">
            <div className="flex justify-center mb-12 scroll-animate delay-200">
              <div
                className="relative w-[280px] h-[560px] animate-float"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-[3rem] shadow-2xl overflow-hidden">
                  {/* Phone screen content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#009845] to-[#C7EA46] rounded-[2rem] p-6 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-xl animate-bounce-in">
                      <span className="text-4xl font-black text-[#009845]">S</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">Sportitor</h3>
                    <p className="text-white/90 text-center text-sm mb-6">Your Complete Sports Ecosystem</p>

                    {/* App features list */}
                    <div className="space-y-2 w-full">
                      {['Book Courts', 'Find Coaches', 'Buy Equipment', 'Join Academies'].map((feature, i) => (
                        <div
                          key={i}
                          className={`flex items-center space-x-2 glass-morphism rounded-xl px-3 py-2 scroll-animate delay-${(i + 3) * 100}`}
                        >
                          <CheckCircle size={16} className="text-white flex-shrink-0" />
                          <span className="text-white text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30"></div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { icon: <ShoppingCart size={32} />, title: "Shopping", desc: "Premium Equipment", color: "from-[#009845] to-[#C7EA46]" },
                { icon: <GraduationCap size={32} />, title: "Coaching", desc: "Expert Training", color: "from-[#009845] to-[#006B31]" },
                { icon: <Calendar size={32} />, title: "Booking", desc: "Court Reservations", color: "from-[#C7EA46] to-[#009845]" },
                { icon: <Users size={32} />, title: "Community", desc: "Connect & Compete", color: "from-[#006B31] to-[#009845]" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`scroll-animate delay-${(index + 4) * 100}`}
                >
                  <div className={`glass-morphism p-6 rounded-2xl hover-lift cursor-pointer h-full`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-bold text-center text-lg mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm text-center">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { label: "Active Users", value: "10K+", icon: <Users size={24} /> },
              { label: "Cities", value: "25+", icon: <MapPin size={24} /> },
              { label: "Partners", value: "50+", icon: <Briefcase size={24} /> },
              { label: "Transactions", value: "₹5Cr+", icon: <DollarSign size={24} /> }
            ].map((metric, i) => (
              <div key={i} className={`glass-morphism rounded-2xl p-6 text-center hover-lift scroll-animate delay-${(i + 8) * 100}`}>
                <div className="text-[#C7EA46] mb-3 flex justify-center">{metric.icon}</div>
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{metric.value}</p>
                <p className="text-gray-300 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Target Users */}
      <section
        ref={el => sectionsRef.current[3] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Target <span className="text-gradient">Users</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#009845] to-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving every stakeholder in the sports ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Users size={48} />,
                title: "Players",
                count: "5M+",
                description: "Amateur to Professional Athletes",
                features: ["Book Courts", "Find Coaches", "Buy Equipment", "Track Progress"],
                color: "from-[#009845] to-[#006B31]",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop"
              },
              {
                icon: <GraduationCap size={48} />,
                title: "Coaches",
                count: "50K+",
                description: "Certified Sports Trainers",
                features: ["Manage Students", "Schedule Sessions", "Payment Gateway", "Analytics"],
                colorcolor: "from-[#C7EA46] to-[#009845]",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
              },
              {
                icon: <Building size={48} />,
                title: "Academies",
                count: "10K+",
                description: "Training Institutions",
                features: ["Student Management", "Course Creation", "Fee Collection", "Reports"],
                color: "from-[#009845] to-[#C7EA46]",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
              },
              {
                icon: <Flag size={48} />,
                title: "Stadiums",
                count: "1K+",
                description: "Sports Facilities",
                features: ["Booking System", "Maintenance", "Revenue Tracking", "Events"],
                color: "from-[#006B31] to-[#009845]",
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop"
              }
            ].map((user, index) => (
              <div
                key={index}
                className={`scroll-animate delay-${(index + 1) * 100}`}
              >
                <div className="glass-morphism rounded-3xl overflow-hidden hover-lift h-full flex flex-col">
                  {/* Image header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={user.image}
                      alt={user.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${user.color} opacity-70`}></div>
                    <div className="absolute top-4 right-4 text-white">
                      {user.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{user.title}</h3>
                    <p className="text-4xl font-black text-[#C7EA46] mb-3">
                      {user.count}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{user.description}</p>

                    {/* Features */}
                    <div className="space-y-2 flex-grow">
                      {user.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle size={14} className="text-[#009845] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total addressable market */}
          <div className="glass-morphism rounded-3xl p-8 border border-[#009845]/30 scroll-animate delay-500">
            <div className="text-center">
              <p className="text-white/70 text-lg mb-3">Total Addressable Market</p>
              <p className="text-6xl md:text-7xl font-black text-gradient mb-3">450M+</p>
              <p className="text-white/70 text-xl">Potential Users in India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Revenue Model */}
      <section
        ref={el => sectionsRef.current[4] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #006B31 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Revenue <span className="text-[#C7EA46]">Model</span>
            </h2>
            <div className="w-32 h-1 bg-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Multiple revenue streams for sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Revenue streams visualization */}
            <div className="scroll-animate delay-200">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#C7EA46] to-[#009845] rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                    <IndianRupee size={48} className="text-white" />
                  </div>
                </div>

                {/* Revenue stream cards - mobile grid */}
                <div className="grid grid-cols-2 gap-4 md:hidden w-full">
                  {[
                    { name: "Commissions", value: "15-20%", color: "from-[#009845] to-[#006B31]" },
                    { name: "Subscriptions", value: "₹299/mo", color: "from-[#C7EA46] to-[#009845]" },
                    { name: "Affiliate", value: "10%", color: "from-[#006B31] to-[#009845]" },
                    { name: "B2B Solutions", value: "₹50K+", color: "from-[#009845] to-[#C7EA46]" }
                  ].map((stream, index) => (
                    <div key={index} className={`bg-gradient-to-br ${stream.color} p-5 rounded-2xl shadow-xl hover-lift`}>
                      <h4 className="text-white font-bold text-base mb-2">{stream.name}</h4>
                      <p className="text-white text-2xl font-black">{stream.value}</p>
                    </div>
                  ))}
                </div>

                {/* Revenue stream bubbles - desktop */}
                <div className="hidden md:block w-full h-full">
                  {[
                    { name: "Commissions", value: "15-20%", position: { top: "10%", left: "10%" }, color: "from-[#009845] to-[#006B31]" },
                    { name: "Subscriptions", value: "₹299/mo", position: { top: "10%", right: "10%" }, color: "from-[#C7EA46] to-[#009845]" },
                    { name: "Affiliate", value: "10%", position: { bottom: "10%", left: "10%" }, color: "from-[#006B31] to-[#009845]" },
                    { name: "B2B Solutions", value: "₹50K+", position: { bottom: "10%", right: "10%" }, color: "from-[#009845] to-[#C7EA46]" }
                  ].map((stream, index) => (
                    <div
                      key={index}
                      className="absolute animate-float hover-lift cursor-pointer"
                      style={{ ...stream.position, animationDelay: `${index * 0.3}s` }}
                    >
                      <div className={`bg-gradient-to-br ${stream.color} p-6 rounded-2xl shadow-xl`}>
                        <h4 className="text-white font-bold text-lg mb-2">{stream.name}</h4>
                        <p className="text-white text-3xl font-black">{stream.value}</p>
                      </div>
                    </div>
                  ))}

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#C7EA46" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#C7EA46" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#C7EA46" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#C7EA46" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Revenue breakdown */}
            <div className="space-y-6">
              <div className="glass-morphism rounded-2xl p-6 scroll-animate delay-300">
                <h3 className="text-2xl font-bold text-white mb-6">Revenue Breakdown</h3>

                {/* Revenue bars */}
                <div className="space-y-5">
                  {[
                    { source: "Transaction Commissions", percentage: 40, amount: "₹4 Cr" },
                    { source: "Premium Subscriptions", percentage: 30, amount: "₹3 Cr" },
                    { source: "Affiliate Marketing", percentage: 20, amount: "₹2 Cr" },
                    { source: "B2B Enterprise", percentage: 10, amount: "₹1 Cr" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-white text-base">
                        <span className="font-semibold">{item.source}</span>
                        <span className="font-bold">{item.amount}</span>
                      </div>
                      <div className="relative w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C7EA46] to-[#009845] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${item.percentage}%`,
                            animationDelay: `${i * 200}ms`
                          }}
                        ></div>
                      </div>
                      <div className="text-gray-300 text-sm text-right">{item.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth projections */}
              <div className="glass-morphism rounded-2xl p-6 border border-[#C7EA46]/30 scroll-animate delay-400">
                <h3 className="text-2xl font-bold text-white mb-6">Growth Projections</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { year: "Year 1", amount: "₹10 Cr", growth: null },
                    { year: "Year 2", amount: "₹25 Cr", growth: "150%" },
                    { year: "Year 3", amount: "₹50 Cr", growth: "100%" }
                  ].map((proj, i) => (
                    <div key={i} className="text-center p-4 glass-morphism rounded-xl">
                      <p className="text-gray-300 text-sm mb-2">{proj.year}</p>
                      <p className="text-3xl font-black text-white mb-2">{proj.amount}</p>
                      {proj.growth && (
                        <div className="flex items-center justify-center text-[#C7EA46]">
                          <TrendingUp size={16} />
                          <span className="ml-1 text-sm font-bold">{proj.growth}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 scroll-animate delay-500">
                <div className="glass-morphism rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Activity size={24} className="text-[#C7EA46] flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs">Avg. Transaction</p>
                      <p className="text-white font-bold text-xl">₹1,200</p>
                    </div>
                  </div>
                </div>
                <div className="glass-morphism rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Users size={24} className="text-[#C7EA46] flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs">Conversion Rate</p>
                      <p className="text-white font-bold text-xl">18%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Market Opportunity */}
      <section
        ref={el => sectionsRef.current[5] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Market <span className="text-gradient">Opportunity</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#009845] to-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tapping into India's booming sports economy
            </p>
          </div>

          {/* Main metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                value: "$15B",
                label: "India Sports Market",
                sublabel: "Growing at 15% CAGR",
                icon: <TrendingUp size={32} />,
                color: "from-[#009845] to-[#006B31]"
              },
              {
                value: "450M",
                label: "Sports Enthusiasts",
                sublabel: "Active Participants",
                icon: <Users size={32} />,
                color: "from-[#C7EA46] to-[#009845]"
              },
              {
                value: "25%",
                label: "Digital Adoption",
                sublabel: "YoY Growth",
                icon: <Smartphone size={32} />,
                color: "from-[#006B31] to-[#009845]"
              }
            ].map((metric, index) => (
              <div
                key={index}
                className={`scroll-animate delay-${(index + 1) * 100}`}
              >
                <div className="glass-morphism rounded-3xl p-8 hover-lift h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl mb-6`}>
                    <div className="text-white">{metric.icon}</div>
                  </div>
                  <p className="text-5xl md:text-6xl font-black text-white mb-3">{metric.value}</p>
                  <p className="text-xl text-white font-semibold mb-2">{metric.label}</p>
                  <p className="text-gray-400">{metric.sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* India map visualization */}
          <div className="glass-morphism rounded-3xl p-8 scroll-animate delay-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map side */}
              <div className="relative">
                <div className="relative h-[400px] bg-gradient-to-br from-[#009845]/20 to-[#C7EA46]/20 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Map size={200} className="text-white/20" />
                  </div>

                  {/* City markers */}
                  {[
                    { name: "Delhi", top: "25%", left: "45%" },
                    { name: "Mumbai", top: "55%", left: "25%" },
                    { name: "Bangalore", top: "70%", left: "40%" },
                    { name: "Chennai", top: "75%", left: "50%" },
                    { name: "Kolkata", top: "45%", left: "70%" },
                    { name: "Hyderabad", top: "60%", left: "45%" }
                  ].map((city, i) => (
                    <div
                      key={i}
                      className="absolute group"
                      style={{ top: city.top, left: city.left }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-[#C7EA46] rounded-full shadow-lg animate-pulse-slow" style={{ animationDelay: `${i * 300}ms` }}></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-black/90 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                            {city.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6">Geographic Expansion</h3>

                <div className="space-y-4">
                  {[
                    { phase: "Phase 1", cities: "6 Metro Cities", timeline: "Q1-Q2 2024", status: "active" },
                    { phase: "Phase 2", cities: "20 Tier-2 Cities", timeline: "Q3-Q4 2024", status: "upcoming" },
                    { phase: "Phase 3", cities: "50+ Cities", timeline: "2025", status: "planned" },
                    { phase: "Phase 4", cities: "Pan India", timeline: "2026", status: "planned" }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${phase.status === 'active' ? 'bg-[#009845]' :
                        phase.status === 'upcoming' ? 'bg-[#C7EA46]' : 'bg-gray-600'
                        }`}>
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div>
                            <p className="text-white font-semibold">{phase.phase}</p>
                            <p className="text-gray-400 text-sm">{phase.cities}</p>
                          </div>
                          <span className="text-gray-500 text-sm">{phase.timeline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Market size projection */}
                <div className="glass-morphism rounded-2xl p-6 border border-[#009845]/30 mt-8">
                  <p className="text-gray-400 text-sm mb-2">Projected Market Capture by 2026</p>
                  <div className="flex items-end justify-between">
                    <p className="text-5xl font-black text-white">₹500 Cr</p>
                    <div className="flex items-center text-[#C7EA46]">
                      <TrendingUp size={20} />
                      <span className="ml-1 font-bold">300% Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Traction */}
      <section
        ref={el => sectionsRef.current[6] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #006B31 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="text-[#C7EA46]">Traction</span>
            </h2>
            <div className="w-32 h-1 bg-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Proven growth and market validation
            </p>
          </div>

          {/* Main traction metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                metric: "1K+",
                label: "App Downloads",
                icon: <Download size={28} />,
                progress: 85,
                rating: 4.8,
                status: "Live on Play Store",
                color: "from-[#009845] to-[#006B31]"
              },
              {
                metric: "5+",
                label: "Academy Tie-ups",
                icon: <Building size={28} />,
                progress: 60,
                partners: ["Gopichand Academy", "Khelo India"],
                color: "from-[#C7EA46] to-[#009845]"
              },
              {
                metric: "4",
                label: "Brand Partners",
                icon: <Award size={28} />,
                progress: 75,
                brands: ["Yonex", "Victor", "Hundred", "Transform"],
                color: "from-[#006B31] to-[#009845]"
              },
              {
                metric: "3",
                label: "Active Cities",
                icon: <MapPin size={28} />,
                progress: 40,
                cities: ["Hyderabad", "Bangalore", "Chennai"],
                color: "from-[#009845] to-[#C7EA46]"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`scroll-animate delay-${(index + 1) * 100}`}
              >
                <div className="glass-morphism rounded-2xl p-6 hover-lift h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    {item.status && (
                      <span className="inline-flex items-center px-2 py-1 glass-morphism rounded-full text-xs">
                        <div className="w-2 h-2 bg-[#009845] rounded-full mr-1 animate-pulse-slow"></div>
                        <span className="text-[#C7EA46] font-medium">{item.status}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-5xl font-black text-white mb-2">{item.metric}</p>
                  <p className="text-gray-300 mb-4">{item.label}</p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Additional info */}
                  {item.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(item.rating) ? "text-[#C7EA46] fill-[#C7EA46]" : "text-gray-600"}
                        />
                      ))}
                      <span className="text-white ml-2 text-sm font-medium">{item.rating}</span>
                    </div>
                  )}

                  {item.partners && (
                    <div className="space-y-1 mt-2">
                      {item.partners.map((partner, i) => (
                        <p key={i} className="text-gray-300 text-xs">• {partner}</p>
                      ))}
                    </div>
                  )}

                  {item.brands && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.brands.slice(0, 2).map((brand, i) => (
                        <span key={i} className="text-xs glass-morphism rounded px-2 py-1 text-gray-200">{brand}</span>
                      ))}
                    </div>
                  )}

                  {item.cities && (
                    <div className="space-y-1 mt-2">
                      {item.cities.map((city, i) => (
                        <p key={i} className="text-gray-300 text-xs">📍 {city}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Growth metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 scroll-animate delay-500">
            <div className="glass-morphism rounded-2xl p-6 border border-[#009845]/30">
              <div className="flex items-center justify-between mb-4">
                <Rocket size={32} className="text-[#C7EA46]" />
                <span className="text-[#C7EA46] font-bold text-sm">Monthly</span>
              </div>
              <p className="text-4xl font-bold text-white mb-2">50% MoM</p>
              <p className="text-gray-300">User Growth Rate</p>
            </div>

            <div className="glass-morphism rounded-2xl p-6 border border-[#C7EA46]/30">
              <div className="flex items-center justify-between mb-4">
                <DollarSign size={32} className="text-[#C7EA46]" />
                <span className="text-[#C7EA46] font-bold text-sm">Revenue</span>
              </div>
              <p className="text-4xl font-bold text-white mb-2">₹25 Lakhs</p>
              <p className="text-gray-300">First 6 Months</p>
            </div>

            <div className="glass-morphism rounded-2xl p-6 border border-[#006B31]/30">
              <div className="flex items-center justify-between mb-4">
                <Users size={32} className="text-[#C7EA46]" />
                <span className="text-[#C7EA46] font-bold text-sm">Retention</span>
              </div>
              <p className="text-4xl font-bold text-white mb-2">78%</p>
              <p className="text-gray-300">User Retention Rate</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-morphism rounded-2xl p-8 scroll-animate delay-600">
            <h3 className="text-2xl font-bold text-white mb-8">Milestones Achieved</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C7EA46] to-[#009845]"></div>
              <div className="space-y-8">
                {[
                  { date: "Jan 2024", event: "App Launch", desc: "MVP released on Play Store" },
                  { date: "Mar 2024", event: "First 500 Users", desc: "Organic growth milestone" },
                  { date: "May 2024", event: "Academy Partnerships", desc: "5+ academies onboarded" },
                  { date: "Jul 2024", event: "₹10L Revenue", desc: "First revenue milestone" },
                  { date: "Sep 2024", event: "Brand Collaborations", desc: "4 major brands partnered" },
                  { date: "Nov 2024", event: "Multi-city Launch", desc: "Expanded to 3 cities" }
                ].map((milestone, i) => (
                  <div key={i} className="relative flex items-center pl-20"><div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-[#C7EA46] to-[#009845] rounded-full border-4 border-[#006B31]"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <span className="text-gray-400 text-sm font-medium">{milestone.date}</span>
                          <p className="text-white font-bold text-lg">{milestone.event}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Partnerships */}
      <section
        ref={el => sectionsRef.current[7] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Strategic <span className="text-gradient">Partnerships</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#009845] to-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Brand Partners */}
            <div className="scroll-animate delay-200">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Briefcase size={32} className="mr-3 text-[#009845]" />
                Brand Partners
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "YONEX", desc: "Premium Equipment", logo: "🏸", color: "from-[#009845] to-[#006B31]" },
                  { name: "VICTOR", desc: "Badminton Specialist", logo: "🏸", color: "from-[#C7EA46] to-[#009845]" },
                  { name: "HUNDRED", desc: "Sports Apparel", logo: "👕", color: "from-[#006B31] to-[#009845]" },
                  { name: "TRANSFORM", desc: "Fitness Partner", logo: "💪", color: "from-[#009845] to-[#C7EA46]" }
                ].map((partner, i) => (
                  <div
                    key={i}
                    className="glass-morphism rounded-2xl p-6 hover-lift cursor-pointer group"
                  >
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{partner.logo}</div>
                    <h4 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}>
                      {partner.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{partner.desc}</p>
                    <div className="flex items-center text-[#009845] opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle size={16} className="mr-1" />
                      <span className="text-xs font-medium">Active Partner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academy Partners */}
            <div className="scroll-animate delay-300">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <GraduationCap size={32} className="mr-3 text-[#009845]" />
                Academy Partners
              </h3>

              <div className="space-y-4">
                {[
                  {
                    name: "Pullela Gopichand Academy",
                    type: "Premier Badminton",
                    students: "500+",
                    status: "Elite Partner"
                  },
                  {
                    name: "Khelo India Centers",
                    type: "Multi-Sport",
                    students: "2000+",
                    status: "National Partner"
                  },
                  {
                    name: "District Sports Complexes",
                    type: "Community Sports",
                    students: "5000+",
                    status: "Regional Partner"
                  },
                  {
                    name: "Private Training Centers",
                    type: "Specialized Training",
                    students: "1000+",
                    status: "Network Partner"
                  }
                ].map((academy, i) => (
                  <div
                    key={i}
                    className="glass-morphism rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{academy.name}</h4>
                        <p className="text-gray-400 text-sm mb-2">{academy.type}</p>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs bg-[#009845]/20 text-[#C7EA46] px-3 py-1 rounded-full border border-[#009845]/30">
                            {academy.students} Students
                          </span>
                          <span className="text-xs bg-[#C7EA46]/20 text-[#009845] px-3 py-1 rounded-full border border-[#C7EA46]/30">
                            {academy.status}
                          </span>
                        </div>
                      </div>
                      <CheckCircle size={24} className="text-[#009845] flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership benefits */}
          <div className="mt-12 glass-morphism rounded-3xl p-8 border border-[#009845]/30 scroll-animate delay-400">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Partnership Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Users size={24} />, value: "10K+", label: "Combined Reach" },
                { icon: <TrendingUp size={24} />, value: "40%", label: "Revenue Share" },
                { icon: <Shield size={24} />, value: "100%", label: "Quality Assured" },
                { icon: <Zap size={24} />, value: "24/7", label: "Support" }
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#009845] to-[#C7EA46] rounded-xl mb-4">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{benefit.value}</p>
                  <p className="text-gray-400 text-sm">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Projects */}
      <section
        ref={el => sectionsRef.current[8] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #006B31 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Project <span className="text-[#C7EA46]">Showcase</span>
            </h2>
            <div className="w-32 h-1 bg-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stadium Construction & Renovation Excellence
            </p>
          </div>

          {/* Project gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Hyderabad Sports Complex",
                value: "₹5 Cr",
                status: "Completed",
                type: "Multi-Sport Facility",
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
                features: ["8 Courts", "5000 Capacity", "LED Lighting"]
              },
              {
                name: "Elite Training Center",
                value: "₹3 Cr",
                status: "In Progress",
                type: "Professional Academy",
                image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&h=400&fit=crop",
                features: ["Indoor Courts", "Gym Facility", "Recovery Center"]
              },
              {
                name: "Community Sports Hub",
                value: "₹2 Cr",
                status: "Completed",
                type: "Public Facility",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
                features: ["4 Courts", "Coaching Center", "Equipment Store"]
              },
              {
                name: "School Sports Complex",
                value: "₹1.5 Cr",
                status: "Completed",
                type: "Educational Facility",
                image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
                features: ["Multi-Purpose", "2000 Students", "Modern Amenities"]
              },
              {
                name: "Corporate Wellness Center",
                value: "₹2.5 Cr",
                status: "Planning",
                type: "Corporate Facility",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
                features: ["Gym", "Badminton", "Wellness Programs"]
              },
              {
                name: "District Stadium Renovation",
                value: "₹4 Cr",
                status: "Upcoming",
                type: "Government Project",
                image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?w=600&h=400&fit=crop",
                features: ["10000 Capacity", "International Standards", "VIP Boxes"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`scroll-animate delay-${(index + 1) * 100}`}
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer hover-lift">
                  <div className="relative h-80">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Completed' ? 'bg-[#009845]' :
                        project.status === 'In Progress' ? 'bg-[#C7EA46] text-[#333333]' :
                          project.status === 'Planning' ? 'bg-[#006B31]' :
                            'bg-gray-500'
                        } text-white`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{project.type}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-[#C7EA46]">{project.value}</span>
                      </div>

                      {/* Features on hover */}
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.features.map((feature, i) => (
                          <span key={i} className="text-xs glass-morphism px-3 py-1 rounded-full text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project stats */}
          <div className="glass-morphism rounded-3xl p-8 scroll-animate delay-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Building2 size={32} />, value: "15+", label: "Projects Delivered" },
                { icon: <IndianRupee size={32} />, value: "₹20 Cr+", label: "Total Project Value" },
                { icon: <Trophy size={32} />, value: "98%", label: "Client Satisfaction" },
                { icon: <Clock size={32} />, value: "100%", label: "On-Time Delivery" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C7EA46] to-[#009845] rounded-2xl mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <p className="text-4xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Funding */}
      <section
        ref={el => sectionsRef.current[9] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #C7EA46 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Funding Ask
            </h2>
            <p className="text-6xl md:text-8xl font-black text-white animate-pulse-slow mb-4">₹2 CRORES</p>
            <p className="text-2xl text-white/90">Seed Round Investment</p>
          </div>

          {/* Interactive Pie Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="relative flex justify-center items-center scroll-animate delay-200">
              <svg className="w-full max-w-md h-96" viewBox="0 0 400 400">
                {/* Technology - 40% */}
                <path
                  d="M 200 200 L 200 50 A 150 150 0 0 1 344.9 275 Z"
                  fill="#009845"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                {/* Marketing - 30% */}
                <path
                  d="M 200 200 L 344.9 275 A 150 150 0 0 1 125 325 Z"
                  fill="#C7EA46"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                {/* Operations - 20% */}
                <path
                  d="M 200 200 L 125 325 A 150 150 0 0 1 80.1 200 Z"
                  fill="#006B31"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                {/* Team - 10% */}
                <path
                  d="M 200 200 L 80.1 200 A 150 150 0 0 1 200 50 Z"
                  fill="#333333"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />

                {/* Center circle */}
                <circle cx="200" cy="200" r="80" fill="#1a1a1a" />
                <text x="200" y="190" textAnchor="middle" fill="white" className="text-2xl font-bold">
                  Seed Round
                </text>
                <text x="200" y="220" textAnchor="middle" fill="#9ca3af" className="text-lg">
                  ₹2 Cr
                </text>
              </svg>
            </div>

            <div className="space-y-4 scroll-animate delay-300">
              <h3 className="text-3xl font-bold text-white mb-6">Fund Allocation</h3>

              {[
                {
                  category: "Technology Development",
                  percentage: 40,
                  amount: "₹80 Lakhs",
                  items: ["App Enhancement", "AI/ML Integration", "Backend Infrastructure"],
                  color: "from-[#009845] to-[#006B31]"
                },
                {
                  category: "Marketing & Growth",
                  percentage: 30,
                  amount: "₹60 Lakhs",
                  items: ["Digital Marketing", "Brand Building", "User Acquisition"],
                  color: "from-[#C7EA46] to-[#009845]"
                },
                {
                  category: "Operations",
                  percentage: 20,
                  amount: "₹40 Lakhs",
                  items: ["City Expansion", "Partner Onboarding", "Support Team"],
                  color: "from-[#006B31] to-[#009845]"
                },
                {
                  category: "Team Building",
                  percentage: 10,
                  amount: "₹20 Lakhs",
                  items: ["Core Team", "Advisory Board", "Training"],
                  color: "from-[#333333] to-[#009845]"
                }
              ].map((item, i) => (
                <div key={i} className="glass-morphism rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-white">{item.category}</h4>
                    <span className="text-2xl font-black text-white">{item.percentage}%</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-200">{item.amount}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden mb-3">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((subItem, j) => (
                      <span key={j} className="text-xs glass-morphism px-2 py-1 rounded text-gray-200">
                        {subItem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-animate delay-400">
            {[
              { icon: <Target size={24} />, label: "10x Return", sublabel: "Expected in 3 years" },
              { icon: <TrendingUp size={24} />, label: "300% CAGR", sublabel: "Revenue growth" },
              { icon: <Users size={24} />, label: "1M Users", sublabel: "By 2026" },
              { icon: <Globe size={24} />, label: "Pan India", sublabel: "Market presence" }
            ].map((highlight, i) => (
              <div key={i} className="glass-morphism rounded-2xl p-6 border border-white/30 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 glass-morphism rounded-xl mb-3">
                  <div className="text-white">{highlight.icon}</div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{highlight.label}</p>
                <p className="text-gray-200 text-sm">{highlight.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Vision */}
      <section
        ref={el => sectionsRef.current[10] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#009845] rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C7EA46] rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#009845] to-[#C7EA46] mx-auto"></div>
          </div>

          <div className="glass-morphism rounded-3xl p-12 mb-12 scroll-animate delay-200">
            <div className="text-center">
              <Sparkles size={48} className="text-[#C7EA46] mx-auto mb-6 animate-pulse-slow" />
              <p className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                "Empowering sports from{" "}
                <span className="font-black text-gradient">
                  grassroots to global
                </span>"
              </p>
              <p className="text-xl text-gray-300">Building India's largest sports ecosystem by 2030</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe size={40} />,
                title: "Global Reach",
                description: "Expanding to 50+ countries",
                target: "2030",
                color: "from-[#009845] to-[#006B31]"
              },
              {
                icon: <Heart size={40} />,
                title: "Community First",
                description: "Building inclusive ecosystems",
                target: "10M+ Lives",
                color: "from-[#C7EA46] to-[#009845]"
              },
              {
                icon: <Trophy size={40} />,
                title: "Excellence",
                description: "Nurturing future champions",
                target: "1000+ Athletes",
                color: "from-[#006B31] to-[#009845]"
              }
            ].map((vision, i) => (
              <div
                key={i}
                className={`text-center scroll-animate delay-${(i + 3) * 100}`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${vision.color} rounded-2xl mb-6 shadow-2xl animate-float`} style={{ animationDelay: `${i * 0.5}s` }}>
                  <div className="text-white">{vision.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{vision.title}</h3>
                <p className="text-gray-300 mb-3">{vision.description}</p>
                <span className="inline-block px-6 py-2 glass-morphism rounded-full text-white font-bold border border-white/20">
                  {vision.target}
                </span>
              </div>
            ))}
          </div>

          {/* Mission statements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animate delay-600">
            <div className="glass-morphism rounded-2xl p-6 border border-[#009845]/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target size={24} className="mr-2 text-[#009845]" />
                Our Mission
              </h4>
              <p className="text-gray-300 leading-relaxed">
                To democratize sports access and create opportunities for every aspiring athlete in India,
                regardless of their background or location.
              </p>
            </div>

            <div className="glass-morphism rounded-2xl p-6 border border-[#C7EA46]/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Rocket size={24} className="mr-2 text-[#C7EA46]" />
                Our Impact
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Creating sustainable livelihoods for coaches, generating employment, and contributing to
                India's sports economy while building healthier communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: App & Website */}
      <section
        ref={el => sectionsRef.current[11] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(135deg, #009845 0%, #006B31 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Experience <span className="text-[#C7EA46]">Sportitor</span>
            </h2>
            <div className="w-32 h-1 bg-[#C7EA46] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Download our app and start your sports journey today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* App mockups */}
            <div className="relative flex justify-center scroll-animate delay-200">
              <div className="flex space-x-6 justify-center">
                {/* Phone 1 */}
                <div
                  className="relative transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
                  style={{
                    transform: `rotate(-5deg) perspective(1000px) rotateY(${mousePosition.x * 0.3}deg)`
                  }}
                >
                  <div className="w-64 h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                    <div className="h-full bg-gradient-to-br from-[#009845] to-[#C7EA46] rounded-[2.5rem] p-6 flex flex-col">
                      <div className="glass-morphism rounded-2xl p-4 mb-4">
                        <div className="w-full h-32 bg-white/30 rounded-xl mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-white/40 rounded"></div>
                          <div className="h-3 bg-white/40 rounded w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="glass-morphism rounded-xl p-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white/30 rounded-full"></div>
                              <div className="flex-1"><div className="h-2 bg-white/40 rounded w-20 mb-1"></div>
                                <div className="h-2 bg-white/30 rounded w-32"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div
                  className="relative transform rotate-[5deg] hover:rotate-0 transition-transform duration-500 mt-8"
                  style={{
                    transform: `rotate(5deg) perspective(1000px) rotateY(${mousePosition.x * -0.3}deg)`
                  }}
                >
                  <div className="w-64 h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                    <div className="h-full bg-gradient-to-br from-[#C7EA46] to-[#009845] rounded-[2.5rem] p-6">
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <Trophy size={40} className="text-[#009845]" />
                        </div>
                        <h3 className="text-white text-xl font-bold">Sportitor Pro</h3>
                      </div>
                      <div className="space-y-4">
                        {['Book Courts', 'Find Coaches', 'Join Tournaments', 'Track Progress'].map((feature, i) => (
                          <div key={i} className="glass-morphism rounded-xl p-3 flex items-center space-x-3">
                            <CheckCircle size={20} className="text-white flex-shrink-0" />
                            <span className="text-white font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download section */}
            <div className="space-y-8 scroll-animate delay-300">
              <div className="glass-morphism rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto glass-morphism rounded-3xl p-4 mb-6 shadow-2xl animate-pulse-slow">
                    {/* QR Code */}
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <div className="text-6xl">📱</div>
                    </div>
                  </div>
                  <p className="text-xl text-white font-semibold">Scan to Download</p>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-black text-white rounded-2xl p-4 flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors transform hover:scale-105">
                    <Smartphone size={24} />
                    <div className="text-left">
                      <p className="text-xs opacity-80">Download on the</p>
                      <p className="text-lg font-bold">App Store</p>
                    </div>
                  </button>

                  <button className="w-full bg-black text-white rounded-2xl p-4 flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors transform hover:scale-105">
                    <Smartphone size={24} />
                    <div className="text-left">
                      <p className="text-xs opacity-80">Get it on</p>
                      <p className="text-lg font-bold">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Website link */}
              <div className="glass-morphism rounded-2xl p-6 border border-[#C7EA46]/30 text-center">
                <Globe size={32} className="text-[#C7EA46] mx-auto mb-3" />
                <p className="text-gray-200 mb-2">Visit our website</p>
                <a href="#" className="text-3xl font-bold text-white hover:text-[#C7EA46] transition-colors">
                  sportitor.in
                </a>
              </div>

              {/* App stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Download size={20} />, value: "10K+", label: "Downloads" },
                  { icon: <Star size={20} />, value: "4.8", label: "Rating" },
                  { icon: <Users size={20} />, value: "5K+", label: "Active Users" }
                ].map((stat, i) => (
                  <div key={i} className="glass-morphism rounded-xl p-4 text-center hover-lift">
                    <div className="text-[#C7EA46] mb-2 flex justify-center">{stat.icon}</div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-gray-300 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Thank You / Contact */}
      <section
        ref={el => sectionsRef.current[12] = el}
        className="relative min-h-screen flex items-center py-20 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
        }}
      >
        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: Math.random() > 0.5 ? '#009845' : '#C7EA46'
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <div className="mb-8 scroll-animate">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              Team <span className="text-gradient">Sportitor</span>
            </h1>
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#009845] to-transparent mx-auto animate-pulse-slow"></div>
          </div>

          <div className="mb-12 scroll-animate delay-200">
            <p className="text-3xl text-white mb-4">Thank You for Your Time</p>
            <p className="text-xl text-gray-400">Let's revolutionize sports together!</p>
          </div>

          {/* Contact info */}
          <div className="glass-morphism rounded-3xl p-8 mb-8 scroll-animate delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@sportitor.in" className="flex items-center space-x-3 text-gray-300 hover:text-[#C7EA46] transition-colors group">
                    <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center group-hover:bg-[#009845]/20">
                      <Mail size={20} className="text-[#009845]" />
                    </div>
                    <span>contact@sportitor.in</span>
                  </a>
                  <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-300 hover:text-[#C7EA46] transition-colors group">
                    <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center group-hover:bg-[#009845]/20">
                      <Phone size={20} className="text-[#009845]" />
                    </div>
                    <span>+91 98765 43210</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-[#009845]" />
                    </div>
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Linkedin size={24} />, color: "hover:bg-[#009845]/20" },
                    { icon: <Twitter size={24} />, color: "hover:bg-[#C7EA46]/20" },
                    { icon: <Instagram size={24} />, color: "hover:bg-[#009845]/20" },
                    { icon: <Facebook size={24} />, color: "hover:bg-[#C7EA46]/20" },
                    { icon: <Youtube size={24} />, color: "hover:bg-[#009845]/20" }
                  ].map((social, i) => (
                    <button
                      key={i}
                      className={`glass-morphism p-4 rounded-xl text-white ${social.color} transition-all hover-lift`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
                <div className="mt-6 glass-morphism rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#009845]"
                    />
                    <button className="px-6 py-2 bg-gradient-to-r from-[#009845] to-[#C7EA46] rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="scroll-animate delay-400">
            <button className="bg-gradient-to-r from-[#009845] to-[#C7EA46] text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center space-x-3">
              <span>Schedule a Meeting</span>
              <Calendar size={24} />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 scroll-animate delay-500">
            <p className="text-gray-500 text-sm">
              © 2024 Sportitor. All rights reserved. | Empowering Sports from Grassroots to Global
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {scrollProgress > 10 && (
        <button
          onClick={() => scrollToSection(0)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#009845] to-[#C7EA46] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce-in"
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </button>
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjSM1PXLdScHH3fH8N2QPwsVXbTp66hVFAlGn+DyvmwhBjOM1/XKdicHH3fH8N2RPQoVXrPq66hVFApGnt/yvmwhBjSM1/TKdScGIHfH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFApGnt/yvmwhBjSM1/XKdScGH3fH8N2RPQoVXrPq66hWFA==" preload="auto"></audio>
    </div>
  );
};

export default SportitorAdvancedPitchDeck;