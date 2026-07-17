"use client";
import Image from "next/image";

export default function OurStory() {
  return (
    <>
      {/* ══════ OUR STORY SECTION ══════════════════════ */}
      <section className="py-[100px] bg-[#f8fafc] dark:bg-[#0a1226] border-b border-[rgba(10,24,53,0.08)] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            {/* Left: Story Content */}
            <div className="reveal reveal-slide-left">
              <div className="text-[10px] font-[800] text-[#d97706] tracking-[0.15em] uppercase mb-2">OUR HERITAGE & JOURNEY</div>
              <h2 className="text-[36px] font-[900] text-[#0f1a30] dark:text-[#f9fafb] mb-6 leading-[1.2]">
                From Humble Beginnings to <br />
                <span className="text-[#f1af3c]">Academic Excellence</span>
              </h2>
              
              <div className="text-[14.5px] text-[#5e6675] dark:text-[#cbd5e1] leading-[1.8] flex flex-col gap-5">
                <p>
                  Founded in 2009 by passionate education enthusiasts, Sharda Academy began as a modest coaching center in PMG Colony, Mankhurd. What started with a single classroom and 15 students has blossomed into Mankhurd's premier educational institution.
                </p>
                <p>
                  Over the past 15+ years, we have evolved from a local coaching center into a comprehensive academic powerhouse serving students from Class 1 to 12. Our journey has been defined by unwavering commitment to conceptual clarity, personalized attention, and consistent production of board toppers.
                </p>
                <p>
                  Today, we stand as a beacon of quality education in Mumbai, having mentored over 5,000+ students who have gone on to excel in their academic and professional pursuits. Our legacy is built on trust, results, and the countless success stories of students who dared to dream big.
                </p>
              </div>

              <div className="flex gap-8 mt-8 flex-wrap">
                <div>
                  <div className="text-[42px] font-[900] text-[#f1af3c] leading-[1] mb-1">15+</div>
                  <div className="text-[12px] font-[700] text-[#5e6675] dark:text-[#cbd5e1] uppercase tracking-[0.05em]">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-[42px] font-[900] text-[#f1af3c] leading-[1] mb-1">5000+</div>
                  <div className="text-[12px] font-[700] text-[#5e6675] dark:text-[#cbd5e1] uppercase tracking-[0.05em]">Students Mentored</div>
                </div>
                <div>
                  <div className="text-[42px] font-[900] text-[#f1af3c] leading-[1] mb-1">100%</div>
                  <div className="text-[12px] font-[700] text-[#5e6675] dark:text-[#cbd5e1] uppercase tracking-[0.05em]">Pass Rate (Since 2015)</div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="reveal reveal-slide-right hidden md:block">
              <div className="relative rounded-[24px] overflow-hidden border-[6px] border-white dark:border-[#131c2e] shadow-[0_20px_48px_rgba(10,24,53,0.08)]">
                <Image src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214503/sharda-academy/uploads/hhzs4vupujecbhjk6kfw.jpg" alt="Sharda Academy Journey" width={800} height={600} className="w-full h-auto block" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(10,24,53,0.9)] to-transparent pt-8 pb-8 px-6">
                  <div className="text-[11px] font-[800] text-[#f1af3c] uppercase tracking-[0.08em] mb-2">Our Legacy</div>
                  <div className="text-[16px] font-[700] text-[#ffffff]">Building Futures Since 2009</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
