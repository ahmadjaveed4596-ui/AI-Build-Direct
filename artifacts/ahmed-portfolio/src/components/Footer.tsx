import { Link } from "wouter";
import { Code2, Mail, Phone, MapPin, Globe, Linkedin, Github, Twitter } from "lucide-react";

const services = [
  "WordPress Speed Optimization",
  "WordPress Security",
  "On-Page SEO",
  "WordPress Migration",
  "Elementor Design",
  "AI HTML to WordPress",
];

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Ahmed" },
  { href: "/services", label: "Services" },
  { href: "/service-booking", label: "Book a Service" },
  { href: "/contact", label: "Contact Me" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[hsl(222,47%,5%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center text-white font-bold text-lg">
                AJ
              </div>
              <div>
                <span className="text-white font-semibold text-lg">Ahmed Javed</span>
                <p className="text-blue-400 text-xs -mt-0.5">WordPress & AI Expert</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional website builder specializing in no-code AI tools and WordPress development. Turning ideas into polished, high-performance websites.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200" data-testid="link-social-linkedin">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200" data-testid="link-social-github">
                <Github size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200" data-testid="link-social-twitter">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200" data-testid="link-social-website">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} data-testid={`link-footer-${page.label.toLowerCase().replace(/\s/g, "-")}`}>
                    <span className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 cursor-pointer">
                      {page.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" data-testid={`link-footer-service-${service.toLowerCase().replace(/\s/g, "-")}`}>
                    <span className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <span>contact@ahmedjaved.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <span>Available on WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-blue-400 shrink-0" />
                <span>Available Worldwide</span>
              </li>
            </ul>
            <Link href="/service-booking" data-testid="link-footer-cta">
              <button className="mt-6 w-full gradient-btn text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ahmed Javed. All rights reserved.</p>
          <p>Built with WordPress expertise & AI-powered workflows</p>
        </div>
      </div>
    </footer>
  );
}
