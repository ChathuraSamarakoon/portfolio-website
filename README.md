# 🧑‍💻 Chathura Sachethana — Developer Portfolio

A personal portfolio website built with **React** and **Tailwind CSS**, showcasing my projects, skills, education, and contact information. Designed with a modern dark aesthetic featuring glassmorphism effects, smooth animations, and a fully functional contact form.

> 🎓 Built to showcase my work as a final year Information Systems undergraduate at Rajarata University of Sri Lanka.

---

## 🌐 Live Demo

**[View Portfolio →]([https://portfolio-website-six-rho-69.vercel.app/])**

---

## ✨ Features

- **Hero Section** — Animated intro with profile photo, tech stack marquee, GitHub & LinkedIn links, and "Available for work" badge
- **About Section** — Personal story with core value highlights (Clean Code, Performance, Collaboration, Innovation)
- **Education Timeline** — Visual timeline of academic and professional learning journey
- **Skills Section** — Categorized tech stack across Frontend, Backend, Database & Cloud, and Tools
- **Projects Section** — Featured project cards with live demo and GitHub links
- **Contact Form** — Functional contact form powered by EmailJS — messages sent directly to email
- **Responsive Design** — Fully mobile-friendly layout
- **Smooth Animations** — Fade-in effects, floating badges, animated marquee, and hover interactions

---

## 🚀 Tech Stack

| Technology | Details |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React, React Icons |
| **Email Service** | EmailJS |

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg
│   ├── hero-bg.jpg
│   ├── ProfilePhoto.png
│   └── projects/
│       ├── project1.png
│       ├── project2.png
│       └── project3.png
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable primary button
│   │   └── AnimatedBorderButton.jsx  # Button with animated gradient border
│   ├── layout/
│   │   ├── Navbar.jsx              # Top navigation
│   │   └── Footer.jsx              # Site footer
│   ├── sections/
│   │   ├── Hero.jsx                # Landing hero section
│   │   ├── About.jsx               # About me section
│   │   ├── Education.jsx           # Education timeline
│   │   ├── Skills.jsx              # Tech stack grid
│   │   ├── Projects.jsx            # Featured projects
│   │   └── Contact.jsx             # Contact form with EmailJS
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.local                      # Environment variables (not committed)
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/ChathuraSamarakoon/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these values from your [EmailJS dashboard](https://www.emailjs.com/). The contact form will not work without them.

### 4. Start the Development Server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 📬 Contact Form Setup (EmailJS)

The contact form uses **EmailJS** to send messages directly to your inbox without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add them to `.env.local` as shown above

---

## 🗂️ Featured Projects

| Project | Tech Stack | Links |
|---|---|---|
| **E-Commerce Website** | React, Node.js, MySQL, AWS | [Live](http://ecommerce-backend-env.eba-ubpj3ay6.eu-north-1.elasticbeanstalk.com/) · [GitHub](https://github.com/ChathuraSamarakoon/E-commerce-project) |
| **FUDO - Food Ordering App** | React, Spring Boot, MySQL, AWS | [Live](http://fudo-frontend-app-2026.s3-website-ap-southeast-1.amazonaws.com) · [GitHub](https://github.com/ChathuraSamarakoon/fudo-backend) |
| **DevSync - Real-Time Chat App** | MERN Stack, Socket.io, AWS | [Live](http://devsync-frontend-chathura.s3-website.eu-north-1.amazonaws.com) · [GitHub](https://github.com/ChathuraSamarakoon/DevSync-backend) |

---

## 🔮 Future Improvements

- [ ] Dark/light theme toggle
- [ ] Blog section for technical writing
- [ ] Project filtering by tech stack
- [ ] Page transition animations

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Connect with Me

- **GitHub:** [github.com/ChathuraSamarakoon](https://github.com/ChathuraSamarakoon)
- **LinkedIn:** [linkedin.com/in/chathura-samarakoon-87610b2a1](https://www.linkedin.com/in/chathura-samarakoon-87610b2a1)
- **Email:** chathurasamarakoon0@gmail.com
