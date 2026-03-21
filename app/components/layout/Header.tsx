"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/designs", label: "Designs" },
  { href: "/our-story", label: "Our Story" },
  { href: "/collaborations", label: "Collaborations" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[76px] flex items-center justify-between px-12 transition-shadow duration-300",
        "border-b"
      )}
      style={{
        background: "rgba(247,244,239,0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottomColor: "rgba(184,150,90,0.25)",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
          fontSize: "22px",
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: "var(--color-ink)",
          textDecoration: "none",
        }}
      >
        Auriga{" "}
        <span
          style={{
            color: "var(--color-gold)",
            fontStyle: "italic",
          }}
        >
          Homes
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-9">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                fontSize: "10.5px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-soft)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-ink-soft)";
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            style={{
              fontSize: "10.5px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-white)",
              background: "var(--color-ink)",
              padding: "11px 24px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-ink)";
            }}
          >
            Get in Touch
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden"
        style={{ color: "var(--color-ink)", background: "none", border: "none", cursor: "pointer" }}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className="md:hidden fixed inset-0 top-[76px] transition-all duration-300"
        style={{
          background: "var(--color-dark)",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          zIndex: 40,
        }}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  fontSize: "2rem",
                  color: "var(--color-cream)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-cream)";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "2rem",
                color: "var(--color-cream)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-cream)";
              }}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
