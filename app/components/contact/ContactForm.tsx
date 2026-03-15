"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api/strapi";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="text-[10px] uppercase tracking-widest text-[#4A443C] mb-2 block"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-b border-[rgba(184,150,90,0.3)] focus:border-[#B8965A] bg-transparent py-3 text-[#161412] placeholder:text-[#4A443C]/40 outline-none w-full transition-colors text-sm"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-[10px] uppercase tracking-widest text-[#4A443C] mb-2 block"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-b border-[rgba(184,150,90,0.3)] focus:border-[#B8965A] bg-transparent py-3 text-[#161412] placeholder:text-[#4A443C]/40 outline-none w-full transition-colors text-sm"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-widest text-[#4A443C] mb-2 block"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-b border-[rgba(184,150,90,0.3)] focus:border-[#B8965A] bg-transparent py-3 text-[#161412] placeholder:text-[#4A443C]/40 outline-none w-full resize-none transition-colors text-sm"
          placeholder="Tell us about your project..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#161412] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#B8965A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}
        </button>
      </div>

      {submitted && (
        <p className="text-[#B8965A] text-sm mt-3">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-3">
          {error}
        </p>
      )}
    </form>
  );
}
