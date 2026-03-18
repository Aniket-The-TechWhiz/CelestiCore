import { useState, useEffect } from "react";
import { Link } from "react-router";
import { X, Cookie } from "lucide-react";
import { CONSENT_KEY, setConsent } from "../lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Slight delay so it appears after initial page load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500"
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center text-white">
          <Cookie size={20} />
        </div>

        {/* Text */}
        <div className="flex-1 text-sm text-gray-600">
          <p>
            We use cookies and similar technologies to improve your experience, analyse site traffic,
            and serve personalised advertisements via{" "}
            <strong className="text-gray-800">Google AdSense</strong>. Third-party vendors, including
            Google, may place cookies on your browser. By clicking{" "}
            <strong className="text-gray-800">"Accept"</strong>, you consent to our use of cookies as
            described in our{" "}
            <Link
              to="/privacy-policy"
              className="text-[#A020F0] hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm text-white bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Accept
          </button>
          <button
            onClick={decline}
            aria-label="Dismiss"
            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
