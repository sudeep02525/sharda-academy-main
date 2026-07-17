"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Faculty() {
  const [mentors, setMentors] = useState([
    {
      name: "John Doe",
      role: "M.Sc. Mathematics, 10 Years Exp.",
      text: "Expert in higher mathematics and board exam strategies.",
      image: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214510/sharda-academy/uploads/chcdsmwhxt8f0hth0ebi.jpg"
    },
    {
      name: "Jane Smith",
      role: "Ph.D. Physics, 12 Years Exp.",
      text: "Renowned physics educator with a focus on practical learning.",
      image: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214510/sharda-academy/uploads/chcdsmwhxt8f0hth0ebi.jpg"
    }
  ]);

  if (mentors.length === 0) return null;

  return (
    <>
      {/* ══════ SPECIALIST FACULTY SECTION ══════════════════════ */}
      <section className="py-[90px] border-b border-[#0a1835]/[0.08] dark:border-[#243145]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-[54px]">
            <div className="text-[10px] font-extrabold text-[#f1af3c] tracking-[0.15em] uppercase mb-2">LEARN FROM THE BEST</div>
            <h2 className="text-[36px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-4">Senior Board Specialist Mentors</h2>
            <p className="text-[14.5px] text-[#5e6675] dark:text-[#CBD5E1] max-w-[600px] mx-auto leading-relaxed">
              Our faculty roster comprises senior subject-matter experts with years of board syllabus mentoring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white dark:bg-[#131C2E] border-[1.5px] border-[#0a1835]/[0.08] dark:border-[#243145] rounded-[20px] p-10 flex flex-col items-center text-center gap-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                {mentor.image ? (
                  <Image src={mentor.image.startsWith("http") ? mentor.image : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${mentor.image}`} alt={mentor.name} width={72} height={72} className="rounded-full object-cover" />
                ) : (
                  <div className="w-[72px] h-[72px] rounded-full bg-[#f8fafc] dark:bg-[#1e293b] flex items-center justify-center text-[#0a1835] dark:text-[#F9FAFB] text-[26px] font-black">
                    {mentor.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="text-[19px] font-black text-[#0f1a30] dark:text-[#F9FAFB] mb-1">{mentor.name}</h3>
                  <div className="text-[11px] font-extrabold text-[#f1af3c] uppercase mb-4 tracking-[0.05em]">{mentor.role}</div>
                  <p className="text-[13.5px] text-[#5e6675] dark:text-[#CBD5E1] leading-relaxed m-0">
                    {mentor.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
