"use client";

const B = {
  gold: "#d97706",
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
};

export default function DirectorsDesk({ darkMode, C }) {
  return (
    <>
      {/* ══════ DIRECTOR'S DESK SECTION ══════════════════════ */}
      <section style={{ padding: "90px 0", borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="main-grid">
            
            {/* Left: Quote & Desk Message */}
            <div className="reveal reveal-slide-left">
              <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>DIRECTOR'S DESK MESSAGE</div>
              <h2 style={{ fontSize: "32px", fontWeight: "900", color: C.textPrimary, marginBottom: "24px", lineHeight: 1.25 }}>
                From the Desk of the Director
              </h2>
              
              <div style={{ position: "relative", paddingLeft: "24px", borderLeft: `4px solid ${B.goldBg}`, marginBottom: "28px" }}>
                <span style={{ position: "absolute", top: "-10px", left: "8px", fontSize: "72px", fontWeight: "900", color: `${B.goldBg}25`, fontFamily: "serif", lineHeight: 1 }}>"</span>
                <p style={{ fontSize: "16px", fontWeight: "600", fontStyle: "italic", color: C.textPrimary, lineHeight: 1.6, position: "relative", zIndex: 1 }}>
                  Education is not merely preparing for board results; it is establishing a clear logical framework for life. At Sharda Academy, we treat every formula as a discovery and every doubt as a learning milestone.
                </p>
              </div>

              <div style={{ fontSize: "14.5px", color: C.textSecond, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "16px" }}>
                <p>
                  For over fifteen years, we have maintained a philosophy that places deep conceptual understanding above all. Our classrooms are not assembly lines; they are intellectual ecosystems where seasoned state-board specialists break down subjects into concrete visual logic.
                </p>
                <p>
                  By marrying traditional scholastic rigor with interactive 4K screens and real-time student tracking, we empower every board aspirant to confidently unlock their highest potential. We invite you to join us in crafting the next generation of logical leaders.
                </p>
              </div>
            </div>

            {/* Right: Signature & Info Card */}
            <div className="hover-card reveal reveal-slide-right" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "40px", boxShadow: "0 10px 40px rgba(10,24,53,0.03)", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", color: B.gold, fontSize: "28px", fontWeight: "900", marginBottom: "24px" }}>
                SA
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Sharda Academy Board</h3>
              <div style={{ fontSize: "12px", fontWeight: "700", color: B.goldBg, textTransform: "uppercase", marginBottom: "24px" }}>Admin & Educational Governance</div>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: B.goldBg, fontWeight: "900" }}>✓</span>
                  <span style={{ fontSize: "13px", color: C.textSecond }}><strong>Personal Attention Batch Sizes:</strong> strictly limited to a maximum of 25 students to ensure that every student's learning speed is personally tracked by our core faculty.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: B.goldBg, fontWeight: "900" }}>✓</span>
                  <span style={{ fontSize: "13px", color: C.textSecond }}><strong>Daily Homework Check & Reviews:</strong> Customized daily homework checks and worksheet validations. We don't let doubts accumulate.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: B.goldBg, fontWeight: "900" }}>✓</span>
                  <span style={{ fontSize: "13px", color: C.textSecond }}><strong>Biometrics & Parents Reporting:</strong> Real-time biometrics logging and SMS alerts immediately when students arrive or leave, keeping parents relaxed and informed.</span>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: B.goldBg, fontWeight: "900" }}>✓</span>
                  <span style={{ fontSize: "13px", color: C.textSecond }}><strong>Individual Parent Meets:</strong> Personal meetings with parents after every mock exam cycle to share tailored progress maps and study targets for their child.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .main-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </>
  );
}
