import React, { useState, useEffect, useMemo } from "react";
import { TechIcon, IcoMail, IcoPhone, IcoGlobe, IcoChat } from "./icons.jsx";

/* ============================================================
   Hero
   ============================================================ */
const Hero = ({ onCta }) => {
  return (
    <section id="home" className="hero" data-screen-label="01 Hero">
      <h1 data-comment-anchor="hero-headline">
        El desarrollo web no tiene<br />
        por qué ser como en los 90s
      </h1>
      <p className="lede">
        Desarrollo del siglo XXI de punta a punta (front y backend) impulsado por la IA para que su proyecto
        digital sea ágil, poderoso y tal como usted lo sueña.
      </p>
      <div className="ctas">
        <button className="btn-95 primary" onClick={() => onCta("trabajo")}>
          Ver mi trabajo &raquo;
        </button>
        <button className="btn-95" onClick={() => onCta("contacto")}>
          Contactar
        </button>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <strong>5+</strong>
          <span>años de experiencia</span>
        </div>
        <div className="stat">
          <strong>15</strong>
          <span>proyectos entregados</span>
        </div>
        
        <div className="stat">
          <strong>1.21 KG</strong>
          <span>de cafeína al año ☕</span>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Mi trabajo — project mini-windows
   ============================================================ */
const PROJECTS = [
  {
    id: "p1",
    title: "ChatBot IA por WhatsApp - Lukitas",
    role: "Desarrollador",
    year: "2026",
    desc: "ChatBot (Agente de IA) 100% por medio de WhatsApp para el control y manejo de las finanzas personales.",
    tags: ["Node.js", "TypeScript", "API WhatsApp", "API Gemini IA", "Claude Code", "Convex"],
    palette: ["#000080", "#ff7c66", "#ffd400"],
    swatch: "shop",
    imagen_portada: ["/images/lukas_1.png"],
    images: ["/images/lukas_1.png", "/images/lukas_2.png"],
  },
  {
    id: "p2",
    title: "Landing Page - SocioPro",
    role: "Desarrollador",
    year: "2026",
    desc: "Diseño y desarrollo de página web de aterrizaje responsiva para producto SaaS SocioPro.",
    tags: ["React", "Claude Code", "Tailwind", "Vite"],
    palette: ["#1a8c2a", "#00ffff", "#ffd400"],
    swatch: "shop",
    imagen_portada: ["/images/socio-pro_landing_1.png"],
    images: ["/images/socio-pro_landing_2.png", "/images/socio-pro_landing_3.png", "/images/socio-pro_landing_4.png"],
    url: ["https://sociopro.chat"],
    
  },
  {
    id: "p3",
    title: "Chatbot y app web - SocioPro",
    role: "Emprendedor y Desarrollador",
    year: "2025 - 2026",
    desc: "ChatBot (Agente IA) por Whats App y App Web para el registro, control y seguimiento de las cuentas de pequeños negocios. Con autenticación en el backend, backend de Convex e integración con API modelo IA",
    tags: ["React", "Tailwind", "Claude Code", "Clerk", "Convex", "API Claude IA", "API WhatsApp"],
    palette: ["#c2185b", "#ffe600", "#fff"],
    swatch: "shop",
    imagen_portada: ["/images/socio-pro-chat_1.png"],
    video_url: "https://www.youtube.com/watch?v=1J5Q2KgpGP4",
    images: [],
  },
  {
    id: "p4",
    title: "MVP Web App E-learning",
    role: "Desarrollador",
    year: "2024",
    desc: "Desarrollo full stack del producto mínimo viable (MVP) para una app web de e-learning con funcionalidades de administración de usuarios y por roles (Clerk), editor de texto con markdown (Lexical), UI responsiva (Tailwind) y backend (Convex), entre otras.",
    tags: ["React", "Tailwind", "Convex", "Clerk"],
    images: ["/images/plataforma-e4.png", "/images/plataforma-e1.png"],
    imagen_portada: ["/images/portada-plataforma.jpg"],
    palette: ["#ff2bd6", "#00ff80", "#000"],
    swatch: "shop",
  },
  {
    id: "p5",
    title: "Reediseño Ecommerce - Fire & Ice",
    role: "Desarrollador",
    year: "2024",
    desc: "Rediseño completo de sitio de ecommerce en desktop y mobile para la marca de moda independiente Fire and Ice con personalización de diseño web",
    tags: ["WordPress"],
    palette: ["#404040", "#ffe600", "#00ffff"],
    swatch: "cms",
    images: ["images/ahoraF&I-3.png.jpg", "images/ahora-fandi.png", "images/f&I-mobile.jpg"],
    imagen_portada: ["images/ahora-fandi.png"],
  },
  {
    id: "p6",
    title: "App Procesos Internos - Amazóniko",
    role: "Desarrollador",
    year: "2023",
    desc: "Desarrollo de aplicativo web responsivo para la automatización y gestión de los flujos de trabajo internos para la marca de reciclaje colectivo Amazóniko",
    tags: ["React", "Tailwind", "Convex"],
    palette: ["#000080", "#ffd400", "#ff7c66"],
    swatch: "design",
    images: ["images/home-amazoniko.jpg", "images/mobile-amazoniko.jpg", "images/diseño-amazoniko.jpg"],
    imagen_portada: ["images/home-amazoniko.jpg"],
  },
];

const ProjectScreen = ({ image }) => {
  // Different small pixel-art "screenshots" per project type
 
    return (
      <img src={image} width="100%" height="100%" style={{objectFit:"cover",objectPosition:"top",display:"block"}}/>
    );
  }

 


const ProjectWindow = ({ p, onOpen }) => (
  <div className="project-win" onClick={() => onOpen(p)}>
    <div className="title-bar">
      <div className="title-bar-text">
        <span style={{ width: 16, height: 16, background: p.palette[0], border: "1px solid #000", display: "inline-block" }}></span>
        <span>{p.title}.exe</span>
      </div>
      <div className="title-bar-controls">
        <button className="title-btn" aria-label="min" onClick={(e)=>e.stopPropagation()}>_</button>
        <button className="title-btn" aria-label="max" onClick={(e)=>e.stopPropagation()}>□</button>
        <button className="title-btn" aria-label="close" onClick={(e)=>e.stopPropagation()}>×</button>
      </div>
    </div>
    <div className="screen">
      <ProjectScreen swatch={p.swatch} palette={p.palette} image={p.imagen_portada} />
    </div>
    <div className="body">
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="tags">
        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="meta">
        <span>{p.role}</span>
        <span>· {p.year} ·</span>
        <span>Doble-click para abrir »</span>
      </div>
    </div>
  </div>
);

const MyWork = ({ onOpenProject }) => (
  <section id="trabajo" className="section" data-screen-label="02 Mi trabajo">
    <div className="section-head">
      <span className="section-tag">C:\PORTFOLIO\TRABAJO</span>
      <h2>
        Proyectos <span className="accent">destacados</span>
      </h2>
      <p className="sub">
        Una selección de los proyectos más recientes: e-commerce, agentes IA,
        chatbots y landing pages. Click en cualquier
        ventana para ver el caso.
      </p>
    </div>
    <div className="projects">
      {PROJECTS.map(p => <ProjectWindow key={p.id} p={p} onOpen={onOpenProject} />)}
    </div>
  </section>
);

/* ============================================================
   Tecnologías — desktop icon grid
   ============================================================ */
const TECHS = [
  { id: "react",  name: "React",       tag: "JSX", image: "images/react-pixelado.png" },
  { id: "ts",     name: "TypeScript",      tag: "TS",  image: "images/typescript-pixelado.png" },
  { id: "node",   name: "Node.js",         tag: "JS",  image: "images/node-pixelado.png" },
  { id: "vite",   name: "Vite",        tag: "VT",  image: "images/vite-pixelado.png" },
  { id: "tw",     name: "Tailwind",        tag: "TW",  image: "images/tailwind-pixelado.png" },
  { id: "html",   name: "Claude Code",     tag: "<>",  image: "images/claude-pixelado.png" },
  { id: "pg",     name: "Convex",      tag: "DB",  image: "images/convex-pixelado.png" },
  { id: "git",    name: "Git",         tag: "GIT", image: "images/git-pixelado.png" },
  { id: "fmotion",name: "Clerk",   tag: "FM",  image: "images/clerk-pixelado.png" },
  { id: "astro",  name: "API WhatsApp",        image: "AS",  image: "images/wapp-pixelado.png" },
  { id: "astro",  name: "APIs modelos IA",     image: "AS",  image: "images/ai-pixelado.jpg" },
];

const Technologies = () => {
  const [selected, setSelected] = useState(null);
  const [clock, setClock] = useState(() => formatClock(new Date()));
  useEffect(() => {
    const t = setInterval(() => setClock(formatClock(new Date())), 30 * 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="tecnologias" className="section" data-screen-label="03 Tecnologías">
      <div className="section-head">
        <span className="section-tag">C:\PORTFOLIO\STACK</span>
        <h2>
          Mi <span className="accent3">stack</span>{" "}
          <span className="accent">técnico</span>
        </h2>
        <p className="sub">
          Las herramientas que uso día a día.
        </p>
      </div>

      <div className="tech-desktop">
        <div className="tech-grid">
          {TECHS.map(t => (
            <div
              key={t.id}
            >
              <div className="glyph" style={{width: "50px", height: "50px"}}>
                <TechIcon tag={t.tag} image={t.image} />
              </div>
              <div className="name">{t.name}</div>
            </div>
          ))}
        </div>
        <div className="taskbar">
          <button className="start-btn">
            <span style={{
              width: 16, height: 16,
              background: "conic-gradient(from 0deg at 50% 50%, #ff2bd6 0 25%, #ffd400 25% 50%, #00ff80 50% 75%, #00ffff 75% 100%)",
              display: "inline-block",
              border: "1px solid #000",
            }}/>
            Inicio
          </button>
          <div className="cell" style={{ background: "var(--os-gray)" }}>
            {selected
              ? <>📁 {TECHS.find(t=>t.id===selected).name} — Listo</>
              : <>16 elementos · 0 seleccionado(s)</>}
          </div>
          <div className="task-clock">{clock}</div>
        </div>
      </div>
    </section>
  );
};

function formatClock(d) {
  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

/* ============================================================
   Contacto — dialog box form
   ============================================================ */
const Contact = ({ onSubmit }) => {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "Hola Nicolas,", mensaje: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handle = (e) => {
    e.preventDefault();
    const texto = `Hola Nicolas, soy ${form.nombre}. ${form.mensaje}`;
    const url = `https://api.whatsapp.com/send?phone=573103401836&text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    onSubmit && onSubmit(form);
  };

  return (
    <section id="contacto" className="section" data-screen-label="04 Contacto">
      <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px" }}>
        <span className="section-tag">C:\PORTFOLIO\CONTACTO</span>
        <h2>
          ¿Tienes un <span className="accent">proyecto en mente</span>?
        </h2>
        <p className="sub" style={{ margin: "0 auto" }}>
          Escríbime al WhatsApp.
        </p>
      </div>

      <div className="contact-wrap">
        <div className="dialog">
          <div className="title-bar gradient">
            <div className="title-bar-text">
              <span style={{ width: 14, height: 14, background: "#fff", border: "1px solid #000", display: "inline-grid", placeItems: "center", fontSize: 10, color: "#000", lineHeight: 1 }}>✉</span>
              Nuevo mensaje de WhatsApp
            </div>
            <div className="title-bar-controls">
              <button className="title-btn" aria-label="min">_</button>
              <button className="title-btn" aria-label="max">□</button>
              <button className="title-btn" aria-label="close">×</button>
            </div>
          </div>
          <form className="dialog-body" onSubmit={handle}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div className="dialog-row">
                <label>Para:</label>
                <div className="input" style={{ background: "#e0e0e0" }}>310 3401836</div>
              </div>
             
            </div>
            <div className="dialog-row">
              <label>Nombre:</label>
              <input className="input" type="text" required placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} />
            </div>
            
            <div className="dialog-row">
              <label>Mensaje:</label>
              <textarea className="input" required placeholder="Cuéntame en qué estás pensando…" value={form.mensaje} onChange={set("mensaje")} />
            </div>
            <div className="dialog-actions">
              {sent && (
                <span style={{ marginRight: "auto", fontFamily: "var(--mono-font)", color: "#006600", fontSize: 16 }}>
                  ✔ Enviado. Te respondo pronto.
                </span>
              )}
              <button type="button" className="btn-95" onClick={()=>setForm({ nombre:"", email:"", asunto:"Hola Nicolas,", mensaje:"" })}>
                Borrar
              </button>
              <button type="submit" className="btn-95 primary">
                Enviar &raquo;
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          
          <div className="contact-card">
            <div className="glyph"><IcoChat /></div>
            <div>
              <div className="label">LinkedIn</div>
              <div className="val">/in/nicosicard</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="glyph"><IcoGlobe /></div>
            <div>
              <div className="label">GitHub</div>
              <div className="val">github.com/nicosicard</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="glyph"><IcoPhone /></div>
            <div>
              <div className="label">WhatsApp</div>
              <div className="val">57-310 3401836</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="glyph"><IcoGlobe /></div>
            <div>
              <div className="label">Ubicación</div>
              <div className="val">Cali, CO · GMT-5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, MyWork, Technologies, Contact, PROJECTS };
