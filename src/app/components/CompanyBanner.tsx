import { motion } from "motion/react";

export function CompanyBanner() {
  const companies = [
    "KJEI - Trinity Academy of Engineering",
    "Phoenix Tech Academy",
    "GDGoC - TAE",
    "PrimeBuild",
    "Gravity 2K26",
    "Google for Developers",
    "Unstop",
    "Pune Startup Network",
    "Maharashtra IT Community",
    "Campus Innovation Forum",
    "Tech Education Alliance",
    "Digital Skills Foundation",
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="bg-white py-12 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h3 className="text-center text-2xl md:text-3xl">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
            Companies & Organizations
          </span>
        </h3>
      </div>
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-8 md:gap-12 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 px-4 md:px-6 py-4 text-lg md:text-xl font-semibold text-gray-700 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}