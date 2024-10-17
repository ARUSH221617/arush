"use client";

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
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
  Smartphone,
  Server,
  ArrowRight,
  ArrowLeft,
  Send,
  Phone,
} from "lucide-react";
import Image from "next/image";
import * as SimpleIcons from "simple-icons";
import { useInView } from "react-intersection-observer";

// Lazy-loaded components
const SkillCard = lazy(() => import('./components/SkillCard'));
const BlogPostCard = lazy(() => import('./components/BlogPostCard'));

// Skill data
const skills = [
  {
    name: "JavaScript",
    icon: SimpleIcons.siJavascript,
    progress: 90,
    description: "Proficient in modern JavaScript, including ES6+ features.",
  },
  {
    name: "TypeScript",
    icon: SimpleIcons.siTypescript,
    progress: 85,
    description:
      "Strong typing skills with TypeScript for large-scale applications.",
  },
  {
    name: "React",
    icon: SimpleIcons.siReact,
    progress: 95,
    description:
      "Expert in React, including hooks, context, and state management.",
  },
  {
    name: "Node.js",
    icon: SimpleIcons.siNodedotjs,
    progress: 88,
    description:
      "Experienced in server-side JavaScript with Node.js and Express.",
  },
  {
    name: "MongoDB",
    icon: SimpleIcons.siMongodb,
    progress: 80,
    description:
      "Skilled in NoSQL database design and operations with MongoDB.",
  },
  {
    name: "PostgreSQL",
    icon: SimpleIcons.siPostgresql,
    progress: 75,
    description:
      "Proficient in relational database management with PostgreSQL.",
  },
  {
    name: "GraphQL",
    icon: SimpleIcons.siGraphql,
    progress: 70,
    description: "Experienced in designing and implementing GraphQL APIs.",
  },
  {
    name: "Docker",
    icon: SimpleIcons.siDocker,
    progress: 65,
    description: "Familiar with containerization and deployment using Docker.",
  },
];

// Blog post data
const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "2024-03-15",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    thumbnail: "/placeholder.svg?height=100&width=100&text=Web Dev",
  },
  {
    title: "Mastering React Hooks",
    date: "2024-02-28",
    excerpt:
      "A deep dive into advanced React Hook patterns and best practices.",
    thumbnail: "/placeholder.svg?height=100&width=100&text=React",
  },
  {
    title: "Building Scalable APIs with GraphQL",
    date: "2024-02-10",
    excerpt:
      "Learn how to design and implement efficient GraphQL APIs for your projects.",
    thumbnail: "/placeholder.svg?height=100&width=100&text=GraphQL",
  },
  {
    title: "The Power of TypeScript in Large-Scale Applications",
    date: "2024-01-22",
    excerpt:
      "Discover how TypeScript can improve your development workflow and reduce bugs.",
    thumbnail: "/placeholder.svg?height=100&width=100&text=TypeScript",
  },
];

function ParallaxText({ children, speed = 0.5 }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, speed]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div
        className="transform transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}

