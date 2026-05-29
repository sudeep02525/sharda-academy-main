"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    id: "foundation",
    tag: "PRIMARY EDUCATION stage",
    tc: B.gold,
    bg: B.goldLt,
    title: "Foundation Wing (Class 1st to 5th)",
    desc: "A highly specialized child-centric program focused on building structural basics in Mathematics, English vocabulary, and logical visual science sheets.",
    maxBatch: "Strictly limited to standard small batches (max 25 students per class)",
    subjects: ["English Language & Grammar", "Mathematics (Visual Foundations)", "Environmental Science & Play", "Logical Analytical Reasoning"],
    schedule: "Monday to Friday: 04:30 PM - 06:30 PM",
    features: [
      "Custom visual conceptual worksheets designed for young minds.",
      "Weekly concept reviews and fun doubt clearing rounds.",
      "Biometrics Parents reporting SMS immediately upon student arrival/exit."
    ],
    img: "/campus_moment_1.png"
  },
  {
    id: "middle",
    tag: "MIDDLE STAGE development",
    tc: B.blue,
    bg: B.blueLt,
    title: "Middle Stage Wing (Class 6th to 8th)",
    desc: "Designed to trigger advanced logical development. Transitioning from primary worksheets to robust science derivations, algebraic logic, and visual laboratory experiments.",
    maxBatch: "Small batches (maximum 25 students) to track individual learning speed",
    subjects: ["Science (Physics, Chemistry, Biology basics)", "Mathematics (Algebra, Geometry foundations)", "Social Sciences & Civics", "Advanced English Writing & Reading"],
    schedule: "Monday to Saturday: 05:00 PM - 07:15 PM",
    features: [
      "Daily Practice Problems (DPPs) tailored to state-board standards.",
      "Interactive digital panel derivations illustrating concrete visual concepts.",
      "Personal parent-teacher meets to track academic milestone progression."
    ],
    img: "/campus_moment_3.png"
  },
  {
    id: "senior",
    tag: "BOARD PREPARATION elite stream",
    tc: B.pink,
    bg: B.pinkLt,
    title: "Senior Secondary Wing (Class 9th to 12th)",
    desc: "Our board specialization wing for SSC (9th & 10th) and HSC Science & Commerce streams (11th & 12th). Structured with rigorous evaluations and mock board exam patterns guided by state-board mentors.",
    maxBatch: "Strict limit of 25 students per batch to provide absolute personal guidance",
    subjects: ["Secondary Science (Physics, Chemistry, Biology core)", "Secondary Mathematics (Part I & II)", "Higher Secondary Physics, Chem, Math, Bio", "Commerce Streams (Accounts, OCM, SP, Economics)"],
    schedule: "Monday to Saturday: 03:30 PM - 07:30 PM (Special Sunday Mock tests)",
    features: [
      "Weekly evaluated full mock board exam papers with personal reviews.",
      "Evaluations led by experienced senior board specialist mentors.",
      "Advanced student analytics report cards visible instantly on parent portals."
    ],
    img: "/hero_classroom.png"
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
    bg:         darkMode ? "#0B1120"               : "#ffffff",
    cardBg:     darkMode ? "#131C2E"               : "#ffffff",
    cardBorder: darkMode ? "#243145"               : "rgba(10,24,53,0.08)",
    textPrimary:darkMode ? "#F9FAFB"               : "#0f1a30",
    textSecond: darkMode ? "#CBD5E1"               : "#5e6675",
    gold:       "#f1af3c",
    navBg:      darkMode ? "#081226"               : "#0a1835",
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: darkMode ? "#0B1120" : "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: darkMode ? "#F9FAFB" : B.textNavy }}>
      
      {/* ══════ TOP HEADER BAR ════════════════════════════════ */}
      <div style={{ backgroundColor: "#060f22", color: B.goldBg, padding: "8px 16px", fontSize: "11px", fontWeight: "700", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", letterSpacing: "0.08em", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          CALL ACADEMY: +91 93244 44269
        </span>
        <span className="desktop-only">|</span>
        <span className="desktop-only" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          LOCATION: PMG Colony, Mankhurd, Mumbai — 400043
        </span>
      </div>

      {/* ══════ MAIN NAVIGATION BAR ════════════════════════════════════════════ */}
      <nav style={{ position: "sticky", top: 0, zIndex: 500, backgroundColor: darkMode ? "#081226" : "#0a1835", color: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "66px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Logo & Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }} onClick={() => go("home")}>
            <img src="/logo.png" alt="Sharda Academy Logo" onError={(e) => { e.target.style.display = "none"; }} style={{ width: "58px", height: "58px", objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: "15px", fontWeight: "900", letterSpacing: "0.05em", lineHeight: 1.1, color: "#ffffff" }}>SHARDA ACADEMY</div>
              <div style={{ fontSize: "8px", fontWeight: "800", color: C.gold, letterSpacing: "0.18em", textTransform: "uppercase" }}>Mankhurd · Est. 2009</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-only" style={{ display: "flex", gap: "28px", marginLeft: "auto", marginRight: "32px" }}>
            {NAV.map((n) => (
              <button
                key={n.id}
                className={`nav-link-item ${activeId === n.id ? "active" : ""}`}
                onClick={() => go(n.id)}
              >
                {n.l}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "8.5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease"
              }}
              className="theme-toggle-btn desktop-only"
              title="Toggle Theme"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#F4B63D" className="w-4 h-4" style={{ width: "15px", height: "15px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#F4B63D" className="w-4 h-4" style={{ width: "15px", height: "15px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9.75-9h-2.25M4.95 19.05l1.59-1.59m11.92-11.92l1.59-1.59M3.52 12h2.25m11.92 7.05l-1.59-1.59M4.95 4.95l1.59 1.59M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
                </svg>
              )}
            </button>

            <button className="desktop-only btn-nav-apply" onClick={() => go("contact")} style={{ backgroundColor: "#f1af3c", color: "#0a1835", border: "1.5px solid transparent", borderRadius: "8px", padding: "8.5px 18.5px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", boxShadow: "0 4px 14px rgba(241,175,60,0.35)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Apply Now</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>

            {/* Mobile Hamburger menu */}
            <button className="mobile-only" onClick={() => setMenu(!menu)} aria-label="menu" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ display: "block", width: "18px", height: "2px", backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "1px", transition: "0.3s", transform: menu && i === 0 ? "rotate(45deg) translateY(5px)" : menu && i === 2 ? "rotate(-45deg) translateY(-5px)" : "", opacity: menu && i === 1 ? 0 : 1 }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menu && (
          <div style={{ position: "fixed", inset: 0, zIndex: 600, backgroundColor: C.navBg, display: "flex", flexDirection: "column", padding: "80px 32px 32px", gap: "10px" }}>
            <button onClick={() => setMenu(false)} aria-label="close menu" style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: "rgba(255,255,255,0.85)", fontSize: "28px", fontWeight: "300", cursor: "pointer" }}>
              ✕
            </button>
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", textAlign: "left", fontSize: "20px", fontWeight: "800", color: activeId === n.id ? "#f1af3c" : "#fff", cursor: "pointer" }}>
                {n.l}
              </button>
            ))}
            <button onClick={() => go("contact")} style={{ backgroundColor: C.gold, color: C.textPrimary, border: "none", borderRadius: "10px", padding: "16px", fontSize: "14px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>Apply for Admission</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        )}
      </nav>

      {/* ══════ HERO / HEADER SECTION ══════════════════════ */}
      <section style={{ background: darkMode ? "radial-gradient(circle at top, #0f2347 0%, #0B1120 70%)" : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)", padding: "80px 0 60px 0", borderBottom: `1px solid ${C.cardBorder}`, position: "relative", overflow: "hidden" }}>
        
        {/* Animated Background Icons/Effects */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,175,60,0.12) 0%, transparent 60%)" }} className="apulse" />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(12,70,196,0.08) 0%, transparent 60%)" }} className="apulse" />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 5 }}>
          {/* Gold Badge */}
          <div className="afsu d1" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: darkMode ? "#1e293b" : "#fef3c7", border: `1.5px solid ${B.goldBg}`, padding: "6px 16px", borderRadius: "999px", marginBottom: "20px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#d97706", display: "inline-block" }} className="ablink" />
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>EXCEPTIONAL CURRICULUM</span>
          </div>

          <h1 className="afsu d2" style={{ fontSize: "46px", fontWeight: "900", color: C.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "16px" }}>
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
          <div className="reveal reveal-slide-up" style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "54px" }}>
            {[
              { id: "all", l: "All Courses" },
              { id: "foundation", l: "Foundation (1st-5th)" },
              { id: "middle", l: "Middle School (6th-8th)" },
              { id: "senior", l: "Board Prep (9th-12th)" }
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
                  <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.6, marginBottom: "20px" }}>{wing.desc}</p>
                  
                  {/* Warning Small Batch size */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: darkMode ? "#1c1917" : "#fffbeb", border: "1px solid #fef3c7", borderRadius: "12px", padding: "12px 16px", marginBottom: "24px", fontSize: "12.5px", color: "#d97706", fontWeight: "700" }}>
                    <span>⚠️</span>
                    <span>{wing.maxBatch}</span>
                  </div>

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
                    
                    <button className="btn-shine-gold" onClick={() => router.push("/contact")} style={{ backgroundColor: B.goldBg, color: B.navy, border: "none", borderRadius: "10px", padding: "14px 28px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", boxShadow: "0 4px 12px rgba(241,175,60,0.25)" }}>
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

      {/* ══════ FOOTER SECTION ══════════════════════════════ */}
      <footer style={{ backgroundColor: B.navy, color: B.white, paddingTop: "80px", paddingBottom: "40px", borderTop: `4px solid ${B.goldBg}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Academy moments gallery */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ fontSize: "10px", fontWeight: "800", color: B.goldBg, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>CLASSROOM LIFE MOMENTS</div>
              <h3 style={{ fontSize: "22px", fontWeight: "900" }}>Our Moments Gallery</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="gallery-grid">
              {GALLERY.map((src, idx) => (
                <div key={idx} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", border: "3px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                  <img src={src} alt={`Academy Moment ${idx+1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", marginBottom: "48px" }} className="footer-cols">
            
            {/* Column 1: Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <img src="/logo.png" alt="Sharda Academy Logo" onError={(e) => { e.target.style.display = "none"; }} style={{ width: "42px", height: "42px", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "16px", fontWeight: "900", letterSpacing: "0.04em" }}>SHARDA ACADEMY</div>
                  <div style={{ fontSize: "8px", color: B.goldBg, letterSpacing: "0.15em" }}>Mankhurd · Est. 2009</div>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "340px" }}>
                Mumbai's premier academic coaching academy for Classes 1st to 12th. Guided by industry leading professionals.
              </p>
              
              {/* Social icons */}
              <div style={{ display: "flex", gap: "8px" }}>
                {SOCIAL_ICONS.map((svgIcon, idx) => (
                  <button key={idx} style={{ width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: B.white }}>
                    {svgIcon}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" }}>Navigation</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {NAV.map((n) => (
                  <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", color: n.id === "courses" ? "#f1af3c" : "rgba(255,255,255,0.6)", fontSize: "13px", textAlign: "left", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = n.id === "courses" ? "#f1af3c" : "rgba(255,255,255,0.6)"}>
                    {n.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" }}>Contact Details</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>Sharda Academy, Jankalyan Society, 43, PMG Colony, Mankhurd, Mumbai — 400043</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Phone: +91 93244 44269</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  <span>Email: info@sharda-academy.in</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <span>Timings: Mon–Sat (09:00 AM – 08:00 PM)</span>
                </div>
              </div>
            </div>

          </div>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "40px 0 24px 0" }} />

          <div style={{ display: "flex", justifyContent: "between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "11px", color: "rgba(255,255,255,0.4)" }} className="footer-bottom">
            <div>© {new Date().getFullYear()} Sharda Academy, Mankhurd-43, Mumbai. All Rights Reserved.</div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ── Responsive Styling Blocks ── */}
      <style>{`
        @media (min-width: 769px) {
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
      `}</style>
    </div>
  );
}
