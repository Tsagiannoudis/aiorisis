"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import {
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { MdOutlineCookie } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

const PolicySection = ({
  id,
  title,
  children,
  isActive,
  icon: Icon,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  icon: React.ElementType;
}) => (
  <section
    id={id}
    className={`scroll-mt-40 transition-all duration-700 p-8 rounded-[2rem] border-l-8 ${isActive
        ? "border-[#B9007C] bg-white shadow-2xl shadow-[#B9007C]/5 translate-x-2 opacity-100"
        : "border-transparent opacity-40 grayscale-[0.5]"
      }`}
  >
    <div className="flex items-start gap-6">
      {/* Icon Wrapper */}
      <div
        className={`p-3 rounded-2xl flex-shrink-0 transition-colors duration-300 ${isActive
            ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/20"
            : "bg-gray-100 text-[#B9007C]"
          }`}
      >
        <Icon size={48} />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-black">
          {title}
        </h3>

        <div className="text-gray-700 leading-relaxed text-base font-light">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState("who");

  const t = useTranslations("PrivacyPage");

  return (
    <main className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-2/6 lg:sticky lg:top-32 h-fit">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 overflow-hidden">
            <h3 className="text-sm uppercase tracking-[0.25em] text-[#B9007C] font-bold mb-6">
              {t("contents")}
            </h3>

            <nav className="flex flex-col space-y-3">
              <a
                href="#who"
                onClick={() => setActiveSection("who")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "who"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <RiTeamLine size={18} />
                {t("who.title")}
              </a>

              <a
                href="#data"
                onClick={() => setActiveSection("data")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "data"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <HiOutlineServerStack size={18} />
                {t("data.title")}
              </a>

              <a
                href="#processing"
                onClick={() => setActiveSection("processing")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "processing"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <TbTargetArrow size={18} />
                {t("processing.title")}
              </a>

              <a
                href="#rights"
                onClick={() => setActiveSection("rights")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "rights"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <HiOutlineShieldCheck size={18} />
                {t("rights.title")}
              </a>

              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "contact"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <HiOutlineEnvelope size={18} />
                {t("contact.title")}
              </a>

              <a
                href="#cookies"
                onClick={() => setActiveSection("cookies")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "cookies"
                    ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                <MdOutlineCookie size={18} />
                {t("cookies.title")}
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-4/6 space-y-4">
          <PolicySection
            id="who"
            title={t("who.title")}
            isActive={activeSection === "who"}
            icon={RiTeamLine}
          >
            {t("who.text")}
          </PolicySection>

          <PolicySection
            id="data"
            title={t("data.title")}
            isActive={activeSection === "data"}
            icon={HiOutlineServerStack}
          >
            {t("data.text")}
          </PolicySection>

          <PolicySection
            id="processing"
            title={t("processing.title")}
            isActive={activeSection === "processing"}
            icon={TbTargetArrow}
          >
            {t("processing.text")}
          </PolicySection>

          <PolicySection
            id="rights"
            title={t("rights.title")}
            isActive={activeSection === "rights"}
            icon={HiOutlineShieldCheck}
          >
            {t("rights.text")}
          </PolicySection>

          <PolicySection
            id="contact"
            title={t("contact.title")}
            isActive={activeSection === "contact"}
            icon={HiOutlineEnvelope}
          >
            {t("contact.text")}{" "}
            <a
              href="mailto:info@aiorisis.gr"
              className="text-[#B9007C] underline"
            >
              info@aiorisis.gr
            </a>
            .
          </PolicySection>

          <PolicySection
            id="cookies"
            title={t("cookies.title")}
            isActive={activeSection === "cookies"}
            icon={MdOutlineCookie}
          >
            {t("cookies.text")}
          </PolicySection>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;