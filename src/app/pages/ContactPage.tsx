import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We'd love to hear from you. Send us a message and our team will
            respond shortly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Refs for scrolling to errors
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateIndianPhone = (phone: string) => {
    // If phone is empty, it's optional so return true
    if (!phone || phone.trim() === "") return true;
    // Indian phone number: 10 digits, optionally with +91 or 91 prefix
    const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ""));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let firstErrorRef: React.RefObject<HTMLDivElement> | null = null;

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      firstErrorRef = emailRef;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    // Validate phone (optional field, but if provided must be valid)
    if (formData.phone && !validateIndianPhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit Indian mobile number",
      }));
      if (!firstErrorRef) firstErrorRef = phoneRef;
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    // If there's an error, scroll to the first error field
    if (firstErrorRef && firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    // Clear errors and submit
    setErrors({ email: "", phone: "" });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific error when user starts typing
    if (name === "email" && errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (name === "phone" && errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Reach out to us through any of these channels. We're here to help
              bring your ideas to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A020F0] to-[#8B3FD8] flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@celesticore.com</p>
                  <p className="text-gray-600">support@celesticore.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2FFFA3] to-[#1FDD8A] flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">CelestiCore Technologies</h3>
                  <p className="text-gray-600">Shiv Shakti Chowk, Gurudatta Nagar</p>
                  <p className="text-gray-600">Pune, Maharashtra 412308</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-12 space-y-3">
              <a
                href="mailto:info@celesticore.com"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                <Mail size={20} />
                Email Us
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-full hover:shadow-xl transition-all"
              >
                <MessageSquare size={20} />
                WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-[#A020F0] text-[#A020F0] rounded-full hover:bg-[#A020F0] hover:text-white transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#2FFFA3] to-[#1FDD8A] rounded-3xl p-12 text-center">
                <div>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                    <Check size={40} className="text-[#2FFFA3]" />
                  </div>
                  <h3 className="text-3xl mb-4 text-[#111111]">
                    Message Sent!
                  </h3>
                  <p className="text-lg text-gray-800">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-gray-200"
              >
                <h3 className="text-2xl mb-6">Send Us a Message</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div ref={emailRef}>
                    <label className="block text-sm mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div ref={phoneRef}>
                    <label className="block text-sm mb-2 text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Find Us</h2>
          <p className="text-lg text-gray-600">
            Visit our office in Pune or schedule a virtual meeting
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.3324482197517!2d73.95398764377836!3d18.485857849810778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e6af6ad065%3A0x769e9f37f8dce27b!2sShiv%20Shakti%20Chowk%2C%20Gurudatta%20Nagar%2C%20Pune%2C%20Maharashtra%20412308!5e0!3m2!1sen!2sin!4v1772430805301!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CelestiCore Technologies Location"
            className="w-full"
          ></iframe>
          
          {/* Custom Location Marker Overlay */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none"
          >
            <div className="relative">
              {/* Location Pin */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#A020F0] to-[#8B3FD8] rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                <MapPin size={24} className="text-white" />
              </div>
              {/* Pin Tip */}
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#8B3FD8] mx-auto"></div>
              
              {/* Label */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border-2 border-[#A020F0]">
                  <p className="text-sm font-semibold text-[#A020F0]">CelestiCore Technologies</p>
                  <p className="text-xs text-gray-600">Pune, India</p>
                </div>
                {/* Arrow pointing down to pin */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white mx-auto mt-[-1px]"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Office Hours</p>
          <p className="text-lg">Monday - Friday: 10:00 AM - 7:00 PM IST</p>
          <p className="text-lg">Saturday: 10:00 AM - 3:00 PM IST</p>
          <p className="text-lg">Sunday: Closed</p>
        </motion.div>
      </div>
    </section>
  );
}