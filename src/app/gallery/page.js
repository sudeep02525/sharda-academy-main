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
   Section Alt: Warm Cream #f5f3ed (Clean container background)
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

const GALLERY_ITEMS = [
  {
    id: 1,
    cat: "outings",
    title: "Lonavala Monsoon Picnic",
    desc: "Our annual monsoon outing to Lonavala. Students enjoyed group nature trails, outdoor bonding activities, and mountain fog treks.",
    date: "August 2025",
    loc: "Lonavala, Maharashtra",
    img: "/campus_moment_1.png",
  },
  {
    id: 2,
    cat: "outings",
    title: "Adlabs Imagica Adventure Trip",
    desc: "An action-packed day of thrills, laughter, and high-speed rollercoasters at Imagica. A memorable day of leisure for our board batches.",
    date: "December 2025",
    loc: "Khopoli, Maharashtra",
    img: "/campus_moment_2.png",
  },
  {
    id: 3,
    cat: "outings",
    title: "Kharghar Hills Nature Trek",
    desc: "An educational nature trail and physical fitness trek to Kharghar Hills. Students explored local botany and enjoyed waterfall views.",
    date: "July 2025",
    loc: "Kharghar, Navi Mumbai",
    img: "/campus_moment_3.png",
  },
  {
    id: 4,
    cat: "events",
    title: "Annual Rankers Convocation",
    desc: "Celebrated our outstanding toppers scoring 95%+ in state exams. Rankers received gold trophies and shared personalized tips.",
    date: "June 2025",
    loc: "Sharda Academy Mankhurd",
    img: "/campus_moment_4.png",
  },
  {
    id: 5,
    cat: "events",
    title: "Teachers' Day Tribute Gala",
    desc: "Student-organized tribute event for our expert faculty mentors. Featured musical segments, emotional speeches, and quiz matches.",
    date: "September 2025",
    loc: "PMG Colony Center",
    img: "/campus_moment_1.png",
  },
  {
    id: 6,
    cat: "events",
    title: "Festive Navratri Garba Evening",
    desc: "Traditional attire, rhythmic garba circles, and high festive energy. Celebrating rich cultural unity among students and mentors.",
    date: "October 2025",
    loc: "PMG Colony Hall",
    img: "/campus_moment_2.png",
  },
];

