import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#C0C0C0] text-white py-8">
      <div className="container mx-auto px-4">
        <Image
          src="/logos/aiorisis_logo-transp-new.png"
          alt="Logo"
          width={320}
          height={120}
          className="h-auto max-w-[160px] md:max-w-[220px] lg:max-w-[280px] mx-auto mb-4"
        />
        <p className="text-center">
          Αιώρησις &copy; {new Date().getFullYear()}. | All rights reserved. | Power by tSagian Projects.
        </p>
      </div>
    </footer>
  );
};

export default Footer;