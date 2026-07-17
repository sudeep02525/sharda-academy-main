"use client";

export default function VisionCTA({ go }) {
  return (
    <>
      {/* ══════ VISION CHARTER CALL-TO-ACTION ══════════════════════ */}
      <section className="py-10 px-4 md:py-[60px] md:pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="bg-[#0c1e3f] dark:bg-[#0f1f35] border-[2.5px] border-[#f1af3c] dark:border-[#e0a020] rounded-[24px] text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(10,24,53,0.15)] py-10 px-5 md:py-[54px] md:px-[48px]">
            
            <div className="absolute -top-[50px] -left-[50px] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgba(12,30,63,0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(15,31,53,0.4)_0%,transparent_70%)]" />
            <div className="absolute -bottom-[80px] -right-[80px] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(12,30,63,0.3)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(15,31,53,0.3)_0%,transparent_70%)]" />

            <div className="relative z-10">
              <div className="text-[10px] font-[800] text-[#f1af3c] dark:text-[#e0a020] tracking-[0.18em] uppercase mb-3">OUR VISION & STUDENT CHARTER</div>
              <h2 className="font-[900] mb-4 tracking-[-0.01em] text-[22px] leading-[1.25] md:text-[32px] md:leading-[1.15]">Empowering Generations to Lead</h2>
              <p className="text-[14.5px] text-white/75 dark:text-[#8fa0b0] max-w-[600px] mx-auto mb-9 leading-[1.75]">
                Our vision is to ensure no student is left behind. Through customized DPPs, smart interactive panels, and biometric transparency, we provide our scholars the ultimate toolkit to unlock high board achievements.
              </p>

              <button className="btn-shine-gold bg-[#f1af3c] dark:bg-[#e0a020] text-[#0a1835] dark:text-[#0d1b2a] border-none rounded-[10px] py-4 px-9 text-[13px] font-[800] uppercase tracking-[0.06em] cursor-pointer inline-flex items-center gap-2" onClick={() => go("contact")}>
                <span>CONTACT US</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
