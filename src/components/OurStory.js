"use client";

const B = {
  goldBg: "#f1af3c",
  navy: "#0a1835",
  cream: "#f8fafc",
};

export default function OurStory({ darkMode, C }) {
  return (
    <>
      {/* ══════ OUR STORY SECTION ══════════════════════ */}
      <section style={{ padding: "100px 0", backgroundColor: darkMode ? "#0a1226" : B.cream, borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="story-grid">
            
            {/* Left: Story Content */}
            <div className="reveal reveal-slide-left">
              <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>OUR HERITAGE & JOURNEY</div>
              <h2 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "24px", lineHeight: 1.2 }}>
                From Humble Beginnings to <br />
                <span style={{ color: B.goldBg }}>Academic Excellence</span>
              </h2>
              
              <div style={{ fontSize: "14.5px", color: C.textSecond, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "20px" }}>
                <p>
                  Founded in 2009 by passionate education enthusiasts, Sharda Academy began as a modest coaching center in PMG Colony, Mankhurd. What started with a single classroom and 15 students has blossomed into Mankhurd's premier educational institution.
                </p>
                <p>
                  Over the past 15+ years, we have evolved from a local coaching center into a comprehensive academic powerhouse serving students from Class 1 to 12. Our journey has been defined by unwavering commitment to conceptual clarity, personalized attention, and consistent production of board toppers.
                </p>
                <p>
                  Today, we stand as a beacon of quality education in Mumbai, having mentored over 5,000+ students who have gone on to excel in their academic and professional pursuits. Our legacy is built on trust, results, and the countless success stories of students who dared to dream big.
                </p>
              </div>

              <div style={{ display: "flex", gap: "32px", marginTop: "32px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "42px", fontWeight: "900", color: B.goldBg, lineHeight: 1, marginBottom: "4px" }}>15+</div>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: C.textSecond, textTransform: "uppercase", letterSpacing: "0.05em" }}>Years of Excellence</div>
                </div>
                <div>
                  <div style={{ fontSize: "42px", fontWeight: "900", color: B.goldBg, lineHeight: 1, marginBottom: "4px" }}>5000+</div>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: C.textSecond, textTransform: "uppercase", letterSpacing: "0.05em" }}>Students Mentored</div>
                </div>
                <div>
                  <div style={{ fontSize: "42px", fontWeight: "900", color: B.goldBg, lineHeight: 1, marginBottom: "4px" }}>100%</div>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: C.textSecond, textTransform: "uppercase", letterSpacing: "0.05em" }}>Pass Rate (Since 2015)</div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="reveal reveal-slide-right desktop-only">
              <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: `6px solid ${C.cardBg}`, boxShadow: "0 20px 48px rgba(10,24,53,0.08)" }}>
                <img src="/campus_moment_1.png" alt="Sharda Academy Journey" style={{ width: "100%", height: "auto", display: "block" }} />
                <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(to top, rgba(10,24,53,0.9), transparent)", padding: "32px 24px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Our Legacy</div>
                  <div style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff" }}>Building Futures Since 2009</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .story-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </>
  );
}
