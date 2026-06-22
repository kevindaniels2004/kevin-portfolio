import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative py-16 bg-black border-t border-white/10 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 w-[400px] h-[200px] bg-indigo-500/10 blur-[120px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Kevin
            </span>
          </h2>

          <p className="text-zinc-400 mt-3">
            Web Developer • Fitness Coach • Content Creator
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">

          <a
            href="https://github.com/kevindaniels2004"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:border-indigo-500
              hover:text-indigo-400
              transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/kevinnn7.x"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:border-pink-500
              hover:text-pink-400
              transition
            "
          >
            <FaInstagram />
          </a>

          <a
            href="www.linkedin.com/in/kevinnn7x"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:border-teal-400
              hover:text-teal-400
              transition
            "
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Back To Top */}
        <div className="flex justify-center mb-10">
          <a
            href="#home"
            className="
              w-14 h-14
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-teal-400
              flex
              items-center
              justify-center
              text-white
              hover:scale-110
              transition
            "
          >
            <FaArrowUp />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-zinc-500">
            © 2026 Kevin Lomesome. All Rights Reserved.
          </p>

          <p className="text-zinc-600 mt-2 text-sm">
            Designed & Developed with React, Tailwind & Three.js
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;