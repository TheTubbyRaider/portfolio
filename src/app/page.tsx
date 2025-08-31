

"use client";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300 flex flex-col items-center justify-center font-sans">
      {/* Hero Section */}
      <section className="w-full py-20 flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-white/0 to-blue-600/20 pointer-events-none" />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 drop-shadow mb-4 tracking-tight animate-fade-in">Gage Robert Strong</h1>
        <p className="text-xl sm:text-2xl text-blue-700 mb-2 animate-fade-in">Software Developer & Data Integrity Specialist</p>
        <p className="text-base text-gray-600 mb-6 animate-fade-in">Eagle Mountain, Utah | grsraider66@gmail.com | (801)946-0514</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 animate-fade-in">
          <a
            href="https://github.com/TheTubbyRaider"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-800 text-white rounded-full shadow hover:bg-blue-600 transition hover:scale-105"
          >
            Visit my GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gage-strong-2b9445206/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="/projects"
            className="px-6 py-2 bg-gray-200 text-blue-900 rounded-full shadow hover:bg-blue-100 transition hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl p-10 mt-[-60px] z-10 animate-fade-in">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Education</h2>
          <p className="text-gray-700">Brigham Young University, Rexburg, ID</p>
          <p className="text-gray-600">Bachelor of Science in Software Development</p>
          <p className="text-gray-600">Certificates: Web and Computer Programming, Web Development, Software Development</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>Programming: HTML, CSS, C++, JavaScript, Python, Node.js, React, Git, C#</li>
              <li>Layout design, wireframes, debugging</li>
              <li>Graphic Design: Adobe Creative Suite, Procreate, logo/brand/web design</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700">
              <li>Data Analysis: Excel, Google Workspace, Salesforce, SAP, Edocs, Capture</li>
              <li>Customer Experience: QA, training, collaboration, upselling</li>
            </ul>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Employment History</h2>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-semibold">Data Integrity Specialist</span> - AmeriGas (Remote) <span className="text-gray-500">2022-now</span></li>
            <li><span className="font-semibold">Data Governance Specialist</span> - Kforce/Ivanti (Remote) <span className="text-gray-500">2021-2022</span></li>
            <li><span className="font-semibold">Data Entry Specialist</span> - AMP Smart, American Fork, UT <span className="text-gray-500">2020-2021</span></li>
            <li><span className="font-semibold">Customer Service Associate</span> - Water Gardens Cinema 6, Pleasant Grove, UT <span className="text-gray-500">2018-2020</span></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">References</h2>
          <div className="bg-blue-50 rounded-lg p-4 shadow">
            <p className="text-gray-700 italic">“Gage is a detail-oriented and reliable team member who consistently delivers high-quality work.”</p>
            <p className="text-gray-600 mt-2">Sandra Ommerli – Data Governance Supervisor, Ivanti</p>
            <p className="text-gray-600">(202) 660 – 2322 | sandraommerli@ivanti.com</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 mb-4 text-gray-500 text-sm text-center animate-fade-in">
        &copy; {new Date().getFullYear()} Gage Robert Strong. All rights reserved.
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
      `}</style>
    </div>
  );
}
