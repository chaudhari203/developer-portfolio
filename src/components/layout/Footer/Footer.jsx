import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import logo2 from '../../../assets/images/logo2.png'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
           <a href="#hero" className="flex items-center">
                       <img
                         src={logo2}
                         alt="Laxmi Portfolio"
                         className="h-15 w-auto object-contain"
                       />
                     </a>

            <p className="text-gray-400 leading-7">
              Full Stack Software Developer passionate about building modern,
              scalable, and user-friendly web applications using React,
              Angular, Node.js, TypeScript, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

           <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-400 transition"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400 mb-6">
              Let's build something amazing together.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/laxmi-chaudhari-96ba6b20a"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-full transition"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
     <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
  <span>© {year}</span>

  <img
    src={logo2}
    alt="Laxmi Portfolio"
    className="h-5 w-auto object-contain"
  />

  <span>All Rights Reserved.</span>
</div>

          <p className="flex items-center gap-2 text-gray-500">
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;