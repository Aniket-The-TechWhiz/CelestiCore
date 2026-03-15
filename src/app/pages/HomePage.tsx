import { lazy, Suspense } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const HomeSecondarySections = lazy(async () => {
  const module = await import("./home/HomeSecondarySections");
  return { default: module.HomeSecondarySections };
});

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={null}>
        <HomeSecondarySections />
      </Suspense>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-purple-50">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#A020F0]/20 to-[#2FFFA3]/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#2FFFA3]/20 to-[#A020F0]/20 rounded-full blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight px-4">
            <span className="bg-gradient-to-r from-[#A020F0] via-purple-600 to-[#2FFFA3] bg-clip-text text-transparent animate-gradient">
              Build. Innovate. Scale.
            </span>
            <br />
            <span className="text-[#111111]">With CelestiCore.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            We are a next-generation tech product company helping businesses
            accelerate with modern apps, websites, and custom digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              to="/contact"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#A020F0] border-2 border-[#A020F0] rounded-full hover:bg-[#A020F0] hover:text-white transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
