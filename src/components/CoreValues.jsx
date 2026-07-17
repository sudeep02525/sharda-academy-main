"use client";

const B = {
  goldBg: "#f1af3c",
  blue: "#0c46c4",
  pink: "#dc2626",
};

export default function CoreValues() {
  return (
    <>
      {/* ══════ CORE VALUES SECTION ══════════════════════ */}
      <section className="py-[100px] bg-white dark:bg-[#0a0e1a] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">WHAT DRIVES US</div>
            <h2 className="text-[36px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-4">Our Core Values</h2>
            <p className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] max-w-[600px] mx-auto leading-[1.6]">
              The principles that guide every decision we make and every student we teach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Value 1: Integrity */}
            <div className="hover-card value-card reveal bg-[#ffffff] dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[64px] h-[64px] rounded-2xl bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h3 className="text-[20px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Integrity</h3>
                <p className="text-[14px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] m-0">
                  Transparent communication with students and parents. We believe in honest feedback, clear expectations, and building trust through consistent actions. No hidden fees, no false promises—just genuine education.
                </p>
              </div>
            </div>

            {/* Value 2: Excellence */}
            <div className="hover-card value-card reveal bg-[#ffffff] dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[64px] h-[64px] rounded-2xl bg-[#dbeafe] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55-.47.98-.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <div>
                <h3 className="text-[20px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Excellence</h3>
                <p className="text-[14px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] m-0">
                  Pursuing highest academic standards in everything we do. From curriculum design to teaching methodologies, we never compromise on quality. Our goal is to help every student achieve their personal best.
                </p>
              </div>
            </div>

            {/* Value 3: Innovation */}
            <div className="hover-card value-card reveal bg-[#ffffff] dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[64px] h-[64px] rounded-2xl bg-[#fee2e2] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.pink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a5 5 0 1 0 0 10 5 5 5 0 0 0 0-10Z"/><path d="m5.6 5.6 4.24 4.24"/><path d="m14.16 14.16 4.24 4.24"/><path d="M5.6 18.4l4.24-4.24"/><path d="m14.16 9.84 4.24-4.24"/></svg>
              </div>
              <div>
                <h3 className="text-[20px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Innovation</h3>
                <p className="text-[14px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] m-0">
                  Integrating modern technology for interactive learning experiences. 4K smart boards, biometric attendance, digital performance tracking—we leverage cutting-edge tools to enhance understanding and engagement.
                </p>
              </div>
            </div>

            {/* Value 4: Empathy */}
            <div className="hover-card value-card reveal bg-[#ffffff] dark:bg-[#131c2e] border-[1.5px] border-[rgba(10,24,53,0.08)] dark:border-[#243145] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[64px] h-[64px] rounded-2xl bg-[#fef3c7] dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={B.goldBg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h3 className="text-[20px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-3">Empathy</h3>
                <p className="text-[14px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.7] m-0">
                  Understanding each student's unique learning journey. We recognize that every child learns differently, and we adapt our teaching methods to individual needs, ensuring no student is left behind.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
