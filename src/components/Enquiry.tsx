import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import { PUBLIC_IMAGES } from "@/lib/images";

export default function Enquiry() {
  return (
    <section className="bg-[#f7f2eb]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[460px]">
          <Image
            src={PUBLIC_IMAGES[2]}
            alt="Wooden packaging prepared for dispatch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-y-0 right-0 w-28 sm:w-40 bg-brand-lime"
            style={{ clipPath: "polygon(58% 0, 100% 0, 100% 100%, 0 100%)" }}
            aria-hidden
          />
        </div>
        <div className="bg-white px-6 py-10 sm:px-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink">
            \\ Send Us Message \\
          </h2>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
