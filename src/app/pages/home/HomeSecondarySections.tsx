import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Package,
  Palette,
  Cloud,
  ArrowRight,
  Users,
  Award,
  Target,
} from "lucide-react";
import { caseStudies } from "../../../data/caseStudies";
import { testimonials } from "../../../data/testimonials";

export function HomeSecondarySections() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ClientSuccessStories />
      <InternshipPromo />
      <TestimonialsSection />
    </>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Turn ideas into impactful products",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class solutions",
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Pushing boundaries of technology",
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
          <h2 className="text-4xl md:text-5xl mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              CelestiCore
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CelestiCore is a product-based technology company dedicated to crafting
            modern digital experiences. We design, develop, and deliver scalable
            solutions that empower startups, enterprises, and creators worldwide.
            Our mission is simple: turn ideas into impactful products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0]/50 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#A020F0] to-[#8B3FD8] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <value.icon size={28} />
              </div>
              <h3 className="text-xl mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Responsive, fast, SEO-ready websites built with cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "High-performance Android, iOS, and cross-platform applications.",
    },
    {
      icon: Package,
      title: "Custom Product Development",
      description: "Full-cycle product creation—from concept to launch.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, minimal, user-focused design systems.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Reliable, secure, and scalable cloud deployments.",
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
          <h2 className="text-4xl md:text-5xl mb-6">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-[#A020F0] hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            Explore All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ClientSuccessStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Client{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses
            transform digitally and achieve measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-2xl transition-all overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${study.color}`}
              />

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl">{study.company}</h3>
                  <span className="px-3 py-1 text-xs bg-purple-100 text-[#A020F0] rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-[#A020F0] mb-1">
                    Challenge
                  </p>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-[#2FFFA3] mb-1">
                    Solution
                  </p>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
                  Results
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-white`}
                      >
                        <result.icon size={20} />
                      </div>
                      <p className="font-bold text-lg">{result.value}</p>
                      <p className="text-xs text-gray-600">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-6 text-[#A020F0] hover:gap-3 transition-all group-hover:text-[#8B3FD8]"
              >
                View Case Study
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function InternshipPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-[#2FFFA3] to-[#1FDD8A]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#111111]">
            Kickstart Your Tech Career
          </h2>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            Gain hands-on training from industry experts and secure your future
            in technology.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-[#A020F0] transition-all hover:shadow-xl"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we deliver solutions that make an
            impact
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#A020F0] hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#2FFFA3] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.company && (
                  <p className="text-sm font-medium text-[#A020F0]">{testimonial.company}</p>
                )}
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[85vw] sm:min-w-[400px] snap-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#2FFFA3] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  {testimonial.company && (
                    <p className="text-sm font-medium text-[#A020F0]">{testimonial.company}</p>
                  )}
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
