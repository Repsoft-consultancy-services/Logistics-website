import EnquiryForm from "@/components/EnquiryForm";
import PageBanner from "@/components/PageBanner";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact Us | Kranthi Packing Industries",
  description: "Get in touch for wooden pallets, boxes, and crates. Hyderabad, Bowrampet. Phone and email.",
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact"
        subtitle="Reach out for quotes, bulk orders, or questions about wooden pallets and packaging."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl uppercase text-brand-blue">Head Office</h2>
          <address className="mt-4 not-italic text-brand-ink leading-relaxed">
            {SITE.name}
            <br />
            {SITE.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <div className="mt-6 space-y-2">
            <a href={`tel:${SITE.phoneTel}`} className="block font-semibold text-brand-navy hover:text-brand-blue">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-brand-navy hover:text-brand-blue break-all">
              {SITE.email}
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-muted">
            We are in Bowrampet, Hyderabad. Call, email, or send a message for a quote or an order.
          </p>
        </div>
        <div id="enquiry">
          <h2 className="font-display text-2xl text-brand-ink">\\ Send Us Message \\</h2>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
