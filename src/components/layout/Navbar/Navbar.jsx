// import { useEffect, useState } from "react";
// import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
// import logo2 from '../../../assets/images/logo2.png'
// const navItems = [
//   { title: "Home", href: "#hero" },
//   { title: "About", href: "#about" },
//   { title: "Skills", href: "#skills" },
//   { title: "Experience", href: "#experience" },
//   { title: "Projects", href: "#projects" },
//   { title: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//  <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <a href="#hero" className="flex items-center">
//             <img
//               src={logo2}
//               alt="Laxmi Portfolio"
//               className="h-15 w-auto object-contain"
//             />
//           </a>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {navItems.map((item) => (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 className="relative text-white hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full"
//               >
//                 {item.title}
//               </a>
//             ))}

//             <a
//               href="/resume/Laxmi-Chaudhari-Resume.pdf"
//               download
//               className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-full font-medium transition"
//             >
//               <FaDownload />
//               Resume
//             </a>
//           </nav>

//           {/* Mobile Button */}
//           <button
//             className="lg:hidden text-white text-2xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"
//           }`}
//       >
//         <div className="flex flex-col px-6 py-5">
//           {navItems.map((item) => (
//             <a
//               key={item.title}
//               href={item.href}
//               onClick={() => setIsOpen(false)}
//               className="py-4 text-white border-b border-slate-800 hover:text-cyan-400 transition"
//             >
//               {item.title}
//             </a>
//           ))}

//           <a
//             href="/resume/Laxmi-Chaudhari-Resume.pdf"
//             download
//             className="mt-6 bg-cyan-500 text-center py-3 rounded-full font-medium hover:bg-cyan-600 transition"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import logo2 from "../../../assets/images/logo2.png";

const navItems = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#hero">
            <img
              src={logo2}
              alt="Logo"
              className="h-14 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-medium text-gray-700 hover:text-cyan-500 transition"
              >
                {item.title}
              </a>
            ))}

            <a
                href="/resume.pdf"
              download="Laxmi_Chaudhari_Resume.pdf"
              className="flex items-center gap-2 bg-cyan-500 text-white px-5 py-3 rounded-full hover:bg-cyan-600 transition"
            >
              <FaDownload />
              Resume
            </a>
          </nav>

          {/* Burger Button */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img
            src={logo2}
            alt="Logo"
            className="h-10"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-5">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-cyan-500 transition"
            >
              {item.title}
            </a>
          ))}

          <a
             href="/resume.pdf"
              download="Laxmi_Chaudhari_Resume.pdf"
            className="mt-6 bg-cyan-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-cyan-600 transition"
          >
            <FaDownload className="inline mr-2" />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}