import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Award,
  Users,
  Briefcase,
  Clock,
  Upload,
  Check,
  CreditCard,
  Building,
  Smartphone as Phone,
  Wallet,
  ArrowLeft,
} from "lucide-react";

export function InternshipsPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <ProgramsSection />
      <BenefitsSection />
      <TimelineSection />
      <ApplicationForm />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#A020F0] to-[#8B3FD8] text-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#2FFFA3]/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Kickstart Your Career
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Gain practical, real-world experience with CelestiCore's comprehensive
            internship programs. Learn from industry experts and build a solid
            foundation in tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const programs = [
    {
      icon: Code,
      title: "Web Development Internship",
      description:
        "Learn front-end & full-stack development with hands-on projects.",
      duration: "2-3 months",
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "App Development Internship",
      description: "Build real Android & iOS apps using modern tools.",
      duration: "2-3 months",
      skills: ["React Native", "Flutter", "Firebase", "API Integration", "Testing"],
      gradient: "from-[#A020F0] to-purple-600",
    },
    {
      icon: Palette,
      title: "UI/UX Internship",
      description: "Master design fundamentals, wireframes & prototypes.",
      duration: "1-2 months",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Internship",
      description: "Gain experience in automation, pipelines, and cloud deployments.",
      duration: "2-3 months",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Linux"],
      gradient: "from-[#2FFFA3] to-emerald-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Available Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our specialized internship tracks designed to prepare you
            for real-world challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-xl transition-all"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white`}
              >
                <program.icon size={32} />
              </div>
              <h3 className="text-2xl mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {program.description}
              </p>
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <Clock size={16} />
                <span>{program.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-[#A020F0] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: Briefcase,
      title: "Live Projects",
      description: "Work on real client projects and build your portfolio",
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Receive an industry-recognized completion certificate",
    },
    {
      icon: Users,
      title: "Mentor Support",
      description: "Get guidance from experienced industry professionals",
    },
    {
      icon: Code,
      title: "Practical Experience",
      description: "Hands-on learning with modern tools and technologies",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description: "Support in finding job opportunities after completion",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Internship Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our program is designed to give you comprehensive skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#A020F0] hover:shadow-lg transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center text-white">
                <benefit.icon size={28} />
              </div>
              <h3 className="mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Timeline & Requirements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-gray-200"
          >
            <h3 className="text-2xl mb-4">Program Duration</h3>
            <p className="text-gray-600 leading-relaxed">
              Our internship programs range between <strong>1–3 months</strong>{" "}
              depending on the track you choose. This flexible duration allows you
              to gain deep expertise while balancing your schedule.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-gray-200"
          >
            <h3 className="text-2xl mb-4">Prerequisites</h3>
            <p className="text-gray-600 leading-relaxed">
              Applicants must have <strong>basic knowledge</strong> in their
              chosen field. This includes fundamental programming concepts for
              developers or design principles for UI/UX candidates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApplicationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    duration: "",
    experience: "",
    resume: null as File | null,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    resume: "",
  });

  // Refs for scrolling to errors
  const emailRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  // Pricing based on duration (in INR)
  const pricing: { [key: string]: number } = {
    "1": 24999,
    "2": 41999,
    "3": 58999,
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateIndianPhone = (phone: string) => {
    // Indian phone number: 10 digits, optionally with +91 or 91 prefix
    const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ""));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let firstErrorRef: React.RefObject<HTMLDivElement | null> | null = null;

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      firstErrorRef = emailRef;
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }

    // Validate phone
    if (!validateIndianPhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: "Please enter a valid 10-digit Indian mobile number" }));
      if (!firstErrorRef) firstErrorRef = phoneRef;
    } else {
      setErrors(prev => ({ ...prev, phone: "" }));
    }

    // Validate resume
    if (!formData.resume) {
      setErrors(prev => ({ ...prev, resume: "Please upload your resume" }));
      if (!firstErrorRef) firstErrorRef = resumeRef;
    } else {
      setErrors(prev => ({ ...prev, resume: "" }));
    }

    // If there's an error, scroll to the first error field
    if (firstErrorRef && firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "center" 
      });
      return;
    }

    // Clear errors and proceed
    setErrors({ email: "", phone: "", resume: "" });
    setStep("payment");
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific error when user starts typing
    if (name === "email" && errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (name === "phone" && errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: "Please upload a PDF, DOC, or DOCX file" }));
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File size must be less than 5MB" }));
        return;
      }
      
      setFormData({ ...formData, resume: file });
      setErrors(prev => ({ ...prev, resume: "" }));
    }
  };

  // Success Page
  if (step === "success") {
    return (
      <section className="py-24 bg-gradient-to-br from-[#2FFFA3] to-[#1FDD8A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
              <Check size={40} className="text-[#2FFFA3]" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#111111]">
              Payment Successful!
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Welcome to CelestiCore — your dashboard login details have been sent to{" "}
              <strong>{formData.email}</strong>
            </p>
            <p className="text-base text-gray-700">
              Our team will review your application and reach out within 48
              hours. Check your email for access credentials and next steps.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Payment Page
  if (step === "payment") {
    const amount = pricing[formData.duration] || 0;
    const tax = Math.round(amount * 0.18);
    const total = amount + tax;

    return (
      <section className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA] min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setStep("form")}
              className="flex items-center gap-2 text-[#A020F0] hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft size={20} />
              Back to Application
            </button>

            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4">Complete Payment</h2>
              <p className="text-lg text-gray-600">
                Secure your spot in the internship program
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 sticky top-24">
                  <h3 className="text-xl mb-6">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Applicant</p>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Program</p>
                      <p className="font-medium capitalize">{formData.program} Development</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{formData.duration} {formData.duration === "1" ? "Month" : "Months"}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Program Fee</span>
                      <span className="font-medium">₹{amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax (18%)</span>
                      <span className="font-medium">₹{tax}</span>
                    </div>
                    <div className="flex justify-between text-lg pt-3 border-t border-gray-200">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold text-[#A020F0]">
                        ₹{total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="md:col-span-2">
                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                    <h3 className="text-xl mb-6">Select Payment Method</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-6 rounded-2xl border-2 transition-all text-left ${
                          paymentMethod === "card"
                            ? "border-[#A020F0] bg-purple-50"
                            : "border-gray-200 hover:border-[#A020F0]/50"
                        }`}
                      >
                        <CreditCard
                          size={32}
                          className={
                            paymentMethod === "card"
                              ? "text-[#A020F0] mb-3"
                              : "text-gray-400 mb-3"
                          }
                        />
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-gray-500">Visa, Mastercard, Amex</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("upi")}
                        className={`p-6 rounded-2xl border-2 transition-all text-left ${
                          paymentMethod === "upi"
                            ? "border-[#A020F0] bg-purple-50"
                            : "border-gray-200 hover:border-[#A020F0]/50"
                        }`}
                      >
                        <Phone
                          size={32}
                          className={
                            paymentMethod === "upi"
                              ? "text-[#A020F0] mb-3"
                              : "text-gray-400 mb-3"
                          }
                        />
                        <p className="font-medium">UPI</p>
                        <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("netbanking")}
                        className={`p-6 rounded-2xl border-2 transition-all text-left ${
                          paymentMethod === "netbanking"
                            ? "border-[#A020F0] bg-purple-50"
                            : "border-gray-200 hover:border-[#A020F0]/50"
                        }`}
                      >
                        <Building
                          size={32}
                          className={
                            paymentMethod === "netbanking"
                              ? "text-[#A020F0] mb-3"
                              : "text-gray-400 mb-3"
                          }
                        />
                        <p className="font-medium">Net Banking</p>
                        <p className="text-sm text-gray-500">All major banks</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("wallet")}
                        className={`p-6 rounded-2xl border-2 transition-all text-left ${
                          paymentMethod === "wallet"
                            ? "border-[#A020F0] bg-purple-50"
                            : "border-gray-200 hover:border-[#A020F0]/50"
                        }`}
                      >
                        <Wallet
                          size={32}
                          className={
                            paymentMethod === "wallet"
                              ? "text-[#A020F0] mb-3"
                              : "text-gray-400 mb-3"
                          }
                        />
                        <p className="font-medium">Wallet</p>
                        <p className="text-sm text-gray-500">Paytm, PhonePe, Amazon Pay</p>
                      </button>
                    </div>
                  </div>

                  {/* Card Payment Details */}
                  {paymentMethod === "card" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
                    >
                      <h3 className="text-xl mb-6">Card Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2 text-gray-700">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-2 text-gray-700">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-2 text-gray-700">
                              CVV *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="123"
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm mb-2 text-gray-700">
                            Cardholder Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* UPI Payment Details */}
                  {paymentMethod === "upi" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
                    >
                      <h3 className="text-xl mb-6">UPI Details</h3>
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">
                          UPI ID *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="yourname@upi"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Net Banking Details */}
                  {paymentMethod === "netbanking" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
                    >
                      <h3 className="text-xl mb-6">Select Your Bank</h3>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                      >
                        <option value="">Choose your bank</option>
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Kotak Mahindra Bank</option>
                        <option>Punjab National Bank</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Wallet Payment Details */}
                  {paymentMethod === "wallet" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
                    >
                      <h3 className="text-xl mb-6">Select Wallet</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#A020F0] transition-all"
                        >
                          <p className="font-medium">Paytm</p>
                        </button>
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#A020F0] transition-all"
                        >
                          <p className="font-medium">PhonePe</p>
                        </button>
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#A020F0] transition-all"
                        >
                          <p className="font-medium">Amazon Pay</p>
                        </button>
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#A020F0] transition-all"
                        >
                          <p className="font-medium">Mobikwik</p>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Payment Button */}
                  {paymentMethod && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-lg"
                      >
                        Pay ₹{total}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-4">
                        Your payment is secured with 256-bit SSL encryption
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Application Form
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Apply Now</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fill out the form below to apply for a CelestiCore internship. Complete the
            payment to confirm your enrollment. You will receive a confirmation
            email and dashboard access after successful payment.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
        >
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                placeholder="Enter your full name"
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div ref={phoneRef}>
              <label className="block text-sm mb-2 text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Program Selection *
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
              >
                <option value="">Select a program</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="cloud">Cloud & DevOps</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Preferred Duration *
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
              >
                <option value="">Select duration</option>
                <option value="1">1 Month - ₹24,999</option>
                <option value="2">2 Months - ₹41,999</option>
                <option value="3">3 Months - ₹58,999</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Previous Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20 transition-all"
                placeholder="Tell us about your background and why you're interested in this program..."
              />
            </div>

            <div ref={resumeRef}>
              <label className="block text-sm mb-2 text-gray-700">
                Resume Upload *
              </label>
              <input
                type="file"
                id="resume-upload"
                name="resume"
                onChange={handleResumeUpload}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="resume-upload"
                className="block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#A020F0] transition-colors cursor-pointer"
              >
                <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                {formData.resume ? (
                  <div>
                    <p className="text-sm text-[#A020F0] font-medium mb-1">
                      {formData.resume.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(formData.resume.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                )}
              </label>
              {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-lg"
              >
                <span className="hidden sm:inline">Submit Application & Proceed to Payment</span>
                <span className="sm:hidden">Submit & Pay</span>
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to our terms and conditions. A payment
                page will open after submission.
              </p>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}