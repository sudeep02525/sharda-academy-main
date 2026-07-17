"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const B = {
  navy:      "#0a1835",
  gold:      "#d97706",
  goldBg:    "#f1af3c",
  goldLt:    "#fef3c7",
  white:     "#ffffff",
  textNavy:  "#0f1a30",
};

export default function PrivacyPage() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = (e) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
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
    router.push(`/#${id}`);
  };

  const C = {
    bg:         darkMode ? "#0a0e1a"               : "#ffffff",
    cardBg:     darkMode ? "#131C2E"               : "#ffffff",
    cardBorder: darkMode ? "#243145"               : "rgba(10,24,53,0.08)",
    textPrimary:darkMode ? "#F9FAFB"               : "#0f1a30",
    textSecond: darkMode ? "#CBD5E1"               : "#5e6675",
    gold:       "#f1af3c",
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: C.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: C.textPrimary }}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} activeId="" go={go} menu={menu} setMenu={setMenu} />

      {/* ══════ HERO SECTION ══════════════════════ */}
      <section style={{ background: darkMode ? "#0a0e1a" : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)", padding: "80px 0 54px 0", borderBottom: `1px solid ${C.cardBorder}`, textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: darkMode ? "rgba(241, 175, 60, 0.08)" : "#fef3c7", border: `1.5px solid ${darkMode ? "rgba(241, 175, 60, 0.4)" : "#f1af3c"}`, padding: "6px 14px", borderRadius: "999px", marginBottom: "20px" }}>
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>DATA SECURITY</span>
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "15px", color: C.textSecond, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Learn how Sharda Academy handles, collects, and secures student and parent information.
          </p>
        </div>
      </section>

      {/* ══════ PRIVACY CONTENT SECTION ══════════════════════ */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(10,24,53,0.02)" }}>
            
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "28px" }}>
              At Sharda Academy, we prioritize the confidentiality and security of our parents' and students' personal data. This Privacy Policy details the types of information we collect and how we utilize, manage, and protect it.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>1. Information We Collect</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              We collect critical contact information, including parent names, student names, phone numbers, email addresses, residential addresses, and student academic histories for registration and academic monitoring purposes.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>2. Usage of Personal Data</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              The collected information is solely utilized to:
              <br />• Conduct admission and registration processes.
              <br />• Provide biometric arrival and departure notifications to parents.
              <br />• Disseminate mock-test results, performance metrics, and emergency notifications.
              <br />• Facilitate administrative billing and coordinate direct academic interactions.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>3. Data Privacy and Non-Disclosure</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              We hold a strict non-sharing data privacy policy. Sharda Academy will never sell, trade, rent, or distribute parent or student contact databases to third-party commercial marketing entities under any circumstances.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>4. Biometric Attendance Integrity</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              Biometric check-in terminals utilize secure mathematical vector models representing finger points. The system does not record or store raw fingerprint images. This guarantees that student identities are protected against database integrity vulnerabilities.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>5. Contact for Questions</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "0" }}>
              If you have any questions or require clarifications regarding data security practices, please contact us directly at our central PMG Colony Center or drop an email to: <strong>info@sharda-academy.in</strong>.
            </p>

          </div>
        </div>
      </section>

      <Footer go={go} darkMode={darkMode} activeId="" />
    </div>
  );
}
