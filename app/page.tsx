"use client"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Code2, Layout, BarChart3, RefreshCcw, Globe } from "lucide-react"
import { useEffect, useState } from "react"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const shouldDark = saved ? saved === "dark" : false
    setIsDark(shouldDark)
    document.documentElement.classList.toggle("dark", shouldDark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white" id="home">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b dark:bg-black/70 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 min-h-14 py-2 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }) }}
            className="font-extrabold tracking-tight text-gray-900 dark:text-white"
            aria-label="Go to home"
          >
            Nimra Akram
          </a>
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-3 sm:gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">Services</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">Selected Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) }} className="hover:text-purple-600">Contact</a>
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="ml-2 h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:border-purple-500 hover:text-purple-600 transition-colors">
              {isDark ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-10.45-10.45 1 1 0 0 0-.14-1.05A1 1 0 0 0 8 1a10 10 0 1 0 15 15 1 1 0 0 0-.36-1.93Z"/></svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 14.32l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM12 4a1 1 0 0 0 1-1V1h-2v2a1 1 0 0 0 1 1zm0 16a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1zM4 13H1v-2h3v2zm22 0h-3v-2h3v2zM6.76 19.16l-1.8 1.79 1.8 1.79 1.79-1.79-1.79-1.79zM17.24 4.84l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/></svg>
              )}
            </button>
          </nav>
          {/* Mobile controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="h-9 w-9 rounded-md border border-gray-300 flex items-center justify-center hover:border-purple-500 hover:text-purple-600 transition-colors">
              {isDark ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-10.45-10.45 1 1 0 0 0-.14-1.05A1 1 0 0 0 8 1a10 10 0 1 0 15 15 1 1 0 0 0-.36-1.93Z"/></svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 14.32l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM12 4a1 1 0 0 0 1-1V1h-2v2a1 1 0 0 0 1 1zm0 16a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1zM4 13H1v-2h3v2zm22 0h-3v-2h3v2zM6.76 19.16l-1.8 1.79 1.8 1.79 1.79-1.79-1.79-1.79zM17.24 4.84l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/></svg>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(v => !v)} aria-label="Toggle menu" className="h-9 w-9 rounded-md border border-gray-300 flex items-center justify-center hover:border-purple-500 hover:text-purple-600 transition-colors">
              {isMenuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-b border-t bg-white/95 dark:bg-black/90 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-3 grid gap-3 text-sm font-medium text-gray-800 dark:text-gray-200">
              <a href="#home" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">About</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">Services</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">Skills</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">Selected Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="py-1">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="text-center mb-16 reveal-up">
          {/* Name with soft gradient glow background */}
          <div className="relative inline-block mx-auto">
            <span className="relative z-10 block text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Nimra Akram
            </span>
            <div className="absolute inset-0 -z-10 translate-y-2 sm:translate-y-3 blur-3xl pointer-events-none">
              <div className="mx-auto h-24 sm:h-32 md:h-40 w-[70vw] sm:w-[420px] md:w-[560px] max-w-full rounded-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40" />
            </div>
          </div>

          {/* Title with side lines */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="hidden sm:block h-px w-16 bg-blue-500/60" />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Web Developer</h2>
            <span className="hidden sm:block h-px w-16 bg-blue-500/60" />
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">Transforming ideas into modern, scalable, and user-friendly web solutions</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 shadow hover:bg-black dark:hover:bg-white dark:hover:text-black"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
              </svg>
              View My Work
            </button>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 btn-press hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* About Me Section */}
        <section className="max-w-6xl mx-auto mb-24 mt-24 reveal-up" id="about">
          <h2 className="text-5xl font-bold text-black dark:text-white text-center">About Me.</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Textual intro with signature */}
            <div className="flex flex-col h-full text-center lg:text-left max-w-prose mx-auto lg:mx-0">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Web Developer</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                Hi, I’m Nimra, a dedicated Web Developer passionate about building modern, responsive, and scalable web
                applications. I work with React, Next.js, and Laravel to create seamless user experiences and robust backend solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-5">
                I’ve worked on freelance projects and collaborated on various web applications, where I transformed complex
                ideas into simple, elegant, and functional designs.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My focus is on clean code, performance, and delivering solutions that help businesses grow. I love turning
                challenges into user‑friendly products.
              </p>

              
            </div>

            {/* Right: Personal info list */}
            <aside className="flex flex-col h-full lg:border-l lg:border-gray-200 lg:pl-10 dark:lg:border-neutral-800">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center lg:text-left">Personal Information</h3>
              <dl className="space-y-4 text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0 w-full">
                <div className={`grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 items-start sm:items-center text-center sm:text-left ${poppins.className}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white">Name</dt>
                  <dd className="text-gray-800 dark:text-white">Nimra Akram</dd>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 items-start sm:items-center text-center sm:text-left ${poppins.className}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white">City, Country</dt>
                  <dd className="text-gray-800 dark:text-white">Lahore, Pakistan</dd>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 items-start sm:items-center text-center sm:text-left ${poppins.className}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white">Email</dt>
                  <dd className="text-gray-800 dark:text-gray-200">
                    <a className="hover:underline" href="mailto:nimraakram268@gmail.com">nimraakram268@gmail.com</a>
                  </dd>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 items-start sm:items-center text-center sm:text-left ${poppins.className}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white">Role / Profession</dt>
                  <dd className="text-gray-800 dark:text-white">Web Developer</dd>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 items-start sm:items-center text-center sm:text-left ${poppins.className}`}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white">Freelance</dt>
                  <dd className="text-gray-800 dark:text-white">Available</dd>
                </div>
              </dl>

              <div className="mt-6 lg:mt-auto pt-6 text-center lg:text-left">
                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors"
                  aria-label="Download Resume"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Skills / Tech Stack Section */}
        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 mt-24 mb-24 reveal-up" id="services">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white">Services</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-200 hover:border-purple-300 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <Code2 className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Design</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Design professional UIs using Tailwind CSS, Bootstrap, and custom styling.</p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-200 hover:border-purple-300 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <Layout className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Portfolio & Business Websites</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Design and develop personal portfolios, business landing pages, and product showcase websites.</p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-200 hover:border-purple-300 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Custom Dashboard Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Build data dashboards, admin panels, analytics UIs, and workflows.</p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-gray-200 hover:border-purple-300 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <RefreshCcw className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">UI Redesign & Modernization</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Redesign legacy websites with modern UI/UX and performance improvements.</p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-16 mt-24 mb-24 reveal-up" id="skills">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Skills / Tech Stack</h2>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Frontend Technologies */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Frontend Technologies
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    H
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">HTML5</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    C
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">CSS3</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    JS
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">JavaScript</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    R
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">React.js</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    N
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Next.js</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    T
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Tailwind</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    TS
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">TypeScript</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg min-h-[64px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">
                    B
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Bootstrap</span>
                </div>
              </div>
            </div>

            {/* Backend & Other Technologies */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-600 mb-8 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                Backend & Other
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">N</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Node.js</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">L</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Laravel</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">M</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">MySQL</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">G</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Git</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">GH</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">W</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">WordPress</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">J</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">jQuery</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-base dark:text-white">A</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-24 mb-24" id="projects">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 sm:mb-16 reveal-in">Selected Projects</h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center reveal-up">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3">E‑commerce</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">E‑commerce Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Built a modern dashboard for products, orders and analytics. Fast filters, charts
                  and responsive layout for store owners.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">React</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Tailwind</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">TypeScript</span>
                </div>
                <a href="https://horizonauto.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-md text-sm btn-press btn-shimmer">
                  View project
                </a>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] w-full max-w-md md:max-w-lg mx-auto md:mx-0 hover-float group">
                <Image
                  src="/one%20.png"
                  alt="E‑commerce dashboard screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 transition-[filter] group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="text-white text-sm font-medium">E‑commerce Website</p>
                    </div>
                    </div>
                  </div>

            {/* Case Study 2 (reversed) */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center reveal-up reveal-delay-100">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] w-full hover-float group">
                <Image
                  src="/image.png"
                  alt="Traydon App Dev Dashboard screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 transition-[filter] group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="text-white text-sm font-medium">Traydon App Dev Dashboard</p>
                </div>
              </div>
                <div>
                <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full mb-3">DevOps</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Traydon App Dev Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Real‑time project monitoring with team collaboration tools and automated
                  CI/CD pipelines. Streamlined release tracking, build status, and performance
                  analytics for development teams.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Node.js</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">CI/CD</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Laravel</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Bootstrap</span>
                      </div>

                        </div>
                      </div>

            {/* Case Study 3 */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center reveal-up reveal-delay-200">
              <div>
                <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full mb-3">Utilities</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Upcs Postcode Genearter</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  UK postcode generator and validator with instant search, address auto‑completion
                  and map preview. Built for high accuracy and fast lookups with a clean, responsive UI.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">React</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">REST API</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Maps</span>
                      </div>

                      </div>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] w-full hover-float group">
                <Image
                  src="/upc%20one.png"
                  alt="Upcs Postcode Genearter screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 transition-[filter] group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="text-white text-sm font-medium">Upcs Postcode Genearter</p>
                        </div>
                        </div>
                      </div>

            {/* Case Study 4 */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center reveal-up reveal-delay-300">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] w-full hover-float group">
                <Image
                  src="/qs%20.png"
                  alt="QS Learning Portal login screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 transition-[filter] group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="text-white text-sm font-medium">QS Learning Portal</p>
                      </div>
                    </div>
              <div>
                <span className="inline-block text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full mb-3">EdTech</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">QS Learning Portal</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Secure login and virtual classroom portal for learners and staff with clean UI,
                  role-based access, and smooth navigation.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Laravel</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">MySQL</span>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border">Bootstrap</span>
                </div>
                <a href="https://vc.qslearning.co.uk/auth/login/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-md text-sm btn-press btn-shimmer">
                  View project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Projects */}
        <section className="mt-24 mb-24">
          <div className="max-w-7xl mx-auto">
            {/* Upcs postcode */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm mb-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Project Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upcs postcode</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    A comprehensive postcode lookup and validation system providing accurate UK postal data with
                    real-time address verification and geographic mapping capabilities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">Frontend Features</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Instant Postcode Search</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Address Auto-completion</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Interactive Map Integration</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Bulk Postcode Validation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-600 mb-4">Backend Systems</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Royal Mail PAF Database</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Geocoding API Integration</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Address Validation Engine</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Caching & Rate Limiting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - System Architecture */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Architecture</h4>
                  <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-6 border border-gray-200 dark:border-neutral-800">
                    <div className="space-y-4">
                      <div className="bg-blue-100 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-400/40 text-blue-800 dark:text-blue-300 px-4 py-3 rounded-lg text-sm font-medium text-center">React Frontend (Search Interface)</div>
                      <div className="flex justify-center"><div className="w-0.5 h-4 bg-gray-400 dark:bg-neutral-700"></div></div>
                      <div className="bg-purple-100 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-400/40 text-purple-800 dark:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium text-center">REST API Gateway</div>
                      <div className="flex justify-center"><div className="w-0.5 h-4 bg-gray-400 dark:bg-neutral-700"></div></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-100 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-400/40 text-green-800 dark:text-green-300 px-3 py-2 rounded-lg text-xs font-medium text-center">Lookup Service</div>
                        <div className="bg-green-100 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-400/40 text-green-800 dark:text-green-300 px-3 py-2 rounded-lg text-xs font-medium text-center">Validation Service</div>
                      </div>
                      <div className="flex justify-center"><div className="w-0.5 h-4 bg-gray-400 dark:bg-neutral-700"></div></div>
                      <div className="bg-orange-100 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-400/40 text-orange-800 dark:text-orange-300 px-4 py-3 rounded-lg text-sm font-medium text-center">Redis Cache Layer</div>
                      <div className="flex justify-center"><div className="w-0.5 h-4 bg-gray-400 dark:bg-neutral-700"></div></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-100 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-400/40 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-lg text-xs font-medium text-center">PAF Database</div>
                        <div className="bg-purple-100 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-400/40 text-purple-800 dark:text-purple-300 px-3 py-2 rounded-lg text-xs font-medium text-center">Geo Database</div>
                      </div>
                      <div className="bg-gray-100 dark:bg-neutral-800 border-2 border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-gray-300 px-4 py-3 rounded-lg text-sm font-medium text-center">External Mapping APIs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-28 sm:mt-32 mb-24 relative reveal-up" id="contact">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-8 sm:gap-10 mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
                <div className="relative rounded-full overflow-hidden w-28 h-28 sm:w-32 sm:h-32 border-4 border-black/90 shadow-lg">
                  <Image
                    src="/Contact%20img.png"
                    alt="Contact avatar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 128px"
                    priority
                  />
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-white mb-8 sm:mb-10">Interested in working with me? Let’s connect!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Highlight card */}
              <div className="md:col-span-1">
                <div className="h-full bg-white dark:bg-neutral-900 border border-purple-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Start a conversation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Share a brief about your project and I’ll get back within 24 hours.</p>
                  </div>
                  <div className="mt-4 text-left">
                    <a href="mailto:nimraakram268@gmail.com" className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
                      Email me
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>

          {/* Contact Links */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
                <div className="relative group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  <div className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="mailto:nimraakram268@gmail.com" className="block">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors shadow-sm ring-1 ring-blue-200">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">Email</h3>
                  </a>
                  <div className="text-gray-600 dark:text-gray-300 text-sm text-center space-y-1">
                    <a href="mailto:nimraakram268@gmail.com" className="hover:text-gray-900">nimraakram268@gmail.com</a>
                    <div>
                      <a href="mailto:nimramehar38@gmail.com" className="hover:text-gray-900">nimramehar38@gmail.com</a>
                    </div>
                  </div>
                </div>

            {/* LinkedIn */}
                <div className="relative group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  <div className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="https://linkedin.com/in/nimra-akram-21957325b" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors shadow-sm ring-1 ring-blue-200">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.46c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Connect with me</p>
            </a>
                </div>

            {/* GitHub */}
                <div className="relative group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  <div className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="https://github.com/nimra-akram" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors shadow-sm ring-1 ring-gray-200">
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">View my code</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-2xl mx-auto border border-purple-100 dark:border-neutral-800 text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-semibold text-gray-800 dark:text-white">Prefer email?</span>
                <div className="flex flex-wrap justify-center gap-2">
                  <a href="mailto:nimraakram268@gmail.com" className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-neutral-700 hover:bg-purple-50 dark:hover:bg-neutral-700 text-sm font-medium">
                    nimraakram268@gmail.com
                  </a>
                  <a href="mailto:nimramehar38@gmail.com" className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-neutral-700 hover:bg-purple-50 dark:hover:bg-neutral-700 text-sm font-medium">
                    nimramehar38@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24">
        <div className="bg-white dark:bg-black border-t dark:border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm">© 2025 Nimra. All rights reserved.</p>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Built with ❤️ using React & Tailwind</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:nimraakram268@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Email</a>
              <a href="https://linkedin.com/in/nimra-akram-21957325b" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
              <a href="https://github.com/nimra-akram" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
