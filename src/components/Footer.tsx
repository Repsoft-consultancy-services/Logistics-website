import Link from "next/link";

const address = [
  "1-1, Hamara Dhaba Line",
  "Gandimaisamma, Bowrampet",
  "Block 1, Hyderabad",
  "Telangana 500043",
];

export default function Footer() {
  return (
    <footer className="bg-wood-950 text-wood-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-wood-100 mb-3">
              Kranthi Packing Industries
            </h3>
            <p className="text-sm text-wood-300 max-w-xs">
              Quality wooden pallets and packaging solutions in Hyderabad. Reliable manufacturing and supply for your business.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-wood-100 uppercase tracking-wider mb-3">
              Address
            </h4>
            <address className="text-sm not-italic text-wood-300 space-y-1">
              {address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-wood-100 uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="text-sm text-wood-300 space-y-2">
              <li>
                <a
                  href="tel:+918686184331"
                  className="hover:text-wood-100 transition"
                >
                  +91 86861 84331
                </a>
              </li>
              <li>
                <a
                  href="mailto:kranthikumar.t10@gmail.com"
                  className="hover:text-wood-100 transition break-all"
                >
                  kranthikumar.t10@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-wood-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-wood-400">
            © {new Date().getFullYear()} Kranthi Packing Industries. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#hero" className="text-sm text-wood-400 hover:text-wood-200 transition">
              Home
            </Link>
            <Link href="#contact" className="text-sm text-wood-400 hover:text-wood-200 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
