import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import {
  Globe,
  Smartphone,
  Package,
  Palette,
  Cloud,
  Check,
  ChevronDown,
} from "lucide-react";
import { services } from "../../data/services";
import { faqs } from "../../data/faqs";

export function ServicesPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <ServicesGrid />
      {/* <PricingSection /> */}
      <FAQSection />
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At CelestiCore, we offer modern, efficient, and scalable digital services
            tailored to your business needs. Our expert team ensures every
            project is delivered with precision and creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-2xl transition-all">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                >
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                    What you get:
                  </p>
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹2,50,000",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Mobile responsive",
        "1 month support",
        "Contact form integration",
      ],
    },
    {
      name: "Professional",
      price: "₹6,65,000",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Mobile & tablet responsive",
        "3 months support",
        "CMS integration",
        "Analytics setup",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited pages",
        "Enterprise SEO",
        "Full responsive design",
        "12 months support",
        "Custom integrations",
        "Dedicated account manager",
        "Priority support",
        "Advanced analytics",
      ],
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
          <h2 className="text-4xl md:text-5xl mb-6">Flexible Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from flexible packages or request a custom quote designed
            around your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl ${
                plan.popular
                  ? "bg-gradient-to-br from-[#A020F0] to-[#8B3FD8] text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2FFFA3] text-[#111111] rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <div className="text-4xl mb-2">{plan.price}</div>
              <p
                className={`mb-6 ${
                  plan.popular ? "text-purple-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        plan.popular
                          ? "bg-[#2FFFA3]"
                          : "bg-gradient-to-br from-[#A020F0] to-[#2FFFA3]"
                      } flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check
                        size={14}
                        className={plan.popular ? "text-[#111111]" : "text-white"}
                      />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className={`block w-full py-3 rounded-full transition-all text-center ${
                  plan.popular
                    ? "bg-white text-[#A020F0] hover:bg-[#2FFFA3] hover:text-[#111111]"
                    : "bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white hover:shadow-lg hover:shadow-purple-500/50"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A020F0] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform text-[#A020F0] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}