"use client";

const B = {
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
  blue: "#0c46c4",
  blueLt: "#dbeafe",
  pink: "#dc2626",
  pinkLt: "#fee2e2",
};

export default function InfrastructureSection({ darkMode, C }) {
  return (
    <>
      {/* ══════ SMART INFRASTRUCTURE & SAFETY SECTION ══════════════════════ */}
      <section style={{ padding: "90px 0", borderBottom: `1px solid ${C.cardBorder}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="main-grid">
            
            {/* Left: Graphic Visual */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} className="desktop-only">
              <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: `6px solid ${C.cardBg}`, boxShadow: "0 20px 48px rgba(10,24,53,0.05)" }}>
                <img src="/campus_moment_3.png" alt="Sharda Academy Infrastructure & Labs" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* Right: Infrastructure Highlights */}
            <div>
              <div style={{ fontSize: "10px", fontWeight: "800", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>HIGH-TECH EDUCATION PLATFORM</div>
              <h2 style={{ fontSize: "32px", fontWeight: "900", color: C.textPrimary, marginBottom: "24px", lineHeight: 1.25 }}>
                Modern Smart Infrastructure & Student Safety
              </h2>
              <p style={{ fontSize: "14.5px", color: C.textSecond, lineHeight: 1.7, marginBottom: "32px" }}>
                We believe that learning outcomes improve when the environment is engaging and safe. Our classrooms incorporate state-of-the-art technologies that enhance concentration and provide parents complete peace of mind.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: "800", color: C.textPrimary, marginBottom: "4px" }}>4K Interactive Visual Panels</h4>
                    <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5 }}>Every classroom is equipped with high-definition digital smart boards representing chemical reactions and mathematical structures visually.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: "800", color: C.textPrimary, marginBottom: "4px" }}>Biometric Check-In & Automatic Parent SMS</h4>
                    <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5 }}>Student attendance is verified via digital fingerprint scans, instantly sending an automated alert to parents' phones upon entrance/exit.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: "800", color: C.textPrimary, marginBottom: "4px" }}>Climate-Controlled Classrooms</h4>
                    <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5 }}>Fully air-conditioned, acoustically optimized learning spaces that isolate street noise, helping students maintain undivided focus.</p>
                  </div>
                </div>

              </div>
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
