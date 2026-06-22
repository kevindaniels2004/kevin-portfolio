import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Bachelor's in Computer Science Engineering",
      school: "JG University",
    },
    {
      icon: <FaGraduationCap />,
      title: "Diploma in Computer Engineering",
      school: "LJ University",
    },
    {
      icon: <FaCertificate />,
      title: "Fitness & Nutrition Certifications",
      school: "Certified Fitness Coach",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-indigo-500
                hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-5">
                <div className="text-4xl text-indigo-500">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    {item.school}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;