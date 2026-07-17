import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
  const experiences = [
    {
      company: "Balkrushna Technologies Pvt.Ltd",
      role: "Software Developer",
      duration: "2023 - 2024",
      description:
        "Developing scalable web applications using React, Angular, Node.js, Express.js, TypeScript, MongoDB, Prisma ORM, and Tailwind CSS.",
      technologies: [
        "React",
        "Angular",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
      ],
    },
    {
      company: "BYTEWEB IT SOLUTIONS Pvt.Ltd",
      role: "Full Stack Developer",
      duration: "2024 - 2025",
      description:
        "Built responsive websites, REST APIs, dashboards, admin panels, and portfolio applications while improving UI/UX and application performance.",
      technologies: [
        "React",
        "JavaScript",
        "Express.js",
        "MySQL",
        "Git",
      ],
    },
    {
      company: "Ajit Enterprises",
      role: "Full Stack Developer",
      duration: "2025 - Present",
      description:
        "Built responsive websites, REST APIs, dashboards, admin panels, and portfolio applications while improving UI/UX and application performance.",
      technologies: [
        "React",
        "Angular",
        "JavaScript",
        "Express.js",
        "MySQL",
        "Git",
      ],
    },
  ];

  return (
    <section
  id="experience"
  className="bg-gradient-to-br from-white via-cyan-50 to-teal-100 py-24"
>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
         <p className="text-cyan-600 uppercase tracking-widest font-semibold">
            Experience
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-slate-900">
            Professional Journey
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
            My experience building modern web applications, APIs, and
            enterprise solutions using frontend and backend technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Timeline Icon */}
              <span className="absolute -left-[54px] top-2 bg-cyan-500 text-white p-3 rounded-full shadow-lg">
                <FaBriefcase />
              </span>

              {/* Card */}
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200">
                      {exp.role}
                    </h3>

                    <h4 className="text-cyan-400 text-lg mt-2">
                      {exp.company}
                    </h4>
                  </div>

                  <span className="mt-4 md:mt-0 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-cyan-400 mt-6 leading-8">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 px-4 py-2 text-slate-200 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};