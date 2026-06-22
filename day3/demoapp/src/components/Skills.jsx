import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaFigma,
  FaInstagram,
  FaDumbbell,
  FaRobot,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      name: "React Development",
      level: "90%",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "85%",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaFigma />,
      name: "UI/UX Design",
      level: "80%",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <FaRobot />,
      name: "AI Automation",
      level: "88%",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaInstagram />,
      name: "Content Creation",
      level: "92%",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <FaDumbbell />,
      name: "Fitness Coaching",
      level: "95%",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
              }}
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
              <div
                className={`
                w-16 h-16
                rounded-2xl
                bg-gradient-to-r
                ${skill.color}
                flex
                items-center
                justify-center
                text-3xl
                text-white
                mb-6
                `}
              >
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {skill.name}
              </h3>

              <div className="flex justify-between mb-2">
                <span className="text-zinc-400">
                  Proficiency
                </span>

                <span className="text-teal-400">
                  {skill.level}
                </span>
              </div>

              <div className="w-full bg-zinc-800 rounded-full h-3">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  style={{
                    width: skill.level,
                  }}
                />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;