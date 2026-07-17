"use client";
import Image from "next/image";

const B = {
  goldBg: "#f1af3c",
  blue: "#0c46c4",
  pink: "#dc2626",
};

export default function InfrastructureSection() {
  return (
    <>
      {/* ══════ SMART INFRASTRUCTURE & SAFETY SECTION ══════════════════════ */}
      <section className="py-[90px] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            {/* Left: Graphic Visual */}
            <div className="hidden md:flex flex-col justify-center">
              <div className="relative rounded-[24px] overflow-hidden border-[6px] border-white dark:border-[#131c2e] shadow-[0_20px_48px_rgba(10,24,53,0.05)]">
                <Image src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214505/sharda-academy/uploads/cdia7uktpm01uikmwpes.jpg" alt="Sharda Academy Infrastructure & Labs" width={800} height={600} className="w-full h-auto block" />
              </div>
            </div>

            {/* Right: Infrastructure Highlights */}
            <div>
              <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">HIGH-TECH EDUCATION PLATFORM</div>
              <h2 className="text-[32px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-6 leading-[1.25]">
                Modern Smart Infrastructure & Student Safety
              </h2>
              <p className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] mb-8">
                We believe that learning outcomes improve when the environment is engaging and safe. Our classrooms incorporate state-of-the-art technologies that enhance concentration and provide parents complete peace of mind.
              </p>

              <div className="flex flex-col gap-6">
                
                <div className="flex gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#0f1a30] dark:text-[#f9fafb] mb-1">4K Interactive Visual Panels</h4>
                    <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.5] m-0">Every classroom is equipped with high-definition digital smart boards representing chemical reactions and mathematical structures visually.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-[#dbeafe] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#0f1a30] dark:text-[#f9fafb] mb-1">Biometric Check-In & Automatic Parent SMS</h4>
                    <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.5] m-0">Student attendance is verified via digital fingerprint scans, instantly sending an automated alert to parents' phones upon entrance/exit.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-[#fee2e2] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[800] text-[#0f1a30] dark:text-[#f9fafb] mb-1">Climate-Controlled Classrooms</h4>
                    <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.5] m-0">Fully air-conditioned, acoustically optimized learning spaces that isolate street noise, helping students maintain undivided focus.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
