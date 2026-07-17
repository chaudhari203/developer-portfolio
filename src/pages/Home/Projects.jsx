import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import yogaBestImage from "../../assets/images/yoga.png";
import edisonImage from "../../assets/images/edison.png";
export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "YogaBest Website",
      image: yogaBestImage,
      description:
        "YogaBest is a modern and responsive yoga website designed to promote wellness and healthy living. Built with React, Tailwind CSS, and Vite, it features a clean user interface, smooth navigation, and an engaging user experience across all devices.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      live: " https://chaudhari203.github.io/yogawebsite/",
    },
    {
      id: 2,
      title: "Edison Engineering Website",
      image: edisonImage,
      description:
        "A fully responsive engineering company website featuring Home, About, Services, Projects, Careers, and Contact pages. Developed using modern frontend technologies with a focus on performance, accessibility, and user-friendly navigation.",
      technologies: [
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "Sql",
        ".Net Core"
      ],
      live: "http://148.230.66.243/",
    },
  //   {
  //     id: 3,
  //     title: "Panel Design Website",
  //     image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80",
  //      description:
  //   "A modern and responsive website developed for a panel design company to showcase electrical panel solutions, products, and services. Built with React and Tailwind CSS, the website features a clean user interface, responsive layouts, smooth navigation, and an optimized user experience across all devices.",
  // technologies: [
  //   "React",
  //   "Tailwind CSS",
  //   "JavaScript",
  //   "Vite",
  // ],
  //     live: "#",
  //   },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-cyan-50 text-cyan-400 via-white to-teal-50 py-24"
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
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-slate-900">
            Featured Projects
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
            Here are some of the projects I've built using modern web
            technologies, focusing on performance, scalability, and user
            experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-200 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800  hover:bg-cyan-600 px-5 py-3 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};