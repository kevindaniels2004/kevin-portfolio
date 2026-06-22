import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "6343f827-b89e-4082-9652-4a1aad3889e8"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Message Sent Successfully 🚀");
        e.target.reset();
      } else {
        setStatus("Failed To Send Message ❌");
      }
    } catch (error) {
      setStatus("Something Went Wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black mb-20"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            mx-auto
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            md:p-12
            shadow-[0_0_40px_rgba(99,102,241,0.2)]
          "
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}

            <div className="relative">
              <FaUser className="absolute left-5 top-5 text-indigo-400" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  text-white
                  focus:border-indigo-500
                  outline-none
                  transition
                "
              />
            </div>

            {/* Email */}

            <div className="relative">
              <FaEnvelope className="absolute left-5 top-5 text-indigo-400" />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                  text-white
                  focus:border-indigo-500
                  outline-none
                  transition
                "
              />
            </div>

            {/* Message */}

            <textarea
              name="message"
              rows="7"
              placeholder="Tell me about your project..."
              required
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-xl
                p-4
                text-white
                focus:border-indigo-500
                outline-none
                transition
                resize-none
              "
            />

            {/* Button */}

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-teal-400
                font-bold
                text-white
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                transition
                duration-300
              "
            >
              <FaPaperPlane />
              Send Message
            </button>

            {status && (
              <p className="text-center text-teal-400 font-semibold">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;