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

export default function WhyChoose({ darkMode, C }) {
  return (
    <>
      {/* ══════ WHY CHOOSE SHARDA ACADEMY SECTION ══════════════════════ */}
      <section style={{ padding: "100px 0", backgroundColor: darkMode ? "#0a1226" : B.cream, borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>THE SHARDA ADVANTAGE</div>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px" }}>Why Choose Sharda Academy</h2>
            <p style={{ fontSize: "14.5px", color: C.textSecond, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              What sets us apart from other coaching institutes in Mankhurd and beyond.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }} className="features-grid">
            
            {/* Feature 1 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Small Batch Sizes (Max 25 Students)</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  We maintain strict batch limits to ensure every student receives individual attention. No overcrowded classrooms—just focused learning environments where doubts are resolved instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Personalized Doubt-Solving Sessions</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Dedicated one-on-one doubt clearing sessions after every topic. Our faculty ensures no question goes unanswered, building confidence and conceptual clarity for every student.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>State-Board Focused Curriculum</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Our curriculum is specifically designed for Maharashtra State Board exams. We cover every topic in depth with board-pattern questions, past papers, and examiner tips for maximum scoring potential.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Experienced Faculty (10+ Years)</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Our teachers have over a decade of experience in coaching students for board exams. They understand exam patterns, marking schemes, and how to help students score maximum marks.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Weekly Mock Tests & Analysis</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Regular mock tests under actual exam conditions with detailed performance analysis. We track progress, identify weak areas, and provide targeted improvement strategies for every student.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="hover-card feature-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "16px", padding: "32px", display: "flex", gap: "20px", alignItems: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "6px" }}>Safe & Comfortable Environment</h3>
                <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                  Air-conditioned classrooms with CCTV monitoring and biometric attendance. Parents receive instant SMS alerts when students arrive or leave, ensuring complete peace of mind about their child's safety.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .feature-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
