import {
  FaDumbbell,
  FaCode,
  FaPenNib,
  FaRobot,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
  {
    icon: "💻",
    title: "Website Development",
    desc: "Modern, responsive and high-converting websites built using React, Tailwind CSS and latest technologies.",
  },
  {
    icon: "🤖",
    title: "AI Business Cards",
    desc: "Smart digital business cards with contact sharing, portfolio showcase and lead generation features.",
  },
  {
    icon: "⚡",
    title: "AI Automation",
    desc: "Automate repetitive business tasks, lead management and workflows using AI-powered solutions.",
  },
  {
    icon: "🏋️",
    title: "Fitness Coaching",
    desc: "Personalized workout plans, nutrition guidance and transformation coaching.",
  },
  {
    icon: "🎥",
    title: "Content Creation",
    desc: "Reels, scripts, social media content and branding strategies for creators and businesses.",
  },
  {
    icon: "📈",
    title: "Personal Branding",
    desc: "Build a powerful online presence through websites, content strategy and digital positioning.",
  },
];

  return (
    <section
      id="services"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-8
              shadow-xl
              "
            >
              {/* Hover Glow */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-indigo-500/0
                via-indigo-500/10
                to-teal-400/0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-4xl
                  bg-gradient-to-r
                  from-indigo-500/20
                  to-teal-400/20
                  text-indigo-400
                  mb-6
                  "
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {service.desc}
                </p>

                <div className="mt-6">
                  <button
                    className="
                    text-indigo-400
                    font-semibold
                    group-hover:text-teal-400
                    transition
                    "
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;