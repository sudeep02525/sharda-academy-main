"use client";

const B = {
  goldBg: "#f1af3c",
  navy: "#0a1835",
  cream: "#f8fafc",
};

export default function Milestones({ darkMode, C }) {
  return (
    <>
      {/* ══════ ACADEMY MILESTONES TIMELINE ══════════════════════ */}
      <section style={{ padding: "90px 0", backgroundColor: darkMode ? "#0a1226" : B.cream, borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>OUR CHRONOLOGY & SUCCESS</div>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px" }}>Academy Inception & Milestones</h2>
            <p style={{ fontSize: "14.5px", color: C.textSecond, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              A look back at how we built Mankhurd's most trusted coaching center over the last 15+ years.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", paddingLeft: "32px", borderLeft: `2.5px solid ${B.goldBg}` }}>
            
            {/* Milestone 1 */}
            <div style={{ position: "relative", marginBottom: "48px" }}>
              <div style={{ position: "absolute", left: "-42px", top: "2px", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: B.navy, border: `3.5px solid ${B.goldBg}` }} />
              <div style={{ fontSize: "18px", fontWeight: "900", color: B.goldBg, marginBottom: "8px" }}>2009 — Inception in Mankhurd</div>
              <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Founded with a single dedicated classroom of 15 mathematics students. The focus was to prove that complex numerical equations could be simplified through conceptual clarity worksheets rather than rote memorization.
              </p>
            </div>

            {/* Milestone 2 */}
            <div style={{ position: "relative", marginBottom: "48px" }}>
              <div style={{ position: "absolute", left: "-42px", top: "2px", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: B.navy, border: `3.5px solid ${B.goldBg}` }} />
              <div style={{ fontSize: "18px", fontWeight: "900", color: B.goldBg, marginBottom: "8px" }}>2014 — Visual Technology Integration</div>
              <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Introduced digital visual displays, transforming how physics formulas and complex scientific concepts are illustrated. Built customized state-board test hubs that mirror exact Board conditions.
              </p>
            </div>

            {/* Milestone 3 */}
            <div style={{ position: "relative", marginBottom: "48px" }}>
              <div style={{ position: "absolute", left: "-42px", top: "2px", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: B.navy, border: `3.5px solid ${B.goldBg}` }} />
              <div style={{ fontSize: "18px", fontWeight: "900", color: B.goldBg, marginBottom: "8px" }}>2019 — Biometrics & Student Safety System</div>
              <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Implemented digital check-in devices paired with automated parents SMS notifications, prioritizing student security. Upgraded all rooms with high-efficiency cooling to optimize concentration.
              </p>
            </div>

            {/* Milestone 4 */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-42px", top: "2px", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: B.navy, border: `3.5px solid ${B.goldBg}` }} />
              <div style={{ fontSize: "18px", fontWeight: "900", color: B.goldBg, marginBottom: "8px" }}>2026 — 2,500+ Achievers & Continued Trust</div>
              <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Celebrated our landmark achievement of mentoring over 2,500+ successful SSC & HSC board pupils, cementing Sharda Academy's place as Mankhurd's most trusted educational institution.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
