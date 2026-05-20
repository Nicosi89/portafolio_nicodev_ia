import React from "react";
/* Retro pixel-art icons drawn as inline SVG.
   All ORIGINAL artwork — no branded logos. */

const Px = ({ children, size = 32, viewBox = "0 0 16 16" }) => (
  <svg width={size} height={size} viewBox={viewBox} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

// --- Brand stamp (replaces the Win logo). Original CRT monitor + "NS" badge.
const BrandStamp = () => (
  <svg width="68" height="50" viewBox="0 0 68 50" shapeRendering="crispEdges">
    {/* CRT */}
    <rect x="2" y="2" width="64" height="40" fill="#c0c0c0"/>
    <rect x="2" y="2" width="64" height="40" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="6" y="6" width="56" height="32" fill="#000080"/>
    {/* sparkle */}
    <rect x="10" y="10" width="2" height="2" fill="#fff"/>
    <rect x="14" y="12" width="2" height="2" fill="#fff" opacity="0.6"/>
    {/* NS pixel mark */}
    <g fill="#00ffff">
      <rect x="22" y="14" width="2" height="16"/>
      <rect x="22" y="14" width="10" height="2"/>
      <rect x="30" y="14" width="2" height="16"/>
      <rect x="24" y="18" width="2" height="2"/>
      <rect x="26" y="20" width="2" height="2"/>
      <rect x="28" y="22" width="2" height="2"/>

      <rect x="36" y="14" width="10" height="2"/>
      <rect x="36" y="14" width="2" height="8"/>
      <rect x="36" y="20" width="10" height="2"/>
      <rect x="44" y="20" width="2" height="10"/>
      <rect x="36" y="28" width="10" height="2"/>
    </g>
    {/* base */}
    <rect x="26" y="42" width="16" height="3" fill="#808080"/>
    <rect x="20" y="45" width="28" height="3" fill="#404040"/>
  </svg>
);

// --- Toolbar icons (chunky 16x16 style, scaled) ---
const IcoFolderOpen = () => (
  <Px size={32}>
    <rect x="1" y="5" width="11" height="9" fill="#ffcc66"/>
    <rect x="1" y="5" width="11" height="1" fill="#000"/>
    <rect x="1" y="13" width="11" height="1" fill="#000"/>
    <rect x="1" y="5" width="1" height="9" fill="#000"/>
    <rect x="11" y="5" width="1" height="9" fill="#000"/>
    <rect x="2" y="3" width="4" height="2" fill="#ffcc66"/>
    <rect x="2" y="3" width="4" height="1" fill="#000"/>
    <rect x="3" y="7" width="11" height="6" fill="#ffe5a3"/>
    <rect x="3" y="7" width="11" height="1" fill="#000"/>
    <rect x="3" y="12" width="11" height="1" fill="#000"/>
    <rect x="13" y="7" width="1" height="5" fill="#000"/>
  </Px>
);
const IcoHome = () => (
  <Px size={32}>
    <rect x="7" y="2" width="2" height="2" fill="#000"/>
    <rect x="5" y="4" width="2" height="2" fill="#000"/><rect x="9" y="4" width="2" height="2" fill="#000"/>
    <rect x="3" y="6" width="2" height="2" fill="#000"/><rect x="11" y="6" width="2" height="2" fill="#000"/>
    <rect x="1" y="8" width="14" height="1" fill="#000"/>
    <rect x="3" y="8" width="10" height="6" fill="#ff7c66"/>
    <rect x="3" y="14" width="10" height="1" fill="#000"/>
    <rect x="2" y="8" width="1" height="6" fill="#000"/>
    <rect x="13" y="8" width="1" height="6" fill="#000"/>
    <rect x="6" y="10" width="2" height="3" fill="#000080"/>
    <rect x="9" y="10" width="2" height="2" fill="#fff"/>
  </Px>
);
const IcoArrow = ({ dir = "left" }) => (
  <Px size={32}>
    {dir === "left" ? (
      <>
        <rect x="6" y="3" width="1" height="1" fill="#000"/>
        <rect x="5" y="4" width="1" height="1" fill="#000"/>
        <rect x="4" y="5" width="1" height="1" fill="#000"/>
        <rect x="3" y="6" width="1" height="3" fill="#000"/>
        <rect x="4" y="9" width="1" height="1" fill="#000"/>
        <rect x="5" y="10" width="1" height="1" fill="#000"/>
        <rect x="6" y="11" width="1" height="1" fill="#000"/>
        <rect x="4" y="7" width="9" height="1" fill="#000"/>
        <rect x="5" y="6" width="8" height="3" fill="#1a8c2a"/>
        <rect x="5" y="6" width="8" height="1" fill="#000"/>
        <rect x="5" y="9" width="8" height="1" fill="#000"/>
        <rect x="13" y="6" width="1" height="4" fill="#000"/>
      </>
    ) : (
      <>
        <rect x="9" y="3" width="1" height="1" fill="#000"/>
        <rect x="10" y="4" width="1" height="1" fill="#000"/>
        <rect x="11" y="5" width="1" height="1" fill="#000"/>
        <rect x="12" y="6" width="1" height="3" fill="#000"/>
        <rect x="11" y="9" width="1" height="1" fill="#000"/>
        <rect x="10" y="10" width="1" height="1" fill="#000"/>
        <rect x="9" y="11" width="1" height="1" fill="#000"/>
        <rect x="3" y="7" width="9" height="1" fill="#000"/>
        <rect x="3" y="6" width="8" height="3" fill="#1a8c2a"/>
        <rect x="3" y="6" width="8" height="1" fill="#000"/>
        <rect x="3" y="9" width="8" height="1" fill="#000"/>
        <rect x="2" y="6" width="1" height="4" fill="#000"/>
      </>
    )}
  </Px>
);
const IcoStop = () => (
  <Px size={32}>
    <rect x="2" y="2" width="12" height="12" fill="#fff"/>
    <rect x="2" y="2" width="12" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="4" y="6" width="2" height="2" fill="#cc0000"/>
    <rect x="6" y="4" width="2" height="2" fill="#cc0000"/>
    <rect x="8" y="6" width="2" height="2" fill="#cc0000"/>
    <rect x="6" y="8" width="2" height="2" fill="#cc0000"/>
    <rect x="4" y="10" width="2" height="2" fill="#cc0000"/>
    <rect x="10" y="10" width="2" height="2" fill="#cc0000"/>
    <rect x="4" y="4" width="2" height="2" fill="#cc0000"/>
    <rect x="10" y="4" width="2" height="2" fill="#cc0000"/>
    <rect x="10" y="8" width="2" height="2" fill="#cc0000"/>
  </Px>
);
const IcoRefresh = () => (
  <Px size={32}>
    <rect x="2" y="2" width="12" height="12" fill="#fff"/>
    <rect x="2" y="2" width="12" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="4" y="4" width="6" height="1" fill="#1a8c2a"/>
    <rect x="4" y="4" width="1" height="3" fill="#1a8c2a"/>
    <rect x="10" y="4" width="1" height="5" fill="#1a8c2a"/>
    <rect x="9" y="9" width="3" height="1" fill="#1a8c2a"/>
    <rect x="11" y="8" width="1" height="1" fill="#1a8c2a"/>
    <rect x="8" y="10" width="2" height="1" fill="#1a8c2a"/>
    <rect x="4" y="11" width="2" height="1" fill="#1a8c2a"/>
    <rect x="3" y="10" width="1" height="1" fill="#1a8c2a"/>
    <rect x="5" y="9" width="2" height="1" fill="#1a8c2a"/>
  </Px>
);
const IcoFav = ({ plus = false }) => (
  <Px size={32}>
    <rect x="1" y="5" width="11" height="9" fill="#ffcc66"/>
    <rect x="1" y="5" width="11" height="1" fill="#000"/>
    <rect x="1" y="13" width="11" height="1" fill="#000"/>
    <rect x="1" y="5" width="1" height="9" fill="#000"/>
    <rect x="11" y="5" width="1" height="9" fill="#000"/>
    <rect x="2" y="3" width="4" height="2" fill="#ffcc66"/>
    <rect x="2" y="3" width="4" height="1" fill="#000"/>
    {/* star */}
    <rect x="5" y="7" width="3" height="1" fill="#ff2bd6"/>
    <rect x="4" y="8" width="5" height="2" fill="#ff2bd6"/>
    <rect x="5" y="10" width="3" height="1" fill="#ff2bd6"/>
    <rect x="4" y="11" width="2" height="1" fill="#ff2bd6"/>
    <rect x="7" y="11" width="2" height="1" fill="#ff2bd6"/>
    {plus && (
      <g fill="#cc0000">
        <rect x="12" y="9" width="3" height="1"/>
        <rect x="13" y="8" width="1" height="3"/>
      </g>
    )}
  </Px>
);
const IcoFontSize = ({ big = true }) => (
  <Px size={32}>
    <rect x="1" y="3" width="10" height="11" fill="#fff"/>
    <rect x="1" y="3" width="10" height="11" fill="none" stroke="#000" strokeWidth="1"/>
    <text x="3" y="12" fontFamily="serif" fontSize="9" fontWeight="700" fill="#000">A</text>
    <rect x="11" y="10" width="3" height="1" fill={big ? "#cc0000" : "#000"}/>
    <rect x="12" y="9" width="1" height="3" fill={big ? "#cc0000" : "#000"}/>
    {!big && <rect x="11" y="10" width="3" height="1" fill="#cc0000"/>}
  </Px>
);
const IcoCut = () => (
  <Px size={32}>
    <g fill="#000">
      <rect x="3" y="2" width="1" height="6"/><rect x="4" y="3" width="1" height="4"/>
      <rect x="11" y="2" width="1" height="6"/><rect x="10" y="3" width="1" height="4"/>
      <rect x="5" y="6" width="5" height="1"/>
      <rect x="6" y="7" width="3" height="2"/>
      <rect x="7" y="9" width="1" height="3"/>
    </g>
    <circle cx="4" cy="12" r="2" fill="#000080"/>
    <circle cx="11" cy="12" r="2" fill="#000080"/>
  </Px>
);
const IcoCopy = () => (
  <Px size={32}>
    <rect x="2" y="2" width="8" height="10" fill="#fff"/>
    <rect x="2" y="2" width="8" height="10" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="5" y="5" width="8" height="10" fill="#fff"/>
    <rect x="5" y="5" width="8" height="10" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="6" y="7" width="6" height="1" fill="#000"/>
    <rect x="6" y="9" width="6" height="1" fill="#000"/>
    <rect x="6" y="11" width="4" height="1" fill="#000"/>
  </Px>
);
const IcoPaste = () => (
  <Px size={32}>
    <rect x="2" y="3" width="10" height="11" fill="#a86b3a"/>
    <rect x="2" y="3" width="10" height="11" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="5" y="1" width="4" height="3" fill="#fff"/>
    <rect x="5" y="1" width="4" height="3" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="4" y="6" width="7" height="7" fill="#fff"/>
    <rect x="4" y="6" width="7" height="7" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="5" y="8" width="5" height="1" fill="#000"/>
    <rect x="5" y="10" width="5" height="1" fill="#000"/>
  </Px>
);

const TOOL_ICONS = {
  folderOpen: IcoFolderOpen,
  home: IcoHome,
  back: () => <IcoArrow dir="left" />,
  fwd: () => <IcoArrow dir="right" />,
  stop: IcoStop,
  refresh: IcoRefresh,
  fav: IcoFav,
  favPlus: () => <IcoFav plus />,
  fontUp: () => <IcoFontSize big />,
  fontDown: () => <IcoFontSize big={false} />,
  cut: IcoCut,
  copy: IcoCopy,
  paste: IcoPaste,
};

// --- Tech icons (large desktop-style) ---
const TechIcon = ({ tag, image }) => {
  return (
    <img src={image} width="120px" height="100%" style={{objectFit:"cover",display:"block"}}/>
  );
};

// Contact glyphs
const IcoMail = () => (
  <Px size={26} viewBox="0 0 16 12">
    <rect x="1" y="2" width="14" height="9" fill="#fff"/>
    <rect x="1" y="2" width="14" height="9" fill="none" stroke="#000" strokeWidth="1"/>
    <path d="M1 2 L8 7 L15 2" fill="none" stroke="#000" strokeWidth="1"/>
  </Px>
);
const IcoPhone = () => (
  <Px size={26} viewBox="0 0 16 16">
    <rect x="3" y="2" width="10" height="12" fill="#c0c0c0"/>
    <rect x="3" y="2" width="10" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="5" y="4" width="6" height="5" fill="#1a8c2a"/>
    <rect x="6" y="11" width="1" height="1" fill="#000"/>
    <rect x="8" y="11" width="1" height="1" fill="#000"/>
    <rect x="10" y="11" width="1" height="1" fill="#000"/>
  </Px>
);
const IcoGlobe = () => (
  <Px size={26} viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="6" fill="#1a8c2a" stroke="#000"/>
    <path d="M2 8 H14" stroke="#000" fill="none"/>
    <path d="M8 2 C5 5 5 11 8 14" stroke="#000" fill="none"/>
    <path d="M8 2 C11 5 11 11 8 14" stroke="#000" fill="none"/>
  </Px>
);
const IcoChat = () => (
  <Px size={26} viewBox="0 0 16 16">
    <rect x="1" y="2" width="12" height="8" fill="#fff"/>
    <rect x="1" y="2" width="12" height="8" fill="none" stroke="#000"/>
    <path d="M4 10 L4 13 L7 10" fill="#fff" stroke="#000"/>
    <rect x="3" y="5" width="2" height="2" fill="#000080"/>
    <rect x="7" y="5" width="2" height="2" fill="#000080"/>
    <rect x="11" y="5" width="2" height="2" fill="#000080" opacity="0.5"/>
  </Px>
);

// Welcome popup icon (big)
const IcoInfo = () => (
  <svg width="48" height="48" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <circle cx="8" cy="8" r="7" fill="#000080" stroke="#000"/>
    <text x="6" y="12" fontFamily="serif" fontStyle="italic" fontSize="11" fontWeight="700" fill="#fff">i</text>
  </svg>
);

// Folder icon for taskbar / start
const IcoSmallFolder = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="5" width="13" height="9" fill="#ffcc66" stroke="#000"/>
    <rect x="2" y="3" width="5" height="2" fill="#ffcc66" stroke="#000"/>
  </svg>
);

export { BrandStamp, TOOL_ICONS, TechIcon, IcoMail, IcoPhone, IcoGlobe, IcoChat, IcoInfo, IcoSmallFolder };
