"use client";
import Image from "next/image";

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
  "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214503/sharda-academy/uploads/hhzs4vupujecbhjk6kfw.jpg",
  "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214504/sharda-academy/uploads/dekhulrc2ycgw8ms1xuu.jpg",
  "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214505/sharda-academy/uploads/cdia7uktpm01uikmwpes.jpg",
  "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214506/sharda-academy/uploads/pifnmqcqj1gatp5zsovf.jpg",
];

const B = {
  navy: "#0a1835",
  goldBg: "#f1af3c",
  white: "#ffffff",
  cardBg: "#112030",
  border: "#1e2e40",
  mutedText: "#8fa0b0",
  bottomText: "#4a6070",
};

export default function Footer({ go, darkMode, activeId }) {
  return (
    <>
      {/* ══════ FOOTER SECTION ══════════════════════════════ */}
      <footer className="bg-[#0a1835] dark:bg-[#0d1b2a] text-white pt-[80px] pb-[40px] border-t-[4px] border-[#f1af3c] dark:border-[#e0a020]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Academy moments gallery */}
          <div className="mb-[64px]">
            <div className="text-center mb-7">
              <div className="text-[10px] font-extrabold text-[#f1af3c] dark:text-[#e0a020] tracking-[0.15em] uppercase mb-1.5">CLASSROOM LIFE MOMENTS</div>
              <h3 className="text-[22px] font-black text-white">Our Moments Gallery</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY.map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] border-[3px] border-white/10 dark:border-[#1e2e40] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <Image src={src} alt={`Academy Moment ${idx+1}`} width={400} height={300} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Info */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <Image src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214511/sharda-academy/uploads/afep5smex3ftpxjigii4.png" alt="Sharda Academy Logo" width={45} height={45} className="object-contain" onError={(e) => { e.target.style.display = "none"; }} />
                <div>
                  <div className="text-[14px] font-black tracking-[0.04em] text-white">SHARDA ACADEMY</div>
                  <div className="text-[9px] text-[#f1af3c] dark:text-[#e0a020] tracking-[0.15em] font-extrabold">Mankhurd · Est. 2021</div>
                </div>
              </div>
              <p className="text-[13px] text-white/60 dark:text-[#8fa0b0] leading-[1.7] mb-6 max-w-[340px]">
                Mumbai's premier academic coaching academy for Classes 1st to 12th. Guided by industry leading professionals.
              </p>
              
              {/* Social icons */}
              <div className="flex gap-2">
                {SOCIAL_ICONS.map((svgIcon, idx) => (
                  <button key={idx} className="w-[36px] h-[36px] rounded-lg border border-white/10 dark:border-[#1e2e40] bg-white/5 dark:bg-[#112030] cursor-pointer flex items-center justify-center text-white/60 dark:text-[#8fa0b0] transition-colors duration-300 hover:text-[#f1af3c] dark:hover:text-[#e0a020]">
                    {svgIcon}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-[14px] font-extrabold text-[#f1af3c] dark:text-[#e0a020] uppercase tracking-[0.05em] mb-5">Navigation</h4>
              <div className="flex flex-col gap-2.5">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`bg-transparent border-none text-[13px] text-left cursor-pointer p-0 transition-colors duration-300 w-fit hover:text-[#f1af3c] dark:hover:text-[#e0a020] ${n.id === activeId ? "text-[#f1af3c] dark:text-[#e0a020]" : "text-white/60 dark:text-[#8fa0b0]"}`}
                  >
                    {n.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-[14px] font-extrabold text-[#f1af3c] dark:text-[#e0a020] uppercase tracking-[0.05em] mb-5">Contact Details</h4>
              <div className="flex flex-col gap-3 text-[13px] text-white/60 dark:text-[#8fa0b0]">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>Sharda Academy, Jankalyan Society, PMG Colony, Mankhurd, Mumbai — 400043</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Phone: +91 93244 44269</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12 13 2,6" /></svg>
                  <span>Email: sharda.academyofficial@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <span>Timings: Mon–Sat (08:00 AM – 10:00 PM)</span>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-none border-t border-white/10 dark:border-[#1e2e40] my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-[11px] text-white/40 dark:text-[#4a6070]">
            <div className="w-full flex justify-center md:w-auto md:justify-start">© {new Date().getFullYear()} Sharda Academy, Mankhurd-43, Mumbai. All Rights Reserved.</div>
            <div className="w-full flex justify-center md:w-auto md:justify-start gap-4">
              <span
                className="cursor-pointer transition-colors duration-300 hover:text-[#f1af3c] dark:hover:text-[#e0a020]"
                onClick={() => window.location.href = "/privacy"}
              >
                Privacy Policy
              </span>
              <span
                className="cursor-pointer transition-colors duration-300 hover:text-[#f1af3c] dark:hover:text-[#e0a020]"
                onClick={() => window.location.href = "/terms"}
              >
                Terms & Conditions
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
