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

export default function TermsPage() {
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
            <span style={{ fontSize: "10px", fontWeight: "800", color: darkMode ? "#f1af3c" : "#d97706", letterSpacing: "0.08em", textTransform: "uppercase" }}>LEGAL AGREEMENT</span>
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: C.textPrimary, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: "15px", color: C.textSecond, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Please read these terms carefully before enrolling your child or using our digital learning portals.
          </p>
        </div>
      </section>

      {/* ══════ TERMS CONTENT SECTION ══════════════════════ */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ backgroundColor: C.cardBg, border: `1.5px solid ${C.cardBorder}`, borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(10,24,53,0.02)" }}>
            
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "28px" }}>
              Welcome to Sharda Academy ("Academy," "we," "our," or "us"). By enrolling your child or using our services, facilities, or website, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>1. Academic Conduct & Discipline</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              Students are expected to maintain strict discipline inside the classrooms and premises. The Academy reserves the right to suspend or expel students who engage in misconduct, bullying, or regular absence without prior notification.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>2. Small Batch Sizing policy (Max 25 Students)</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              To ensure top-tier academic coaching and personal attention, we maintain a strict limit of 25 students per batch. Seats are allocated strictly on a first-come, first-served basis. No additional registrations will be accepted once the batch size reaches its maximum capacity.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>3. Fee Payments & Refunds</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              All fees must be paid in full or in agreed installments before the specified due dates. Fees once paid are non-refundable and non-transferable under any circumstances. No partial refunds will be issued for voluntary withdrawals or expulsions due to disciplinary actions.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>4. Biometric Attendance & SMS Alerts</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "20px" }}>
              Sharda Academy employs biometric authentication systems for student safety and transparent reporting. An automated SMS notification is sent to parents upon student arrival and departure. We are not liable for delayed notifications resulting from telecommunication network outages.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: "900", color: C.textPrimary, marginTop: "32px", marginBottom: "12px" }}>5. Revisions of Terms</h2>
            <p style={{ fontSize: "14px", color: C.textSecond, lineHeight: 1.7, marginBottom: "0" }}>
              We reserve the right to revise or amend these Terms and Conditions at any time. Active parents and students will be informed of critical changes through our announcement channels. Continued utilization of our services constitutes complete acceptance of the updated terms.
            </p>

          </div>
        </div>
      </section>

      <Footer go={go} darkMode={darkMode} activeId="" />
    </div>
  );
}
