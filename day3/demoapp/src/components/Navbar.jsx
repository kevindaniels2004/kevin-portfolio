import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

const links = [
  "home",
  "services",
  "projects",
  "skills",
  "education",
  "experience",
  "contact",
]; 

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/30
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#home"
          className="
          text-4xl
          font-black
          bg-gradient-to-r
          from-indigo-500
          to-teal-400
          bg-clip-text
          text-transparent
          hover:scale-105
          transition
          "
        >
          Kevin
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="
              capitalize
              text-white/80
              hover:text-teal-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-teal-400
              hover:after:w-full
              after:transition-all
              "
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-2xl
          text-white
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
            className="
            fixed
            top-0
            right-0
            h-screen
            w-72
            bg-black/90
            backdrop-blur-xl
            border-l
            border-white/10
            flex
            flex-col
            justify-center
            items-center
            gap-8
            md:hidden
            "
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="
                text-2xl
                capitalize
                hover:text-teal-400
                transition
                "
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;