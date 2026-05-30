"use client";

const B = {
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
  blue: "#0c46c4",
  blueLt: "#dbeafe",
  pink: "#dc2626",
  pinkLt: "#fee2e2",
};

export default function CoreValues({ darkMode, C }) {
  return (
    <>
      {/* ══════ CORE VALUES SECTION ══════════════════════ */}
      <section style={{ padding: "100px 0", backgroundColor: darkMode ? "#0a0e1a" : "#ffffff", borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>WHAT DRIVES US</div>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px" }}>Our Core Values</h2>
            <p style={{ fontSize: "14.5px", color: C.textSecond, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              The principles that guide every decision we make and every student we teach.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="values-grid">
            
            {/* Value 1: Integrity */}
            <div className="hover-card value-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", alignItems: "flex-start", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Integrity</h3>
                <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, margin: 0 }}>
                  Transparent communication with students and parents. We believe in honest feedback, clear expectations, and building trust through consistent actions. No hidden fees, no false promises—just genuine education.
                </p>
              </div>
            </div>

            {/* Value 2: Excellence */}
            <div className="hover-card value-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", alignItems: "flex-start", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55-.47.98-.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Excellence</h3>
                <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, margin: 0 }}>
                  Pursuing highest academic standards in everything we do. From curriculum design to teaching methodologies, we never compromise on quality. Our goal is to help every student achieve their personal best.
                </p>
              </div>
            </div>

            {/* Value 3: Innovation */}
            <div className="hover-card value-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", alignItems: "flex-start", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a5 5 0 1 0 0 10 5 5 5 0 0 0 0-10Z"/><path d="m5.6 5.6 4.24 4.24"/><path d="m14.16 14.16 4.24 4.24"/><path d="M5.6 18.4l4.24-4.24"/><path d="m14.16 9.84 4.24-4.24"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Innovation</h3>
                <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, margin: 0 }}>
                  Integrating modern technology for interactive learning experiences. 4K smart boards, biometric attendance, digital performance tracking—we leverage cutting-edge tools to enhance understanding and engagement.
                </p>
              </div>
            </div>

            {/* Value 4: Empathy */}
            <div className="hover-card value-card reveal" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", alignItems: "flex-start", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>Empathy</h3>
                <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, margin: 0 }}>
                  Understanding each student's unique learning journey. We recognize that every child learns differently, and we adapt our teaching methods to individual needs, ensuring no student is left behind.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .value-card {
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
