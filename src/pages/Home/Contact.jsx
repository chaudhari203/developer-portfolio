import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
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

            Contact
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-slate-900">
            Let's Work Together
          </h2>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
            Have a project in mind or want to discuss an opportunity? Feel free
            to reach out. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">
                    laxmifreelancer98@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-600 text-white p-4 rounded-full shadow-lg shadow-cyan-200">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    +91 9767832915
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-600 text-white p-4 rounded-full shadow-lg shadow-cyan-200">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Vadodara Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://www.linkedin.com/in/laxmi-chaudhari-96ba6b20a"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-cyan-100 text-slate-700 p-4 rounded-full shadow-md hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-cyan-100 shadow-lg">
              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-200">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-cyan-100 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-200">Email</label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full  border border-cyan-100 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-200">Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full  border border-cyan-100 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium text-slate-200">Message</label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full  border border-cyan-100 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 resize-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
  disabled={loading}
                className="w-full text-white py-4 rounded-lg font-semibold shadow-md hover:bg-cyan-700 hover:shadow-lg transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};