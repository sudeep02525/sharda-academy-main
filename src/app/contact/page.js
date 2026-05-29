"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/* ═══════════════════════════════════════════════════════════════
   PREMIUM THEME BRAND SYSTEM — Extracted from mockups
   Primary:   Deep Navy  #0a1835 (Header, Footer, Dark CTA)
   Secondary: Gold Yellow #e69c24 or #f1af3c (Primary action)
   BG:        Warm Beige #faf9f6 (Body, clean off-white)
   Section Alt: Warm Cream #f4f1ea (Clean container background)
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

const getDynamicSession = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  if (month < 3) {
    return `${year - 1}-${String(year).slice(-2)}`;
  } else {
    return `${year}-${String(year + 1).slice(-2)}`;
  }
};

export default function ContactPage() {
  const router = useRouter();
  const activeId = "contact";
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", cls: "10", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

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
      router.push("/courses");
      return;
    }
    if (id === "contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push(`/#${id}`);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const whatsappNum = "919324444269"; // Sharda Academy contact
    const defaultMsg = `Hello Sharda Academy, I have submitted a Contact enquiry on the website. Here are my details:

* Name: ${form.name}
* Mobile Number: ${form.phone}
* Email: ${form.email || "Not Provided"}
* Target Class: Class ${form.cls}
* Message/Query: ${form.message}

Please contact me to guide me further. Thank you!`;

    const encodedMsg = encodeURIComponent(defaultMsg);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
    setForm({ name: "", cls: "10", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

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

            <button className="desktop-only btn-nav-apply" onClick={() => go("admission")} style={{ backgroundColor: "#f1af3c", color: "#0a1835", border: "1.5px solid transparent", borderRadius: "8px", padding: "8.5px 18.5px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", boxShadow: "0 4px 14px rgba(241,175,60,0.35)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
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
            <button onClick={() => go("admission")} style={{ backgroundColor: C.gold, color: C.textPrimary, border: "none", borderRadius: "10px", padding: "16px", fontSize: "14px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
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
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>CONNECT WITH MENTORS</span>
          </div>

          <h1 className="afsu d2" style={{ fontSize: "46px", fontWeight: "900", color: C.textPrimary, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            We'd Love to <span style={{ color: B.gold }}>Hear From You</span>
          </h1>
          <p className="afsu d3" style={{ fontSize: "16px", color: C.textSecond, lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
            Have questions about Admissions, Board Specialist Coaching, Curriculum pathways, or Fee structures? Send us a message or visit our Mankhurd campus!
          </p>
        </div>
      </section>

      {/* ══════ QUICK CONNECT CARDS GRID ══════════════════════ */}
      <section style={{ padding: "40px 0", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }} className="cards-grid afsu d4">
            
            {/* Card 1: Call Us */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: darkMode ? "#1e293b" : B.goldLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: B.goldBg }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "850", color: C.textPrimary, marginBottom: "8px" }}>Call Academy Helpline</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5, marginBottom: "16px", maxWidth: "260px" }}>
                Connect directly with our counseling administrators for quick info.
              </p>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="tel:+919324444269" style={{ fontSize: "16px", fontWeight: "800", color: B.goldBg, textDecoration: "none" }}>+91 93244 44269</a>
                <a href="tel:+919833515856" style={{ fontSize: "14px", fontWeight: "700", color: C.textSecond, textDecoration: "none" }}>+91 98335 15856</a>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: darkMode ? "#1e293b" : B.blueLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: B.blue }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "850", color: C.textPrimary, marginBottom: "8px" }}>Write To Admissions</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5, marginBottom: "16px", maxWidth: "260px" }}>
                Drop us your queries, feedback, or school profile details via email.
              </p>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="mailto:info@sharda-academy.in" style={{ fontSize: "15px", fontWeight: "800", color: B.goldBg, textDecoration: "none" }}>info@sharda-academy.in</a>
                <a href="mailto:admissions@sharda-academy.in" style={{ fontSize: "13.5px", fontWeight: "700", color: C.textSecond, textDecoration: "none" }}>admissions@sharda-academy.in</a>
              </div>
            </div>

            {/* Card 3: Visit Us */}
            <div className="hover-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: darkMode ? "#1e293b" : B.pinkLt, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: B.pink }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "850", color: C.textPrimary, marginBottom: "8px" }}>Campus Office</h3>
              <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.5, marginBottom: "16px", maxWidth: "260px" }}>
                We encourage parents to visit with their child to inspect our smart panels first-hand.
              </p>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: "800", color: C.textPrimary }}>PMG Colony, Mankhurd, Mumbai</span>
                <a href="https://maps.app.goo.gl/8BZrNvvj1GUqr6i36" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", fontWeight: "700", color: B.goldBg, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Get Directions ↗</span>
                </a>
                <div style={{ fontSize: "11px", color: C.textSecond, fontWeight: "700", marginTop: "4px", textTransform: "uppercase" }}>Mon-Sat: 09:00 AM - 08:00 PM</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════ TWO-COLUMN INTERACTIVE REGISTRATION & DIRECTORY SECTION ══════════════ */}
      <section style={{ padding: "40px 0 100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "start" }} className="main-grid">
            
            {/* Left: Enquiry Form */}
            <div className="reveal reveal-slide-left" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "36px", boxShadow: "0 10px 40px rgba(10,24,53,0.04)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "900", color: C.textPrimary, marginBottom: "8px", letterSpacing: "-0.01em" }}>Send A Message</h2>
              <p style={{ fontSize: "13.5px", color: C.textSecond, marginBottom: "28px", lineHeight: 1.5 }}>
                Fill in the details below. Clicking send will formulate a detailed enquiry to submit directly via WhatsApp.
              </p>

              {sent ? (
                <div style={{ backgroundColor: darkMode ? "#0c1e3f" : B.goldLt, border: `1px solid ${B.goldBg}`, borderRadius: "16px", padding: "32px", textAlign: "center", color: C.textPrimary }} className="afsu">
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>✓</div>
                  <h3 style={{ fontSize: "18px", fontWeight: "850", marginBottom: "8px" }}>Enquiry Prepared Successfully!</h3>
                  <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                    We have redirected you to WhatsApp. If the tab did not open, please click the send button again. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Student's Full Name *</label>
                    <input type="text" required placeholder="Enter student's full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.cardBorder}`, borderRadius: "10px", fontSize: "13.5px", backgroundColor: C.bg, color: C.textPrimary }} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }} className="form-row-2">
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Mobile Number *</label>
                      <input type="tel" required placeholder="10-digit number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.cardBorder}`, borderRadius: "10px", fontSize: "13.5px", backgroundColor: C.bg, color: C.textPrimary }} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Target Class *</label>
                      <select required value={form.cls} onChange={(e) => setForm({ ...form, cls: e.target.value })} style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.cardBorder}`, borderRadius: "10px", fontSize: "13.5px", backgroundColor: C.bg, color: C.textPrimary }}>
                        {[...Array(12)].map((_, i) => <option key={i} value={i + 1}>Class {i + 1}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Email Address (Optional)</label>
                    <input type="email" placeholder="parent@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.cardBorder}`, borderRadius: "10px", fontSize: "13.5px", backgroundColor: C.bg, color: C.textPrimary }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: C.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Your Message / Enquiry *</label>
                    <textarea required rows="4" placeholder="Type your detailed message here (e.g. syllabus questions, fee packages, offline schedules)..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.cardBorder}`, borderRadius: "10px", fontSize: "13.5px", backgroundColor: C.bg, color: C.textPrimary, resize: "vertical" }} />
                  </div>

                  <button type="submit" className="btn-shine-gold" style={{ backgroundColor: B.goldBg, color: B.navy, border: "none", borderRadius: "10px", padding: "16px", fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", width: "100%", boxShadow: "0 6px 20px rgba(241,175,60,0.25)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <span>Send Message via WhatsApp</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Map & Transit Guide */}
            <div className="reveal reveal-slide-right" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* google map widget */}
              <div style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "16px", boxShadow: "0 10px 40px rgba(10,24,53,0.04)" }}>
                <div style={{ overflow: "hidden", borderRadius: "14px", border: `1px solid ${C.cardBorder}`, height: "340px", backgroundColor: darkMode ? "#0c1e3f" : "#f1f3f5" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2952543950965!2d72.92696917597135!3d19.05142165276332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c724867cc043%3A0x3aac9bf792d9f1ba!2sSharda+academy!5e0!3m2!1sen!2sin!4v1716960000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Transit & Landmark Card */}
              <div style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "32px", boxShadow: "0 10px 40px rgba(10,24,53,0.04)" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: B.goldBg }}>🗺</span> 
                  Location & Transit Guide
                </h3>
                
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: B.goldBg, fontWeight: "900", fontSize: "14px", marginTop: "2px" }}>•</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "13px", color: C.textPrimary }}>Nearest Landmark</strong>
                      <span style={{ fontSize: "12.5px", color: C.textSecond }}>PMG Colony, Mankhurd. Located near Jankalyan Society.</span>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: B.goldBg, fontWeight: "900", fontSize: "14px", marginTop: "2px" }}>•</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "13px", color: C.textPrimary }}>Via Local Train (Harbour Line)</strong>
                      <span style={{ fontSize: "12.5px", color: C.textSecond }}>Get down at Mankhurd Railway Station. Share auto-rickshaws are available directly to PMG Colony (approx. 5 minutes).</span>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: B.goldBg, fontWeight: "900", fontSize: "14px", marginTop: "2px" }}>•</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "13px", color: C.textPrimary }}>Via Road</strong>
                      <span style={{ fontSize: "12.5px", color: C.textSecond }}>Easy access from Eastern Express Highway / Sion-Panvel Highway via Mankhurd link road.</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

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
                  <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", color: n.id === "contact" ? "#f1af3c" : "rgba(255,255,255,0.6)", fontSize: "13px", textAlign: "left", cursor: "pointer", padding: 0 }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = n.id === "contact" ? "#f1af3c" : "rgba(255,255,255,0.6)"}>
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
          .cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .main-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .footer-cols { grid-template-columns: 1.5fr 1fr 1.5fr !important; }
          .footer-bottom { justify-content: space-between !important; }
          .form-row-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(10,24,53,0.06) !important;
          border-color: ${B.goldBg}70 !important;
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
        }

        .btn-nav-apply:hover svg {
          transform: translateX(3px);
        }

        .btn-nav-apply {
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
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

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #f1af3c !important;
          box-shadow: 0 0 0 3px rgba(241,175,60,0.18) !important;
        }
      `}</style>
    </div>
  );
}
