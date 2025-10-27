import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Story = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen mt-14 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16" ref={addToRefs}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Project <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A modern learning platform built with cutting-edge technologies, 
            designed to provide the best user experience for online education.
          </p>
        </div>

        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div ref={addToRefs}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">Omar Saber</span> - 17 years old Frontend Developer
              </p>
              <p>
                Passionate about creating beautiful, functional, and user-friendly web applications. 
                I specialize in modern frontend technologies and love bringing designs to life with 
                smooth animations and interactive experiences.
              </p>
              <p>
                At 17, I've dedicated myself to mastering the art of web development, 
                constantly learning and experimenting with new technologies to push the 
                boundaries of what's possible in the browser.
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link 
                to="/courses" 
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Explore Courses
              </Link>
              <a 
                href="mailto:omar1saber23@gmail.com" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" ref={addToRefs}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Learning</h3>
              <p className="text-sm text-gray-600">Quick to adapt and master new technologies</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Creative</h3>
              <p className="text-sm text-gray-600">Innovative solutions and unique designs</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Problem Solver</h3>
              <p className="text-sm text-gray-600">Effective debugging and optimization</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-sm text-gray-600">Mobile-first approach</p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" ref={addToRefs}>
            Technologies Used
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Technologies */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200" ref={addToRefs}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Frontend Technologies
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'React', level: 'Advanced', color: 'bg-blue-100 text-blue-800' },
                  { name: 'JavaScript (ES6+)', level: 'Advanced', color: 'bg-yellow-100 text-yellow-800' },
                  { name: 'HTML5', level: 'Expert', color: 'bg-orange-100 text-orange-800' },
                  { name: 'CSS3', level: 'Expert', color: 'bg-blue-100 text-blue-800' },
                  { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-cyan-100 text-cyan-800' },
                ].map((tech, index) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Animation & 3D */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200" ref={addToRefs}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎬</span>
                Animation & 3D
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'GSAP', level: 'Intermediate', color: 'bg-green-100 text-green-800' },
                  { name: 'Three.js', level: 'Learning', color: 'bg-gray-100 text-gray-800' },
                  { name: 'Framer Motion', level: 'Basic', color: 'bg-purple-100 text-purple-800' },
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Libraries */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200" ref={addToRefs}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                UI Libraries
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Material-UI (MUI)', level: 'Intermediate', color: 'bg-blue-100 text-blue-800' },
                  { name: 'Headless UI', level: 'Basic', color: 'bg-gray-100 text-gray-800' },
                  { name: 'React Router', level: 'Advanced', color: 'bg-pink-100 text-pink-800' },
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" ref={addToRefs}>
            Project Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Modern Design',
                description: 'Clean, responsive design with smooth animations and intuitive user interface'
              },
              {
                icon: '⚡',
                title: 'Fast Performance',
                description: 'Optimized loading times and smooth interactions for better user experience'
              },
              {
                icon: '📱',
                title: 'Mobile First',
                description: 'Fully responsive design that works perfectly on all devices'
              },
              {
                icon: '🎨',
                title: 'Custom Animations',
                description: 'GSAP and CSS animations for engaging user interactions'
              },
              {
                icon: '🔍',
                title: 'Advanced Search',
                description: 'Smart search functionality with real-time filtering'
              },
              {
                icon: '🛠️',
                title: 'Modular Architecture',
                description: 'Clean, maintainable code with reusable components'
              },
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                ref={addToRefs}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8" ref={addToRefs}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Future Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Coming Soon</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Backend integration with Node.js & MongoDB
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  User authentication & profiles
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Video streaming for courses
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Payment integration
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Learning Goals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Master Three.js for 3D web experiences
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Deep dive into advanced GSAP animations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Learn backend development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Explore AI/ML integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" ref={addToRefs}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out the courses I've built this platform for and experience the modern learning interface.
          </p>
          <Link 
            to="/courses" 
            className="inline-block px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Courses
          </Link>
        </div>

      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Story;