import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { href: "https://www.instagram.com/aurigaconstructions/?igsh=MWRvNTluc3hrMG53ZQ%3D%3D#", label: "Instagram", icon: "IG" },
  { href: "https://facebook.com", label: "Facebook", icon: "FB" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "IN" },
];

const footerLinks = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/designs", label: "Designs" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream h-60 flex items-center">
      <div className="w-full px-16 md:px-24 lg:px-32">
        <div className="w-full">
          {/* Main Footer Content */}
          <div className="flex justify-between items-center w-full">
            {/* Brand */}
            <div className="flex items-center gap-4 ml-8 md:ml-16">
              <Image
                src="/white_green_trans.svg"
                alt="Auriga Homes"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <p className="text-cream/80 text-xs leading-relaxed">
                Crafting exceptional spaces
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-3 text-gold">Navigate</h4>
              <ul className="space-y-1">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/80 hover:text-gold transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-3 text-gold">Connect</h4>
              <div className="space-y-1 mb-3">
                <p className="text-cream/80 text-xs">hello@aurigahomes.in</p>
                <p className="text-cream/80 text-xs">+91 89044 28450</p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all text-xs font-sans"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-right mr-8 md:mr-16">
              <p className="text-cream/60 text-xs mb-2">
                &copy; {new Date().getFullYear()} Auriga Homes
              </p>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" className="text-cream/60 hover:text-gold transition-colors text-xs">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-cream/60 hover:text-gold transition-colors text-xs">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
