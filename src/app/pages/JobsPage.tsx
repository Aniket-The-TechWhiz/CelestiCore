import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  IndianRupee,
  Search,
  Filter,
  X,
  Check,
  Upload,
  ChevronDown,
} from "lucide-react";
import { jobs, Job } from "../../data/jobs";

export function JobsPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <JobListingsSection />
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
            Join{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join a team that values innovation, growth, and creativity. Explore
            job openings and build your future with CelestiCore.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function JobListingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
  });

  const filteredJobs = jobs.filter((job) => {
    // Search filter
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Location filter
    const matchesLocation =
      !filters.location || job.location === filters.location;

    // Type filter
    const matchesType = !filters.type || job.type === filters.type;

    return matchesSearch && matchesLocation && matchesType;
  });

  // Determine which jobs to display
  const displayedJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 6);
  const hasMoreJobs = filteredJobs.length > 6;

  const clearFilters = () => {
    setFilters({ location: "", type: "" });
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  if (showApplication) {
    return <ApplicationForm onClose={() => setShowApplication(false)} />;
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search job titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
              />
            </div>
            <button
              className={`px-6 py-3 bg-white border border-gray-300 rounded-xl flex items-center gap-2 hover:border-[#A020F0] transition-colors relative ${
                showFilters ? "border-[#A020F0]" : ""
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              Filters
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#A020F0] text-white text-xs rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filter Jobs</h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#A020F0] hover:underline flex items-center gap-1"
                  >
                    <X size={16} />
                    Clear All
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                  >
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Job Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                  >
                    <option value="">All Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing <span className="font-semibold text-[#A020F0]">{filteredJobs.length}</span> {filteredJobs.length === 1 ? "job" : "jobs"}
          {(searchQuery || activeFilterCount > 0) && (
            <span className="ml-1">
              matching your {searchQuery && "search"}
              {searchQuery && activeFilterCount > 0 && " and "}
              {activeFilterCount > 0 && "filters"}
            </span>
          )}
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedJobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-xl transition-all">
                <h3 className="text-2xl mb-4">{job.title}</h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <IndianRupee size={16} />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>

                {selectedJob === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 space-y-4"
                  >
                    <div>
                      <h4 className="mb-2">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0] mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2FFFA3] mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setSelectedJob(selectedJob === index ? null : index)
                    }
                    className="flex-1 px-6 py-3 border-2 border-[#A020F0] text-[#A020F0] rounded-full hover:bg-[#A020F0] hover:text-white transition-all"
                  >
                    {selectedJob === index ? "Hide Details" : "View Details"}
                  </button>
                  <button
                    onClick={() => setShowApplication(true)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {hasMoreJobs && !showAllJobs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAllJobs(true)}
              className="group px-8 py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center gap-3"
            >
              <span className="text-lg">View More Jobs</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
          </motion.div>
        )}

        {/* Show Less Button (when expanded) */}
        {hasMoreJobs && showAllJobs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => {
                setShowAllJobs(false);
                // Scroll to top of job listings
                ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group px-8 py-4 bg-white border-2 border-[#A020F0] text-[#A020F0] rounded-full hover:bg-[#A020F0] hover:text-white transition-all flex items-center gap-3"
            >
              <span className="text-lg">Show Less</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={24} className="rotate-180" />
              </motion.div>
            </button>
          </motion.div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No jobs found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ApplicationForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    resume: "",
  });

  // Refs for scrolling to errors
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

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

    // Validate phone
    if (!validateIndianPhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit Indian mobile number",
      }));
      if (!firstErrorRef) firstErrorRef = phoneRef;
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    // Validate resume
    if (!formData.resume) {
      setErrors((prev) => ({ ...prev, resume: "Please upload your resume" }));
      if (!firstErrorRef) firstErrorRef = resumeRef;
    } else {
      setErrors((prev) => ({ ...prev, resume: "" }));
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
    setErrors({ email: "", phone: "", resume: "" });
    setSubmitted(true);
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
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (name === "phone" && errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
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
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF, DOC, or DOCX file",
        }));
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size must be less than 5MB",
        }));
        return;
      }

      setFormData({ ...formData, resume: file });
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-[#2FFFA3] to-[#1FDD8A] min-h-screen flex items-center">
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
              Application Submitted!
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Thank you for applying! Our HR team will review your application and
              respond within 48 hours.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-[#A020F0] transition-all"
            >
              Back to Jobs
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl"
          >
            Apply For This Role
          </motion.h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-[#A020F0] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 mb-8"
        >
          Submit your details and resume to begin your application journey. Our HR
          team will respond within 48 hours.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Position *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="e.g., Senior Full-Stack Developer"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Years of Experience *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
              >
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Portfolio URL
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Cover Letter *
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A020F0] focus:outline-none focus:ring-2 focus:ring-[#A020F0]/20"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>

            <div ref={resumeRef}>
              <label className="block text-sm mb-2 text-gray-700">
                Resume Upload *
              </label>
              <input
                type="file"
                id="job-resume-upload"
                name="resume"
                onChange={handleResumeUpload}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="job-resume-upload"
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
              {errors.resume && (
                <p className="text-sm text-red-500 mt-1">{errors.resume}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-lg"
            >
              Submit Application
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}