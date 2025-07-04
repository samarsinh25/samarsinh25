import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, BookOpen, Coffee, Code, MapPin, Heart, Music, Camera, Gamepad2, Mountain, Palette } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const experiences = [
    {
      company: "Civil Services Prep (UPSC)",
      period: "jul-2023 – may-2025",
      role: "full-time preparation",
      location: "delhi, india"
    },
    {
      company: "Siemens Industry Software",
      period: "may-2022 – jul-2022", 
      role: "software developer intern",
      location: "pune, india"
    },
    {
      company: "Persistent Systems",
      period: "jun-2022 – jul-2022",
      role: "cloud & backend intern", 
      location: "pune, india"
    },
    {
      company: "CakeSoft Technologies",
      period: "oct-2021 – feb-2022",
      role: "full stack developer intern",
      location: "pune, india"
    }
  ];

  const projects = [
    {
      title: "multi-tenant rbac microservice",
      description: "golang microservice with 60% auth latency reduction, 100+ tenant support",
      tech: ["golang", "postgresql", "redis", "docker", "jwt"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "secure s3 upload service", 
      description: "pre-signed url service with role-based permissions, 70% faster integration",
      tech: ["golang", "aws s3", "iam", "jwt"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "llm-powered memory agent",
      description: "rag agent for engineering queries, 92% accuracy, 40% less context switching",
      tech: ["python", "langchain", "weaviate", "openai", "fastapi"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "research paper summarization",
      description: "nlp tool for automatic paper summaries, 60% time savings",
      tech: ["python", "nltk", "react", "flask"],
      links: { github: "#", demo: "#" }
    }
  ];

  const skills = {
    "languages": ["c++", "go", "python", "javascript", "java"],
    "backend": ["gin", "fiber", "node.js", "express.js", "grpc"],
    "frontend": ["react.js", "tailwindcss", "zustand"],
    "cloud": ["aws", "docker", "terraform", "kubernetes"],
    "databases": ["postgresql", "redis", "mysql", "mongodb"],
    "ai/ml": ["langchain", "transformers", "cnns", "rnns"]
  };

  const books = [
    { title: "the pragmatic programmer", author: "david thomas", status: "reading" },
    { title: "designing data-intensive applications", author: "martin kleppmann", status: "completed" },
    { title: "clean architecture", author: "robert c. martin", status: "completed" },
    { title: "system design interview", author: "alex xu", status: "reading" },
    { title: "sapiens", author: "yuval noah harari", status: "completed" },
    { title: "atomic habits", author: "james clear", status: "reading" }
  ];

  const hobbies = [
    { name: "reading", icon: BookOpen, description: "philosophy, sci-fi, tech books" },
    { name: "music", icon: Music, description: "lo-fi, classical, indie rock" },
    { name: "photography", icon: Camera, description: "street photography, landscapes" },
    { name: "gaming", icon: Gamepad2, description: "strategy games, indie titles" },
    { name: "hiking", icon: Mountain, description: "weekend trails, nature walks" },
    { name: "art", icon: Palette, description: "digital art, sketching" }
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${darkMode ? 'bg-black text-green-400' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">~yagna</h1>
          <button
            onClick={toggleDarkMode}
            className={`px-3 py-1 border rounded text-sm transition-colors ${
              darkMode 
                ? 'border-green-400 hover:bg-green-400 hover:text-black' 
                : 'border-black hover:bg-black hover:text-white'
            }`}
          >
            {darkMode ? 'light' : 'dark'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-12">
        {/* Intro */}
        <section className="mb-12">
          <div className="mb-6">
            <p className={`text-lg mb-4 ${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
              hi there
            </p>
            <p className={`mb-4 ${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
              i am samarsinh salunkhe, a computer engineering graduate from pict, pune.
              currently balancing upsc preparation with building cool tech stuff.
            </p>
            <p className={`mb-4 ${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
              i build scalable backend systems, work with ai/ml, and enjoy solving complex problems.
              my projects have achieved real impact - from 60% latency reduction to 92% ai accuracy.
            </p>
            <p className={`${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
              i should not talk so much about myself if there were anybody else whom i knew well.
            </p>
          </div>
          
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/samarsinh25" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center gap-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
              <Github size={16} />
              github
            </a>
            <a href="https://linkedin.com/in/samarsinh25" target="_blank" rel="noopener noreferrer"
               className={`flex items-center gap-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
              <Linkedin size={16} />
              linkedin
            </a>
            <a href="mailto:samarsinh25@gmail.com"
               className={`flex items-center gap-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
              <Mail size={16} />
              email
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6">work experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-semibold">{exp.company}</h3>
                    <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>{exp.role}</p>
                    <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-gray-500'}`}>{exp.location}</p>
                  </div>
                  <span className={`text-xs mt-1 sm:mt-0 ${darkMode ? 'text-green-300' : 'text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6">projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.links.github} className={`text-xs ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
                      source
                    </a>
                    <a href={project.links.demo} className={`text-xs ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
                      demo
                    </a>
                  </div>
                </div>
                <p className={`text-sm mb-2 ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`text-xs px-2 py-1 rounded ${
                      darkMode ? 'bg-green-900 text-green-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6">technical skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
                <h3 className="font-semibold mb-2">{category}</h3>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((skill, index) => (
                    <span key={index} className={`text-xs ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>
                      {skill}{index < skillList.length - 1 && ','}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reading List */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6">reading list</h2>
          <div className="space-y-2">
            {books.map((book, index) => (
              <div key={index} className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm">{book.title}</h3>
                    <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>
                      by {book.author}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    book.status === 'completed' 
                      ? (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                      : (darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                  }`}>
                    {book.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6">hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby, index) => (
              <div key={index} className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <hobby.icon size={16} />
                  <h3 className="font-semibold text-sm">{hobby.name}</h3>
                </div>
                <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg font-bold mb-6">get in touch</h2>
          <div className={`border-l-2 pl-4 ${darkMode ? 'border-green-400' : 'border-gray-300'}`}>
            <p className={`text-sm mb-3 ${darkMode ? 'text-green-300' : 'text-gray-600'}`}>
              i'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} />
              <span>pune, maharashtra, india</span>
            </div>
            <p className={`text-xs mt-2 ${darkMode ? 'text-green-300' : 'text-gray-500'}`}>
              available for remote work & open to relocation
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t px-6 py-4 text-center text-xs ${darkMode ? 'border-green-400 text-green-300' : 'border-gray-300 text-gray-500'}`}>
        <p>© 2025 samarsinh salunkhe. built with react.</p>
      </footer>
    </div>
  );
};




export default Portfolio;