'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, Loader2, Github, Linkedin, Twitter, Instagram, Menu, X, Code, Smartphone, Globe } from 'lucide-react'
import Image from 'next/image'
import { Parallax } from 'react-parallax'
import Head from 'next/head'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for user's preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    // Apply dark mode class to body and save preference
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
        <Loader2 className="w-16 h-16 text-red-600 animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Amir Reza Uneszadeh Shirazi - Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Amir Reza Uneszadeh Shirazi, a skilled web developer specializing in React, Next.js, and WordPress development." />
        <meta name="keywords" content="web development, React, Next.js, WordPress, mobile app development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
      </Head>
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
          <h1 className="text-2xl font-bold text-red-600 animate-pulse transition-colors">ARUSH 🚀</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-red-600 transition-colors hover:scale-110 transform">🏠 Home</a>
            <a href="#about" className="hover:text-red-600 transition-colors hover:scale-110 transform">👨‍💻 About</a>
            <a href="#skills" className="hover:text-red-600 transition-colors hover:scale-110 transform">🛠️ Skills</a>
            <a href="#portfolio" className="hover:text-red-600 transition-colors hover:scale-110 transform">📁 Portfolio</a>
            <a href="#services" className="hover:text-red-600 transition-colors hover:scale-110 transform">🔧 Services</a>
            <a href="#contact" className="hover:text-red-600 transition-colors hover:scale-110 transform">📞 Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-bounce" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden">
            <div className="bg-white dark:bg-gray-800 w-64 h-full overflow-y-auto">
              <div className="p-4">
                <button onClick={toggleMobileMenu} className="mb-4">
                  <X className="w-6 h-6" />
                </button>
                <nav className="flex flex-col space-y-4">
                  <a href="#home" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>🏠 Home</a>
                  <a href="#about" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>👨‍💻 About</a>
                  <a href="#skills" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>🛠️ Skills</a>
                  <a href="#portfolio" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>📁 Portfolio</a>
                  <a href="#services" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>🔧 Services</a>
                  <a href="#contact" className="hover:text-red-600 transition-colors" onClick={toggleMobileMenu}>📞 Contact</a>
                </nav>
              </div>
            </div>
          </div>
        )}

        <main>
          <Parallax bgImage="/placeholder.svg?height=1080&width=1920" strength={500}>
            <section id="home" className="min-h-screen flex items-center justify-center">
              <div className="text-center p-8 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="ARUSH Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-8 animate-spin-slow"
                />
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down transition-colors">Amir Reza Uneszadeh Shirazi</h2>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up transition-colors">
                  <Code className="inline-block mr-2" /> Web Developer |
                  <Smartphone className="inline-block mx-2" /> Mobile App Developer |
                  <Globe className="inline-block ml-2" /> WordPress Expert
                </p>
                <a
                  href="#contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors animate-pulse"
                >
                  Hire Me 🤝
                </a>
                <div className="mt-8 flex justify-center space-x-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Twitter className="w-8 h-8" />
                  </a>
                  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </section>
          </Parallax>

          <section id="about" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down transition-colors">About Me 👨‍💻</h2>
              <p className="text-lg mb-8 animate-fade-in-up transition-colors">
                I'm a passionate developer with expertise in web and mobile app development. With a strong foundation in
                various technologies and a keen eye for design, I create engaging and functional digital experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-red-600/80 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">🌐 Web Development</h3>
                  <p className="transition-colors">Expert in React, Next.js, and modern frontend technologies</p>
                </div>
                <div className="bg-red-600/80 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">📱 Mobile App Development</h3>
                  <p className="transition-colors">Skilled in React Native and cross-platform app development</p>
                </div>
                <div className="bg-red-600/80 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">🔌 WordPress Development</h3>
                  <p className="transition-colors">Experienced in creating custom WordPress themes and plugins</p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down transition-colors">My Skills 🛠️</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Git', 'Docker'].map((skill, index) => (
                  <div key={index} className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                    <span className="text-lg font-semibold transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Parallax bgImage="/placeholder.svg?height=1080&width=1920" strength={300}>
            <section id="portfolio" className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down transition-colors">My Portfolio 📁</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=Project ${item}`}
                        alt={`Project ${item}`}
                        width={300}
                        height={200}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 transition-colors">Project {item}</h3>
                        <p className="mb-4 transition-colors">A brief description of the project and its key features.</p>
                        <div className="flex space-x-4">
                          <a href="#" className="text-red-600 hover:underline transition-colors">🔗 Live Demo</a>
                          <a href="#" className="text-red-600 hover:underline transition-colors">💻 Source Code</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Parallax>

          <section id="services" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down transition-colors">Services 🔧</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">🌐 Web Development</h3>
                  <ul className="list-disc list-inside">
                    <li className="transition-colors">Custom website design and development</li>
                    <li className="transition-colors">Frontend development with React and Next.js</li>
                    <li className="transition-colors">Backend development with Node.js</li>
                    <li className="transition-colors">API integration and development</li>
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">📱 Mobile App Development</h3>
                  <ul className="list-disc  list-inside">
                    <li className="transition-colors">Cross-platform app development with React Native</li>
                    <li className="transition-colors">Native iOS app development with Swift</li>
                    <li className="transition-colors">Native Android app development with Kotlin</li>
                    <li className="transition-colors">App store submission and optimization</li>
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4 transition-colors">🔌 WordPress Development</h3>
                  <ul className="list-disc list-inside">
                    <li className="transition-colors">Custom WordPress theme development</li>
                    <li className="transition-colors">WordPress plugin development</li>
                    <li className="transition-colors">WooCommerce integration and customization</li>
                    <li className="transition-colors">WordPress performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Parallax bgImage="/placeholder.svg?height=1080&width=1920" strength={300}>
            <section id="contact" className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down transition-colors">Contact Me 📞</h2>
                <form className="max-w-lg mx-auto">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 transition-colors">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 transition-colors">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 transition-colors">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors w-full animate-pulse"
                  >
                    Send Message 📤
                  </button>
                </form>
              </div>
            </section>
          </Parallax>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="transition-colors">&copy; 2024 ARUSH. All rights reserved. 🚀</p>
          </div>
        </footer>
      </div>
    </>
  )
}