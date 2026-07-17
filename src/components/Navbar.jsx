"use client";
import { useState } from "react";
import Image from "next/image";

const NAV = [
  { id: "home", l: "Home" },
  { id: "about", l: "About Us" },
  { id: "gallery", l: "Gallery" },
  { id: "courses", l: "Courses" },
  { id: "contact", l: "Contact Us" },
];

export default function Navbar({ darkMode, toggleTheme, activeId, go, menu, setMenu }) {
  return (
    <>
      {/* ══════ TOP HEADER BAR ════════════════════════════════ */}
      <div className="bg-[#060f22] dark:bg-[#060a14] text-[#f1af3c] py-2 px-4 text-[11px] font-bold text-center border-b border-black/8 dark:border-white/8 tracking-[0.08em] flex justify-center items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          CALL ACADEMY: +91 93244 44269
        </span>
        <span className="hidden md:block">|</span>
        <span className="hidden md:inline-flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          LOCATION: PMG Colony, Mankhurd, Mumbai — 400043
        </span>
      </div>

      {/* ══════ MAIN NAVIGATION BAR ════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-[500] bg-[#0a1835] dark:bg-[#0d1222] text-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-b-[1.5px] border-[#f1af3c] dark:border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 h-[66px] flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => go("home")}>
            <Image src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214511/sharda-academy/uploads/afep5smex3ftpxjigii4.png" alt="Sharda Academy Logo" width={58} height={58} className="object-contain" onError={(e) => { e.target.style.display = "none"; }} />
            <div>
              <div className="text-[15px] font-black tracking-[0.05em] leading-[1.1] text-white">SHARDA ACADEMY</div>
              <div className="text-[8px] font-extrabold text-[#f1af3c] tracking-[0.18em] uppercase">Mankhurd · Est. 2021</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-7 ml-auto mr-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                className={`relative bg-transparent border-none text-[12.5px] font-bold uppercase tracking-[0.06em] cursor-pointer py-1.5 transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#f1af3c] after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-full after:h-[2.5px] after:bg-[#f1af3c] after:rounded after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-[350ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] ${activeId === n.id ? "text-[#f1af3c] after:scale-x-100" : "text-white"}`}
                onClick={() => go(n.id)}
              >
                {n.l}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex bg-white/5 border-[1.5px] border-white/12 rounded-lg p-[8.5px] cursor-pointer items-center justify-center transition-all duration-300 hover:bg-white/10"
              title="Toggle Theme"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#F4B63D" className="w-[15px] h-[15px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#F4B63D" className="w-[15px] h-[15px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9.75-9h-2.25M4.95 19.05l1.59-1.59m11.92-11.92l1.59-1.59M3.52 12h2.25m11.92 7.05l-1.59-1.59M4.95 4.95l1.59 1.59M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
                </svg>
              )}
            </button>

            <button className="hidden md:inline-flex bg-[#f1af3c] dark:bg-[#e0a020] text-[#0a1835] dark:text-[#0d1b2a] border-[1.5px] border-transparent rounded-lg py-[8.5px] px-[18.5px] text-[12px] font-extrabold uppercase tracking-[0.05em] cursor-pointer shadow-[0_4px_14px_rgba(241,175,60,0.35)] items-center gap-1.5 transition-transform hover:-translate-y-0.5" onClick={() => go("admission")}>
              <span>Apply Now</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>

            {/* Mobile Hamburger menu */}
            <button className="md:hidden flex flex-col gap-[5px] bg-white/5 border border-white/8 rounded-lg p-2.5 cursor-pointer" onClick={() => setMenu(!menu)} aria-label="menu">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`block w-[18px] h-[2px] bg-white/85 rounded-[1px] transition-all duration-300 ${menu && i === 0 ? "rotate-45 translate-y-[7px]" : menu && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""} ${menu && i === 1 ? "opacity-0" : "opacity-100"}`} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div 
          className={`fixed inset-0 bg-[#0a1835]/45 backdrop-blur-md z-[590] transition-all duration-300 md:hidden ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`} 
          onClick={() => setMenu(false)}
        />
        <div
          className={`fixed top-0 right-0 w-[280px] h-screen bg-[#0a1835] z-[600] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] py-8 px-6 overflow-y-auto md:hidden ${menu ? "translate-x-0" : "translate-x-full"}`}
        >
          <button onClick={() => setMenu(false)} aria-label="close menu" className="absolute top-5 right-6 bg-transparent border-none text-white/85 text-[28px] font-light cursor-pointer z-10 hover:text-white">
            ✕
          </button>
          <div className="flex flex-col gap-1 mt-12">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className={`bg-transparent border-none border-b border-white/5 py-4 text-left text-[18px] font-extrabold cursor-pointer block w-full transition-colors ${activeId === n.id ? "text-[#f1af3c]" : "text-white hover:text-[#f1af3c]"}`}>
                {n.l}
              </button>
            ))}
            <button onClick={() => go("admission")} className="bg-[#f1af3c] text-[#0a1835] border-none rounded-[10px] p-4 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer mt-7 flex items-center justify-center gap-2 w-full hover:bg-[#d97706] transition-colors">
              <span>Apply for Admission</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
