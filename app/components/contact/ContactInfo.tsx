export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
          Office
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          123 Design Boulevard
          <br />
          Los Angeles, CA 90012
          <br />
          United States
        </p>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
          Get in Touch
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          <a
            href="mailto:hello@aurigahomes.com"
            className="hover:text-gold transition-colors"
          >
            hello@aurigahomes.com
          </a>
          <br />
          <a
            href="tel:+15551234567"
            className="hover:text-gold transition-colors"
          >
            +1 (555) 123-4567
          </a>
        </p>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
          Office Hours
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          Monday – Friday
          <br />
          9:00 AM – 6:00 PM PST
        </p>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
          Follow Us
        </h3>
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/80 hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/80 hover:text-gold transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/80 hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
