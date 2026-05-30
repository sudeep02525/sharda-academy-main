"use client";

const B = {
  gold: "#d97706",
  goldBg: "#f1af3c",
};

export default function HeroSection({ darkMode, C, go }) {
  return (
    <>
      {/* ══════ PREMIUM HERO SECTION ══════════════════════ */}
      <section style={{ background: darkMode ? "#0a0e1a" : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)", padding: "80px 0 70px 0", borderBottom: `1px solid ${C.cardBorder}`, position: "relative", overflow: "hidden" }}>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
            
            {/* Left: Heading Details */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>
              <div className="afsu d1" style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "8px", backgroundColor: darkMode ? "rgba(241, 175, 60, 0.08)" : "#fef3c7", border: `1.5px solid ${darkMode ? "rgba(241, 175, 60, 0.4)" : "#f1af3c"}`, padding: "6px 14px", borderRadius: "999px", marginBottom: "24px", boxShadow: darkMode ? "0 0 16px rgba(241, 175, 60, 0.16)" : "none" }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>OUR MISSION & HERITAGE</span>
              </div>

              <h1 className="afsu d2" style={{ fontSize: "40px", fontWeight: "900", color: C.textPrimary, lineHeight: 1.18, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Empowering Students With <br />
                <span style={{color:B.gold}}>Absolute Conceptual Depth</span>
              </h1>
              
              <p className="afsu d3" style={{ fontSize: "15px", color: C.textSecond, lineHeight: 1.7, marginBottom: "32px", maxWidth: "600px" }}>
                Sharda Academy is a highly specialized, friendly local coaching class founded in <strong style={{ color: darkMode ? "#e2e8f0" : "#1e293b", fontWeight: "700" }}>2009</strong> at PMG Colony, Mankhurd. Rather than operating as an overcrowded institute, we function as a personalized learning home. With standard small batches, we guarantee absolute individual attention, helping students from Class 1st to 12th build strong conceptual foundations and consistently lead board exams.
              </p>

              <div className="afsu d4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-shine-gold" onClick={() => go("contact")} style={{ backgroundColor: darkMode ? "#e0a020" : "#f1af3c", color: darkMode ? "#0d1b2a" : "#0a1835", border: "none", borderRadius: "10px", padding: "16px 32px", fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span>CONTACT US</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            </div>

            {/* Right: Graphic Box */}
            <div className="afsu d3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
              <div className="visual-graphic-box zoom-img-container" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: `6px solid ${C.cardBg}`, boxShadow: "0 20px 48px rgba(10,24,53,0.06)" }}>
                <img className="zoom-img" src="/campus_moment_2.png" alt="Sharda Academy Classroom Environment" style={{ width: "100%", height: "auto", display: "block" }} />
                
                <div style={{ position: "absolute", top: "16px", right: "16px", backgroundColor: "#f1af3c", backdropFilter: "blur(4px)", padding: "8px 16px", borderRadius: "999px", boxShadow: "0 4px 12px rgba(241,175,60,0.4)", zIndex: 10 }}>
                  <span style={{ fontSize: "9.5px", fontWeight: "900", color: "#0a1835", textTransform: "uppercase", letterSpacing: "0.05em" }}>ESTD. 2009</span>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        /* Pulsing Dot animation for Hero chip badge */
        .pulse-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #d97706;
          position: relative;
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: #d97706;
          animation: dot-pulse-glow 1.8s infinite ease-in-out;
        }

        .dark .pulse-dot {
          background-color: #f1af3c;
        }

        .dark .pulse-dot::after {
          background-color: #f1af3c;
        }

        @keyframes dot-pulse-glow {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }

        @media (min-width: 769px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </>
  );
}
