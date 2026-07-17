import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 text-gray-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-600 text-lg font-medium mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Laxmi
            <span className="text-cyan-600"> Patil</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-700">
            Full Stack Software Developer
          </h2>

          <p className="mt-8 text-slate-600 leading-8 max-w-xl">
            Passionate Full Stack Developer with experience in React, Angular, Node.js,
            Express.js, MongoDB, and TypeScript. Skilled in building responsive web
            applications, RESTful APIs, and scalable solutions with a strong focus on
            clean code, performance optimization, and exceptional user experiences.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition duration-300 inline-block"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Laxmi_Chaudhari_Resume.pdf"
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-cyan-600 hover:text-white transition duration-300"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
             src="https://images.openai.com/static-rsc-4/BPcI5uGDcrXndskVxEpjohSAXrZnrwETHTsh3BJNM51DmN9-fjWRY4JgIqmPPC0U8WI9AVxJQhzshw6iV5kOyeNfDpkj4RHnEl8I5TWLsaatsGTkhVFqC4l-ID-5xygNdW-iKZ9Fj0DNn5bsjnWgVL2i3bMpu_vg7G1T1-ZD4EQP4_P7HULqrzFubDhRo5bb?purpose=fullsize"
            alt="Profile"
            className="w-200 lg:w-[550px] rounded-full   shadow-2xl shadow-cyan-300/40"
          />
        </motion.div>
      </div>
    </section>
  );
};