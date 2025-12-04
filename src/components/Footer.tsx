import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Top CTA strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-slate-900/70 border border-slate-700 px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400">
              Let&apos;s talk
            </p>
            <p className="text-sm text-slate-300">
              Have an idea for AI, apps or billing? Call or mail us and we&apos;ll respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="tel:+917338131749"
              className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-slate-100 hover:bg-blue-500 hover:border-blue-500 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 7338131749
            </a>
            <a
              href="mailto:info@softwareinfotech.com"
              className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-slate-100 hover:bg-blue-500 hover:border-blue-500 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@softwareinfotech.com
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand + social */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Software Infotech Logo png (3).png"
                alt="Software Infotech"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Transforming businesses with cutting-edge AI solutions and custom software
              development. Design, Development, and Implementation excellence.
            </p>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Follow us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-sky-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact card */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-5 space-y-4 shadow-md">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-slate-200">
                  <a
                    href="mailto:info@softwareinfotech.com"
                    className="hover:text-blue-300 hover:underline block"
                  >
                    info@softwareinfotech.com
                  </a>
                  <a
                    href="mailto:support@softwareinfotech.com"
                    className="hover:text-blue-300 hover:underline block"
                  >
                    support@softwareinfotech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <div className="text-slate-200">
                  <a
                    href="tel:+917338131749"
                    className="hover:text-orange-300 hover:underline block"
                  >
                    +91 7338131749
                  </a>
                  <a
                    href="tel:+919945943353"
                    className="hover:text-orange-300 hover:underline block"
                  >
                    +91 9945943353
                  </a>
                  <span className="block text-xs text-slate-500 mt-1">
                    Support: Mon–Sat, 9:30 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <p className="text-slate-200 text-sm leading-relaxed">
                  131, 1st Floor, Opposite to Amarjyothi English School, Vinayaka Layout,
                  Devasandra Main Road, 3rd Cross Road, Vinayaka Nagar, KR Puram,
                  Bengaluru, Karnataka 560036
                </p>
              </div>
            </div>
          </div>
        </div>

                <div className="border-t border-slate-800 pt-4 text-center text-[11px] sm:text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Software Infotech. All rights reserved.{' '}
            <span>
              Powered by{' '}
              <a
                href="https://pixelflare.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 hover:underline"
              >
                PixelFlare
              </a>
              .
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
