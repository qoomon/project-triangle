import { ProjectTriangle } from "@/components/project-triangle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-sky-50">
      {/* Comic-style Header */}
      <header className="relative overflow-hidden border-b-4 border-black bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300">
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="header-dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="2" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-dots)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-8">
          {/* Comic burst decoration */}
          <div className="absolute top-2 right-4 md:right-12 rotate-12">
            <div className="bg-pink-400 text-pink-950 px-4 py-2 rounded-lg border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-xs md:text-sm uppercase">
              Pick 2!
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 text-center text-balance tracking-tight drop-shadow-sm">
            THE PROJECT MANAGEMENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
              TRIANGLE
            </span>
          </h1>
          <p className="text-slate-700 text-center mt-3 text-sm md:text-lg font-bold uppercase tracking-wide">
            A.K.A. The Iron Triangle or Triple Constraint
          </p>
        </div>
      </header>

      {/* Main content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Introduction - Comic panel style */}
          <div className="text-center mb-8 bg-white border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-3 -left-3 bg-sky-400 text-sky-950 px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              The Rule
            </div>
            <p className="text-slate-800 leading-relaxed text-pretty font-medium text-lg">
              In project management, you can only optimize for{" "}
              <strong className="text-purple-600">TWO OUT OF THREE</strong>{" "}
              constraints: Speed, Cost, and Quality. Click on the corners of the
              triangle to explore the trade-offs!
            </p>
          </div>

          {/* Interactive Triangle */}
          <ProjectTriangle />

          {/* Educational content - Comic card style */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="bg-sky-100 p-5 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-sky-400 border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg
                  className="w-5 h-5 text-sky-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-black text-slate-900 mb-2 text-lg uppercase">
                Time (Speed)
              </h3>
              <p className="text-sm text-slate-700 font-medium">
                How quickly the project needs to be delivered. Shorter timelines
                require more resources or reduced scope.
              </p>
            </div>

            <div className="bg-green-100 p-5 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-green-400 border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg
                  className="w-5 h-5 text-green-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-black text-slate-900 mb-2 text-lg uppercase">
                Cost (Budget)
              </h3>
              <p className="text-sm text-slate-700 font-medium">
                The financial resources allocated to the project. Lower budgets
                mean longer timelines or reduced features.
              </p>
            </div>

            <div className="bg-orange-100 p-5 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-orange-400 border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg
                  className="w-5 h-5 text-orange-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-black text-slate-900 mb-2 text-lg uppercase">
                Quality (Scope)
              </h3>
              <p className="text-sm text-slate-700 font-medium">
                The level of features, polish, and overall excellence. Higher
                quality requires more time or money.
              </p>
            </div>
          </div>

          {/* Key takeaway - Comic banner style */}
          <div className="mt-10 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 border-4 border-black rounded-xl p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            {/* Halftone overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="takeaway-dots"
                    x="0"
                    y="0"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="4" cy="4" r="1.5" fill="black" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#takeaway-dots)" />
              </svg>
            </div>
            <div className="relative">
              <div className="inline-block bg-yellow-300 text-yellow-950 px-4 py-1 rounded-full border-3 border-black text-sm font-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Key Takeaway
              </div>
              <p className="text-white font-bold text-lg max-w-xl mx-auto text-pretty drop-shadow-sm">
                {"\""}Pick any two{"\""}—this constraint forces project managers
                to make strategic decisions. Understanding these trade-offs
                helps set realistic expectations!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comic-style Footer */}
      <footer className="border-t-4 border-black mt-12 py-6 text-center bg-slate-100">
        <p className="font-bold text-slate-600 uppercase text-sm tracking-wide">
          Interactive Project Management Triangle Visualization
        </p>
      </footer>
    </main>
  );
}
