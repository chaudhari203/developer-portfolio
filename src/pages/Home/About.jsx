import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

export const About = () => {
  const highlights = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, Angular, JavaScript, TypeScript, and Tailwind CSS.",
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      description:
        "Developing scalable REST APIs using Node.js, Express.js, and integrating third-party services.",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database",
      description:
        "Working with MongoDB, Prisma ORM, and MySQL to build secure and efficient applications.",
    },
    {
      icon: <FaCode size={28} />,
      title: "Clean Code",
      description:
        "Writing reusable, maintainable, and scalable code following modern development best practices.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-600 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-slate-900">
            Passionate Software Developer
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
            I'm a Full Stack Developer with experience building modern web
            applications using React, Angular, Node.js, TypeScript, Express.js,
            MongoDB, Prisma ORM, and Tailwind CSS. I enjoy creating responsive,
            user-friendly, and scalable applications while continuously learning
            new technologies.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80"
              alt="About"
              className="rounded-2xl shadow-xl border border-cyan-100 w-full"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-slate-900">
              Turning Ideas into Digital Solutions
            </h3>

            <p className="text-slate-600 leading-8 mb-8">
              I enjoy solving real-world problems through technology. Whether
              it's designing intuitive user interfaces or building secure
              backend APIs, my goal is to deliver high-quality software that
              provides value to users and businesses.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl p-6 border border-cyan-100 shadow-md hover:shadow-xl hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-cyan-600 mb-4">{item.icon}</div>

                  <h4 className="text-xl font-semibold mb-3 text-slate-200">
                    {item.title}
                  </h4>

                  <p className="text-slate-200 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};