"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/* ═══════════════════════════════════════════════════════════════
   PREMIUM THEME BRAND SYSTEM — Extracted from mockups
   Primary:   Deep Navy  #0a1835 (Header, Footer, Dark CTA)
   Secondary: Gold Yellow #e69c24 or #f1af3c (Primary action)
   BG:        Warm Beige #faf9f6 (Body, clean off-white) -> Pristine White #ffffff
   Section Alt: Clean Slate #f8fafc (Clean container background)
   Text Navy: #0f1a30
   ═══════════════════════════════════════════════════════════════ */
const B = {
  navy:      "#0a1835",
  navyLt:    "#0f2347",
  navyEl:    "#0c1e3f",
  beige:     "#ffffff",
  cream:     "#f8fafc",
  white:     "#ffffff",
  gold:      "#d97706", // Darker gold for text readability
  goldBg:    "#f1af3c", // Bright gold for active buttons
  goldLt:    "#fef3c7", // Light gold background
  blue:      "#0c46c4",
  blueLt:    "#dbeafe",
  pink:      "#dc2626",
  pinkLt:    "#fee2e2",
  textNavy:  "#0f1a30",
  textGrey:  "#5e6675",
  borderCol: "#e5e7eb",
};

const NAV = [
  { id: "home", l: "Home" },
  { id: "about", l: "About Us" },
  { id: "gallery", l: "Gallery" },
  { id: "courses", l: "Courses" },
  { id: "contact", l: "Contact Us" },
];

const SOCIAL_ICONS = [
  <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
  <svg key="msg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
];

const GALLERY = [
  "/campus_moment_1.png",
  "/campus_moment_2.png",
  "/campus_moment_3.png",
  "/campus_moment_4.png",
];

const WINGS_DETAIL = [
  {
    id: "class_1_10",
    tag: "ALL SUBJECTS",
    tc: B.blue,
    bg: B.blueLt,
    title: "Class 1st to 10th (All Subjects)",
    desc: "A highly comprehensive coaching program designed to map success for state-board students. We cover all subjects in depth, building solid foundations for board exams with regular evaluations.",
    maxBatch: "Strictly limited batches for absolute personal attention and guidance",
    subjects: ["English Language & Grammar", "Mathematics & Geometry", "Science & Social Studies", "Hindi, Marathi & Sanskrit"],
    schedule: "Monday to Saturday: 04:30 PM - 07:30 PM",
    features: [
      "Experienced & dedicated faculty mentors guiding every step.",
      "Weekly mock assessments and real-time parent progress updates.",
      "Complete study materials including workbooks and board pattern question sheets."
    ],
    img: "/campus_moment_1.png"
  },
  {
    id: "science_11_12",
    tag: "PCM / PCB Stream",
    tc: B.gold,
    bg: B.goldLt,
    title: "Class 11th & 12th Science",
    desc: "Our premium Science division specializing in concept-based learning. We cover Physics, Chemistry, Mathematics, and Biology with structured test series for board exam special preparation.",
    maxBatch: "Strict limit of 25 students per batch for specialized focus",
    subjects: ["Physics (Core & Applied)", "Chemistry (Organic, Inorganic, Physical)", "Mathematics (Part I & II)", "Biology (Botany & Zoology)"],
    schedule: "Monday to Saturday: 03:30 PM - 07:30 PM",
    features: [
      "Advanced digital interactive panel diagrams for visual clarity.",
      "Regular one-on-one doubt solving sessions and concept monitoring.",
      "Board-focused mock exam preparation curated by senior board examiners."
    ],
    img: "/hero_classroom.png"
  },
  {
    id: "commerce_11_12",
    tag: "COMMERCE Stream",
    tc: B.pink,
    bg: B.pinkLt,
    title: "Class 11th & 12th Commerce",
    desc: "Professional guidance for Commerce students. We specialize in Accounts, Business Studies, OCM, SP, and Economics, building a strong conceptual foundation in commercial studies.",
    maxBatch: "Strictly limited seats for personalized interactive learning",
    subjects: ["Book Keeping & Accountancy", "Economics (Micro & Macro)", "Organization of Commerce & Mgmt (OCM)", "Secretarial Practice (SP) & English"],
    schedule: "Monday to Saturday: 04:00 PM - 07:00 PM",
    features: [
      "Practical accounting practice sheets under expert supervision.",
      "Detailed concept based learning and board exam special preparation.",
      "Affordable fees structure with flexible monthly payment options."
    ],
    img: "/campus_moment_3.png"
  }
];


