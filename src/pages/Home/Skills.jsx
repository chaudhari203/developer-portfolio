import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiPostman,
  SiVite,
  SiFigma,
  SiCanva
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Angular", icon: <FaAngular className="text-red-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "REST API", icon: "⚡" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
   {
  title: "Tools",
  skills: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
  ],
},
  ];

  return (
   <section
  id="skills"
  className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-24"
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <p className="text-cyan-600 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-slate-900">
            Technologies I Work With
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
            I enjoy building modern, scalable, and user-friendly web
            applications using the latest frontend and backend technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition duration-300 hover:-translate-y-2"
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>

                    <span className="text-sm font-semibold text-slate-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};