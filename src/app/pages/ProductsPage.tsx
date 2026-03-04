import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Package,
  ArrowRight,
  Code,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Globe,
  X,
  ExternalLink,
  Check,
} from "lucide-react";
import { products, Product } from "../../data/products";

export function ProductsPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <ProductsGrid />
      <FeaturesSection />
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#2FFFA3]/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">Our Products</h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Explore CelestiCore-built digital products designed for modern businesses.
            Each product is fast, scalable, and backed by world-class engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProductsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleDemo = (demoUrl: string) => {
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                >
                  <product.icon size={32} />
                </div>
                <h3 className="text-2xl mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2FFFA3]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => handleLearnMore(product)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-lg transition-all"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => handleDemo(product.demoUrl)}
                    className="px-4 py-2 border border-gray-300 rounded-full hover:border-[#A020F0] transition-colors flex items-center gap-1"
                  >
                    Demo
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with sub-second response times",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Clean APIs and comprehensive documentation for easy integration",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Distributed infrastructure ensuring reliability worldwide",
    },
  ];

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Built for Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every CelestiCore product is crafted with attention to detail and built on
            modern infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center text-white">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDetailModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const handleDemo = (demoUrl: string) => {
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl w-full max-w-4xl my-8 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between p-4 sm:p-8 border-b border-gray-200">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white`}
            >
              <product.icon size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-3xl truncate">{product.name}</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{product.pricing}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors ml-2"
          >
            <X size={20} className="text-gray-500 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[60vh] sm:max-h-[calc(90vh-240px)]">
          <div className="space-y-6 sm:space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Overview</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Technical Features */}
            <div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.technicalFeatures.map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 sm:gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-gray-100"
                  >
                    <Check
                      size={16}
                      className="text-[#2FFFA3] mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                    />
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Features */}
            <div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature: string) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white text-xs sm:text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-8 border-t border-gray-200 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => handleDemo(product.demoUrl)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-sm sm:text-base"
            >
              <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              Try Live Demo
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 sm:px-6 sm:py-4 border-2 border-gray-300 rounded-full hover:border-[#A020F0] hover:bg-gray-50 transition-all text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}