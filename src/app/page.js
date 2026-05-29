"use client";
import React from "react";
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
  navy: "#0a1835",
  navyLt: "#0f2347",
  navyEl: "#0c1e3f",
  beige: "#ffffff",
  cream: "#f8fafc",
  white: "#ffffff",
  gold: "#d97706", // Darker gold for text readability
  goldBg: "#f1af3c", // Bright gold for active buttons
  goldLt: "#fef3c7", // Light gold background
  blue: "#0c46c4",
  blueLt: "#dbeafe",
  pink: "#dc2626",
  pinkLt: "#fee2e2",
  textNavy: "#0f1a30",
  textGrey: "#5e6675",
  borderCol: "#e5e7eb",
};

/* ═══════════════════════════════════════════════════════════════
   DATA STRUCTURES
═══════════════════════════════════════════════════════════════ */
const NAV = [
  { id: "home", l: "Home" },
  { id: "about", l: "About Us" },
  { id: "gallery", l: "Gallery" },
  { id: "courses", l: "Courses" },
  { id: "contact", l: "Contact Us" },
];

const WINGS = [
  {
    tag: "PRIMARY CLASSES",
    tc: B.gold,
    bg: B.goldLt,
    title: "Foundation Wing",
    sub: "Class 1st to 5th",
    points: ["Conceptual Basis", "Active Learning", "Cognitive Growth"],
    link: "#admission",
  },
  {
    tag: "CORE CLASSES",
    tc: B.blue,
    bg: B.blueLt,
    title: "Middle Stage Wing",
    sub: "Class 6th to 8th",
    points: [
      "Science & Maths",
      "Analytical Thinking",
      "Active Concept Building",
    ],
    link: "#admission",
  },
  {
    tag: "BOARD PREPARATION",
    tc: B.pink,
    bg: B.pinkLt,
    title: "Senior Secondary Wing",
    sub: "Class 9th to 12th",
    points: [
      "Board Exam Focus",
      "SSC & HSC Board Prep",
      "Weekly Test Analysis",
    ],
    link: "#admission",
  },
];

const FACILITIES = [
  {
    img: "/facility_smart_panel.png",
    title: "Interactive Smart Panels",
    desc: "Our classrooms are equipped with high-definition digital smart boards enabling highly interactive and visual concepts representation.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f1af3c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    img: "/facility_ac_comfort.png",
    title: "Full Air-Conditioned Comfort",
    desc: "Acoustically insulated and climate-controlled classroom environments ensuring absolute focus and temperature comfort for your child.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f1af3c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M20 16.66l-2.83-2.83" />
        <path d="M18 20l-2.83-2.83" />
        <path d="M4 7.34l2.83 2.83" />
        <path d="M6 4l2.83 2.83" />
        <path d="M16.66 4l-2.83 2.83" />
        <path d="M20 7.34l-2.83 2.83" />
        <path d="M7.34 20l2.83-2.83" />
        <path d="M4 16.66l2.83-2.83" />
      </svg>
    ),
  },
  {
    img: "/facility_biometric.png",
    title: "Biometric Attendance & Safety",
    desc: "Daily biometric check-in system that instantly logs students' attendance, sending real-time automated updates to parents.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f1af3c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 18H19" />
        <path d="M12 18V6" />
        <path d="M19 18V2" />
        <path d="M5 18V10" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a1835"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "CCTV Video Security",
    desc: "Continuous 24/7 camera monitoring inside and outside classes.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a1835"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Quiet Study & Resources Area",
    desc: "Curated board-exam reference books, question banks, and a quiet study space.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a1835"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    title: "Highly Professional Spaces",
    desc: "Clean science laboratories, spacious desks, and modern design.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a1835"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Regular Test Reporting",
    desc: "Weekly test score analysis directly visible on parent dashboards.",
  },
];

const TOPPERS = [
  {
    name: "Aditya Sharma",
    rank: "HSC Board Topper",
    exam: "HSC Board Exam Scorer",
    score: "99.2% Board Result",
    c: B.gold,
    bg: B.goldLt,
    avatar: "AS",
  },
  {
    name: "Priya Gupta",
    rank: "SSC Board Topper",
    exam: "SSC Board Exam Scorer",
    score: "98.8% Board Result",
    c: B.blue,
    bg: B.blueLt,
    avatar: "PG",
  },
  {
    name: "Aryan Khan",
    rank: "HSC Science Topper",
    exam: "HSC Board Exam Scorer",
    score: "98.4% Board Result",
    c: B.pink,
    bg: B.pinkLt,
    avatar: "AK",
  },
];

