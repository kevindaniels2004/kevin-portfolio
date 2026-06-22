import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AI Website",
      image: "/projects/ai-website.jpg",
      desc: "Modern AI-powered business website with automation and lead generation.",
      tech: "React • Tailwind • AI",
    },
    {
      title: "Business Card Website",
      image: "/projects/business-card.jpg",
      desc: "Digital business card with QR code, social links and contact sharing.",
      tech: "React • Tailwind",
    },
    {
      title: "Gym Website",
      image: "/projects/gym.jpg",
      desc: "Fitness coaching website with transformation showcase and contact system.",
      tech: "React • Framer Motion",
    },
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      desc: "Personal portfolio featuring animations, glassmorphism and 3D effects.",
      tech: "React • Three.js",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-indigo-500
                hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-4">
                  {project.desc}
                </p>

                <span className="text-teal-400 font-semibold">
                  {project.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;