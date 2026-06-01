"use client";

const NAV = [
  { id: "home", l: "Home" },
  { id: "about", l: "About Us" },
  { id: "gallery", l: "Gallery" },
  { id: "courses", l: "Courses" },
  { id: "contact", l: "Contact Us" },
];

const SOCIAL_ICONS = [
  <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
  <svg key="msg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
];

const GALLERY = [
  "/campus_moment_1.png",
  "/campus_moment_2.png",
  "/campus_moment_3.png",
  "/campus_moment_4.png",
];

const B = {
  navy: "#0a1835",
  goldBg: "#f1af3c",
  white: "#ffffff",
  cardBg: "#112030",
  border: "#1e2e40",
  mutedText: "#8fa0b0",
  bottomText: "#4a6070",
};

export default function Footer({ go, darkMode, activeId }) {
  const C = {
    navy: darkMode ? "#0d1b2a" : "#0a1835",
    goldBg: darkMode ? "#e0a020" : "#f1af3c",
    cardBg: darkMode ? "#112030" : "rgba(255,255,255,0.05)",
    border: darkMode ? "#1e2e40" : "rgba(255,255,255,0.1)",
    mutedText: darkMode ? "#8fa0b0" : "rgba(255,255,255,0.6)",
    bottomText: darkMode ? "#4a6070" : "rgba(255,255,255,0.4)",
  };
  return (
    <>
      {/* ══════ FOOTER SECTION ══════════════════════════════ */}
      <footer style={{ backgroundColor: C.navy, color: B.white, paddingTop: "80px", paddingBottom: "40px", borderTop: `4px solid ${C.goldBg}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Academy moments gallery */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ fontSize: "10px", fontWeight: "800", color: C.goldBg, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>CLASSROOM LIFE MOMENTS</div>
              <h3 style={{ fontSize: "22px", fontWeight: "900", color: B.white }}>Our Moments Gallery</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="gallery-grid">
              {GALLERY.map((src, idx) => (
                <div key={idx} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", border: `3px solid ${C.border}`, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                  <img src={src} alt={`Academy Moment ${idx+1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", marginBottom: "48px" }} className="footer-cols">
            
            {/* Column 1: Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <img src="/logo.png" alt="Sharda Academy Logo" onError={(e) => { e.target.style.display = "none"; }} style={{ width: "45px", height: "45px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "900", letterSpacing: "0.04em", color: B.white }}>SHARDA ACADEMY</div>
                  <div style={{ fontSize: "9px", color: C.goldBg, letterSpacing: "0.15em", fontWeight: "800" }}>Mankhurd · Est. 2021</div>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: C.mutedText, lineHeight: 1.7, marginBottom: "24px", maxWidth: "340px" }}>
                Mumbai's premier academic coaching academy for Classes 1st to 12th. Guided by industry leading professionals.
              </p>
              
              {/* Social icons */}
              <div style={{ display: "flex", gap: "8px" }}>
                {SOCIAL_ICONS.map((svgIcon, idx) => (
                  <button key={idx} style={{ width: "36px", height: "36px", borderRadius: "8px", border: `1px solid ${C.border}`, backgroundColor: C.cardBg, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.mutedText }} onMouseEnter={(e) => { e.target.style.color = C.goldBg; }} onMouseLeave={(e) => { e.target.style.color = C.mutedText; }}>
                    {svgIcon}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", color: C.goldBg, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" }}>Navigation</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: n.id === activeId ? C.goldBg : C.mutedText,
                      fontSize: "13px",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.3s ease"
                    }}
                    className={`footer-nav-link ${n.id === activeId ? "active" : ""}`}
                    onMouseEnter={(e) => e.target.style.color = C.goldBg}
                    onMouseLeave={(e) => e.target.style.color = n.id === activeId ? C.goldBg : C.mutedText}
                  >
                    {n.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", color: C.goldBg, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" }}>Contact Details</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", color: C.mutedText }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>Sharda Academy, Jankalyan Society, PMG Colony, Mankhurd, Mumbai — 400043</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Phone: +91 93244 44269</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12 13 2,6" /></svg>
                  <span>Email: sharda.academyofficial@gmail.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <span>Timings: Mon–Sat (08:00 AM – 10:00 PM)</span>
                </div>
              </div>
            </div>

          </div>

          <hr style={{ border: "none", borderTop: `1px solid ${C.border}`, margin: "40px 0 24px 0" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "11px", color: C.bottomText }} className="footer-bottom">
            <div>© {new Date().getFullYear()} Sharda Academy, Mankhurd-43, Mumbai. All Rights Reserved.</div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.location.href = "/privacy"}
                className="footer-bottom-link"
              >
                Privacy Policy
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.location.href = "/terms"}
                className="footer-bottom-link"
              >
                Terms & Conditions
              </span>
            </div>
          </div>

        </div>
      </footer>

      <style>{`
        .footer-nav-link {
          position: relative !important;
          display: inline-block !important;
          width: fit-content !important;
          transition: color 0.3s ease !important;
        }
        .footer-bottom-link {
          cursor: pointer !important;
          transition: color 0.3s ease !important;
        }
        .footer-bottom-link:hover {
          color: ${C.goldBg} !important;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 12px !important;
          }
          .footer-bottom > div {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
          }
        }
        @media (min-width: 769px) {
          .footer-cols { grid-template-columns: repeat(3, 1fr) !important; }
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
