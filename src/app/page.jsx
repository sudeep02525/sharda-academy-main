"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    title: "Experienced & Dedicated Faculty",
    desc: "Senior Board experts bringing a combined legacy of excellence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Personal Attention to Every Student",
    desc: "Focused attention to match each student's learning pace.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 10 0A5 5 0 1 0 12 2z" />
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: "Small Batch Size Better Learning",
    desc: "Strictly limited batches for active classroom interaction.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    )
  },
  {
    title: "Regular Tests & Assessments",
    desc: "Weekly mock tests to track performance under board conditions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    )
  },
  {
    title: "Doubt Solving Sessions",
    desc: "One-on-one session slots to resolve all academic questions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  },
  {
    title: "Complete Study Material",
    desc: "Curated workbooks, formula sheets, and past question banks.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    title: "Board Exam Special Preparation",
    desc: "Targeted strategies to excel in Maharashtra SSC & HSC Exams.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    title: "Parent Progress Updates",
    desc: "Real-time updates on attendance and monthly academic reports.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Individual Progress Monitoring",
    desc: "Personal guidance to mentor and boost each student's performance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "Concept Based Learning",
    desc: "Fostering analytical logic over traditional rote-learning methods.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    )
  },
  {
    title: "Disciplined & Positive Environment",
    desc: "An inspiring atmosphere designed for high academic focus.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Affordable Fees Structure",
    desc: "Premium conceptual education priced fairly and transparently.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1af3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
];

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
  const [siteContent, setSiteContent] = useState({
    hero: {
      title: "Maharashtra's Most Trusted Academy for Classes 1st to 12th",
      highlight: "Most Trusted Academy",
      description:
        "Premium conceptual education with experienced faculty, smart infrastructure, and a proven track record of State Board toppers. Building confident minds since 2019.",
      image: "",
    },
    stats: [
      { value: "5+", label: "Years Teaching" },
      { value: "98.4%", label: "Success Rate" },
      { value: "1,000+", label: "Students Mentored" },
    ],
    wings: [
      {
        tag: "Primary Wing",
        bg: "#fef3c7",
        tc: "#d97706",
        title: "Classes 1st to 5th",
        sub: "Foundation & Primary Education",
        points: [
          "Strong conceptual foundation building",
          "Activity-based learning approach",
          "English, Maths & EVS focus",
          "Regular parent progress reports",
        ],
      },
      {
        tag: "Middle Wing",
        bg: "#dbeafe",
        tc: "#1d4ed8",
        title: "Classes 6th to 10th",
        sub: "Secondary & SSC Preparation",
        points: [
          "SSC Board exam preparation",
          "Subject-wise expert faculty",
          "Weekly mock tests & assessments",
          "One-on-one doubt solving sessions",
        ],
      },
      {
        tag: "Senior Wing",
        bg: "#d1fae5",
        tc: "#065f46",
        title: "Classes 11th & 12th",
        sub: "HSC Science & Commerce",
        points: [
          "HSC Board Science & Commerce",
          "JEE / NEET / CET guidance",
          "Small batch for focused learning",
          "Complete study material provided",
        ],
      },
    ],
    facilities: [
      {
        title: "Interactive Smart Panels",
        desc: "Our classrooms are equipped with high-definition digital smart boards enabling highly interactive and visual concepts representation.",
        img: "/facility_smart_panel.png",
      },
      {
        title: "Full Air-Conditioned Comfort",
        desc: "Acoustically insulated and climate-controlled classroom environments ensuring absolute focus and temperature comfort for your child.",
        img: "/facility_ac_comfort.png",
      },
      {
        title: "Biometric Attendance & Safety",
        desc: "Daily biometric check-in system that instantly logs students' attendance, sending real-time automated updates to parents.",
        img: "/facility_biometric.png",
      },
    ],
    benefits: [
      { title: "Experienced & Dedicated Faculty", desc: "Senior Board experts bringing a combined legacy of excellence." },
      { title: "Personal Attention to Every Student", desc: "Focused attention to match each student's learning pace." },
      { title: "Small Batch Size Better Learning", desc: "Strictly limited batches for active classroom interaction." },
      { title: "Regular Tests & Assessments", desc: "Weekly mock tests to track performance under board conditions." },
      { title: "Doubt Solving Sessions", desc: "One-on-one session slots to resolve all academic questions." },
      { title: "Complete Study Material", desc: "Curated workbooks, formula sheets, and past question banks." },
      { title: "Board Exam Special Preparation", desc: "Targeted strategies to excel in Maharashtra SSC & HSC Exams." },
      { title: "Parent Progress Updates", desc: "Real-time updates on attendance and monthly academic reports." },
      { title: "Individual Progress Monitoring", desc: "Personal guidance to mentor and boost each student's performance." },
      { title: "Concept Based Learning", desc: "Fostering analytical logic over traditional rote-learning methods." },
      { title: "Disciplined & Positive Environment", desc: "An inspiring atmosphere designed for high academic focus." },
      { title: "Affordable Fees Structure", desc: "Premium conceptual education priced fairly and transparently." },
    ],
    toppers: [
      { name: "Ananya Sharma", rank: "SSC State Rank 1", exam: "SSC Board 2024", score: "100%", avatar: "A", bg: "#fef3c7", c: "#d97706", image: "" },
      { name: "Rohan Patil", rank: "SSC District Topper", exam: "SSC Board 2024", score: "99.8%", avatar: "R", bg: "#dbeafe", c: "#1d4ed8", image: "" },
      { name: "Priya Deshmukh", rank: "SSC School Topper", exam: "SSC Board 2024", score: "99.4%", avatar: "P", bg: "#d1fae5", c: "#065f46", image: "" },
      { name: "Vikram Joshi", rank: "HSC State Rank 2", exam: "HSC Board 2024", score: "98.5%", avatar: "V", bg: "#fce7f3", c: "#9d174d", image: "" },
      { name: "Sneha Kulkarni", rank: "HSC District Topper", exam: "HSC Board 2024", score: "97.8%", avatar: "S", bg: "#ede9fe", c: "#5b21b6", image: "" },
      { name: "Aarav Mehta", rank: "HSC School Topper", exam: "HSC Board 2024", score: "97.2%", avatar: "A", bg: "#fef3c7", c: "#d97706", image: "" },
    ],
    testimonials: [
      {
        text: "Sharda Academy completely transformed my daughter's approach to studies. The faculty is exceptional and the smart classroom setup made learning so engaging. She scored 98% in SSC!",
        author: "Mrs. Sunita Pawar",
        role: "Parent of SSC Topper",
        stars: 5,
        avatar: "S",
        image: "",
      },
      {
        text: "The personal attention given to each student here is unmatched. My son's confidence grew tremendously after joining. The doubt-solving sessions were incredibly helpful.",
        author: "Mr. Rajesh Khatri",
        role: "Parent of Class 10 Student",
        stars: 5,
        avatar: "R",
        image: "",
      },
      {
        text: "From the very first day, I could see the difference in teaching quality. Sharda Academy has the best faculty for Science and Mathematics. Highly recommend for HSC students.",
        author: "Mrs. Anita Desai",
        role: "Parent of HSC Student",
        stars: 5,
        avatar: "A",
        image: "",
      },
    ],
  });
  const [loadingContent, setLoadingContent] = useState(false);

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http") || url.startsWith("data:")) return url;
    if (url.startsWith("/uploads")) return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${url}`;
    return url; // Static frontend images like /hero_student.png
  };

  useEffect(() => {
    if (!siteContent?.testimonials) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % siteContent?.testimonials?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [siteContent]);

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
    return () => observer.disconnect();
  }, [siteContent]);

  

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

    const whatsappNum = "919324444269"; 
    const defaultMsg = `Hello Sharda Academy, I have submitted the admissions enquiry form on the website. Here are my details:

* Student's Name: ${form.name}
* Mobile Number: ${form.phone}
* Email Address: ${form.email || "Not Provided"}
* Target Class: Class ${form.cls}

Please contact us to guide us further on the admission and counselling process. Thank you!`;

    const encodedMsg = encodeURIComponent(defaultMsg);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
    setForm({ name: "", cls: "10", phone: "", email: "" });
    setTimeout(() => setSent(false), 5000);
  };



  return (
    <div
      className="page-wrapper bg-[#ffffff] dark:bg-[#0a0e1a] min-h-screen font-['Inter',sans-serif] text-[#0a1835] dark:text-[#F9FAFB]"
    >
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} activeId={activeId} go={go} menu={menu} setMenu={setMenu} />

      {loadingContent ? (
        <div className="flex items-center justify-center min-h-screen text-slate-400 font-bold tracking-widest uppercase text-sm animate-pulse">
          Loading Sharda Academy...
        </div>
      ) : (
      <>
      {/* ══════ HERO SECTION ══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative overflow-hidden pt-16 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 min-h-[calc(100vh-102px)] flex items-center border-b border-[#0a1835]/[0.08] dark:border-[#243145]"
      >

        <div className="shared-container">
          {/* Dual Desktop and Mobile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal">
            {/* Left Content Column */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="afsu d1 inline-flex items-center gap-2 bg-[#fef3c7] dark:bg-[rgba(241,175,60,0.08)] border-[1.5px] border-[#f1af3c] dark:border-[rgba(241,175,60,0.4)] dark:shadow-[0_0_16px_rgba(241,175,60,0.16)] py-1.5 px-3.5 rounded-full mb-5">
                  <span className="pulse-dot" />
                  <span className="text-[10px] font-extrabold text-[#d97706] dark:text-[#f1af3c] tracking-[0.08em] uppercase">
                    ADMISSIONS OPEN FOR SESSION {getDynamicSession()}
                  </span>
                </div>

                <h1 className="hidden md:block afsu d2 text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#ffffff] leading-[1.15] tracking-[-0.02em] mb-4">
                  {siteContent?.hero?.title?.split(siteContent?.hero?.highlight)[0]} <br />
                  {siteContent?.hero?.highlight && (
                    <span className="text-[#d97706]">{siteContent?.hero?.highlight}</span>
                  )}
                  <br /> {siteContent?.hero?.title?.split(siteContent?.hero?.highlight)[1]}
                </h1>

                <h1 className="md:hidden afsu d2 text-[28px] font-black text-[#0f1a30] dark:text-[#ffffff] leading-[1.2] tracking-[-0.01em] mb-4">
                  {siteContent?.hero?.title?.split(siteContent?.hero?.highlight)[0]} <br />
                  {siteContent?.hero?.highlight && (
                    <span className="text-[#d97706]">{siteContent?.hero?.highlight}</span>
                  )}
                  <br /> {siteContent?.hero?.title?.split(siteContent?.hero?.highlight)[1]}
                </h1>

                <p className="afsu d3 text-[14.5px] text-[#5e6675] dark:text-[#94a3b8] leading-[1.6] mb-6 max-w-[560px]">
                  {siteContent?.hero?.description}
                </p>

                {/* Action Buttons */}
                <div className="afsu d4 flex gap-4 flex-wrap mb-6">
                  <button
                    className="btn-shine-gold bg-[#f1af3c] text-[#0a1835] border-none rounded-lg py-3 px-6 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer shadow-[0_6px_20px_rgba(241,175,60,0.35)] inline-flex items-center gap-2"
                    onClick={() => go("admission")}
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
                      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <button
                    className="btn-shine-navy bg-transparent text-[#0a1835] dark:text-white border-[1.5px] border-[#0a1835] dark:border-white/25 rounded-lg py-3 px-6 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer inline-flex items-center gap-2"
                      onClick={() => go("contact")}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Book Free Counselling</span>
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              {true && (() => {
                const activeStats = (siteContent?.stats && siteContent?.stats?.length > 0) 
                  ? siteContent.stats 
                  : [
                      {value: '5+', label: 'Years Teaching'}, 
                      {value: '98.4%', label: 'Success Rate'}, 
                      {value: '1,000+', label: 'Students Mentored'}
                    ];
                return (
                  <div
                    className="hidden md:flex afsu d5 bg-white dark:bg-[#131C2E] border-[1.5px] border-[#f1af3c]/50 dark:border-white/8 rounded-2xl p-6 justify-between max-w-[520px] shadow-[0_10px_32px_rgba(10,24,53,0.06)] mt-6"
                  >
                    {activeStats?.map((stat, i) => (
                      <div
                        key={i}
                        className={`text-center flex-1 ${i < activeStats.length - 1 ? 'border-r-[1.5px] border-[#f1af3c]/25 dark:border-white/8' : ''}`}
                      >
                        <div
                          className={`text-[24px] font-black ${i === 1 ? 'text-[#f1af3c]' : 'text-[#0f1a30] dark:text-[#F9FAFB]'}`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-bold text-[#5e6675] dark:text-[#CBD5E1] uppercase mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Right Asset Column */}
            <div className="afsu d3 flex flex-col justify-center h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.08)] border-[6px] border-white dark:border-[#131C2E] aspect-[16/11]">
                <img
                  className="w-full h-full object-cover block transition-transform duration-700 hover:scale-105"
                  src={getImageUrl(siteContent?.hero?.image || "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214503/sharda-academy/uploads/hhzs4vupujecbhjk6kfw.jpg")}
                  alt="Sharda Academy Premium Classroom"
                />

                {/* Intelligent Classrooms Badge */}
                <div className="absolute top-5 right-5 bg-emerald-500/90 backdrop-blur-sm py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
                  <span className="text-[9px] font-extrabold text-white uppercase tracking-[0.05em]">INTELLIGENT CLASSROOMS</span>
                </div>

                {/* State-of-the-Art Badge */}
                <div className="absolute bottom-5 left-5 bg-[#0a1835]/85 backdrop-blur-sm py-2.5 px-4 rounded-xl border border-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.15)] z-10">
                  <div className="text-[11px] font-extrabold text-[#f1af3c] uppercase">State-of-the-Art Learning Spaces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CURRICULUM SECTION ══════════════════════════════════════════════════ */}
      <section
        id="courses"
        className="py-10 md:py-16 lg:py-24 bg-[#ffffff] dark:border-[#243145]"
      >
        <div className="shared-container">
          <div className="text-center mb-8 lg:mb-12">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
              CURRICULUM / COMPREHENSIVE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">
              Exceptional Classes 1st to 12th Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch reveal">
            {siteContent?.wings?.map((w, i) => (
              <div
                key={i}
                className="hover-card reveal reveal-slide-up bg-white dark:bg-[#131C2E] border border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 lg:p-8 flex flex-col h-full transition-all duration-300"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Wing Category Chip */}
                <div
                  className="inline-flex self-start rounded-full py-1.5 px-3 text-[9px] font-extrabold tracking-[0.06em] mb-5 uppercase"
                  style={{
                    backgroundColor: w.bg,
                    color: w.tc,
                    border: `1px solid ${w.tc}30`,
                  }}
                >
                  {w.tag}
                </div>

                <h3 className="text-[20px] font-extrabold text-[#0f1a30] dark:text-[#F9FAFB] mb-1">
                  {w.title}
                </h3>
                <div className="text-[12px] font-bold text-[#5e6675] dark:text-[#CBD5E1] mb-5">
                  {w.sub}
                </div>

                {/* Point Checkmarks */}
                <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2 flex-grow">
                  {w.points?.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-[13.5px] text-[#0f1a30] dark:text-[#F9FAFB] flex items-center gap-2 font-medium"
                    >
                      <span className="text-[#f1af3c] font-black">✓</span> {pt}
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <button
                  className="btn-syllabus-cta mt-auto w-full border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] bg-[#ffffff] dark:bg-[#0a0e1a] rounded-lg py-3 px-6 text-[12px] font-extrabold uppercase tracking-[0.05em] text-[#0f1a30] dark:text-[#F9FAFB] cursor-pointer inline-flex items-center justify-center gap-1.5"
                  onClick={() => go("admission")}
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
                    className="text-[#f1af3c] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
        className="py-10 md:py-16 lg:py-24 border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]"
      >
        <div className="shared-container">
          <div className="text-center mb-8 lg:mb-12">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
              OUR SMART INFRASTRUCTURE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">
              Premium Standards & Smart Infrastructure
            </h2>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-12 items-stretch reveal">
            {siteContent?.facilities?.map((f, i) => (
              <div
                key={i}
                className="hover-card reveal reveal-slide-up bg-white dark:bg-[#131C2E] border border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Card Image */}
                <div className="zoom-img-container relative overflow-hidden aspect-[16/10]">
                  <img
                    className="zoom-img w-full h-full object-cover block"
                    src={getImageUrl(f.img)}
                    alt={f.title}
                  />
                  {/* Floating Icon overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#0a1835]/90 flex items-center justify-center text-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                    {FACILITIES.find(of => of.title === f.title)?.icon}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-[18px] font-extrabold text-[#0f1a30] dark:text-[#F9FAFB] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.6] m-0">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 mt-16">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.12em] uppercase">
              WHY CHOOSE SHARDA ACADEMY?
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12 items-stretch reveal">
            {siteContent?.benefits?.map((b, i) => (
              <div
                key={i}
                className="reveal reveal-scale bg-white dark:bg-[#131C2E] border border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 flex gap-4 items-start h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a0e1a] flex items-center justify-center text-[20px] shrink-0">
                  {BENEFITS.find(ob => ob.title === b.title)?.icon}
                </div>
                <div>
                  <h4 className="text-[14px] font-extrabold text-[#0f1a30] dark:text-[#F9FAFB] mb-1">
                    {b.title}
                  </h4>
                  <p className="text-[12px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.5] m-0">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TOPOERS SECTION ═════════════════════════════════════ */}
      <section
        id="results"
        className="py-10 md:py-16 lg:py-24 bg-white dark:bg-[#0a0e1a] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]"
      >
        <div className="shared-container">
          <div className="text-center mb-8 lg:mb-12">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
              ACHIEVERS & TOPPERS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">
              Our State Board Toppers (SSC)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-12 items-stretch reveal">
            {siteContent?.toppers?.filter(t => t.rank?.toLowerCase().includes("ssc") || t.exam?.toLowerCase().includes("ssc")).map((t, i) => (
              <div
                key={i}
                className="hover-lift bg-white dark:bg-[#131C2E] rounded-2xl p-6 lg:p-8 border border-[rgba(10,24,53,0.08)] dark:border-[#243145] flex flex-col items-center text-center relative overflow-hidden h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: t.c || "#f1af3c" }}
                />
                
                {t.image ? (
                  <img src={getImageUrl(t.image)} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 shrink-0 mx-auto" style={{ boxShadow: darkMode ? `0 0 15px ${t.bg || "#fef3c7"}30` : `0 0 20px ${t.bg || "#fef3c7"}` }} />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-[28px] font-black mb-4 shrink-0 mx-auto"
                    style={{
                      backgroundColor: t.bg || "#fef3c7",
                      color: t.c || "#d97706",
                      boxShadow: darkMode ? `0 0 15px ${t.bg || "#fef3c7"}30` : `0 0 20px ${t.bg || "#fef3c7"}`,
                    }}
                  >
                    {t.avatar}
                  </div>
                )}

                <h3 className="text-[20px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-1">
                  {t.name}
                </h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#CBD5E1] font-semibold mb-4">
                  {t.rank}
                </p>

                <div className="bg-[#f8fafc] dark:bg-white/5 py-3 px-4 rounded-xl w-full border border-dashed border-[rgba(10,24,53,0.08)] dark:border-[#243145] mt-auto">
                  <p className="text-[11px] text-[#5e6675] dark:text-[#CBD5E1] uppercase tracking-[0.05em] font-bold mb-1">
                    {t.exam}
                  </p>
                  <p className="text-[16px] font-black" style={{ color: t.c || "#d97706" }}>
                    {t.score}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 lg:mb-12 mt-20">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
              ACHIEVERS & TOPPERS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">
              Our State Board Toppers (HSC)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-12 items-stretch reveal">
            {siteContent?.toppers?.filter(t => t.rank?.toLowerCase().includes("hsc") || t.exam?.toLowerCase().includes("hsc")).map((t, i) => (
              <div
                key={i}
                className="hover-lift bg-white dark:bg-[#131C2E] rounded-2xl p-6 lg:p-8 border border-[rgba(10,24,53,0.08)] dark:border-[#243145] flex flex-col items-center text-center relative overflow-hidden h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: t.c || "#f1af3c" }}
                />
                
                {t.image ? (
                  <img src={getImageUrl(t.image)} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 shrink-0 mx-auto" style={{ boxShadow: darkMode ? `0 0 15px ${t.bg || "#fef3c7"}30` : `0 0 20px ${t.bg || "#fef3c7"}` }} />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-[28px] font-black mb-4 shrink-0 mx-auto"
                    style={{
                      backgroundColor: t.bg || "#fef3c7",
                      color: t.c || "#d97706",
                      boxShadow: darkMode ? `0 0 15px ${t.bg || "#fef3c7"}30` : `0 0 20px ${t.bg || "#fef3c7"}`,
                    }}
                  >
                    {t.avatar}
                  </div>
                )}

                <h3 className="text-[20px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-1">
                  {t.name}
                </h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#CBD5E1] font-semibold mb-4">
                  {t.rank}
                </p>

                <div className="bg-[#f8fafc] dark:bg-white/5 py-3 px-4 rounded-xl w-full border border-dashed border-[rgba(10,24,53,0.08)] dark:border-[#243145] mt-auto">
                  <p className="text-[11px] text-[#5e6675] dark:text-[#CBD5E1] uppercase tracking-[0.05em] font-bold mb-1">
                    {t.exam}
                  </p>
                  <p className="text-[16px] font-black" style={{ color: t.c || "#d97706" }}>
                    {t.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* ══════ TEACHERS & TESTIMONIALS SECTION ══════════════════════════════════ */}
    <section className="py-10 md:py-16 lg:py-24 border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
      <div className="shared-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Teacher Mentors */}
          <div className="reveal reveal-slide-left flex flex-col justify-between h-full">
            <div>
              <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
                LEARN FROM THE MASTERS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">
                Learn from Elite Board Experts & Top Mentors
              </h2>
              <p className="text-[14.5px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.6] mb-6">
                Our faculty consists of academic specialists and state board
                experts, bringing a combined legacy of classroom coaching
                expertise.
              </p>
            </div>

            {/* Teacher Cards */}
            <div className="flex flex-col gap-4 flex-grow justify-end">
              {TEACHERS.map((t, idx) => (
                <div
                  key={idx}
                  className="hover-card bg-white dark:bg-[#131C2E] border border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 flex gap-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#fefaf5] dark:bg-[#1e293b] flex items-center justify-center shrink-0 text-[#0f1a30] dark:text-[#F9FAFB]">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-1">
                      {t.name}
                    </h4>
                    <p className="text-[12px] font-extrabold text-[#f1af3c] uppercase mb-1">
                      {t.role} • {t.exp}
                    </p>
                    <p className="text-[13.5px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.5] m-0">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Testimonials */}
          <div className="reveal reveal-slide-right flex flex-col h-full justify-between">
            {siteContent?.testimonials && siteContent?.testimonials?.length > 0 && (
            <div
              key={activeTestimonial}
              className="animate-fade-in bg-white dark:bg-[#131C2E] rounded-3xl p-6 lg:p-8 border border-[rgba(10,24,53,0.08)] dark:border-[#243145] shadow-[0_10px_40px_rgba(10,24,53,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col justify-between h-full flex-grow"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(siteContent?.testimonials?.[activeTestimonial].stars || 5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f1af3c" stroke="#f1af3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-[18px] text-[#0f1a30] dark:text-[#F9FAFB] leading-[1.6] font-medium italic mb-6">
                  "{siteContent?.testimonials?.[activeTestimonial].text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                {siteContent?.testimonials?.[activeTestimonial].image ? (
                  <img src={getImageUrl(siteContent?.testimonials?.[activeTestimonial].image)} alt={siteContent?.testimonials?.[activeTestimonial].author} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#f1f5f9] dark:bg-[#1A263D] flex items-center justify-center text-[#f1af3c] font-extrabold text-[14px]">
                    {siteContent?.testimonials?.[activeTestimonial].avatar}
                  </div>
                )}
                <div>
                  <h4 className="text-[15px] font-extrabold text-[#0f1a30] dark:text-[#F9FAFB]">
                    {siteContent?.testimonials?.[activeTestimonial].author}
                  </h4>
                  <p className="text-[12px] text-[#5e6675] dark:text-[#CBD5E1] font-semibold">
                    {siteContent?.testimonials?.[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
            )}
          
            {siteContent?.testimonials && siteContent?.testimonials?.length > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {siteContent?.testimonials?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${i === activeTestimonial ? 'w-6 bg-[#f1af3c]' : 'w-2 bg-[#cbd5e1] dark:bg-[#334155]'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </section>

      {/* ══════ ENQUIRY FORM SECTION ═══════════════════════════════════════════════ */}
      <section
        id="admission"
        className="py-10 md:py-16 lg:py-24 bg-[#f8fafc] dark:bg-[#0B1120] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]"
      >
        <div className="shared-container">
          <div className="max-w-[768px] mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <div className="text-[10px] font-extrabold text-[#d97706] dark:text-[#f1af3c] tracking-[0.15em] uppercase mb-2">
                JOIN THE FAMILY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-3">
                Admissions Enquiry
              </h2>
              <p className="text-[14px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.5]">
                Fill in the details below, and our student advisors will call you
                within 24 hours to help book counselling.
              </p>
            </div>

            {sent ? (
              <div className="bg-white dark:bg-[#131C2E] border-2 border-[#10b981] rounded-2xl p-6 lg:p-10 text-center">
                <div className="text-[#10b981] flex justify-center mb-4">
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
                <h3 className="text-[20px] font-extrabold text-[#10b981] mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-[13.5px] text-[#5e6675] dark:text-[#CBD5E1] leading-[1.6] m-0">
                  Thank you for your interest! Our team will contact you soon on
                  your registered mobile number.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submitForm}
                className="form-card bg-white dark:bg-[#131C2E] border border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-[#0f1a30] dark:text-[#F9FAFB] uppercase tracking-[0.05em] mb-1.5">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-lg text-[13.5px] bg-white dark:bg-[#1e293b] text-[#0f1a30] dark:text-[#F9FAFB] outline-none focus:border-[#f1af3c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0f1a30] dark:text-[#F9FAFB] uppercase tracking-[0.05em] mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-lg text-[13.5px] bg-white dark:bg-[#1e293b] text-[#0f1a30] dark:text-[#F9FAFB] outline-none focus:border-[#f1af3c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0f1a30] dark:text-[#F9FAFB] uppercase tracking-[0.05em] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="parent@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-lg text-[13.5px] bg-white dark:bg-[#1e293b] text-[#0f1a30] dark:text-[#F9FAFB] outline-none focus:border-[#f1af3c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0f1a30] dark:text-[#F9FAFB] uppercase tracking-[0.05em] mb-1.5">
                      Target Class *
                    </label>
                    <select
                      required
                      value={form.cls}
                      onChange={(e) => setForm({ ...form, cls: e.target.value })}
                      className="w-full px-4 py-3 border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-lg text-[13.5px] bg-white dark:bg-[#1e293b] text-[#0f1a30] dark:text-[#F9FAFB] outline-none focus:border-[#f1af3c] transition-colors"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          Class {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="bg-[#f1af3c] text-[#0a1835] border-none rounded-lg py-3.5 px-8 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer shadow-[0_6px_20px_rgba(241,175,60,0.25)] transition-transform hover:-translate-y-0.5 w-full md:w-auto"
                  >
                    Submit Admission Enquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════ CTA CONTAINER (Dark blue card) ═════════════════════════════════════ */}
      <section className="cta-section py-10 md:py-16 lg:py-24">
        <div className="shared-container">
          <div className="cta-card bg-[#0a1835] dark:bg-[#0f1f35] border-[2.5px] border-[#f1af3c] dark:border-[#e0a020] rounded-3xl text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(10,24,53,0.15)] p-8 md:p-12 lg:p-16">
            {/* Background elements */}
            <div className="absolute -top-[50px] -left-[50px] w-[150px] h-[150px] rounded-full" style={{ background: darkMode ? "radial-gradient(circle, rgba(15,31,53,0.4) 0%, transparent 70%)" : "radial-gradient(circle, rgba(12,30,63,0.4) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-[80px] -right-[80px] w-[250px] h-[250px] rounded-full" style={{ background: darkMode ? "radial-gradient(circle, rgba(15,31,53,0.3) 0%, transparent 70%)" : "radial-gradient(circle, rgba(12,30,63,0.3) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="text-[10px] font-extrabold text-[#f1af3c] dark:text-[#e0a020] tracking-[0.18em] uppercase mb-3">
                LIMITED SEATS FOR ACADEMIC SESSION {getDynamicSession()}
              </div>
              <h2 className="text-[32px] md:text-[40px] font-black mb-4 tracking-[-0.01em]">
                Secure Your Child's Brilliant Future Today
              </h2>
              <p className="text-[14.5px] text-white/70 dark:text-[#8fa0b0] max-w-[560px] mx-auto mb-8 leading-[1.6]">
                Join hands with Mankhurd's top coaching academy. Secure premium
                guidance under leading educators. Click below to begin
                enrollment!
              </p>

              <div className="cta-btn-container flex flex-wrap justify-center gap-4">
                <button
                  className="btn-shine-gold bg-[#f1af3c] dark:bg-[#e0a020] text-[#0a1835] dark:text-[#0d1b2a] border-none rounded-lg py-3.5 px-8 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer shadow-[0_6px_20px_rgba(241,175,60,0.3)] inline-flex items-center justify-center gap-2"
                  onClick={() => go("admission")}
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
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  onClick={() => go("admission")}
                  className="bg-transparent border-[1.5px] border-[#f1af3c] dark:border-[#e0a020] text-[#f1af3c] dark:text-[#e0a020] rounded-lg py-3.5 px-8 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-[#f1af3c]/10 dark:hover:bg-[#e0a020]/10 transition-colors"
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

      <Footer go={go} darkMode={darkMode} activeId="home" />

      {/* ── Responsive Styling Blocks ── */}
      
      
      <style>{`
        /* Interactive scale lift effects */
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(10,24,53,0.06) !important;
          border-color: #f1af3c70 !important;
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
          color: #0a1835 !important;
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
          font-weight: #f1af3c700;
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
          background-color: #d97#f1af3c706;
          position: relative;
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: #d97#f1af3c706;
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

        /* High contrast placeholder styling for both light and dark modes */
        input::placeholder,
        textarea::placeholder {
          color: rgba(15, 26, 48, 0.45) !important;
        }

      `}</style>

      </>
      )}
    </div>
  );
}











