"use client";

const B = {
  goldBg: "#f1af3c",
  navy: "#0a1835",
  cream: "#f8fafc",
};

export default function Faculty({ darkMode, C }) {
  return (
    <>
      {/* ══════ SPECIALIST FACULTY SECTION ══════════════════════ */}
      <section style={{ padding: "90px 0", borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>LEARN FROM THE BEST</div>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px" }}>Senior Board Specialist Mentors</h2>
            <p style={{ fontSize: "14.5px", color: C.textSecond, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Our faculty roster comprises senior subject-matter experts with years of board syllabus mentoring experience.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", maxWidth: "900px", margin: "0 auto" }} className="form-row-2">
            
            {/* Mentor 1 */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: darkMode ? "#1e293b" : B.cream, display: "flex", alignItems: "center", justifyContent: "center", color: B.navy, fontSize: "26px", fontWeight: "900" }}>
                SR
              </div>
              <div>
                <h3 style={{ fontSize: "19px", fontWeight: "900", color: C.textPrimary, marginBottom: "4px" }}>Dr. S. K. Roy</h3>
                <div style={{ fontSize: "11px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.05em" }}>Physics Department Head · 15+ Yrs Exp</div>
                <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Holds a Ph.D. in Physics. A senior board specialist recognized for dismantling complex physical mechanics and visual conceptualizations with high board rank results.
                </p>
              </div>
            </div>

            {/* Mentor 2 */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: darkMode ? "#1e293b" : B.cream, display: "flex", alignItems: "center", justifyContent: "center", color: B.navy, fontSize: "26px", fontWeight: "900" }}>
                PP
              </div>
              <div>
                <h3 style={{ fontSize: "19px", fontWeight: "900", color: C.textPrimary, marginBottom: "4px" }}>Mrs. Priya Patil</h3>
                <div style={{ fontSize: "11px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.05em" }}>Mathematics Lead · 12+ Yrs Exp</div>
                <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  M.Sc. in Mathematics. Board exam paper revision expert with years of success simplifying complex trigonometry, calculus, and algebraic methodologies for state-board pupils.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .form-row-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
