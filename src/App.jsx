import React, { useState, useEffect, useRef, useCallback } from "react";
import { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle } from "./tweaks-panel.jsx";
import { BrandStamp, IcoInfo } from "./icons.jsx";
import { Hero, MyWork, Technologies, Contact, PROJECTS } from "./sections.jsx";

const DEFAULT_TWEAKS = /*EDITMODE-BEGIN*/{
  "theme": "midnight",
  "heroGradient": "rainbow",
  "welcomePopup": true,
  "crtMode": false,
  "showMarquee": true
}/*EDITMODE-END*/;

/* ---------- Menu data ---------- */
const MENUS = {
  Archivo: [
    { label: "Nuevo", shortcut: "Ctrl+N" },
    { label: "Abrir...", shortcut: "Ctrl+O" },
    { label: "Guardar como...", shortcut: "Ctrl+S" },
    { sep: true },
    { label: "Imprimir...", shortcut: "Ctrl+P" },
    { sep: true },
    { label: "Salir" },
  ],
  Editar: [
    { label: "Cortar", shortcut: "Ctrl+X" },
    { label: "Copiar", shortcut: "Ctrl+C" },
    { label: "Pegar", shortcut: "Ctrl+V" },
    { sep: true },
    { label: "Buscar...", shortcut: "Ctrl+F" },
  ],
  Ver: [
    { label: "Barra de herramientas", check: true },
    { label: "Barra de estado", check: true },
    { sep: true },
    { label: "Pantalla completa", shortcut: "F11" },
  ],
  Favoritos: [
    { label: "Añadir a favoritos..." },
    { label: "Organizar favoritos..." },
    { sep: true },
    { label: "📁 Mis proyectos" },
    { label: "📁 Stack técnico" },
    { label: "📁 Contacto" },
  ],
  Acerca: [
    { label: "Acerca del portafolio" },
    { label: "Versión 1.0" },
  ],
};

