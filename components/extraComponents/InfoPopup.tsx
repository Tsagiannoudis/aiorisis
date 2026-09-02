"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { HiXMark } from "react-icons/hi2";
import Image from "next/image";

const InfoPopup = () => {
  const t = useTranslations("InfoPopup");

  const [isVisible, setIsVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(20);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setSecondsLeft(20);
    }, 1500);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    const countdownTimer = setInterval(() => {
      setSecondsLeft((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : 0
      );
    }, 1000);

    return () => {
      clearTimeout(autoCloseTimer);
      clearInterval(countdownTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div
        className="relative mx-auto w-full max-w-lg scale-95 overflow-hidden rounded-3xl bg-white opacity-0 shadow-2xl transition-all duration-300 ease-out animate-fade-in-scale"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 text-gray-400 transition-colors hover:text-gray-800"
          aria-label={t("close")}
        >
          <HiXMark className="h-8 w-8" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/lotus-white4.png"
              alt={t("logoAlt")}
              width={80}
              height={80}
            />
          </div>

          <h3
            id="popup-title"
            className="mb-4 text-2xl font-bold text-gray-900"
          >
            {t("announcement")}
          </h3>

          <h2 className="mb-16 text-2xl font-bold text-[#B9007C] md:text-4xl">
            {t("title")}
          </h2>

          <div id="popup-description">
            <p className="mb-2 font-light leading-relaxed text-gray-600">
              {t("schedulePublished")}
            </p>

            <p className="mb-2 font-light leading-relaxed text-gray-600">
              {t("openingDateBefore")}{" "}
              <strong>01/09/2026</strong>.
            </p>

            <p className="mb-6 font-light leading-relaxed text-gray-700">
              {t("welcomeBack")}
              <br />
              {t("holidayWish")} 🌞⛱
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              {t("autoCloseBefore")}{" "}
              <span className="font-semibold text-gray-900">
                {secondsLeft}
              </span>{" "}
              {t("seconds")}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-scale {
          from {
            transform: scale(0.95);
            opacity: 0;
          }

          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default InfoPopup;