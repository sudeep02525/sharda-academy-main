"use client";

import { useState, useEffect } from "react";

const B = {
  goldBg: "#f1af3c",
  navy: "#0a1835",
  cream: "#f8fafc",
};

export default function Faculty({ darkMode, C }) {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/sams/content`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data.mentors) {
          setMentors(json.data.mentors);
        }
      })
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  if (mentors.length === 0) return null;

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
            
            {mentors.map((mentor, index) => (
              <div key={index} className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "40px", display: "flex", gap: "24px", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease" }}>
                {mentor.image ? (
                  <img src={mentor.image.startsWith("http") ? mentor.image : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${mentor.image}`} alt={mentor.name} style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: darkMode ? "#1e293b" : B.cream, display: "flex", alignItems: "center", justifyContent: "center", color: B.navy, fontSize: "26px", fontWeight: "900" }}>
                    {mentor.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 style={{ fontSize: "19px", fontWeight: "900", color: C.textPrimary, marginBottom: "4px" }}>{mentor.name}</h3>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.05em" }}>{mentor.role}</div>
                  <p style={{ fontSize: "13.5px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                    {mentor.text}
                  </p>
                </div>
              </div>
            ))}

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
