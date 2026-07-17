"use client";

const B = {
  goldBg: "#f1af3c",
  blue: "#0c46c4",
  pink: "#dc2626",
};

export default function PedagogySection() {
  return (
    <>
      {/* ══════ CORE PILLARS OF ACADEMIC PEDAGOGY ══════════════════════ */}
      <section className="py-[90px] bg-[#f8fafc] dark:bg-[#0a1226] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-[54px]">
            <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">OUR PEDAGOGICAL ENGINES</div>
            <h2 className="text-[36px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-4">Pillars of Academic Pedagogy</h2>
            <p className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] max-w-[600px] mx-auto leading-[1.6]">
              How we translate raw textbook syllabus into lifetime logic and stellar board ranks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            
            {/* Pillar 1 */}
            <div className="hover-card bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-8 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[48px] h-[48px] rounded-xl bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Conceptual Sheets</h3>
              <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Customized worksheets prepared by board evaluators that replace abstract statements with clear visual diagrams, helping students understand the 'why' behind every mathematical and scientific derivation.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="hover-card bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-8 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[48px] h-[48px] rounded-xl bg-[#dbeafe] dark:bg-[#1e293b] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              </div>
              <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Daily Practice Problems (DPPs)</h3>
              <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                High-retention practice problem loops containing selected board-standard queries. Daily practice guarantees that student conceptual recall stays razor-sharp over long revision cycles.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="hover-card bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-8 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[48px] h-[48px] rounded-xl bg-[#fee2e2] dark:bg-[#1e293b] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Weekly Mock Board Papers</h3>
              <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                Rigorous testing under exact exam formats and timelines. Completed papers are individually evaluated by expert senior faculty to share detailed feedback on answer structure and grade optimization.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
