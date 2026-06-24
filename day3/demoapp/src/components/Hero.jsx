
import profile from "../assets/kevin.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        pt-28
        pb-12
        px-4
        sm:px-6
      "
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="order-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-40" />

            <img
              src={profile}
              alt="Kevin"
              className="
                relative
                w-48
                h-48
                sm:w-60
                sm:h-60
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            order-2
            w-full
            backdrop-blur-md
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            md:p-8
          "
        >
          <p className="text-teal-400 uppercase tracking-[4px] text-sm mb-3">
            Welcome To My Portfolio
          </p>

          <h1 className="font-black leading-none mb-4">
            <span className="block text-4xl sm:text-5xl md:text-7xl text-white">
              Hi, I'm
            </span>

            <span className="block text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Kevin
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-teal-400 mb-5">
            Web Developer • Fitness Coach • Creator
          </h2>

          <p className="text-zinc-300 text-base md:text-lg leading-8">
            Built on discipline and consistency, I bring the same passion
            to fitness and freelancing. I help brands and businesses build
            modern digital experiences while inspiring people through
            fitness and content creation.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6 my-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/kevinnn7x"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/kevindaniels2004"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="
                flex-1
                px-8
                py-4
                rounded-full
                bg-indigo-500
                hover:bg-indigo-600
                transition
                font-semibold
              "
            >
              Hire Me
            </button>

            <button
              className="
                flex-1
                px-8
                py-4
                rounded-full
                border
                border-teal-400
                hover:bg-teal-400
                hover:text-black
                transition
                font-semibold
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
