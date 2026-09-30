# 🧠 Shivam Thaker - Portfolio Upgrade Master Prompt for Cursor or IDE

## 🎯 Goal
Transform the `portfolio-v2` project into a production-ready, resume-aligned, and freelance-optimized portfolio site for **Shivam Thaker**:

- ✅ Full-Stack Developer @ Korn Ferry
- ✅ Open to freelance work
- ✅ Skilled in scalable systems, APIs, dashboards, DevOps, infra
- ✅ Reflects business value, engineering depth, and personal brand

---

## 🗂️ Existing Folder Structure Reference
```
src/
├── pages/
│   ├── Homepage.js
│   ├── Aboutpage.js
│   ├── Workpage.js
│   ├── Projectpage.js
│   ├── Contactpage.js
│   └── Timeline.jsx
├── components/
│   ├── Project.js
│   ├── Moreproject.js
│   └── Navbar/
├── projects.data.js
public/
└── images/
    ├── pose/
    └── tech-icons/
```

---

## 🛠️ Required Changes (Do Not Skip)

### 1. `Homepage.js`
- 🔁 Replace hero text with:
```jsx
<h3>
  Full-Stack Developer @ <span>Korn Ferry</span>, building scalable systems from Mumbai, India.<br/>
  <strong>Currently open to freelance work in APIs, web, dashboards & infra.</strong>
</h3>
```
- 🎯 Helmet SEO:
```jsx
<title>Shivam Thaker | Full-Stack Developer @ Korn Ferry | Freelance Available</title>
<meta name="description" content="Portfolio of Shivam Thaker — building production-grade systems, APIs, dashboards, and infra tooling." />
```
- ✅ Ensure `<Timeline />` is visible.

---

### 2. `Aboutpage.js`
- ✍️ Rewrite top `<h3>`:
```jsx
<h3>
  I’m a Full-Stack Developer based in Mumbai, currently working at Korn Ferry. I specialize in scalable systems, API development, infrastructure monitoring, and ERP solutions.
  <br/>I also take on freelance projects — from startup MVPs to workflow automation tools.
</h3>
```
- 🧠 Group skills under: Frontend, Backend, Infra, Tools.

---

### 3. `projects.data.js` + `Workpage.js`
- ❌ Remove clones: Netflix, Dev.to, Bankist
- ✅ Add:
```js
{
  id: 1,
  name: "Infrastructure Monitoring System",
  link: "https://github.com/Shivam327/Infrastructure-Monitoring",
  desc: "Real-time monitoring using Grafana, Prometheus, Docker, and K8s.",
  tech: ["React", "Docker", "Grafana"]
},
{
  id: 2,
  name: "Used Car API",
  link: "https://github.com/Shivam327/Used-car-API-NestJS",
  desc: "Backend API with NestJS, PostgreSQL, and TypeORM.",
  tech: ["NestJS", "PostgreSQL"]
}
```

---

### 4. `Timeline.jsx`
Add the following entries:
```js
{
  title: "Freelance Developer",
  company: "Self-Employed",
  date: "May 2021 – April 2025",
  content: [
    "Delivered client-facing dashboards & websites",
    "Built custom ERP tools and admin panels"
  ]
}
```
Also include:
- Korn Ferry
- Phillip Capital
- Bellex

---

### 5. `Contactpage.js`
- Add CTA text:
```jsx
<h3>
  Let’s build something impactful. I’m currently open to freelance & contract-based projects in web, backend, and infra.
</h3>
```
- Make sure email, LinkedIn, GitHub links work.

---

### 6. `ServicesPage.js`
✅ Create a new file using the canvas `New Pages Scaffold`, or create manually:
```
src/pages/ServicesPage.js
```
Include services like:
- Web App Dev
- APIs
- Infra Monitoring
- ERP/CRM Customization
- CI/CD & Docker

---

### 7. (Optional) Add:
- `TestimonialsPage.js`
- `CaseStudiesPage.js`
- `ResultsPage.js`

Each can include client stories, reviews, or ROI metrics.

---

## 🧠 Keywords to Use (SEO + Trust)
`Full-Stack Developer`, `Freelance`, `React`, `NestJS`, `PostgreSQL`, `Docker`, `Kubernetes`, `ERP`, `Monitoring`, `APIs`, `CI/CD`, `System Design`, `Infrastructure`, `Performance`, `Automation`, `Business Efficiency`

---

## Final Goal
Create a portfolio that shows:
- 🔒 Technical confidence (CTO ✅)
- 💼 Business ROI (CFO ✅)
- 💬 Trust and clarity (Client ✅)

Reflect that Shivam is currently employed, **freelance-ready**, and capable of delivering scalable, production-quality systems for both startups and enterprises.