function ImageWithLoader({ src, alt, width, height, className }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentBlogPost, setCurrentBlogPost] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const parallaxRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Simulating page load
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextBlogPost = () => {
    setCurrentBlogPost((prev) => (prev + 1) % blogPosts.length);
  };

  const prevBlogPost = () => {
    setCurrentBlogPost(
      (prev) => (prev - 1 + blogPosts.length) % blogPosts.length
    );
  };

  return (
    <div className={`${isDarkTheme ? "dark" : ""} ltr`}>
      <style jsx global>{`
        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Smooth Scroll Behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes moveText {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes loadingPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 1s ease-out;
        }

        .animate-moveText {
          animation: moveText 1s ease-out;
        }

        .animate-loadingPulse {
          animation: loadingPulse 1.5s infinite;
        }
      `}</style>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="text-4xl font-bold text-red-600 animate-loadingPulse">
              Loading...
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="w-64 h-full bg-white dark:bg-gray-800 p-6 transition-transform duration-300 transform translate-x-0">
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
                <a
                  href="#about"
                  className="hover:text-red-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#skills"
                  className="hover:text-red-600 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-red-600 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#blog"
                  className="hover:text-red-600 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="hover:text-red-600 transition-colors"
                >
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
          <section className="bg-red-600 text-white dark:text-white relative h-screen flex flex-col justify-center animate-fadeIn">
            <header className="flex justify-between items-center p-6 pb-0 w-full absolute top-0 left-0 right-0">
              <h1
                className="text-[16px] font-gotham animate-moveText"
                style={{ lineHeight: "95%", letterSpacing: "5%" }}
              >
                ARUSH
              </h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="text-2xl focus:outline-none"
                  aria-label={
                    isDarkTheme ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDarkTheme ? <Sun /> : <Moon />}
                </button>
                <button
                  className="dark:text-white text-white focus:outline-none"
                  onClick={toggleMenu}
                  aria-label="Menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </header>

            <div className="container mx-auto px-4 mt-20">
              <ParallaxText speed={0.3}>
                <h2
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-[250px] uppercase font-biggerDisplay leading-none mb-4 animate-moveText"
                  style={{ letterSpacing: "2%" }}
                >
                  ARUSH
                  <span className="inline-block">
                    <Code
                      size={48}
                      className="sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-48 lg:h-48"
                    />
                  </span>
                  Full Stack Developer
                </h2>
              </ParallaxText>
            </div>

            <div className="flex flex-col justify-center items-start container mx-auto px-4">
              <ParallaxText speed={0.5}>
                <p
                  className="text-sm max-w-md text-center mb-8 animate-slideIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  Everyone carries a shadow, and acknowledging it is the path to
                  wholeness. Will you embrace the full spectrum of your being?
                </p>
              </ParallaxText>
            </div>

            {/* Parallax Text Animation */}
            <div
              ref={parallaxRef}
              className="absolute left-0 right-0 text-center text-white text-opacity-10 text-4xl sm:text-6xl md:text-8xl lg:text-[200px] font-bold uppercase whitespace-nowrap overflow-hidden"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                top: "50%",
              }}
            >
              Innovate Create Develop
            </div>

            {/* Author Section */}
            <div
              className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm hidden lg:block animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-4">
                <ImageWithLoader
                  src="/placeholder.svg?height=80&width=80"
                  alt="Arush"
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    Arush
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                Passionate about creating innovative web solutions and pushing
                the boundaries of what's possible in web development.
              </p>
              <a
                href="mailto:arush@example.com"
                className="inline-flex items-center text-red-600  hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div
              className="flex space-x-4 absolute bottom-6 start-6 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors"
                aria-label="Patreon"
              >
                <DollarSign size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>

            {/* Decorative Image */}
            <div
              className="absolute bottom-0 end-0 w-fit h-fit animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <Image
                src={require("./assets/images/red-remove 1.png")}
                alt="Edgy character illustration"
                className="aspect-square w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-[606px] lg:h-[606px]"
              />
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  About Me
                </h2>
              </ParallaxText>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                  <ImageWithLoader
                    src="/placeholder.svg?height=400&width=400"
                    alt="Arush"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
                <div
                  className="md:w-1/2 md:pl-8 animate-slideIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  <ParallaxText speed={0.2}>
                    <p className="text-lg mb-4">
                      Hi, I'm Arush, a passionate Full Stack Developer with a
                      keen interest in creating innovative web solutions. With
                      years of experience in both front-end and back-end
                      development, I strive to build applications that are not
                      only functional but also user-friendly and scalable.
                    </p>
                    <p className="text-lg mb-4">
                      My journey in web development started with a fascination
                      for how things work on the internet. This curiosity led me
                      to dive deep into various technologies and frameworks,
                      constantly learning and adapting to the ever-evolving
                      world of web development.
                    </p>
                    <p className="text-lg">
                      When I'm not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing my knowledge through blog posts and community
                      meetups.
                    </p>
                  </ParallaxText>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-red-600 text-white">
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  My Services
                </h2>
              </ParallaxText>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                  <ImageWithLoader
                    src="/placeholder.svg?height=400&width=400&text=Services"
                    alt="Services"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="grid grid-cols-1 gap-8">
                    <ParallaxText speed={0.3}>
                      <div
                        className="bg-white text-black p-6 rounded-lg shadow-lg animate-slideIn"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <Briefcase className="w-12 h-12 text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                          Web Development
                        </h3>
                        <p>
                          Custom web applications tailored to your specific
                          needs, built with the latest technologies and best
                          practices.
                        </p>
                      </div>
                    </ParallaxText>
                    <ParallaxText speed={0.4}>
                      <div
                        className="bg-white text-black p-6 rounded-lg shadow-lg animate-slideIn"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <Smartphone className="w-12 h-12 text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                          Mobile App Development
                        </h3>
                        <p>
                          Cross-platform mobile applications that provide a
                          seamless experience across iOS and Android devices.
                        </p>
                      </div>
                    </ParallaxText>
                    <ParallaxText speed={0.5}>
                      <div
                        className="bg-white text-black p-6 rounded-lg shadow-lg animate-slideIn"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <Server className="w-12 h-12 text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                          Backend Development
                        </h3>
                        <p>
                          Robust and scalable server-side solutions, APIs, and
                          database management to power your applications.
                        </p>
                      </div>
                    </ParallaxText>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  My Skills
                </h2>
              </ParallaxText>
              <div className="flex flex-col items-center mb-8 animate-fadeIn">
                <ImageWithLoader
                  src="/placeholder.svg?height=200&width=200&text=Skills"
                  alt="Skills"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <Suspense
                    key={index}
                    fallback={
                      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-40 rounded-lg"></div>
                    }
                  >
                    <ParallaxText speed={0.2 + index * 0.05}>
                      <div
                        className="animate-slideIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <SkillCard skill={skill} />
                      </div>
                    </ParallaxText>
                  </Suspense>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="py-20 bg-gray-100 dark:bg-gray-700"
          >
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  My Portfolio
                </h2>
              </ParallaxText>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ParallaxText key={item} speed={0.3}>
                    <div
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-fadeIn"
                      style={{ animationDelay: `${item * 0.1}s` }}
                    >
                      <ImageWithLoader
                        src={`/placeholder.svg?height=200&width=300&text=Project ${item}`}
                        alt={`Project ${item}`}
                        width={300}
                        height={200}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">
                          Project {item}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          A brief description of the project and its key
                          features.
                        </p>
                        <div className="flex justify-between">
                          <a
                            href="#"
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            View Project
                          </a>
                          <a
                            href="#"
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </ParallaxText>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20 bg-red-600 text-white">
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  Latest Blog Posts
                </h2>
              </ParallaxText>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentBlogPost * 100}%)`,
                    }}
                  >
                    {[...blogPosts, ...blogPosts, ...blogPosts].map(
                      (post, index) => (
                        <Suspense
                          key={index}
                          fallback={
                            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-40 rounded-lg"></div>
                          }
                        >
                          <div className="w-full flex-shrink-0 px-4 sm:w-1/3">
                            <BlogPostCard post={post} />
                          </div>
                        </Suspense>
                      )
                    )}
                  </div>
                </div>
                <button
                  onClick={prevBlogPost}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-red-600 rounded-full p-2 shadow-lg"
                  aria-label="Previous blog post"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextBlogPost}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-red-600 rounded-full p-2 shadow-lg"
                  aria-label="Next blog post"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
              <div className="text-center mt-12">
                <a
                  href="#"
                  className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors animate-fadeIn"
                >
                  View All Posts <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  Contact Me
                </h2>
              </ParallaxText>
              <div className="max-w-lg mx-auto">
                <div className="mb-8 animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                  <p className="mb-2 flex items-center">
                    <Mail className="mr-2" /> Email: arush@example.com
                  </p>
                  <p className="mb-2 flex items-center">
                    <Phone className="mr-2" /> Phone: +1 (123) 456-7890
                  </p>
                </div>
                <form
                  className="space-y-4 animate-slideIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section
            id="newsletter"
            className="py-20 bg-gray-100 dark:bg-gray-700"
          >
            <div className="container mx-auto px-4">
              <ParallaxText>
                <h2 className="text-4xl font-bold mb-8 text-center animate-slideIn">
                  Join My Newsletter
                </h2>
              </ParallaxText>
              <div
                className="max-w-lg mx-auto animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white py-2 px-4 rounded-r-md hover:bg-red-700 transition-colors flex items-center"
                  >
                    Subscribe <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Arush</h3>
                <p className="mb-4">
                  Full Stack Developer passionate about creating innovative web
                  solutions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <DollarSign size={24} />
                  </a>
                </div>
              </div>
              <div
                className="animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </nav>
              </div>
              <div
                className="animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
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
          className="fixed bottom-6 right-6 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors focus:outline-none animate-fadeIn"
          style={{ animationDelay: "1s" }}
          aria-label="Scroll down"
          onClick={() => {
            window.scrollTo({
              top: window.scrollY,
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
