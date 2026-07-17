"use client";

const B = {
  gold: "#d97706",
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
};

export default function DirectorsDesk() {
  return (
    <>
      {/* ══════ DIRECTOR'S DESK SECTION ══════════════════════ */}
      <section className="py-[90px] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            {/* Left: Quote & Desk Message */}
            <div className="reveal reveal-slide-left">
              <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">DIRECTOR'S DESK MESSAGE</div>
              <h2 className="text-[32px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-6 leading-[1.25]">
                From the Desk of the Director
              </h2>
              
              <div className="relative pl-6 border-l-[4px] border-[#f1af3c] mb-7">
                <span className="absolute -top-[10px] left-2 text-[72px] font-[900] text-[rgba(241,175,60,0.15)] font-serif leading-[1]">"</span>
                <p className="text-[16px] font-[600] italic text-[#0f1a30] dark:text-[#f9fafb] leading-[1.6] relative z-10">
                  Education is not merely preparing for board results; it is establishing a clear logical framework for life. At Sharda Academy, we treat every formula as a discovery and every doubt as a learning milestone.
                </p>
              </div>

              <div className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] flex flex-col gap-4">
                <p>
                  For over fifteen years, we have maintained a philosophy that places deep conceptual understanding above all. Our classrooms are not assembly lines; they are intellectual ecosystems where seasoned state-board specialists break down subjects into concrete visual logic.
                </p>
                <p>
                  By marrying traditional scholastic rigor with interactive 4K screens and real-time student tracking, we empower every board aspirant to confidently unlock their highest potential. We invite you to join us in crafting the next generation of logical leaders.
                </p>
              </div>
            </div>

            {/* Right: Signature & Info Card */}
            <div className="hover-card reveal reveal-slide-right bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[24px] p-10 shadow-[0_10px_40px_rgba(10,24,53,0.03)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center text-[#d97706] text-[28px] font-[900] mb-6">
                SA
              </div>
              <h3 className="text-[20px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Sharda Academy Board</h3>
              <div className="text-[12px] font-[700] text-[#f1af3c] uppercase mb-6">Admin & Educational Governance</div>
              
              <ul className="list-none p-0 m-0 flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <span className="text-[#f1af3c] font-[900]">✓</span>
                  <span className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1]"><strong>Personal Attention Batch Sizes:</strong> strictly limited to a maximum of 25 students to ensure that every student's learning speed is personally tracked by our core faculty.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f1af3c] font-[900]">✓</span>
                  <span className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1]"><strong>Daily Homework Check & Reviews:</strong> Customized daily homework checks and worksheet validations. We don't let doubts accumulate.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f1af3c] font-[900]">✓</span>
                  <span className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1]"><strong>Biometrics & Parents Reporting:</strong> Real-time biometrics logging and SMS alerts immediately when students arrive or leave, keeping parents relaxed and informed.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f1af3c] font-[900]">✓</span>
                  <span className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1]"><strong>Individual Parent Meets:</strong> Personal meetings with parents after every mock exam cycle to share tailored progress maps and study targets for their child.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