export default function GalleryPage() {
  const router = useRouter();
  const activeId = "gallery";
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

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
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "courses") {
      router.push("/courses");
      return;
    }
    if (id === "contact") {
      router.push("/contact");
      return;
    }
    router.push(`/#${id}`);
  };

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.cat === filter;
  });

  const openLightbox = (idx) => {
    setLightbox({ open: true, index: idx });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % filteredItems.length,
    }));
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + filteredItems.length) % filteredItems.length,
    }));
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
      <section style={{ background: darkMode ? "#0a0e1a" : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)", padding: "80px 0 54px 0", borderBottom: `1px solid ${C.cardBorder}`, position: "relative", overflow: "hidden" }}>


        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="afsu d1" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: darkMode ? "rgba(241, 175, 60, 0.08)" : "#fef3c7", border: `1.5px solid ${darkMode ? "rgba(241, 175, 60, 0.4)" : "#f1af3c"}`, padding: "6px 14px", borderRadius: "999px", marginBottom: "20px", boxShadow: darkMode ? "0 0 16px rgba(241, 175, 60, 0.16)" : "none" }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>LIFE AT SHARDA ACADEMY</span>
          </div>

          <h1 className="afsu d2 hero-title" style={{ fontWeight: "900", color: C.textPrimary, letterSpacing: "-0.02em" }}>
            Our Outings & Festive Memories
          </h1>
          
          <p className="afsu d3" style={{ fontSize: "15px", color: C.textSecond, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Education doesn't stop at the classroom door. We believe in creating life-long memories through annual monsoon picnics, thrilling adventure park visits, nature treks, and high-energy cultural gatherings.
          </p>
        </div>
      </section>

      {/* ══════ INTERACTIVE GALLERY PORTFOLIO ══════════════════════ */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Category Filter Tabs */}
          <div className="scroll-tabs-container" style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
            {[
              { 
                id: "all", 
                l: "All Memories",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )
              },
              { 
                id: "outings", 
                l: "Picnics & Outings",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M16 8H8V3h8v5z" />
                    <circle cx="6" cy="17" r="2" />
                    <circle cx="18" cy="17" r="2" />
                  </svg>
                )
              },
              { 
                id: "events", 
                l: "Events & Festivals",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <circle cx="8" cy="14" r="1" />
                    <circle cx="12" cy="14" r="1" />
                    <circle cx="16" cy="14" r="1" />
                  </svg>
                )
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "10px",
                  fontSize: "13.5px",
                  fontWeight: "750",
                  cursor: "pointer",
                  border: filter === tab.id ? `1.5px solid ${B.goldBg}` : `1.5px solid ${C.cardBorder}`,
                  backgroundColor: filter === tab.id ? B.goldBg : C.cardBg,
                  color: filter === tab.id ? B.navy : C.textPrimary,
                  boxShadow: filter === tab.id ? "0 6px 18px rgba(241,175,60,0.25)" : "none",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                className="gallery-tab-btn"
              >
                {tab.icon}
                <span>{tab.l}</span>
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="cards-grid reveal reveal-slide-up">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="hover-card"
                onClick={() => openLightbox(idx)}
                style={{
                  backgroundColor: C.cardBg,
                  border: `1.5px solid ${C.cardBorder}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(10,24,53,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease"
                }}
              >
                {/* Image Container with Hover zoom */}
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10" }} className="gallery-img-box zoom-img-container">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="zoom-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div className="img-hover-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,24,53,0.4)", opacity: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.4s ease" }}>
                    <span style={{ backgroundColor: "#ffffff", color: B.navy, borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }} className="zoom-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                  </div>
                  <span style={{ position: "absolute", bottom: "16px", left: "16px", backgroundColor: "rgba(10,24,53,0.8)", backdropFilter: "blur(4px)", color: "#ffffff", padding: "6px 12px", borderRadius: "8px", fontSize: "11px", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: B.goldBg }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {item.date}
                  </span>
                </div>

                {/* Text Details */}
                <div style={{ padding: "28px" }}>
                  <div style={{ fontSize: "10px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: B.goldBg }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <span>{item.loc}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "900", color: C.textPrimary, marginBottom: "12px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════ LIGHTBOX MODAL OVERLAY ══════════════════════ */}
      {lightbox.open && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(6,15,34,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 1010,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            className="lightbox-close-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Lightbox Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "960px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Nav Arrows */}
            <button
              onClick={prevLightbox}
              style={{
                position: "absolute",
                left: "-64px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#ffffff",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              className="lightbox-arrow-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={nextLightbox}
              style={{
                position: "absolute",
                right: "-64px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#ffffff",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              className="lightbox-arrow-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Main Lightbox Image */}
            <div style={{ width: "100%", borderRadius: "20px", overflow: "hidden", border: "4px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
              <img
                src={filteredItems[lightbox.index].img}
                alt={filteredItems[lightbox.index].title}
                style={{ width: "100%", height: "auto", display: "block", maxHeight: "70vh", objectFit: "contain", backgroundColor: "#060f22" }}
              />
            </div>

            {/* Description Text */}
            <div style={{ width: "100%", marginTop: "24px", color: "#ffffff", textAlign: "center" }}>
              <div style={{ fontSize: "11px", fontWeight: "800", color: B.goldBg, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                {filteredItems[lightbox.index].loc} — {filteredItems[lightbox.index].date}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "8px" }}>
                {filteredItems[lightbox.index].title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
                {filteredItems[lightbox.index].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer go={go} darkMode={darkMode} activeId={activeId} />

      {/* ── Responsive Styling & Left-to-Right Underline Animations ── */}
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
          .gallery-tab-btn {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
            padding: 8px 18px !important;
            font-size: 12.5px !important;
          }
        }

        .hero-title {
          font-size: 26px !important;
          line-height: 1.25 !important;
          margin-bottom: 16px !important;
        }

        @media (min-width: 769px) {
          .hero-title {
            font-size: 40px !important;
            line-height: 1.15 !important;
            margin-bottom: 20px !important;
          }
          .cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .main-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .footer-cols { grid-template-columns: 1.5fr 1fr 1.5fr !important; }
          .footer-bottom { justify-content: space-between !important; }
          .form-row-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }

        /* Responsive lightbox arrows & buttons for mobile screens */
        @media (max-width: 768px) {
          .lightbox-arrow-btn {
            width: 40px !important;
            height: 40px !important;
            font-size: 16px !important;
          }
          .lightbox-arrow-btn:first-of-type {
            left: 8px !important;
          }
          .lightbox-arrow-btn:last-of-type {
            right: 8px !important;
          }
          .lightbox-close-btn {
            top: 16px !important;
            right: 16px !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        /* Smooth transform hardware-accelerated transitions */
        .hover-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease !important;
        }

        .hover-card:hover {
          transform: translateY(-6px) scale(1.01) !important;
          box-shadow: 0 16px 40px rgba(10,24,53,0.06) !important;
          border-color: ${B.goldBg}70 !important;
        }

        /* Gallery zoom transitions */
        .hover-card:hover .gallery-img-box img {
          transform: scale(1.08);
        }

        .hover-card:hover .img-hover-overlay {
          opacity: 1 !important;
        }

        .hover-card:hover .zoom-icon-wrapper {
          transform: scale(1.1);
        }

        .btn-shine-gold {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, box-shadow 0.4s ease !important;
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

        .theme-toggle-btn {
          transition: all 0.3s ease !important;
        }

        .theme-toggle-btn:hover {
          border-color: #F4B63D !important;
          box-shadow: 0 0 10px rgba(244, 182, 61, 0.3) !important;
        }

        /* Desktop navigation links - Symmetrical Left-to-Right Underline on hover & active */
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

        /* Lightbox arrow & close buttons hover styling */
        .lightbox-arrow-btn:hover,
        .lightbox-close-btn:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08) !important;
          color: #f1af3c !important;
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
