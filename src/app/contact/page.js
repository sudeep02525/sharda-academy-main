"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>GET IN TOUCH</span>
          </div>

          <h1 className="afsu d2 hero-title" style={{ fontWeight: "900", color: C.textPrimary, letterSpacing: "-0.02em" }}>
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
            <div className="reveal reveal-slide-left form-card" style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", boxShadow: "0 10px 40px rgba(10,24,53,0.04)" }}>
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
                        {[
  {v:"1",l:"Class 1"}, {v:"2",l:"Class 2"}, {v:"3",l:"Class 3"}, {v:"4",l:"Class 4"}, {v:"5",l:"Class 5"}, {v:"6",l:"Class 6"}, {v:"7",l:"Class 7"}, {v:"8",l:"Class 8"}, {v:"9",l:"Class 9"}, {v:"10",l:"Class 10"}, {v:"11-Science",l:"11th Science"}, {v:"11-Commerce",l:"11th Commerce"}, {v:"12-Science",l:"12th Science"}, {v:"12-Commerce",l:"12th Commerce"}
].map((c) => <option key={c.v} value={c.v}>{c.l}</option>)}
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

                  <button type="submit" className="btn-shine-gold" style={{ backgroundColor: darkMode ? "#e0a020" : B.goldBg, color: darkMode ? "#0d1b2a" : B.navy, border: "none", borderRadius: "10px", padding: "16px", fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", width: "100%", boxShadow: "0 6px 20px rgba(241,175,60,0.25)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
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

      <Footer go={go} darkMode={darkMode} activeId="contact" />

      {/* ── Responsive Styling Blocks ── */}
      <style>{`
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

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #f1af3c !important;
          box-shadow: 0 0 0 3px rgba(241,175,60,0.18) !important;
        }

        /* High contrast placeholder styling for both light and dark modes */
        input::placeholder,
        textarea::placeholder {
          color: rgba(15, 26, 48, 0.45) !important;
        }

        .dark input::placeholder,
        .dark textarea::placeholder {
          color: rgba(255, 255, 255, 0.45) !important;
        }

        .form-card {
          padding: 20px !important;
        }
        @media (min-width: 769px) {
          .form-card {
            padding: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
