"use client";
import Image from "next/image";

export default function HeroSection({ darkMode, go }) {
  return (
    <>
      {/* ══════ PREMIUM HERO SECTION ══════════════════════ */}
      <section
        className="relative overflow-hidden py-[80px] pb-[70px] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]"
        style={{
          background: darkMode
            ? "#0a0e1a"
            : "radial-gradient(circle at top, #eef2f6 0%, #ffffff 75%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">

          {/* ── Two-column grid: left text | right image ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

            {/* ── LEFT: Content ── */}
            <div className="flex flex-col justify-center text-left order-2 md:order-1">

              {/* Badge chip */}
              <div className="afsu d1 inline-flex self-start items-center gap-2 bg-[#fef3c7] dark:bg-[rgba(241,175,60,0.08)] border-[1.5px] border-[#f1af3c] dark:border-[rgba(241,175,60,0.4)] dark:shadow-[0_0_16px_rgba(241,175,60,0.16)] py-1.5 px-3.5 rounded-full mb-6">
                <span className="pulse-dot" />
                <span className="text-[10px] font-extrabold text-[#d97706] dark:text-[#f1af3c] tracking-[0.08em] uppercase">
                  OUR MISSION &amp; HERITAGE
                </span>
              </div>

              {/* Heading */}
              <h1 className="afsu d2 text-[40px] font-black text-[#0f1a30] dark:text-white leading-[1.18] tracking-[-0.02em] mb-5">
                Empowering Students With <br />
                <span className="text-[#d97706]">Absolute Conceptual Depth</span>
              </h1>

              {/* Description */}
              <p className="afsu d3 text-[15px] text-[#5e6675] dark:text-[#94a3b8] leading-[1.7] mb-8 max-w-[600px]">
                Sharda Academy is a highly specialised, friendly local coaching class founded in{" "}
                <strong className="text-[#1e293b] dark:text-[#e2e8f0] font-bold">2009</strong>{" "}
                at PMG Colony, Mankhurd. Rather than operating as an overcrowded institute, we
                function as a personalised learning home. With standard small batches, we guarantee
                absolute individual attention, helping students from Class 1st to 12th build strong
                conceptual foundations and consistently lead board exams.
              </p>

              {/* CTA Button */}
              <div className="afsu d4 flex gap-4 flex-wrap">
                <button
                  className="btn-shine-gold bg-[#f1af3c] dark:bg-[#e0a020] text-[#0a1835] dark:text-[#0d1b2a] border-none rounded-[10px] py-4 px-8 text-[13px] font-extrabold uppercase tracking-[0.06em] cursor-pointer shadow-[0_6px_20px_rgba(241,175,60,0.35)] inline-flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5"
                  onClick={() => go("contact")}
                >
                  <span>CONTACT US</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="afsu d3 flex flex-col justify-center relative order-1 md:order-2">
              <div className="zoom-img-container relative rounded-3xl overflow-hidden border-[6px] border-white dark:border-[#131C2E] shadow-[0_20px_48px_rgba(10,24,53,0.06)]">
                <Image
                  className="zoom-img w-full h-auto block transition-transform duration-700 hover:scale-105"
                  width={800}
                  height={600}
                  src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214504/sharda-academy/uploads/dekhulrc2ycgw8ms1xuu.jpg"
                  alt="Sharda Academy Classroom Environment"
                />
                {/* ESTD badge */}
                <div className="absolute top-4 right-4 bg-[#f1af3c] py-2 px-4 rounded-full shadow-[0_4px_12px_rgba(241,175,60,0.4)] z-10">
                  <span className="text-[9.5px] font-black text-[#0a1835] uppercase tracking-[0.05em]">ESTD. 2009</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .pulse-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #d97706;
          position: relative;
          flex-shrink: 0;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: #d97706;
          animation: dot-pulse-glow 1.8s infinite ease-in-out;
        }
        .dark .pulse-dot { background-color: #f1af3c; }
        .dark .pulse-dot::after { background-color: #f1af3c; }
        @keyframes dot-pulse-glow {
          0%   { transform: scale(1);   opacity: 0.85; }
          100% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>
    </>
  );
}
