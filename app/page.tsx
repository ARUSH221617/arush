"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Instagram,
  DollarSign,
  Github,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  LogIn,
  UserPlus,
  Code,
  Mail,
  Briefcase,
  Cpu,
  Globe,
  Smartphone,
  Database,
  Server,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import * as SimpleIcons from 'simple-icons';

// Skill data
const skills = [
  { name: 'JavaScript', icon: SimpleIcons.siJavascript, progress: 90, description: 'Proficient in modern JavaScript, including ES6+ features.' },
  { name: 'TypeScript', icon: SimpleIcons.siTypescript, progress: 85, description: 'Strong typing skills with TypeScript for large-scale applications.' },
  { name: 'React', icon: SimpleIcons.siReact, progress: 95, description: 'Expert in React, including hooks, context, and state management.' },
  { name: 'Node.js', icon: SimpleIcons.siNodedotjs, progress: 88, description: 'Experienced in server-side JavaScript with Node.js and Express.' },
  { name: 'MongoDB', icon: SimpleIcons.siMongodb, progress: 80, description: 'Skilled in NoSQL database design and operations with MongoDB.' },
  { name: 'PostgreSQL', icon: SimpleIcons.siPostgresql, progress: 75, description: 'Proficient in relational database management with PostgreSQL.' },
  { name: 'GraphQL', icon: SimpleIcons.siGraphql, progress: 70, description: 'Experienced in designing and implementing GraphQL APIs.' },
  { name: 'Docker', icon: SimpleIcons.siDocker, progress: 65, description: 'Familiar with containerization and deployment using Docker.' },
];

// Blog post data
const blogPosts = [
  { title: 'The Future of Web Development', date: '2024-03-15', excerpt: 'Exploring upcoming trends and technologies in web development.' },
  { title: 'Mastering React Hooks', date: '2024-02-28', excerpt: 'A deep dive into advanced React Hook patterns and best practices.' },
  { title: 'Building Scalable APIs with GraphQL', date: '2024-02-10', excerpt: 'Learn how to design and implement efficient GraphQL APIs for your projects.' },
  { title: 'The Power of TypeScript in Large-Scale Applications', date: '2024-01-22', excerpt: 'Discover how TypeScript can improve your development workflow and reduce bugs.' },
];

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 fill-current text-gray-700 dark:text-gray-300"
        >
          <path d={skill.icon.path} />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
          </div>
          <p className="text-white text-center text-sm">{skill.description}</p>
        </div>
      )}
    </div>
  );
}

function BlogPostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.date}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
      <a href="#" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 inline-flex items-center">
        Read More <ArrowRight size={16} className="ml-2" />
      </a>
    </div>
  );
}

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isDarkTheme && "dark"}`}>
      <div
        className={`min-h-screen bg-[#ccc] text-black dark:bg-gray-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300`}
      >
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div
              className={`w-64 h-full bg-white dark:bg-gray-800 p-6 transition-transform duration-300 transform translate-x-0`}
            >
              <div className="flex justify-between items-center mb-6">
                <button onClick={toggleTheme} className="text-2xl">
                  {isDarkTheme ? <Sun /> : <Moon />}
                </button>
                <button onClick={toggleMenu} className="text-2xl">
                  <X />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:text-red-600 transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-red-600 transition-colors">
                  About
                </a>
                <a href="#services" className="hover:text-red-600 transition-colors">
                  Services
                </a>
                <a href="#skills" className="hover:text-red-600 transition-colors">
                  Skills
                </a>
                <a href="#portfolio" className="hover:text-red-600 transition-colors">
                  Portfolio
                </a>
                <a href="#blog" className="hover:text-red-600 transition-colors">
                  Blog
                </a>
                <a href="#contact" className="hover:text-red-600 transition-colors">
                  Contact
                </a>
              </nav>
              <div className="mt-auto pt-6">
                <button className="w-full py-2 px-4 bg-red-600 text-white rounded mb-2 flex items-center justify-center">
                  <LogIn className="mr-2" size={18} /> Login
                </button>
                <button className="w-full py-2 px-4 bg-gray-200 text-black rounded flex items-center justify-center">
                  <UserPlus className="mr-2" size={18} /> Register
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="w-full">
          {/* Hero Section */}
          <section className={`bg-[#C81324] text-white dark:text-black relative h-screen`}>
            <header className="flex justify-between items-center p-6 pb-0 w-full">
              <h1
                className="text-[16px] font-gotham"
                style={{ lineHeight: "95%", letterSpacing: "5%" }}
              >
                ARUSH
              </h1>
              <button
                className="dark:text-white text-black focus:outline-none"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <svg
                  width="33"
                  height="18"
                  viewBox="0 0 33 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    width="32.25"
                    height="2"
                    rx="1"
                    fill="#060606"
                  />
                  <rect
                    x="0.75"
                    y="8"
                    width="32.25"
                    height="2"
                    rx="1"
                    fill="#060606"
                  />
                  <rect
                    x="0.75"
                    y="16"
                    width="23"
                    height="2"
                    rx="1"
                    fill="#060606"
                  />
                </svg>
              </button>
            </header>

            <div className="container mx-auto">
              <h2
                className="text-[250px] uppercase font-biggerDisplay"
                style={{ lineHeight: "82%", letterSpacing: "2%" }}
              >
                ARUSH
                <span className="inline-block">
                  <Code
                    size={250}
                    style={{ lineHeight: "82%", letterSpacing: "2%" }}
                  />
                </span>
                Full Stack Developer
              </h2>
            </div>

            <div className="flex flex-col justify-center items-start container mx-auto">
              <p className="text-sm max-w-md text-center">
                Everyone carries a shadow, and acknowledging it is the path to
                wholeness. Will you embrace the full spectrum of your being?
              </p>
            </div>

            {/* Parallax Text Animation */}
            <div 
              ref={parallaxRef}
              className="absolute left-0 right-0 text-center text-white text-opacity-10 text-[200px] font-bold uppercase whitespace-nowrap overflow-hidden"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                top: '50%',
              }}
            >
              Innovate Create Develop
            </div>

            {/* Author Section */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg max-w-sm flex flex-row">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Arush"
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">Arush</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                  Passionate about creating innovative web solutions and pushing the boundaries of what's possible in web development.
                </p>
                <a
                  href="mailto:arush@example.com"
                  className="inline-flex items-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 absolute bottom-6 left-6">
              <a
                href="#"
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } hover:text-red-600 transition-colors`}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } hover:text-red-600 transition-colors`}
                aria-label="Patreon"
              >
                <DollarSign size={24} />
              </a>
              <a
                href="#"
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } hover:text-red-600 transition-colors`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>

            {/* Decorative Image */}
            <div className="absolute bottom-0 right-0 w-[606px] h-[606px]">
              <Image
                src={require("./assets/images/red-remove 1.png")}
                alt="Edgy character illustration"
                className="aspect-square absolute bottom-0 end-0 w-[606px] h-[606px] object-cover"
              />
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Arush"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <p className="text-lg mb-4">
                    Hi, I'm Arush, a passionate Full Stack Developer with a keen interest in creating innovative web solutions. With years of experience in both front-end and back-end development, I  strive to build applications that are not only functional but also user-friendly and scalable.
                  </p>
                  <p className="text-lg mb-4">
                    My journey in web development started with a fascination for how things work on the internet. This curiosity led me to dive deep into various technologies and frameworks, constantly learning and adapting to the ever-evolving world of web development.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community meetups.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-red-600 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">My Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <Briefcase className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p>Custom web applications tailored to your specific needs, built with the latest technologies and best practices.</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <Smartphone className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                  <p>Cross-platform mobile applications that provide a seamless experience across iOS and Android devices.</p>
                </div>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <Server className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                  <p>Robust and scalable server-side solutions, APIs, and database management to power your applications.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">My Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=Project ${item}`}
                      alt={`Project ${item}`}
                      width={300}
                      height={200}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of the project and its key features.</p>
                      <div className="flex justify-between">
                        <a href="#" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">View Project</a>
                        <a href="#" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">Source Code</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20 bg-red-600 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
              </div>
              <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                  View All Posts <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Arush</h3>
                <p className="mb-4">Full Stack Developer passionate about creating innovative web solutions.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <DollarSign size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                </nav>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact</h4>
                <p className="mb-2">Email: arush@example.com</p>
                <p className="mb-2">Phone: +1 (123) 456-7890</p>
                <p>Location: New York, NY</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; 2024 Arush. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll Down Button */}
        <button
          className={`fixed bottom-6 right-6 ${
            isDarkTheme ? "bg-white text-black" : "bg-black text-white"
          } rounded-full p-2 hover:bg-gray-800 hover:text-white transition-colors focus:outline-none`}
          aria-label="Scroll down"
          onClick={() => {
            window.scrollTo({
              top: window.outerHeight,
              behavior: "smooth",
            });
          }}
        >
          <ChevronDown size={24} />
        </button>
      
      </div>
    </div>
  );
}

export default LandingPage;