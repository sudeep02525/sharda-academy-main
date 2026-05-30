"use client";

const B = {
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
  blue: "#0c46c4",
  blueLt: "#dbeafe",
  pink: "#dc2626",
  pinkLt: "#fee2e2",
  cream: "#f8fafc",
};

export default function PedagogySection({ darkMode, C }) {
  return (
    <>
      {/* ══════ CORE PILLARS OF ACADEMIC PEDAGOGY ══════════════════════ */}
      <section style={{ padding: "90px 0", backgroundColor: darkMode ? "#0a1226" : B.cream, borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>OUR PEDAGOGICAL ENGINES</div>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px" }}>Pillars of Academic Pedagogy</h2>
            <p style={{ fontSize: "14.5px", color: C.textSecond, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              How we translate raw textbook syllabus into lifetime logic and stellar board ranks.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }} className="cards-grid">
            
            {/* Pillar 1 */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Conceptual Sheets</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Customized worksheets prepared by board evaluators that replace abstract statements with clear visual diagrams, helping students understand the 'why' behind every mathematical and scientific derivation.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Daily Practice Problems (DPPs)</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                High-retention practice problem loops containing selected board-standard queries. Daily practice guarantees that student conceptual recall stays razor-sharp over long revision cycles.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Weekly Mock Board Papers</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                Rigorous testing under exact exam formats and timelines. Completed papers are individually evaluated by expert senior faculty to share detailed feedback on answer structure and grade optimization.
              </p>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
