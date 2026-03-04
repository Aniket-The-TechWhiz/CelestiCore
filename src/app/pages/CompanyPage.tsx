import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Linkedin, Mail, Award, Heart, Target, Lightbulb } from "lucide-react";
import { teamMembers } from "../../data/team";

export function CompanyPage() {
  return (
    <div className="pt-24">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <GallerySection />
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
            About{" "}
            <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
              CelestiCore
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            CelestiCore is a forward-thinking tech company focused on crafting impactful
            digital solutions. We believe in innovation, simplicity, and
            excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded with a vision to empower businesses with scalable tech, CelestiCore
            has become a trusted partner for brands across industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              It all started in 2021 with a simple belief: technology should
              empower, not complicate. Our founders, a group of passionate
              engineers and designers, came together with a mission to build
              products that truly matter.
            </p>
            <p>
              From our humble beginnings in a small office, we've grown into a
              team of talented professionals serving clients worldwide. We've
              delivered over 120 successful projects, trained 300+ interns, and
              built products used by thousands of users daily.
            </p>
            <p>
              Today, CelestiCore stands as a testament to what's possible when
              innovation meets dedication. We continue to push boundaries,
              explore new technologies, and create solutions that make a
              difference in people's lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to solve complex problems",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do and pour our hearts into every project we undertake",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every line of code and every pixel we design",
      color: "from-[#A020F0] to-purple-600",
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices",
      color: "from-blue-500 to-cyan-500",
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
          <h2 className="text-4xl md:text-5xl mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at CelestiCore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#A020F0] hover:shadow-xl transition-all text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white`}
              >
                <value.icon size={32} />
              </div>
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Meet the Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind CelestiCore's success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#A020F0] hover:shadow-xl transition-all text-center"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#A020F0] to-[#2FFFA3] flex items-center justify-center text-white text-3xl ${
                  member.image ? 'hidden' : ''
                }`}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p className="text-[#A020F0] mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
              <div className="flex justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#A020F0] hover:text-white transition-all"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#A020F0] hover:text-white transition-all"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    { title: "Modern Office Space", gradient: "from-blue-500 to-cyan-500" },
    { title: "Team Collaboration", gradient: "from-purple-500 to-pink-500" },
    { title: "Innovation Lab", gradient: "from-orange-500 to-amber-500" },
    { title: "Team Meeting", gradient: "from-emerald-500 to-teal-500" },
    { title: "Workspace", gradient: "from-rose-500 to-red-500" },
    { title: "Creative Zone", gradient: "from-[#A020F0] to-purple-600" },
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
          <h2 className="text-4xl md:text-5xl mb-6">Our Workspace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our creative environment where innovation happens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg z-10">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}