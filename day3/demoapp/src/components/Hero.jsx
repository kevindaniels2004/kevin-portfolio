import profile from "../assets/kevin.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-40" />

            <img
              src={profile}
              alt="Kevin"
              className="
                relative
                w-72
                h-72
                md:w-[420px]
                md:h-[420px]
                object-cover
                rounded-full
                border-4
                border-indigo-500
                shadow-[0_0_60px_#6366f1]
              "
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            backdrop-blur-md
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
          "
        >
          <p className="text-teal-400 uppercase tracking-widest mb-3">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Hi, I'm{" "}
            <span className="text-indigo-500">
              Kevin
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-teal-400 mb-6">
            Web Developer • Fitness Coach • Creator
          </h2>

          <p className="text-zinc-300 leading-8 text-lg">
            Built on discipline and consistency, I bring the same
            passion to fitness and freelancing. I help brands and
            businesses build modern digital experiences while inspiring
            people through fitness and content creation.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 my-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/kevinnn7x"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 hover:scale-125 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/kevindaniels2004/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              className="
                px-8 py-4
                rounded-full
                bg-indigo-500
                hover:bg-indigo-600
                font-semibold
                transition
              "
            >
              Hire Me
            </button>

            <button
              className="
                px-8 py-4
                rounded-full
                border
                border-teal-400
                hover:bg-teal-400
                hover:text-black
                font-semibold
                transition
              "
            >
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;