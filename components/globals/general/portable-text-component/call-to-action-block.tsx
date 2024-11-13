import Image from "next/image";
import Link from "next/link";

export default function CallToActionBlock() {
  return (
    <div className="w-full h-80 my-12 relative overflow-hidden flex items-center justify-center">
      <Image
        width={1600}
        height={900}
        className="w-full h-full inset-0 absolute object-cover object-center"
        src="/Handshake-caled.webp"
        alt="Shaking hands"
      />
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      <div className="w-fit flex flex-col items-center justify-center text-white relative z-20">
        <h3 className="text-[clamp(32px,4.44vw,48px)] font-bold">
          Secure Your Free Case Review
        </h3>
        <p className="text-[clamp(20px,2.22vw,24px)]">
          Protect the rights of you and yours.
        </p>
        <Link
          className="text-[clamp(16px,1.66vw,18px)] mt-8 py-1.5 px-5 border-2 border-white text-white rounded-[4px]"
          href="/contact"
        >
          Free Consultation
        </Link>
      </div>
    </div>
  );
}
