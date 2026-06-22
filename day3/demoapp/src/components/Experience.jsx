import { motion } from "framer-motion";
import { FaCode, FaDumbbell, FaVideo } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: <FaCode />,
      title: "Freelance Web Developer",
      duration: "2023 - Present",
      desc: "Built modern React websites, landing pages, portfolios and business websites for clients.",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Influencer",
      duration: "2022 - Present",
      desc: "Built an active online fitness community helping people transform their physique and lifestyle.",
    },
    {
      icon: <FaVideo />,
      title: "Content Creator",
      duration: "2021 - Present",
      desc: "Created reels, scripts, brand collaborations and social media content across multiple platforms.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-teal-400 hidden md:block" />

          <div className="space-y-10">

            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="
                  relative
                  md:ml-20
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-teal-400
                  hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]
                  transition-all
                  duration-300
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    hidden
                    md:flex
                    absolute
                    -left-[72px]
                    top-8
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-r
                    from-indigo-500
                    to-teal-400
                    items-center
                    justify-center
                    text-white
                    text-xl
                  "
                >
                  {item.icon}
                </div>

                <div className="flex items-center gap-4 mb-4">

                  <div className="md:hidden text-3xl text-indigo-500">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-teal-400 font-medium">
                      {item.duration}
                    </p>
                  </div>

                </div>

                <p className="text-zinc-400 leading-8">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;