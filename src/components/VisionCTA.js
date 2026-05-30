"use client";

export default function VisionCTA({ darkMode, go, C }) {
  const colors = {
    boxBg: darkMode ? "#0f1f35" : (C?.navyEl || "#0c1e3f"),
    boxBorder: darkMode ? "#e0a020" : (C?.goldBg || "#f1af3c"),
    labelText: darkMode ? "#e0a020" : (C?.goldBg || "#f1af3c"),
    heading: "#ffffff",
    subtext: darkMode ? "#8fa0b0" : "rgba(255,255,255,0.75)",
    primaryBtnBg: darkMode ? "#e0a020" : (C?.goldBg || "#f1af3c"),
    primaryBtnText: darkMode ? "#0d1b2a" : "#0a1835",
  };
  return (
    <>
      {/* ══════ VISION CHARTER CALL-TO-ACTION ══════════════════════ */}
      <section className="cta-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div className="cta-card" style={{ backgroundColor: colors.boxBg, border: `2.5px solid ${colors.boxBorder}`, borderRadius: "24px", textAlign: "center", color: colors.heading, position: "relative", overflow: "hidden", boxShadow: "0 20px 50px rgba(10,24,53,0.15)" }}>
            
            <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "150px", height: "150px", borderRadius: "50%", background: darkMode ? "radial-gradient(circle, rgba(15,31,53,0.4) 0%, transparent 70%)" : "radial-gradient(circle, rgba(12,30,63,0.4) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "250px", height: "250px", borderRadius: "50%", background: darkMode ? "radial-gradient(circle, rgba(15,31,53,0.3) 0%, transparent 70%)" : "radial-gradient(circle, rgba(12,30,63,0.3) 0%, transparent 70%)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "10px", fontWeight: "800", color: colors.labelText, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>OUR VISION & STUDENT CHARTER</div>
              <h2 style={{ fontWeight: "900", marginBottom: "16px", letterSpacing: "-0.01em" }}>Empowering Generations to Lead</h2>
              <p style={{ fontSize: "14.5px", color: colors.subtext, maxWidth: "600px", margin: "0 auto 36px", lineHeight: 1.75 }}>
                Our vision is to ensure no student is left behind. Through customized DPPs, smart interactive panels, and biometric transparency, we provide our scholars the ultimate toolkit to unlock high board achievements.
              </p>

              <button className="btn-shine-gold" onClick={() => go("contact")} style={{ backgroundColor: colors.primaryBtnBg, color: colors.primaryBtnText, border: "none", borderRadius: "10px", padding: "16px 36px", fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>CONTACT US</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        .cta-section {
          padding: 40px 16px !important;
        }
        .cta-card {
          padding: 40px 20px !important;
        }
        .cta-card h2 {
          font-size: 22px !important;
          line-height: 1.25 !important;
        }
        @media (min-width: 769px) {
          .cta-section {
            padding: 60px 0 100px 0 !important;
          }
          .cta-card {
            padding: 54px 48px !important;
          }
          .cta-card h2 {
            font-size: 32px !important;
            line-height: 1.15 !important;
          }
        }
      `}</style>
    </>
  );
}
