"use client"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </a>
          <button
            onClick={() => window.print()}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Resume
          </button>
        </div>
      </header>

      {/* Resume Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Nimra Akram</h1>
          <h2 className="text-xl text-purple-600 font-semibold mb-4">Web Developer</h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              nimramehar38@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              03224147191
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Lahore, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              linkedin.com/in/nimra-akram-21957325b
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A skilled Web Developer with expertise in React, JavaScript, HTML, CSS, and Node.js. Experienced in building
            responsive, high-performance websites and applications with seamless user experiences. Dedicated to
            delivering scalable, maintainable, and secure solutions by following industry best practices and modern
            development standards.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
            Professional Experience
          </h3>

          <div className="space-y-6">
            {/* Current Role */}
            <div className="border-l-4 border-purple-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-900">Web Developer</h4>
                <span className="text-purple-600 font-medium">2025</span>
              </div>
              <p className="text-gray-600 font-medium mb-3">Softech UK • Lahore</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Working as a Web Developer at Softech UK, building responsive and high-quality user interfaces using
                  React, JavaScript, and modern web technologies.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Collaborating with design and backend teams to develop scalable, performance-optimized solutions that
                  deliver seamless experiences across all devices.
                </li>
              </ul>
            </div>

            {/* Previous Role */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-900">Front End Developer Intern</h4>
                <span className="text-gray-600 font-medium">03/2024 – 09/2024</span>
              </div>
              <p className="text-gray-600 font-medium mb-3">Byteimpulse • Lahore</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  Worked as a Frontend Developer Intern at Byteimpulse, contributing to user-focused web applications by
                  developing reusable React components and integrating REST APIs.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  Gained hands-on experience that strengthened my practical frontend skills and ability to work
                  effectively in a team environment.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">Education</h3>
          <div className="border-l-4 border-purple-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-900">BS Computer Science</h4>
              <span className="text-purple-600 font-medium">2019 – 2023</span>
            </div>
            <p className="text-gray-600 font-medium">University of Management & Technology Lahore • Lahore</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Frontend Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML-5</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CSS-3</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SASS</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript (ES-6+)</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">jQuery</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">React Router</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">React Hooks</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Redux</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Backend & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Laravel</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">GitHub</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">WordPress</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Material UI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">E-commerce & Business Solutions</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Full Responsive Ecommerce sites mobile Friendly
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Company Dashboard & Ecommerce Platforms using React.js
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Traydon App dev Dashboard using React MUI & TypeScript
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Healthcare & Specialized Projects</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Azam General Hospital (Pharmacy) - Fully Responsive Website
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  Pharmacy Automation System & Company website
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  UPCS Postcode Project & AWS Integration Projects
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
