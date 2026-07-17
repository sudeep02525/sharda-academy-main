"use client";

const B = {
  goldBg: "#f1af3c",
  goldLt: "#fef3c7",
  blue: "#0c46c4",
  blueLt: "#dbeafe",
  pink: "#dc2626",
  pinkLt: "#fee2e2",
};

export default function WhyChoose() {
  return (
    <>
      {/* ══════ WHY CHOOSE SHARDA ACADEMY SECTION ══════════════════════ */}
      <section className="py-[100px] bg-[#f8fafc] dark:bg-[#0a1226] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">THE SHARDA ADVANTAGE</div>
            <h2 className="text-[36px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-4">Why Choose Sharda Academy</h2>
            <p className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] max-w-[600px] mx-auto leading-[1.6]">
              What sets us apart from other coaching institutes in Mankhurd and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            
            {/* Feature 1 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Small Batch Sizes (Max 25 Students)</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  We maintain strict batch limits to ensure every student receives individual attention. No overcrowded classrooms—just focused learning environments where doubts are resolved instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#dbeafe] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Personalized Doubt-Solving Sessions</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  Dedicated one-on-one doubt clearing sessions after every topic. Our faculty ensures no question goes unanswered, building confidence and conceptual clarity for every student.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#fee2e2] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">State-Board Focused Curriculum</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  Our curriculum is specifically designed for Maharashtra State Board exams. We cover every topic in depth with board-pattern questions, past papers, and examiner tips for maximum scoring potential.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Experienced Faculty (10+ Years)</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  Our instructors have over a decade of experience in coaching students for board exams. They understand exam patterns, marking schemes, and how to help students score maximum marks.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#dbeafe] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Weekly Mock Tests & Analysis</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  Regular mock tests under actual exam conditions with detailed performance analysis. We track progress, identify weak areas, and provide targeted improvement strategies for every student.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="hover-card feature-card reveal bg-white dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#fee2e2] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-1.5">Safe & Comfortable Environment</h3>
                <p className="text-[13px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.6] m-0">
                  Air-conditioned classrooms with CCTV monitoring and biometric attendance. Parents receive instant SMS alerts when students arrive or leave, ensuring complete peace of mind about their child's safety.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
