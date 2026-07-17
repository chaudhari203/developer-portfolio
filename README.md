# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 💼 Laxmi Patil - Developer Portfolio

A modern, responsive, and interactive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS** to showcase my skills, projects, experience, and contact information.

## 🌐 Live Demo

> https://your-portfolio-link.com

---

## 📸 Preview

![Portfolio Preview](./public/images/portfolio-preview.png)

---

## ✨ Features

- 🎨 Modern and responsive UI
- ⚡ Built with React + Vite
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-friendly design
- 💼 Professional Hero Section
- 👩‍💻 About Me
- 🚀 Skills Section
- 💼 Experience Timeline
- 📂 Featured Projects
- 📧 Contact Form using EmailJS
- 🌙 Clean and minimal design
- 📄 Resume Download
- 🔗 Social Media Links

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Framer Motion
- React Icons

### Email Service

- EmailJS

### Deployment

- Vercel / Netlify / GitHub Pages

---

## 📂 Folder Structure

```text
developer-portfolio/
│
├── public/
│   ├── images/
│   ├── resume.pdf
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   └── ui/
│   │
│   ├── pages/
│   │   └── Home/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       ├── Contact.jsx
│   │       └── Home.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/developer-portfolio.git
```

Go to project directory

```bash
cd developer-portfolio
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## 📧 EmailJS Configuration

Create a `.env` file in the project root.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the development server after creating the `.env` file.

---

## 📱 Sections

- Hero
- About
- Skills
- Experience
- Projects
- Contact
- Footer

---

## 💼 Featured Projects

- YogaBest Website
- Edison Engineering Website

---

## 🚀 Future Enhancements

- Dark / Light Mode
- Blog Section
- Project Filtering
- Project Details Page
- Testimonials
- Animations
- SEO Optimization
- Download Resume
- Loading Screen
- Scroll Progress Bar

---

## 📞 Contact

**Laxmi Patil**

📧 Email: laxmifreelancer98@gmail.com

💼 LinkedIn:
https://www.linkedin.com/in/laxmi-chaudhari-96ba6b20a

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ using React, Tailwind CSS & Framer Motion.