/**
 * Complete React Multipage App
 * Includes all necessary imports and components
 * Copy this as src/App.jsx and it should run after installing React + Tailwind
 */

import React, { useState } from "react";

const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 ${
      active ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-slate-100"
    }`}
  >
    {children}
  </button>
);

const Header = ({ page, setPage }) => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-300 flex items-center justify-center text-white font-bold">RJ</div>
          <div>
            <div className="text-lg font-semibold text-slate-800">Raheel DevOps</div>
            <div className="text-xs text-slate-500">DevOps • Cloud • Infrastructure</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink active={page === "home"} onClick={() => setPage("home")}>Home</NavLink>
          <NavLink active={page === "about"} onClick={() => setPage("about")}>About</NavLink>
          <NavLink active={page === "services"} onClick={() => setPage("services")}>Services</NavLink>
          <NavLink active={page === "portfolio"} onClick={() => setPage("portfolio")}>Portfolio</NavLink>
          <NavLink active={page === "contact"} onClick={() => setPage("contact")}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPage("contact")}
            className="hidden sm:inline-block px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onNavigate }) => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Modern DevOps & Cloud Solutions
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl">
          Production-ready infrastructure, CI/CD pipelines, and scalable microservices. I build robust systems that keep your apps reliable and deployment simple.
        </p>

        <div className="mt-6 flex gap-3">
          <button onClick={() => onNavigate("portfolio")} className="px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">See Portfolio</button>
          <button onClick={() => onNavigate("services")} className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition">Our Services</button>
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6">
        <div className="rounded-lg overflow-hidden shadow-md border border-slate-100">
          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="infrastructure" className="w-full h-64 object-cover" />
          <div className="p-5 bg-white">
            <h3 className="font-semibold text-lg">Reliable CI/CD pipelines</h3>
            <p className="text-sm text-slate-600 mt-2">Fast, testable deployments using GitHub Actions, Jenkins, and ArgoCD.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="max-w-4xl mx-auto px-6 py-12">
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h2 className="text-2xl font-bold text-slate-900">About Me</h2>
      <p className="mt-3 text-slate-600">
        I am a DevOps-focused engineer building scalable systems, automation, and observability. I focus on infrastructure-as-code, container orchestration, and production-grade observability.
      </p>
    </div>
  </section>
);

const Services = () => (
  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-2xl font-bold text-slate-900">Services</h2>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      <div className="p-5 rounded-xl border bg-white shadow-sm">
        <div className="text-3xl">☁️</div>
        <h3 className="mt-3 font-semibold text-lg">Cloud Architecture</h3>
        <p className="mt-2 text-sm text-slate-600">Design and implement secure, scalable cloud infra</p>
      </div>
      <div className="p-5 rounded-xl border bg-white shadow-sm">
        <div className="text-3xl">⚙️</div>
        <h3 className="mt-3 font-semibold text-lg">CI/CD Pipelines</h3>
        <p className="mt-2 text-sm text-slate-600">Automated testing and deployment</p>
      </div>
      <div className="p-5 rounded-xl border bg-white shadow-sm">
        <div className="text-3xl">🧭</div>
        <h3 className="mt-3 font-semibold text-lg">Kubernetes</h3>
        <p className="mt-2 text-sm text-slate-600">Deployment, Helm charts & operators</p>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-2xl font-bold text-slate-900">Portfolio</h2>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {[1,2,3].map(i => (
        <article key={i} className="rounded-xl overflow-hidden border shadow-sm bg-white">
          <img src={`https://images.unsplash.com/photo-1526378728301-4f50b0e2d3c8?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder${i}`} alt={`project-${i}`} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">Project {i}</h3>
            <p className="text-sm text-slate-600 mt-1">Demo project with CI/CD & Docker</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
      <p className="text-slate-600 mt-2">Send a note — I usually reply within 24–48 hours.</p>
      <form className="mt-6 grid gap-4">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" rows={6} className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <div className="flex items-center gap-3">
          <button type="button" className="px-4 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Send Message</button>
          <div className="text-sm text-slate-500">Or email: <span className="font-medium text-slate-700">raheel@example.com</span></div>
        </div>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer className="mt-12 border-t border-slate-200 bg-white">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-slate-600">© {new Date().getFullYear()} Raheel DevOps — Built with ❤️</div>
      <div className="flex gap-3 text-slate-600 text-sm">
        <a className="hover:underline">GitHub</a>
        <a className="hover:underline">LinkedIn</a>
        <a className="hover:underline">Twitter</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Header page={page} setPage={setPage} />
      <main>
        {page === "home" && <Hero onNavigate={setPage} />}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "portfolio" && <Portfolio />}
        {page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}