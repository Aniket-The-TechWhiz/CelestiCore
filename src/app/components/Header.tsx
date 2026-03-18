import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Blog", path: "/blog" },
    { label: "Company", path: "/company" },
    { label: "Internships", path: "/internships" },
   /* { label: "Jobs", path: "/jobs" },*/
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              CelestiCore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors ${
                  isActive(item.path)
                    ? "text-[#A020F0]"
                    : "text-gray-700 hover:text-[#A020F0]"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A020F0] to-[#2FFFA3]" />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/internships#internship-form"
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden overflow-hidden">
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-[#A020F0]"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/internships#internship-form"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}