import Github from "./Github";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] overflow-hidden">
      {/* Gradient Orbs - Adjusted for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#238636]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#2ea043]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <main className="flex flex-col items-center justify-center space-y-12 sm:space-y-16 text-center">
          {/* Logo and Title Section */}
          <div className="space-y-3 sm:space-y-6">
            <div className="relative group cursor-pointer inline-block">
              <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center bg-[#161b22]/80 rounded-lg sm:rounded-xl border border-[#30363d]/30 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#238636]/10 via-transparent to-transparent"></div>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/[0.02]"></div>
                <Github
                  className="w-10 h-10 sm:w-16 sm:h-16 text-white relative z-10"
                  aria-label="GitHub Logo"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#238636] to-[#2ea043] rounded-xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            <h1 className="text-4xl sm:text-7xl font-bold text-white tracking-tight">
              Perlify<span className="text-[#238636]">.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#8b949e] max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Your fun and insightful window into the world of open source.
              Discover repository analytics like never before.
            </p>
          </div>

          {/* Mobile WaitlistForm */}
          <div className=" sm:hidden flex justify-center w-full">
            <WaitlistForm />
          </div>

          {/* Feature Cards */}
          <div className="w-full px-4 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[640px] lg:max-w-none mx-auto">
              {[
                {
                  title: "Code Analytics",
                  description:
                    "Deep insights into repository metrics and patterns",
                  icon: (
                    <img 
                      src="/icons/analytics.svg"
                      alt="Analytics Icon"
                      className="w-4 h-4 sm:w-6 sm:h-6 mb-4 text-[#ffffff]"
                    />
                  ),
                },
                {
                  title: "Contributor Stories",
                  description:
                    "Meet the most talkative and active contributors",
                  icon: (
                    <img 
                      src="/icons/contributors.svg"
                      alt="Contributors Icon"
                      className="w-4 h-4 sm:w-6 sm:h-6 mb-4 text-[#ffffff]"
                    />
                  ),
                },
                {
                  title: "Repo Comparisons",
                  description: "Compare multiple repositories side by side",
                  icon: (
                    <img 
                      src="/icons/comparison.svg"
                      alt="Comparison Icon"
                      className="w-4 h-4 sm:w-6 sm:h-6 mb-4 text-[#ffffff]"
                    />
                  ),
                },
                {
                  title: "Activity Insights",
                  description:
                    "Track engagement and development trends over time",
                  icon: (
                    <img 
                      src="/icons/activity.svg"
                      alt="Activity Icon"
                      className="w-4 h-4 sm:w-6 sm:h-6 mb-4 text-[#ffffff]"
                    />
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#161b22] to-[#1c2129] border border-[#30363d] transition-all duration-500 hover:shadow-2xl hover:shadow-[#238636]/10 hover:-translate-y-1 hover:border-[#238636]/50"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#238636]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Glass effect */}
                  <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {feature.icon}
                    <h3 className="text-sm sm:text-xl font-semibold mb-2 text-white  transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-base text-[#8b949e] group-hover:text-[#a3aab3] transition-colors duration-300 flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop WaitlistForm */}
          <div className="hidden sm:block">
            <WaitlistForm />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-[#8b949e] px-3 sm:px-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#238636]"></div>
              Coming Soon
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Open Source
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
              </svg>
              Analytics Tool
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
