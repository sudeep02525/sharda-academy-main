"use client";

export default function Milestones() {
  return (
    <>
      {/* ══════ ACADEMY MILESTONES TIMELINE ══════════════════════ */}
      <section className="py-[90px] bg-[#f8fafc] dark:bg-[#0a1226] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">OUR CHRONOLOGY & SUCCESS</div>
            <h2 className="text-[36px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-4">Academy Inception & Milestones</h2>
            <p className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] max-w-[600px] mx-auto leading-[1.6]">
              A look back at how we built Mankhurd's most trusted coaching center over the last 15+ years.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto relative pl-8 border-l-[2.5px] border-[#f1af3c]">
            
            {/* Milestone 1 */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] top-[2px] w-[18px] h-[18px] rounded-full bg-[#0a1835] border-[3.5px] border-[#f1af3c]" />
              <div className="text-[18px] font-[900] text-[#f1af3c] mb-2">2009 — Inception in Mankhurd</div>
              <p className="text-[13.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Founded with a single dedicated classroom of 15 mathematics students. The focus was to prove that complex numerical equations could be simplified through conceptual clarity worksheets rather than rote memorization.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] top-[2px] w-[18px] h-[18px] rounded-full bg-[#0a1835] border-[3.5px] border-[#f1af3c]" />
              <div className="text-[18px] font-[900] text-[#f1af3c] mb-2">2014 — Visual Technology Integration</div>
              <p className="text-[13.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Introduced digital visual displays, transforming how physics formulas and complex scientific concepts are illustrated. Built customized state-board test hubs that mirror exact Board conditions.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] top-[2px] w-[18px] h-[18px] rounded-full bg-[#0a1835] border-[3.5px] border-[#f1af3c]" />
              <div className="text-[18px] font-[900] text-[#f1af3c] mb-2">2019 — Biometrics & Student Safety System</div>
              <p className="text-[13.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Implemented digital check-in devices paired with automated parents SMS notifications, prioritizing student security. Upgraded all rooms with high-efficiency cooling to optimize concentration.
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="relative">
              <div className="absolute -left-[42px] top-[2px] w-[18px] h-[18px] rounded-full bg-[#0a1835] border-[3.5px] border-[#f1af3c]" />
              <div className="text-[18px] font-[900] text-[#f1af3c] mb-2">2026 — 2,500+ Achievers & Continued Trust</div>
              <p className="text-[13.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Celebrated our landmark achievement of mentoring over 2,500+ successful SSC & HSC board pupils, cementing Sharda Academy's place as Mankhurd's most trusted educational institution.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
