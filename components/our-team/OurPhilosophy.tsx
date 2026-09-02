import { useTranslations } from "next-intl";

const OurPhilosophy = () => {
  const t = useTranslations("OurPhilosophy");
  return (
    <section className="bg-gradient-to-b from-[#F6F1EB] to-white py-24 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mx-auto px-4 max-w-7xl">
        <div className="text-left mb-16">
          <p className="text-[#B9007C] text-sm font-bold tracking-widest mb-4">
            {t("categoryType")}
          </p>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 break-words">{t("title")}</h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl">
            {t("description")}
          </p>
        </div>
        <blockquote
          className="relative border-l-4 border-[#B9007C] pl-6 md:pl-8 py-4"
          data-aos="fade-left"
        >
          <p className="text-2xl md:text-5xl font-light italic text-gray-800 leading-tight break-words">
            “{t("quote")} <span className="text-[#B9007C] font-normal">{t("quoteSpan")}</span> <br />
            {t("quoteText1")} <span className="inline-block">{t("quoteText2")}</span> <br />
            {t("quoteText3")}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default OurPhilosophy;
