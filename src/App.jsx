import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, MapPin } from 'lucide-react';
import HarmonicGrid from './HarmonicGrid';

// Google Fonts imports
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const playfairFontLink = document.createElement('link');
playfairFontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
playfairFontLink.rel = 'stylesheet';
document.head.appendChild(playfairFontLink);

const indieFontLink = document.createElement('link');
indieFontLink.href = 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap';
indieFontLink.rel = 'stylesheet';
document.head.appendChild(indieFontLink);

const dancingFontLink = document.createElement('link');
dancingFontLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
dancingFontLink.rel = 'stylesheet';
document.head.appendChild(dancingFontLink);

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

  // ========== EXPERIENCE ===========
const experiences = [
  {
    company: "Siemens Industry Software (India)",
    period: "May 2023 – Jul 2023",
    role: "Software Developer Intern",
    location: "Pune, India",
    details: [
      "Improved Spring Boot pipeline throughput by 15% via async patterns, SQL plan optimization.",
      "Debugged 5+ automation workflows, reducing backend failures by 12%.",
      "Validated 10+ REST APIs, built unit tests, ensured Agile delivery w/ Git/JIRA."
    ]
  },
  {
    company: "Persistent Systems",
    period: "Jun 2022 – Aug 2022",
    role: "Software Developer Intern",
    location: "Pune, India",
    details: [
      "Provisioned auto-scaling EC2+NLB infra with Terraform, 99.9% uptime.",
      "Reduced AWS cost by 20% via compute tuning using CloudWatch.",
      "Ensured zero-downtime rollouts in multi-env CI/CD pipeline."
    ]
  },
  {
    company: "CakeSoft Technologies",
    period: "Oct 2021 – Feb 2022",
    role: "Full Stack Developer Intern",
    location: "Pune, India",
    details: [
      "Developed Puppeteer scraping engine (Node.js) for 5K+ LinkedIn profiles.",
      "Automated lead-gen workflows with React, MongoDB, async scraping."
    ]
  },
  {
    company: "UPSC Civil Services Preparation",
    period: "Aug 2023 – May 2025",
    role: "",
    location: "",
    details: [
      "Trained in deep work, fast learning, and high-pressure decisions — now applying them to real-world tech."
    ]
  }
];

  const projects = [
    {
      title: "Async Notification System with Retry + Rate Limit",
      description: "Event-driven Spring Boot + AWS SQS FIFO + Redis system for high-volume, fault-tolerant notification delivery, featuring token bucket rate limiting and exponential backoff (10K+/day, <0.1% loss).",
      tech: ["Java 21", "Spring Boot", "Redis", "AWS SQS FIFO", "Docker", "PostgreSQL"],
      links: { github: "https://github.com/samarsinh25/async-notifier" }
    },
    {
      title: "Multi-Tenant RBAC Microservice (Golang)",
      description: "Production-grade RBAC backend (Golang, PostgreSQL, Redis) enabling 100+ tenant isolation, 10K+ req/min throughput, and 60% auth latency reduction.",
      tech: ["Go", "Gin", "PostgreSQL", "Redis", "gRPC", "Docker", "JWT", "Swagger"],
      links: { github: "https://github.com/samarsinh25/multitenant-RBAC" }
    },
    {
      title: "Authed S3 File Access Service",
      description: "Golang backend providing secure, token-based access to S3 files with time-bound presigned URLs. Supports role-based visibility, tenant isolation, and temporary document access use cases.",
      tech: ["Go", "S3", "JWT", "Presigned URLs", "RBAC", "PostgreSQL"],
      links: { github: "https://github.com/samarsinh25/Authed-S3-Service" }
    },
    {
      title: "Engineering Memory Agent (LLM-powered)",
      description: "LLM-driven DevOps Co-Pilot indexing logs + internal wiki into vector DBs for contextual recall, infra debugging, and team knowledge continuity. Think ChatGPT for your org's backend + pipelines.",
      tech: ["Python", "LangChain", "LLMs", "Redis", "Chroma", "FastAPI", "Docker"],
      links: { github: "https://github.com/samarsinh25/engineering-memory-agent" }
    },
    {
      title: "Research Paper Summarization using NLP",
      description: "AI-powered web app for summarizing dense research using T5, Seq2Seq, LSA; achieved 60%+ time savings across 100+ arXiv/PubMed texts.",
      tech: ["Python", "React", "Flask", "Huggingface", "NLTK"],
      links: { github: "https://www.irejournals.com/paper-details/1704569" }
    }
  ];


  const skills = {
    "Languages": ["C++", "Go", "Java", "Python", "JavaScript"],
    "Backend": ["Spring Boot", "Gin (Go)", "REST", "gRPC", "JWT", "Docker", "Terraform"],
    "Databases & Caching": ["PostgreSQL", "Redis", "MySQL", "MongoDB"],
    "Cloud & DevOps": ["AWS", "GitHub Actions", "Bash", "Swagger", "CI/CD"],
    "Frontend": ["React.js", "HTML", "CSS"],
    "Tools": ["Git", "Postman", "IntelliJ", "Chrome DevTools"]
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${darkMode ? 'bg-black text-green-400' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
              style={{ fontFamily: 'Dancing Script, cursive', letterSpacing: '2px' }}
            >
              ~samarsinh
            </h1>
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
              <HarmonicGrid />
            </div>
          </div>
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
  Computer Engineering grad with multi-domain SDE internships at Siemens, Persistent, CakeSoft. 
  Fast learner; ships maintainable, scalable code across backend (Go, Spring Boot), cloud and full-stack systems.
  Passionate about system design, automation, AI for real impact. Always open to tough problems and fast learning.
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

            {/* NEW SOCIAL LINKS */}
            <a href="https://x.com/thisisss25/" target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
              <ExternalLink size={16} />
              twitter
            </a>
            <a href="https://www.goodreads.com/user/show/190417579-samarsinh-salunkhe" target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
              <ExternalLink size={16} />
              goodreads
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
                {exp.details && exp.details.length > 0 && (
                  <ul className={`ml-6 mt-2 mb-1 list-disc ${darkMode ? 'text-green-300' : 'text-gray-600'} text-xs`}>
                    {exp.details.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
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
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className={`text-xs ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-800'} underline`}>
                      source
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