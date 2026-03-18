import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl mb-4">
              <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
                CelestiCore
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Core Engine of Limitless Innovation. Building modern digital experiences that
              empower businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Products
              </Link>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                to="/company"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Company
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Careers */}
          <div>
            <h4 className="mb-4">Careers</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/internships"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Internships
              </Link>
              {/*<Link
                to="/jobs"
                className="text-gray-400 hover:text-[#2FFFA3] transition-colors text-sm"
              >
                Job Openings
              </Link>*/}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <p className="break-words">support@celesticore.tech</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CelestiCore — The Core Engine of Limitless Innovation. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[#2FFFA3] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#2FFFA3] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}