const TEACHERS = [
  {
    name: "Dr. S. K. Roy",
    role: "Physics Head",
    exp: "Ph.D. in Physics, 15+ Yrs Exp.",
    text: "Senior Board Expert specializing in Physics board exam preparation.",
  },
  {
    name: "Mrs. Priya Patil",
    role: "Mathematics lead",
    exp: "M.Sc. in Mathematics, 12+ Yrs Exp.",
    text: "Board Exam Expert guiding students to 100% conceptual clarity.",
  },
];

const GALLERY = [
  "/campus_moment_1.png",
  "/campus_moment_2.png",
  "/campus_moment_3.png",
  "/campus_moment_4.png",
];

const SOCIAL_ICONS = [
  <svg
    key="fb"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>,
  <svg
    key="ig"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>,
  <svg
    key="yt"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>,
  <svg
    key="msg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
];

const getDynamicSession = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan, 3 = Apr
  if (month < 3) {
    return `${year - 1}-${String(year).slice(-2)}`;
  } else {
    return `${year}-${String(year + 1).slice(-2)}`;
  }
};

// Premium Zero-Dependency Word Rotator (Clean Slide + Fade, replaces mechanical typewriter)
const TextRotator = ({ strings, interval = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % strings.length);
        setVisible(true);
      }, 350); // duration of fade-out
    }, interval);

    return () => clearInterval(timer);
  }, [strings, interval]);

  return (
    <span
      style={{
        display: "inline-block",
        transition:
          "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {strings[index]}
    </span>
  );
};

const TESTIMONIALS = [
  {
    stars: 5,
    text: "The curriculum here is designed to make children critical thinkers. The biometric safety combined with the professional teaching style has been the key to my child's academic success.",
    author: "Mr. Suresh Patil",
    role: "Parent of Class 10th Topper",
    avatar: "SP",
  },
  {
    stars: 5,
    text: "Sharda Academy does not feel like an overcrowded classes. It is a personalized learning home where the teachers spend quality time explaining every single conceptual doubt with infinite patience.",
    author: "Mrs. Anjali Roy",
    role: "Parent of HSC Science Achiever",
    avatar: "AR",
  },
  {
    stars: 5,
    text: "The conceptual sheets and weekly mock exams prepared by board specialists transformed my daughter's confidence. She scored 98.8% in her board exams. The biometric tracking alerts are incredibly reassuring.",
    author: "Mr. Rajesh Gupta",
    role: "Parent of SSC Board Topper",
    avatar: "RG",
  },
];

export default function Page() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({
    name: "",
    cls: "10",
    phone: "",
    email: "",
  });
  const [sent, setSent] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setActiveId(id);
        }
      }, 500);
    }
  }, []);

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
    const shouldBeDark = isMobile
      ? systemDark
      : savedTheme === "dark" || (!savedTheme && systemDark);

    if (shouldBeDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      router.push("/contact");
      return;
    }
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Construct WhatsApp message details
    const whatsappNum = "919324444269"; // Target phone number +91 93244 44269
    const defaultMsg = `Hello Sharda Academy, I have submitted the admissions enquiry form on the website. Here are my details:

* Student's Name: ${form.name}
* Mobile Number: ${form.phone}
* Email Address: ${form.email || "Not Provided"}
* Target Class: Class ${form.cls}

Please contact us to guide us further on the admission and counselling process. Thank you!`;

    const encodedMsg = encodeURIComponent(defaultMsg);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");

    setSent(true);
    setForm({ name: "", cls: "10", phone: "", email: "" });
    setTimeout(() => setSent(false), 5000);
  };

  /* ── Computed theme colors (JS-driven, no CSS var dependency) ── */
  const C = {
    bg: darkMode ? "#0B1120" : "#ffffff",
    cardBg: darkMode ? "#131C2E" : "#ffffff",
    cardBorder: darkMode ? "#243145" : "rgba(10,24,53,0.08)",
    textPrimary: darkMode ? "#F9FAFB" : "#0f1a30",
    textSecond: darkMode ? "#CBD5E1" : "#5e6675",
    gold: "#f1af3c",
    navBg: darkMode ? "#081226" : "#0a1835",
  };

  return (
    <div
      className="page-wrapper"
      style={{
        backgroundColor: darkMode ? "#0B1120" : "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: darkMode ? "#F9FAFB" : B.textNavy,
      }}
    >
      {/* ══════ TOP HEADER BAR (Mobile & Desktop) ════════════════════════════════ */}
      <div
        style={{
          backgroundColor: "#060f22",
          color: B.goldBg,
          padding: "8px 16px",
          fontSize: "11px",
          fontWeight: "700",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          letterSpacing: "0.08em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: "inline-block" }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          CALL ACADEMY: +91 93244 44269
        </span>
        <span className="desktop-only">|</span>
        <span
          className="desktop-only"
          style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: "inline-block" }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          LOCATION: PMG Colony, Mankhurd, Mumbai — 400043
        </span>
      </div>

      {/* ══════ MAIN NAVIGATION BAR ════════════════════════════════════════════ */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 500,
          backgroundColor: darkMode ? "#081226" : "#0a1835",
          color: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "66px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo & Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
            onClick={() => go("home")}
          >
            <img
              src="/logo.png"
              alt="Sharda Academy Logo"
              onError={(e) => {
                e.target.style.display = "none";
              }}
              style={{ width: "58px", height: "58px", objectFit: "contain" }}
            />
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "900",
                  letterSpacing: "0.05em",
                  lineHeight: 1.1,
                  color: "#ffffff",
                }}
              >
                SHARDA ACADEMY
              </div>
              <div
                style={{
                  fontSize: "8px",
                  fontWeight: "800",
                  color: C.gold,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Mankhurd · Est. 2009
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-only"
            style={{
              display: "flex",
              gap: "28px",
              marginLeft: "auto",
              marginRight: "32px",
            }}
          >
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
            {/* 🌗 Premium Light/Dark Theme Switcher */}
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
                transition: "all 0.3s ease",
              }}
              className="theme-toggle-btn desktop-only"
              title="Toggle Theme"
            >
              {darkMode ? (
                // Moon Icon (shows in Dark Mode)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="#F4B63D"
                  className="w-4 h-4"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                // Sun Icon (shows in Light Mode)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="#F4B63D"
                  className="w-4 h-4 animate-spin-slow"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21m9.75-9h-2.25M4.95 19.05l1.59-1.59m11.92-11.92l1.59-1.59M3.52 12h2.25m11.92 7.05l-1.59-1.59M4.95 4.95l1.59 1.59M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
                  />
                </svg>
              )}
            </button>

            <button
              className="desktop-only btn-nav-apply"
              onClick={() => go("admission")}
              style={{
                backgroundColor: "#f1af3c",
                color: "#0a1835",
                border: "1.5px solid transparent",
                borderRadius: "8px",
                padding: "8.5px 18.5px",
                fontSize: "12px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(241,175,60,0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>Apply Now</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Mobile Hamburger menu */}
            <button
              className="mobile-only"
              onClick={() => setMenu(!menu)}
              aria-label="menu"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    backgroundColor: "rgba(255,255,255,0.85)",
                    borderRadius: "1px",
                    transition: "0.3s",
                    transform:
                      menu && i === 0
                        ? "rotate(45deg) translateY(5px)"
                        : menu && i === 2
                          ? "rotate(-45deg) translateY(-5px)"
                          : "",
                    opacity: menu && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menu && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 600,
              backgroundColor: C.navBg,
              display: "flex",
              flexDirection: "column",
              padding: "80px 32px 32px",
              gap: "10px",
            }}
          >
            {/* Close Button inside the drawer */}
            <button
              onClick={() => setMenu(false)}
              aria-label="close menu"
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.85)",
                fontSize: "28px",
                fontWeight: "300",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  padding: "16px 0",
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "800",
                  color: activeId === n.id ? "#f1af3c" : "#fff",
                  cursor: "pointer",
                }}
              >
                {n.l}
              </button>
            ))}
            <button
              onClick={() => go("admission")}
              style={{
                backgroundColor: C.gold,
                color: C.textPrimary,
                border: "none",
                borderRadius: "10px",
                padding: "16px",
                fontSize: "14px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                cursor: "pointer",
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span>Apply for Admission</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* ══════ HERO SECTION (Desktop / Mobile Dual Layouts) ══════════════════════ */}
      <section
        id="home"
        style={{
          position: "relative",
          overflow: "visible",
          padding: "48px 0",
          minHeight: "calc(100vh - 102px)",
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
          }}
        >
          {/* Dual Desktop and Mobile Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "stretch",
            }}
            className="hero-grid"
          >
            {/* Left Content Column (Flex container spanning 100% height to push stats card to bottom) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                {/* Gold Chip */}
                <div
                  className="afsu d1"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#fef3c7",
                    border: "1px solid #f1af3c",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#d97706",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: "#d97706",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    ADMISSIONS OPEN FOR SESSION {getDynamicSession()}
                  </span>
                </div>

                {/* Dynamic responsive headings (Mobile view uses "India's Top Coaching..." and Desktop "Nurturing Minds...") */}
                <h1
                  className="desktop-only afsu d2"
                  style={{
                    fontSize: "44px",
                    fontWeight: "900",
                    color: C.textPrimary,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                  }}
                >
                  Nurturing Minds & Building <br />
                  <span style={{ color: B.gold }}>Board Exam Toppers</span>{" "}<br />
                  from Class 1st to 12th
                </h1>
                <h1
                  className="mobile-only afsu d2"
                  style={{
                    fontSize: "28px",
                    fontWeight: "900",
                    color: C.textPrimary,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}
                >
                  India's Top Coaching for <br />
                  <span style={{ color: B.gold }}>
                    Classes 1st to 12th<br/>
                    SSC & HSC Board Prep<br/>
                    Personalized Small Batches
                  </span>
                </h1>

                {/* Sub-headline */}
                <p
                  className="afsu d3"
                  style={{
                    fontSize: "14.5px",
                    color: C.textSecond,
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    maxWidth: "560px",
                  }}
                >
                  Sharda Academy, Mankhurd-43 — Mumbai's most trusted coaching
                  institute for academic excellence. We combine professional
                  Board expert mentorship with high-tech smart classrooms and
                  advanced biometric safety to deliver top Board results.
                </p>

                {/* Action Buttons */}
                <div
                  className="afsu d4"
                  style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                  }}
                >
                  <button
                    className="btn-shine-gold"
                    onClick={() => go("admission")}
                    style={{
                      backgroundColor: "#f1af3c",
                      color: "#0a1835",
                      border: "none",
                      borderRadius: "10px",
                      padding: "16px 28px",
                      fontSize: "13px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      cursor: "pointer",
                      boxShadow: "0 6px 20px rgba(241,175,60,0.35)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>Apply Online For Admission</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition:
                          "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <button
                    className="btn-shine-navy"
                    onClick={() => go("admission")}
                    style={{
                      backgroundColor: darkMode ? "#081226" : "#0a1835",
                      color: "#ffffff",
                      border: `1.5px solid ${darkMode ? "#081226" : "#0a1835"}`,
                      borderRadius: "10px",
                      padding: "16px 28px",
                      fontSize: "13px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Book Free Counselling
                  </button>
                </div>
              </div>

              {/* Stats Card (Floating/Rounded block in hero - Desktop Only) */}
              <div
                className="desktop-only afsu d5"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1.5px solid ${C.gold}50`,
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "520px",
                  boxShadow: "0 10px 32px rgba(10,24,53,0.06)",
                  marginTop: "24px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    flex: 1,
                    borderRight: `1.5px solid ${B.goldBg}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: C.textPrimary,
                    }}
                  >
                    15+
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Years Teaching
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    flex: 1,
                    borderRight: `1.5px solid ${B.goldBg}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: C.gold,
                    }}
                  >
                    98.4%
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Success Rate
                  </div>
                </div>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: B.textNavy,
                    }}
                  >
                    2,500+
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Students Mentored
                  </div>
                </div>
              </div>
            </div>

            {/* Right Asset Column */}
            <div
              className="afsu d3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                className="zoom-img-container"
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.08)",
                  border: `6px solid ${C.cardBg}`,
                }}
              >
                <img
                  className="zoom-img"
                  src="/hero_classroom.png"
                  alt="Sharda Academy Premium Classroom"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />

                {/* Floating Labels over Hero Image (Bound inside relative card) */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "rgba(16,185,129,0.9)",
                    backdropFilter: "blur(4px)",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: "800",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    INTELLIGENT CLASSROOMS
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "rgba(10,24,53,0.85)",
                    backdropFilter: "blur(4px)",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      color: C.gold,
                      textTransform: "uppercase",
                    }}
                  >
                    State-of-the-Art Learning Spaces
                  </div>
                </div>
              </div>

              {/* Mobile Stats Card (Rendered below classroom image only on mobile viewports) */}
              <div
                className="mobile-only"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1.5px solid ${C.gold}50`,
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  boxShadow: "0 10px 32px rgba(10,24,53,0.06)",
                  marginTop: "24px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    flex: 1,
                    borderRight: `1.5px solid ${B.goldBg}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: C.textPrimary,
                    }}
                  >
                    15+
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Years Teaching
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    flex: 1,
                    borderRight: `1.5px solid ${B.goldBg}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: C.gold,
                    }}
                  >
                    98.4%
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Success Rate
                  </div>
                </div>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: C.textPrimary,
                    }}
                  >
                    2,500+
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: B.textGrey,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Students Mentored
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CURRICULUM SECTION ══════════════════════════════════════════════════ */}
      <section
        id="home"
        style={{
          padding: "80px 0",
          backgroundColor: C.bg,
          borderBottom: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "800",
                color: C.gold,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              CURRICULUM / COMPREHENSIVE
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "900",
                color: C.textPrimary,
                marginBottom: "16px",
              }}
            >
              Exceptional Classes 1st to 12th Curriculum
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: B.textGrey,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Tailored learning paths engineered to trigger academic excellence,
              conceptual clarity, and unshakeable foundations for SSC & HSC
              Board success.
            </p>
          </div>

          {/* Three columns curriculum cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}
            className="curriculum-grid"
          >
            {WINGS.map((w, idx) => (
              <div
                key={idx}
                className="hover-card reveal reveal-slide-up"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1px solid ${C.cardBorder}`,
                  borderRadius: "20px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                {/* Wing Category Chip */}
                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    backgroundColor: w.bg,
                    color: w.tc,
                    border: `1px solid ${w.tc}30`,
                    borderRadius: "999px",
                    padding: "6px 12px",
                    fontSize: "9px",
                    fontWeight: "800",
                    letterSpacing: "0.06em",
                    marginBottom: "20px",
                  }}
                >
                  {w.tag}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "850",
                    color: C.textPrimary,
                    marginBottom: "4px",
                  }}
                >
                  {w.title}
                </h3>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: C.textSecond,
                    marginBottom: "20px",
                  }}
                >
                  {w.sub}
                </div>

                {/* Point Checkmarks */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {w.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        fontSize: "13.5px",
                        color: C.textPrimary,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: "500",
                      }}
                    >
                      <span style={{ color: C.gold, fontWeight: "900" }}>
                        ✓
                      </span>{" "}
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <button
                  className="btn-syllabus-cta"
                  onClick={() => go("admission")}
                  style={{
                    width: "100%",
                    marginTop: "auto",
                    border: `1.5px solid ${C.cardBorder}`,
                    backgroundColor: C.bg,
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "12px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: C.textPrimary,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <span>View Detailed Syllabus</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition:
                        "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      color: C.gold,
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SMART INFRASTRUCTURE SECTION ══════════════════════════════════════ */}
      <section
        id="facilities"
        style={{ padding: "80px 0", borderBottom: `1px solid ${B.borderCol}` }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "800",
                color: C.gold,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              OUR SMART INFRASTRUCTURE
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "900",
                color: B.textNavy,
                marginBottom: "16px",
              }}
            >
              Premium Standards & Smart Infrastructure
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: B.textGrey,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              World-class classroom environments and cutting-edge administrative
              tools engineered to guarantee seamless learning and complete
              safety.
            </p>
          </div>

          {/* Three large premium infrastructure cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              marginBottom: "54px",
            }}
            className="facilities-grid"
          >
            {FACILITIES.map((f, idx) => (
              <div
                key={idx}
                className="hover-card reveal reveal-slide-up"
                style={{
                  backgroundColor: B.white,
                  border: `1px solid ${B.borderCol}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                {/* Card Image */}
                <div
                  className="zoom-img-container"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                  }}
                >
                  <img
                    className="zoom-img"
                    src={f.img}
                    alt={f.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {/* Floating Icon overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(10,24,53,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyCenter: "center",
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    {f.icon}
                  </div>
                </div>

                {/* Card content */}
                <div
                  style={{
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "850",
                      color: C.textPrimary,
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: C.textSecond,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Four small additional benefits cards */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "800",
                color: B.textGrey,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              ADDITIONAL INSTITUTIONAL BENEFITS & STANDARDS
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
            className="benefits-grid"
          >
            {BENEFITS.map((b, idx) => (
              <div
                key={idx}
                className="reveal reveal-scale"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1px solid ${C.cardBorder}`,
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: C.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "800",
                      color: C.textPrimary,
                      marginBottom: "4px",
                    }}
                  >
                    {b.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      color: C.textSecond,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TOPOERS & HALL OF FAME SECTION ═════════════════════════════════════ */}
      <section
        id="results"
        style={{
          padding: "80px 0",
          backgroundColor: C.bg,
          borderBottom: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "800",
                color: C.gold,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              ACHIEVERS & TOPPERS
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "900",
                color: C.textPrimary,
                marginBottom: "16px",
              }}
            >
              Our State Board Toppers & SSC/HSC Scores
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: B.textGrey,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              A decade-long legacy of unshakeable ranks. Witness the spectacular
              board achievements from our classroom champions.
            </p>
          </div>

          {/* Three topper cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}
            className="curriculum-grid"
          >
            {TOPPERS.map((t, idx) => (
              <div
                key={idx}
                className="reveal reveal-slide-up hover-card"
                style={{
                  backgroundColor: C.cardBg,
                  border: `1px solid ${C.cardBorder}`,
                  borderRadius: "20px",
                  padding: "32px",
                  textAlign: "center",
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                {/* Avatar Initials block */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: t.bg,
                    color: t.c,
                    fontSize: "20px",
                    fontWeight: "900",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    border: `2px solid ${t.c}50`,
                  }}
                >
                  {t.avatar}
                </div>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "850",
                    color: C.textPrimary,
                    marginBottom: "4px",
                  }}
                >
                  {t.name}
                </h3>

                {/* Rank Badge */}
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: t.bg,
                    color: t.c,
                    border: `2px solid ${C.gold}50`,
                    borderRadius: "999px",
                    padding: "4px 14px",
                    fontSize: "10px",
                    fontWeight: "800",
                    letterSpacing: "0.04em",
                    margin: "8px 0 16px",
                  }}
                >
                  {t.rank}
                </div>

                <div
                  style={{
                    fontSize: "13.5px",
                    color: C.gold,
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  {t.score}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: C.textSecond,
                    fontWeight: "600",
                  }}
                >
                  {t.exam}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TEACHERS & TESTIMONIALS SECTION ══════════════════════════════════ */}
      <section
        style={{ padding: "80px 0", borderBottom: `1px solid ${B.borderCol}` }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "start",
            }}
            className="hero-grid"
          >
            {/* Left Column: Teacher Mentors */}
            <div className="reveal reveal-slide-left">
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: B.gold,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                LEARN FROM THE MASTERS
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  color: B.textNavy,
                  marginBottom: "20px",
                }}
              >
                Learn from Elite Board Experts & Top Mentors
              </h2>
              <p
                style={{
                  fontSize: "14.5px",
                  color: B.textGrey,
                  lineHeight: 1.6,
                  marginBottom: "32px",
                }}
              >
                Our faculty consists of academic specialists and state board
                experts, bringing a combined legacy of classroom coaching
                expertise.
              </p>

              {/* Teacher Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {TEACHERS.map((t, idx) => (
                  <div
                    key={idx}
                    className="hover-card"
                    style={{
                      backgroundColor: B.white,
                      border: `1px solid ${B.borderCol}`,
                      borderRadius: "16px",
                      padding: "20px",
                      display: "flex",
                      gap: "16px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: B.cream,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: B.navy,
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: "800",
                          color: B.textNavy,
                          marginBottom: "2px",
                        }}
                      >
                        {t.name}
                      </h4>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          color: B.gold,
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        {t.role} · {t.exp}
                      </div>
                      <p
                        style={{
                          fontSize: "12.5px",
                          color: B.textGrey,
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {t.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Parent Review Testimonial (Swiper Emulator) */}
            <div
              className="reveal reveal-slide-right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  backgroundColor: C.cardBg,
                  border: `1.5px solid ${C.cardBorder}`,
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 10px 40px rgba(10,24,53,0.03)",
                  position: "relative",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Active Slide */}
                <div style={{ transition: "all 0.5s ease-in-out" }}>
                  {/* 5 Yellow Stars */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      color: "#facc15",
                      fontSize: "18px",
                      marginBottom: "20px",
                    }}
                  >
                    {"★"
                      .repeat(TESTIMONIALS[activeTestimonial].stars)
                      .split("")
                      .map((s, i) => (
                        <span key={i}>{s}</span>
                      ))}
                  </div>

                  <blockquote
                    style={{
                      fontSize: "15.5px",
                      fontWeight: "600",
                      color: C.textPrimary,
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      margin: "0 0 28px 0",
                    }}
                  >
                    "{TESTIMONIALS[activeTestimonial].text}"
                  </blockquote>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: darkMode ? "#1e293b" : B.goldLt,
                        color: B.gold,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "900",
                      }}
                    >
                      {TESTIMONIALS[activeTestimonial].avatar}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "800",
                          color: C.textPrimary,
                        }}
                      >
                        {TESTIMONIALS[activeTestimonial].author}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: C.textSecond,
                          fontWeight: "600",
                        }}
                      >
                        {TESTIMONIALS[activeTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Swiper controls */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "32px",
                    borderTop: `1px solid ${C.cardBorder}`,
                    paddingTop: "20px",
                  }}
                >
                  {/* Pagination Dots */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        style={{
                          width: activeTestimonial === i ? "24px" : "8px",
                          height: "8px",
                          borderRadius: "4px",
                          backgroundColor:
                            activeTestimonial === i
                              ? B.goldBg
                              : "rgba(10,24,53,0.15)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          padding: 0,
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() =>
                        setActiveTestimonial(
                          (prev) =>
                            (prev - 1 + TESTIMONIALS.length) %
                            TESTIMONIALS.length,
                        )
                      }
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: `1.5px solid ${C.cardBorder}`,
                        backgroundColor: C.cardBg,
                        color: C.textPrimary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      className="carousel-nav-arrow"
                      aria-label="Previous review"
                    >
                      ←
                    </button>
                    <button
                      onClick={() =>
                        setActiveTestimonial(
                          (prev) => (prev + 1) % TESTIMONIALS.length,
                        )
                      }
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: `1.5px solid ${C.cardBorder}`,
                        backgroundColor: C.cardBg,
                        color: C.textPrimary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      className="carousel-nav-arrow"
                      aria-label="Next review"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ENQUIRY FORM SECTION ═══════════════════════════════════════════════ */}
      <section
        id="admission"
        style={{
          padding: "80px 0",
          backgroundColor: B.cream,
          borderBottom: `1px solid ${B.borderCol}`,
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "800",
                color: B.gold,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              JOIN THE FAMILY
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: B.textNavy,
                marginBottom: "12px",
              }}
            >
              Admissions Enquiry
            </h2>
            <p style={{ fontSize: "14px", color: B.textGrey, lineHeight: 1.5 }}>
              Fill in the details below, and our student advisors will call you
              within 24 hours to help book counselling.
            </p>
          </div>

          {sent ? (
            <div
              style={{
                backgroundColor: B.white,
                border: `2px solid #10b981`,
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#10b981",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#10b981",
                  marginBottom: "8px",
                }}
              >
                Enquiry Received!
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: B.textGrey,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Thank you for your interest! Our team will contact you soon on
                your registered mobile number.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submitForm}
              style={{
                backgroundColor: B.white,
                border: `1px solid ${B.borderCol}`,
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: B.textNavy,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "6px",
                  }}
                >
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: `1.5px solid ${B.borderCol}`,
                    borderRadius: "10px",
                    fontSize: "13.5px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: B.textNavy,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "6px",
                  }}
                >
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: `1.5px solid ${B.borderCol}`,
                    borderRadius: "10px",
                    fontSize: "13.5px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: B.textNavy,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "6px",
                  }}
                >
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="parent@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: `1.5px solid ${B.borderCol}`,
                    borderRadius: "10px",
                    fontSize: "13.5px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: B.textNavy,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "6px",
                  }}
                >
                  Target Class *
                </label>
                <select
                  required
                  value={form.cls}
                  onChange={(e) => setForm({ ...form, cls: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: `1.5px solid ${B.borderCol}`,
                    borderRadius: "10px",
                    fontSize: "13.5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      Class {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: B.goldBg,
                  color: B.navy,
                  border: "none",
                  borderRadius: "10px",
                  padding: "16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 6px 20px rgba(241,175,60,0.25)",
                }}
              >
                Submit Admission Enquiry →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══════ CTA CONTAINER (Dark blue card) ═════════════════════════════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              backgroundColor: B.navyEl,
              border: `2.5px solid ${B.goldBg}`,
              borderRadius: "24px",
              padding: "64px 32px",
              textAlign: "center",
              color: B.white,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(10,24,53,0.15)",
            }}
          >
            {/* Background elements */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(241,175,60,0.15) 0%, transparent 70%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-80px",
                right: "-80px",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(241,175,60,0.12) 0%, transparent 70%)",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: B.goldBg,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                LIMITED SEATS FOR ACADEMIC SESSION {getDynamicSession()}
              </div>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "900",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Secure Your Child's Brilliant Future Today
              </h2>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "560px",
                  margin: "0 auto 36px",
                  lineHeight: 1.6,
                }}
              >
                Join hands with Mankhurd's top coaching academy. Secure premium
                guidance under leading educators. Click below to begin
                enrollment!
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn-shine-gold"
                  onClick={() => go("admission")}
                  style={{
                    backgroundColor: B.goldBg,
                    color: B.navy,
                    border: "none",
                    borderRadius: "10px",
                    padding: "16px 32px",
                    fontSize: "13px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(241,175,60,0.3)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>Register / Apply Now</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition:
                        "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  onClick={() => go("admission")}
                  style={{
                    background: "none",
                    border: `1.5px solid ${B.goldBg}`,
                    color: B.goldBg,
                    borderRadius: "10px",
                    padding: "16px 32px",
                    fontSize: "13px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Prospectus {new Date().getFullYear()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER SECTION (Navy blue background) ══════════════════════════════ */}
      <footer
        style={{
          backgroundColor: B.navy,
          color: B.white,
          paddingTop: "80px",
          paddingBottom: "40px",
          borderTop: `4px solid ${B.goldBg}`,
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Academy moments gallery */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: B.goldBg,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                CLASSROOM LIFE MOMENTS
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "900" }}>
                Our Moments Gallery
              </h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
              className="gallery-grid"
            >
              {GALLERY.map((src, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    border: "3px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Academy Moment ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              marginBottom: "48px",
            }}
            className="footer-cols"
          >
            {/* Column 1: Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Sharda Academy Logo"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "900",
                      letterSpacing: "0.04em",
                    }}
                  >
                    SHARDA ACADEMY
                  </div>
                  <div
                    style={{
                      fontSize: "8px",
                      color: B.goldBg,
                      letterSpacing: "0.15em",
                    }}
                  >
                    Mankhurd · Est. 2009
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  maxWidth: "340px",
                }}
              >
                Mumbai's premier academic coaching academy for Classes 1st to
                12th. Guided by industry leading professionals.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "8px" }}>
                {SOCIAL_ICONS.map((svgIcon, idx) => (
                  <button
                    key={idx}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: B.white,
                    }}
                  >
                    {svgIcon}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: B.goldBg,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                Navigation
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {n.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: B.goldBg,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                Contact Details
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Sharda Academy, Jankalyan Society, 43, PMG Colony, Mankhurd,
                    Mumbai — 400043
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Phone: +91 93244 44269</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Email: info@sharda-academy.in</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Timings: Mon–Sat (09:00 AM – 08:00 PM)</span>
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "40px 0 24px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
            }}
            className="footer-bottom"
          >
            <div>
              © {new Date().getFullYear()} Sharda Academy, Mankhurd-43, Mumbai.
              All Rights Reserved.
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Responsive Styling Blocks ── */}
      <style>{`
        /* Desktop styles */
        @media (min-width: 769px) {
          .hero-grid { grid-template-columns: 1.25fr 0.75fr !important; }
          .curriculum-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .facilities-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .benefits-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .footer-cols { grid-template-columns: 1.5fr 1fr 1.5fr !important; }
          .footer-bottom { justify-content: space-between !important; }
        }
        
        /* Interactive scale lift effects */
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(10,24,53,0.06) !important;
          border-color: ${B.goldBg}70 !important;
        }

        /* Premium flowing shine & glowing lift transitions */
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

        /* Glowing colors & elegant light-up box shadow for Gold button */
        .btn-shine-gold:hover {
          background-color: #fbbf24 !important;
          color: #0a1835 !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 6px 20px rgba(241, 175, 60, 0.25) !important;
        }

        /* Vector slide right interactions on hover */
        .btn-shine-gold:hover svg {
          transform: translateX(4px);
        }

        .btn-nav-apply:hover svg {
          transform: translateX(3px);
        }

        .btn-syllabus-cta {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .btn-syllabus-cta:hover {
          background-color: #fef3c7 !important; /* GoldLt */
          border-color: #f1af3c !important; /* GoldBg */
        }

        .btn-syllabus-cta:hover svg {
          transform: translateX(4px);
        }

        /* Navbar Apply button - NO SCALE effect, simple clean ghost/outline transition */
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

        /* Outline transition with minimal shadow for Navy button */
        .btn-shine-navy {
          position: relative;
          overflow: hidden;
          z-index: 1;
          background-color: #0a1835;
          color: #ffffff;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .btn-shine-navy::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #ffffff;
          z-index: -1;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .btn-shine-navy:hover::before {
          width: 100%;
        }

        .btn-shine-navy:hover {
          color: #0a1835 !important;
          border-color: #0a1835 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 10px rgba(10, 24, 53, 0.06) !important;
        }

        .btn-shine-navy svg {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-shine-navy:hover svg {
          animation: buttonWiggle 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        @keyframes buttonWiggle {
          0%, 100% { transform: rotate(0deg); }
          8% { transform: rotate(-14deg); }
          16% { transform: rotate(12deg); }
          24% { transform: rotate(-10deg); }
          32% { transform: rotate(8deg); }
          40% { transform: rotate(-4deg); }
          48% { transform: rotate(0deg); }
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
      `}</style>
    </div>
  );
}
