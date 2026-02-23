export const metadata = {
  title: "Contact Us | Kranthi Packing Industries",
  description: "Get in touch for wooden pallets, boxes, crates. Hyderabad, Bowrampet. Phone and email.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Contact us
          </h1>
          <p className="mt-3 text-wood-700">
            Reach out for quotes, bulk orders, or any questions about our wooden pallets and packaging.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-wood-200 shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                Address
              </h2>
              <address className="mt-2 text-wood-900 not-italic text-lg leading-relaxed">
                Kranthi Packing Industries
                <br />
                1-1, Hamara Dhaba Line
                <br />
                Gandimaisamma, Bowrampet, Block 1
                <br />
                Hyderabad, Telangana 500043
              </address>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                  Phone
                </h2>
                <a
                  href="tel:+918686184331"
                  className="mt-2 block text-wood-900 font-medium text-lg hover:text-wood-600 transition"
                >
                  +91 86861 84331
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                  Email
                </h2>
                <a
                  href="mailto:kranthikumar.t10@gmail.com"
                  className="mt-2 block text-wood-900 font-medium text-lg hover:text-wood-600 transition break-all"
                >
                  kranthikumar.t10@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-wood-100">
              <p className="text-wood-600">
                We are located in Bowrampet, Hyderabad. Feel free to call or email for inquiries, quotes, or to place an order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
