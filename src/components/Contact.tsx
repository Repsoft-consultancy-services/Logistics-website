export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-wood-200/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Contact us
          </h2>
          <p className="mt-3 text-wood-700">
            Reach out for quotes, bulk orders, or any questions about our wooden pallets and packaging.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl border border-wood-200 shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                Address
              </h3>
              <address className="mt-2 text-wood-900 not-italic">
                Kranthi Packing Industries
                <br />
                1-1, Hamara Dhaba Line
                <br />
                Gandimaisamma, Bowrampet, Block 1
                <br />
                Hyderabad, Telangana 500043
              </address>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                  Phone
                </h3>
                <a
                  href="tel:+918686184331"
                  className="mt-2 block text-wood-900 font-medium hover:text-wood-600 transition"
                >
                  +91 86861 84331
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-wood-600 uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href="mailto:kranthikumar.t10@gmail.com"
                  className="mt-2 block text-wood-900 font-medium hover:text-wood-600 transition break-all"
                >
                  kranthikumar.t10@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-wood-100">
              <p className="text-sm text-wood-600">
                We are located in Bowrampet, Hyderabad. Feel free to call or email for inquiries, quotes, or to place an order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
