"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { sendEmailAction } from "@/components/extraComponents/api/FormActions";

const ContactFormSection = () => {
  const t = useTranslations("ContactForm");

  const [isPending, setIsPending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsPending(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const formData = new FormData(e.currentTarget);

      const result = await sendEmailAction(formData);

      if (result.success) {
        setStatus({
          type: "success",
          text: t("successMessage"),
        });

        e.currentTarget.reset();
      } else {
        setStatus({
          type: "error",
          text: `${t("errorMessage")} ${result.error ?? ""}`,
        });
      }
    } catch (err) {
      console.error(
        "Client-side submission error:",
        err
      );

      setStatus({
        type: "error",
        text: t("unexpectedError"),
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-2xl lg:flex-row">
          {/* =================================================
              SIDEBAR
          ================================================= */}

          <div className="flex flex-col justify-between bg-gray-50 p-8 text-black md:p-12 lg:w-2/5">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {t("title")}
              </h2>

              <p className="mb-12 text-lg">
                {t("description1")}
              </p>

              <div className="space-y-10">
                {/* Location */}

                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-white backdrop-blur-sm">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <Link
                    href="https://goo.gl/maps/JcsmcnZoeBJNC8Ha8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#B9007C]"
                  >
                    <h3 className="text-sm font-bold tracking-wider opacity-70">
                      {t("location")}
                    </h3>

                    <p className="text-lg">
                      {t("locationAddress")}
                    </p>
                  </Link>
                </div>

                {/* Phone */}

                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-white backdrop-blur-sm">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>

                  <Link
                    href="tel:+306948577225"
                    className="transition-colors hover:text-[#B9007C]"
                  >
                    <h3 className="text-sm font-bold tracking-wider opacity-70">
                      {t("phone")}
                    </h3>

                    <p className="text-lg">
                      6948577225
                    </p>
                  </Link>
                </div>

                {/* Email */}

                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-white backdrop-blur-sm">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <Link
                    href="mailto:info@aiorisis.gr"
                    className="transition-colors hover:text-[#B9007C]"
                  >
                    <h3 className="text-sm font-bold tracking-wider opacity-70">
                      {t("email")}
                    </h3>

                    <p className="text-lg">
                      info@aiorisis.gr
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-12">
              <p className="text-sm italic leading-relaxed opacity-80">
                {t("slogan")}
              </p>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="p-8 md:p-12 lg:w-3/5">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-8 text-black md:grid-cols-2"
            >
              {/* Full name */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullname"
                  className="ml-1 text-xs font-bold tracking-widest text-gray-400"
                >
                  {t("fullNameForm")}
                </label>

                <input
                  id="fullname"
                  name="fullname"
                  required
                  type="text"
                  placeholder={t(
                    "fullNamePlaceholder"
                  )}
                  className="rounded-xl border-2 border-transparent bg-gray-50 px-4 py-4 transition-all focus:border-[#B9007C] focus:bg-white focus:ring-0"
                />
              </div>

              {/* Email */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="ml-1 text-xs font-bold tracking-widest text-gray-400"
                >
                  {t("emailForm")}
                </label>

                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder={t(
                    "emailPlaceholder"
                  )}
                  className="rounded-xl border-2 border-transparent bg-gray-50 px-4 py-4 transition-all focus:border-[#B9007C] focus:bg-white focus:ring-0"
                />
              </div>

              {/* Phone */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="ml-1 text-xs font-bold tracking-widest text-gray-400"
                >
                  {t("phoneForm")}
                </label>

                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder={t(
                    "phonePlaceholder"
                  )}
                  className="rounded-xl border-2 border-transparent bg-gray-50 px-4 py-4 transition-all focus:border-[#B9007C] focus:bg-white focus:ring-0"
                />
              </div>

              {/* Subject */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="ml-1 text-xs font-bold tracking-widest text-gray-400"
                >
                  {t("subjectForm")}
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="cursor-pointer rounded-xl border-2 border-transparent bg-gray-50 px-4 py-4 transition-all focus:border-[#B9007C] focus:bg-white focus:ring-0"
                >
                  <option value="classes">
                    {t("classesForm")}
                  </option>

                  <option value="retreat">
                    {t("retreatForm")}
                  </option>

                  <option value="event">
                    {t("eventForm")}
                  </option>

                  <option value="other">
                    {t("otherForm")}
                  </option>
                </select>
              </div>

              {/* Message */}

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="ml-1 text-xs font-bold tracking-widest text-gray-400"
                >
                  {t("messageForm")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t(
                    "messagePlaceholder"
                  )}
                  className="resize-none rounded-xl border-2 border-transparent bg-gray-50 px-4 py-4 transition-all focus:border-[#B9007C] focus:bg-white focus:ring-0"
                />
              </div>

              {/* Privacy */}

              <div className="mb-2 flex items-start gap-3 md:col-span-2">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[#B9007C] focus:ring-[#B9007C]"
                />

                <label
                  htmlFor="privacy"
                  className="cursor-pointer text-sm text-gray-600"
                >
                  {t("privacyPolicy")}
                </label>
              </div>

              {/* Submit */}

              <div className="mt-2 md:col-span-2">
                <button
                  disabled={isPending}
                  type="submit"
                  className={`w-full rounded-xl bg-[#B9007C] py-5 font-bold text-white shadow-xl transition-all hover:bg-[#9a0068] hover:shadow-[#B9007C]/20 active:scale-[0.98] ${isPending
                      ? "cursor-not-allowed opacity-50"
                      : ""
                    }`}
                >
                  {isPending
                    ? t("sending")
                    : t("sendMessage")}
                </button>

                {/* Status */}

                {status.text && (
                  <p
                    className={`mt-4 text-center font-medium ${status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                      }`}
                  >
                    {status.text}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;