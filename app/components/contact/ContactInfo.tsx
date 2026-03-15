export function ContactInfo() {
  return (
    <div className="flex flex-col space-y-12">
      {/* Quote */}
      <p className="font-display italic text-white/80 text-[28px] leading-snug font-light">
        &ldquo;Every great home<br />starts with a<br />conversation.&rdquo;
      </p>

      <div className="space-y-10">
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8965A', marginBottom: '12px' }}>
            Get in Touch
          </div>
          <p className="text-white/70 text-sm leading-loose">
            <a href="mailto:hello@aurigahomes.in" className="hover:text-white transition-colors block">
              hello@aurigahomes.in
            </a>
            <a href="tel:+918904428450" className="hover:text-white transition-colors block mt-1">
              +91 89044 28450
            </a>
          </p>
        </div>

        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8965A', marginBottom: '12px' }}>
            Office Hours
          </div>
          <p className="text-white/70 text-sm leading-loose">
            Monday — Saturday<br />
            9:00 AM – 7:00 PM IST
          </p>
        </div>

        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8965A', marginBottom: '12px' }}>
            Follow Us
          </div>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/aurigaconstructions/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