export default function CoursesPage() {
  const router = useRouter();
  const activeId = "courses";
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const handleThemeChange = (e) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        if (e.matches) {
          setDarkMode(true);
          document.documentElement.classList.add("dark");
        } else {
          setDarkMode(false);
          document.documentElement.classList.remove("dark");
        }
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);
    
    const isMobile = window.innerWidth < 768;
    const systemDark = mediaQuery.matches;
    const savedTheme = localStorage.getItem("sams-theme");
    const shouldBeDark = isMobile ? systemDark : (savedTheme === "dark" || (!savedTheme && systemDark));
    
    if (shouldBeDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    // AOS scroll reveals trigger
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [activeTab]);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sams-theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sams-theme", "dark");
      setDarkMode(true);
    }
  };

  const go = (id) => {
    setMenu(false);
    if (id === "home") {
      router.push("/");
      return;
    }
    if (id === "about") {
      router.push("/about");
      return;
    }
    if (id === "gallery") {
      router.push("/gallery");
      return;
    }
    if (id === "courses") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "contact") {
      router.push("/contact");
      return;
    }
    router.push(`/#${id}`);
  };

  const filteredWings = WINGS_DETAIL.filter((wing) => {
    if (activeTab === "all") return true;
    return wing.id === activeTab;
  });

  const C = {
    bg:         darkMode ? "#0a0e1a"               : "#ffffff",
    cardBg:     darkMode ? "#131C2E"               : "#ffffff",
    cardBorder: darkMode ? "#243145"               : "rgba(10,24,53,0.08)",
    textPrimary:darkMode ? "#F9FAFB"               : "#0f1a30",
    textSecond: darkMode ? "#CBD5E1"               : "#5e6675",
    gold:       "#f1af3c",
    navBg:      darkMode ? "#081226"               : "#0a1835",
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: darkMode ? "#0a0e1a" : "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: darkMode ? "#F9FAFB" : B.textNavy }}>
      
      
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} activeId={activeId} go={go} menu={menu} setMenu={setMenu} />
      {/* ══════ HERO / HEADER SECTION ══════════════════════ */}
      <section style={{ background: darkMode ? "#0a0e1a" : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)", padding: "80px 0 60px 0", borderBottom: `1px solid ${C.cardBorder}`, position: "relative", overflow: "hidden" }}>
        
        {/* Animated Background Icons/Effects */}


        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 5 }}>
          {/* Gold Badge */}
          <div className="afsu d1" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: darkMode ? "rgba(241, 175, 60, 0.08)" : "#fef3c7", border: `1.5px solid ${darkMode ? "rgba(241, 175, 60, 0.4)" : "#f1af3c"}`, padding: "6px 14px", borderRadius: "999px", marginBottom: "20px", boxShadow: darkMode ? "0 0 16px rgba(241, 175, 60, 0.16)" : "none" }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>EXCEPTIONAL CURRICULUM</span>
          </div>

          <h1 className="afsu d2 hero-title" style={{ fontWeight: "900", color: C.textPrimary, letterSpacing: "-0.02em" }}>
            Explore Our <span style={{ color: B.gold }}>Foundation Batches</span>
          </h1>
          <p className="afsu d3" style={{ fontSize: "16px", color: C.textSecond, lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
            Mankhurd's most trusted educational paths, strictly limited to a **maximum of 25 students** per batch for absolute personal attention and top-tier Board score mapping.
          </p>
        </div>
      </section>

      {/* ══════ CURRICULUM FILTERING & WINGS DETAIL SECTION ══════════════════════ */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Tabs Navigation */}
          <div className="reveal reveal-slide-up scroll-tabs-container" style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "54px" }}>
            {[
              { id: "all", l: "All Courses" },
              { id: "class_1_10", l: "Class 1st-10th" },
              { id: "science_11_12", l: "11th & 12th Science" },
              { id: "commerce_11_12", l: "11th & 12th Commerce" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "12px",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  border: activeTab === tab.id ? `1.5px solid ${B.goldBg}` : `1.5px solid ${C.cardBorder}`,
                  backgroundColor: activeTab === tab.id ? B.goldBg : C.cardBg,
                  color: activeTab === tab.id ? B.navy : C.textPrimary,
                  boxShadow: activeTab === tab.id ? "0 6px 18px rgba(241,175,60,0.25)" : "none",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {tab.l}
              </button>
            ))}
          </div>

          {/* Wings Detail Render loop */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {filteredWings.map((wing, idx) => (
              <div
                key={wing.id}
                className="reveal reveal-slide-up premium-glow-card"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1.5px solid ${C.cardBorder}`,
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(10,24,53,0.02)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "36px",
                  alignItems: "center"
                }}
              >
                {/* Visual Image container with hover zoom */}
                <div className="zoom-img-container" style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "16/10", border: `3px solid ${C.cardBorder}` }}>
                  <img className="zoom-img" src={wing.img} alt={wing.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Content side */}
                <div>
                  <div style={{ display: "inline-flex", alignSelf: "flex-start", backgroundColor: wing.bg, color: wing.tc, border: `1px solid ${wing.tc}30`, borderRadius: "999px", padding: "6px 14px", fontSize: "9px", fontWeight: "800", letterSpacing: "0.06em", marginBottom: "16px", textTransform: "uppercase" }}>
                    {wing.tag}
                  </div>
                  
                  <h2 style={{ fontSize: "24px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px" }}>{wing.title}</h2>
                  <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.6, marginBottom: "32px" }}>{wing.desc}</p>

                  {/* Syllabus / Features grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginBottom: "28px" }} className="form-row-2">
                    <div>
                      <h4 style={{ fontSize: "13px", fontWeight: "800", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Subjects Offered</h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {wing.subjects.map((sub, sIdx) => (
                          <li key={sIdx} style={{ fontSize: "13px", color: C.textPrimary, display: "flex", gap: "6px", alignItems: "center" }}>
                            <span style={{ color: C.gold }}>•</span> {sub}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: "13px", fontWeight: "800", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Batch Methodologies</h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {wing.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ fontSize: "13px", color: C.textSecond, display: "flex", gap: "6px", alignItems: "flex-start", lineHeight: 1.4 }}>
                            <span style={{ color: C.gold, marginTop: "2px" }}>✓</span> <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <hr style={{ border: "none", borderTop: `1px solid ${C.cardBorder}`, margin: "24px 0" }} />

                  {/* Timing & CTA Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }} className="form-row-2">
                    <div>
                      <span style={{ display: "block", fontSize: "10px", fontWeight: "700", color: C.textSecond, textTransform: "uppercase" }}>Batch Timing Schedule</span>
                      <strong style={{ fontSize: "13.5px", color: C.textPrimary }}>{wing.schedule}</strong>
                    </div>
                    
                    <button className="btn-shine-gold" onClick={() => router.push("/contact")} style={{ backgroundColor: darkMode ? "#e0a020" : B.goldBg, color: darkMode ? "#0d1b2a" : B.navy, border: "none", borderRadius: "10px", padding: "14px 28px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", boxShadow: "0 4px 12px rgba(241,175,60,0.25)" }}>
                      <span>Enquire for Batch Seats</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer go={go} darkMode={darkMode} activeId={activeId} />

      {/* ── Responsive Styling Blocks ── */}
      <style>{`
        @media (max-width: 768px) {
          .scroll-tabs-container {
            display: flex !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            padding: 8px 24px !important;
            margin-left: -24px !important;
            margin-right: -24px !important;
            margin-bottom: 32px !important;
            gap: 10px !important;
            -webkit-overflow-scrolling: touch !important;
            scroll-behavior: smooth !important;
          }
          .scroll-tabs-container::-webkit-scrollbar {
            display: none !important;
          }
          .scroll-tabs-container {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          .scroll-tabs-container button {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
            padding: 8px 18px !important;
            font-size: 11.5px !important;
          }
        }

        .hero-title {
          font-size: 28px !important;
          line-height: 1.2 !important;
          margin-bottom: 16px !important;
        }

        @media (min-width: 769px) {
          .hero-title {
            font-size: 46px !important;
            line-height: 1.15 !important;
            margin-bottom: 20px !important;
          }
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .footer-cols { grid-template-columns: 1.5fr 1fr 1.5fr !important; }
          .footer-bottom { justify-content: space-between !important; }
          .form-row-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .reveal-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .premium-glow-card { grid-template-columns: 0.9fr 1.1fr !important; }
        }

        .btn-shine-gold {
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .btn-shine-gold::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0) 100%);
          transform: skewX(-25deg);
        }

        .btn-shine-gold:hover::after {
          left: 150%;
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .btn-shine-gold:hover {
          background-color: #fbbf24 !important;
          color: #0a1835 !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 6px 20px rgba(241, 175, 60, 0.25) !important;
        }

        .btn-shine-gold:hover svg {
          transform: translateX(4px);
          transition: transform 0.3s ease !important;
        }

        .btn-nav-apply:hover svg {
          transform: translateX(3px);
          transition: transform 0.3s ease !important;
        }

        .btn-nav-apply {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease !important;
        }

        .btn-nav-apply:hover {
          background-color: transparent !important;
          color: #f1af3c !important;
          border-color: #f1af3c !important;
          box-shadow: 0 4px 12px rgba(241, 175, 60, 0.12) !important;
        }

        .nav-link-item {
          position: relative;
          background: none;
          border: none;
          color: #ffffff !important;
          font-size: 12.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          cursor: pointer;
          padding: 6px 0;
          transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .nav-link-item:hover,
        .nav-link-item.active {
          color: #f1af3c !important;
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2.5px;
          background-color: #f1af3c;
          border-radius: 4px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        /* Pulsing Dot animation for Hero chip badge */
        .pulse-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #d97706;
          position: relative;
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: #d97706;
          animation: dot-pulse-glow 1.8s infinite ease-in-out;
        }

        .dark .pulse-dot {
          background-color: #f1af3c;
        }

        .dark .pulse-dot::after {
          background-color: #f1af3c;
        }

        @keyframes dot-pulse-glow {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