/* ---------- Menu bar with dropdowns ---------- */
const MenuBar = ({ onSelect }) => {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(null); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="menu-bar" style={{ position: "relative" }}>
      {Object.keys(MENUS).map((name, i) => (
        <div key={name} style={{ position: "relative" }}>
          <button
            className={open === name ? "open" : ""}
            onClick={() => setOpen(open === name ? null : name)}
            onMouseEnter={() => open && setOpen(name)}
          >
            <span className="u">{name[0]}</span>{name.slice(1)}
          </button>
          {open === name && (
            <div className="menu-dropdown" style={{ top: "100%", left: 0 }}>
              {MENUS[name].map((item, j) => item.sep
                ? <hr key={j} />
                : (
                  <button key={j} onClick={() => { setOpen(null); onSelect && onSelect(name, item); }}>
                    <span>{item.check ? "✓ " : ""}{item.label}</span>
                    {item.shortcut && <span style={{ opacity: 0.7 }}>{item.shortcut}</span>}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------- Toolbar ---------- */
const Toolbar = () => {
  return (
    <div className="toolbar">
      <img src="/images/browser-icons.png" alt="toolbar" style={{ display: "block", height: "40px", width: "auto" }} />

    </div>
  );
};

/* ---------- Address bar ---------- */
const AddressBar = () => (
  <div className="address-bar">
    <label><span className="u">D</span>irección:</label>
    <div className="field">
      <span style={{ width: 16, height: 16, display: "inline-grid", placeItems: "center" }}>
        <svg width="14" height="14" viewBox="0 0 16 16" shapeRendering="crispEdges">
          <rect x="3" y="2" width="9" height="12" fill="#fff" stroke="#000" />
          <rect x="3" y="2" width="9" height="3" fill="#000080" />
          <rect x="5" y="6" width="5" height="1" fill="#000" />
          <rect x="5" y="8" width="5" height="1" fill="#000" />
          <rect x="5" y="10" width="3" height="1" fill="#000" />
        </svg>
      </span>
      <span className="url">http://www.nicosicarddev.com/index.html</span>
      <span className="caret" />
    </div>
    <button className="dropdown" aria-label="Desplegar">
      <svg width="10" height="6" viewBox="0 0 10 6"><polygon points="0,0 10,0 5,6" fill="#000" /></svg>
    </button>
  </div>
);

/* ---------- Welcome popup ---------- */
const WelcomePopup = ({ onClose }) => (
  <div className="modal-backdrop" onClick={onClose}>
    <div className="modal welcome" onClick={(e) => e.stopPropagation()}>
      <div className="title-bar gradient">
        <div className="title-bar-text">
          <span style={{ width: 14, height: 14, background: "#000080", border: "1px solid #fff", display: "inline-block" }} />
          Bienvenido!
        </div>
        <div className="title-bar-controls">
          <button className="title-btn" onClick={onClose} aria-label="cerrar">×</button>
        </div>
      </div>
      <div className="welcome-body">
        <IcoInfo />
        <div>
          <p style={{ fontWeight: 700, marginBottom: 4 }}>Portafolio v1.0 — Nicolás Sicard Salazar</p>
          <p>
            Estás por entrar a un portafolio frontend con estética 90s. Soy
            Nicolás, desarrollador con 5+ años de experiencia construyendo
            productos web modernos.
          </p>
        </div>
      </div>
      <div className="welcome-actions">
        <button className="btn-95 primary" onClick={onClose}>Aceptar</button>
        <button className="btn-95" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  </div>
);

/* ---------- Screenshot slider ---------- */
const ScreenshotSlider = ({ project }) => {
  const imgs = project.images ?? [];
  const [idx, setIdx] = useState(0);

  if (imgs.length === 0) {
    return (
      <div style={{
        width: "100%", height: "100%", objectFit:"cover",
        background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})`,
        display: "grid", placeItems: "center",
        color: "#fff", fontFamily: "var(--mono-font)", fontSize: 18,
      }}>
        {project.tags[0]}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={imgs[idx]}
        alt={`screenshot ${idx + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
      />
      {imgs.length > 1 && (
        <>
          <button
            onClick={() => setIdx((idx - 1 + imgs.length) % imgs.length)}
            style={{ position: "absolute", left: 2, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,.55)", color: "#fff", border: "1px solid #888", cursor: "pointer", padding: "2px 7px", fontFamily: "var(--mono-font)", fontSize: 14 }}
          >‹</button>
          <button
            onClick={() => setIdx((idx + 1) % imgs.length)}
            style={{ position: "absolute", right: 2, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,.55)", color: "#fff", border: "1px solid #888", cursor: "pointer", padding: "2px 7px", fontFamily: "var(--mono-font)", fontSize: 14 }}
          >›</button>
          <div style={{ position: "absolute", bottom: 4, width: "100%", display: "flex", justifyContent: "center", gap: 4 }}>
            {imgs.map((_, i) => (
              <span key={i} onClick={() => setIdx(i)} style={{ width: 6, height: 6, borderRadius: "50%", background: i === idx ? "#fff" : "rgba(255,255,255,.4)", cursor: "pointer", display: "inline-block" }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ---------- Project detail modal ---------- */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="title-bar">
          <div className="title-bar-text">
            <span style={{ width: 14, height: 14, background: project.palette[0], border: "1px solid #000", display: "inline-block" }} />
            {project.title} — Detalle del proyecto
          </div>
          <div className="title-bar-controls">
            <button className="title-btn" onClick={onClose} aria-label="cerrar">×</button>
          </div>
        </div>
        <div className="modal-body">
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 22 }}>
            <div className="win-inset">
              {project.video_url ? (
                <iframe
                  src={`https://www.youtube.com/embed/${new URL(project.video_url).searchParams.get("v") || project.video_url.split("/").pop()}`}
                  width="300"
                  height="450"
                  style={{ border: "none", display: "block" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${project.title} video`}
                />
              ) : (
                <ScreenshotSlider project={project} />
              )}
            </div>
            <div>
              <h3 style={{ marginTop: 0, fontSize: 22 }}>{project.title}</h3>
              <p style={{ fontFamily: "var(--body-font)", fontSize: 15, lineHeight: 1.55 }}>{project.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 14px", fontSize: 16, marginTop: 12 }}>
                <strong>Rol:</strong><span>{project.role}</span>
                <strong>Año:</strong><span>{project.year}</span>
                <strong>Stack:</strong><span>{project.tags.join(" · ")}</span>
                <strong>Link:</strong><span>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a> : "—"}</span>
              </div>
            </div>
          </div>
          
        </div>
        <div style={{ padding: "10px 22px 18px", display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button className="btn-95" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

/* ---------- Nav ---------- */
const Nav = () => (
  <nav className="nav-pill" aria-label="Principal">
    <a href="#home">Home</a>
    <a href="#trabajo">Mi trabajo</a>
    <a href="#tecnologias">Tecnologías</a>
    <a href="#contacto">Contacto</a>
  </nav>
);

/* ---------- Marquee ---------- */
const Marquee = () => (
  <div className="marquee-bar">
    <div className="marquee-track">
      <span><span className="dot">●</span> Disponible para proyectos Q3 2026</span>
      <span><span className="dot">●</span> Última actualización: 20 / 05 / 2026</span>
      <span><span className="dot">●</span> +15 proyectos entregados</span>
      <span><span className="dot">●</span> React · Next · Claude Code · Convex · Node · TypeScript</span>
      <span><span className="dot">●</span> Best viewed in Netscape Navigator 3.0 — broma, en cualquier navegador moderno anda perfecto.</span>
    </div>
  </div>
);

/* ============================================================
   App
   ============================================================ */
const App = () => {
  const [tweaks, setTweak] = useTweaks(DEFAULT_TWEAKS);
  const [showWelcome, setShowWelcome] = useState(tweaks.welcomePopup);
  const [activeProject, setActiveProject] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);

  // Re-show welcome when tweak is toggled on
  useEffect(() => { if (tweaks.welcomePopup) setShowWelcome(true); }, [tweaks.welcomePopup]);

  const onCta = (target) => {
    const el = document.getElementById(target);
    el && el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onToolbar = (id) => {
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    if (id === "back") window.history.back();
    if (id === "refresh") window.location.reload();
    if (id === "fontUp") setFontScale(s => Math.min(1.25, +(s + 0.05).toFixed(2)));
    if (id === "fontDown") setFontScale(s => Math.max(0.85, +(s - 0.05).toFixed(2)));
    if (id === "open") onCta("trabajo");
    if (id === "fav" || id === "favPlus") onCta("contacto");
  };

  const onMenu = (menu, item) => {
    if (item.label === "Acerca del portafolio") setAboutOpen(true);
    if (item.label === "Imprimir...") window.print();
    if (item.label?.includes("Mis proyectos")) onCta("trabajo");
    if (item.label?.includes("Stack")) onCta("tecnologias");
    if (item.label?.includes("Contacto")) onCta("contacto");
    if (item.label === "Pantalla completa") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    }
  };

  return (
    <div
      className={tweaks.crtMode ? "crt" : ""}
      data-theme={tweaks.theme}
      data-hero={tweaks.heroGradient}
      style={{ fontSize: `${fontScale}em` }}
    >
      {/* The "browser" window */}
      <div className="win-frame">
        <div className="title-bar">
          <div className="title-bar-text">
            <span style={{
              width: 18, height: 18,
              background: "conic-gradient(from 0deg, #ff2bd6 0 25%, #ffd400 25% 50%, #00ff80 50% 75%, #00ffff 75% 100%)",
              display: "inline-block",
              border: "1px solid #000",
            }} />
            Portafolio Full Stack — Nicolás Sicard
          </div>
          <div className="title-bar-controls">
            <button className="title-btn" aria-label="minimizar">_</button>
            <button className="title-btn" aria-label="maximizar">□</button>
            <button className="title-btn" aria-label="cerrar">×</button>
          </div>
        </div>

        <MenuBar onSelect={onMenu} />
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{flex: 3}}>

            <Toolbar onAction={onToolbar} />
            <AddressBar />
          </div>
          <div style={{ marginLeft: "auto" }}>
        <div className="brand-stamp" title="Nico Sicard · Frontend"><img src="/images/win95-logo.png" alt="Win95 Logo" style={{ display: "block", width: "69px", height: "75px", objectFit: "cover" }} /></div>
      </div>

        </div>
        {tweaks.showMarquee && <Marquee />}

        <main className="content">
          <Nav />
          <Hero onCta={onCta} />
          <MyWork onOpenProject={setActiveProject} />
          <Technologies />
          <Contact onSubmit={(data) => console.log("contact:", data)} />
        </main>

        {/* Status bar */}
        <div className="footer">
          <div className="status-cells">
            <span className="cell">Listo</span>
            <span className="cell" style={{ minWidth: 120 }}>4 secciones</span>
            <span className="cell">{Math.round(fontScale * 100)}% zoom</span>
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, background: "#1a8c2a", borderTop: "1px solid #000", borderLeft: "1px solid #000", borderRight: "1px solid #fff", borderBottom: "1px solid #fff" }} />
            Conexión: 56k modem (simulada)
          </span>
          <span className="cell">© 1996—2026 Nico Sicard</span>
        </div>
      </div>

      {showWelcome && <WelcomePopup onClose={() => { setShowWelcome(false); setTweak("welcomePopup", false); }} />}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      {aboutOpen && (
        <div className="modal-backdrop" onClick={() => setAboutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width: "min(520px, 100%)" }}>
            <div className="title-bar gradient">
              <div className="title-bar-text">Acerca de</div>
              <div className="title-bar-controls">
                <button className="title-btn" onClick={() => setAboutOpen(false)}>×</button>
              </div>
            </div>
            <div className="modal-body">
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18, alignItems: "start" }}>
                <BrandStamp />
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 22 }}>Nico Sicard · Frontend Dev</h3>
                  <p style={{ fontFamily: "var(--body-font)", fontSize: 14, margin: "0 0 8px" }}>
                    Desarrollador backend con 5+ años construyendo productos web
                    accesibles, rápidos e innovadores. Especializado en React,
                    Node y agentes IA.
                  </p>
                  <p style={{ fontFamily: "var(--mono-font)", fontSize: 16, color: "#444" }}>
                    Portafolio v1.0.0 · build 2026-05-15<br />
                    Hecho con HTML, CSS y mucho cariño.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ padding: "10px 22px 18px", display: "flex", justifyContent: "flex-end" }}>
              <button className="btn-95 primary" onClick={() => setAboutOpen(false)}>Aceptar</button>
            </div>
          </div>
        </div>
      )}

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Tema cromático">
          <TweakRadio
            label="Paleta de ventana"
            value={tweaks.theme}
            options={[
              { value: "midnight", label: "Midnight" },
              { value: "storm", label: "Storm" },
              { value: "hotpink", label: "Pink" },
              { value: "terminal", label: "Term" },
            ]}
            onChange={(v) => setTweak("theme", v)}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Gradiente del titular"
            value={tweaks.heroGradient}
            options={[
              { value: "rainbow", label: "Rainbow" },
              { value: "hotwire", label: "Hotwire" },
              { value: "ocean", label: "Ocean" },
              { value: "ghost", label: "Ghost" },
            ]}
            onChange={(v) => setTweak("heroGradient", v)}
          />
        </TweakSection>
        <TweakSection label="Extras">
          <TweakToggle
            label="Mostrar popup de bienvenida"
            value={tweaks.welcomePopup}
            onChange={(v) => setTweak("welcomePopup", v)}
          />
          <TweakToggle
            label="Marquee de noticias"
            value={tweaks.showMarquee}
            onChange={(v) => setTweak("showMarquee", v)}
          />
          <TweakToggle
            label="Modo CRT (scanlines + viñeta)"
            value={tweaks.crtMode}
            onChange={(v) => setTweak("crtMode", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

export default App;
