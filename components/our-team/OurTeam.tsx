import React from "react";
import Image from "next/image";
import Link from "next/link";
import { teachers, getSpecialtyNames } from "@/data/TeacherProfileData";

const OurTeam = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 id="our-team" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Η ομάδα μας
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Οι άνθρωποι πίσω από το Αιώρησις, αφοσιωμένοι στο να σας
            καθοδηγήσουν με ασφάλεια και πάθος στον κόσμο της κίνησης.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group flex flex-col items-center group-hover:scale-110 bg-[#F6F1EB] pb-8 rounded-[3rem] shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-black/5"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-t-[3rem] border-white group-hover:border-[#B9007C]/10 transition-colors duration-500">
                <Image
                  src={teacher.image}
                  alt={teacher.fullName}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>

              {/* div caterogy, name, specialties */}
              <div className="text-center">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                  {teacher.categoryType}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#B9007C] transition-colors">
                  {teacher.fullName}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 px-4">
                  {getSpecialtyNames(teacher.specialties)
                    .filter(Boolean)
                    .map((specialty, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-[#B9007C]/20 bg-white/60 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {specialty}
                      </span>
                    ))}
                </div>
              </div>

              <Link
                href={`/our-team/${teacher.slug}`}
                className="mt-6 text-[#B9007C] font-bold text-sm tracking-tighter border-b border-[#B9007C]/0 group-hover:border-[#B9007C]/100 transition-all"
              >
                Δείτε Περισσότερα..
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default OurTeam;
