"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
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
          className="block text-sm uppercase tracking-wider text-charcoal/70 mb-2"
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
          className="w-full border-b border-sage/30 focus:border-gold outline-none py-3 bg-transparent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm uppercase tracking-wider text-charcoal/70 mb-2"
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
          className="w-full border-b border-sage/30 focus:border-gold outline-none py-3 bg-transparent transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm uppercase tracking-wider text-charcoal/70 mb-2"
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
          className="w-full border-b border-sage/30 focus:border-gold outline-none py-3 bg-transparent resize-none transition-colors"
          placeholder="Tell us about your project..."
        />
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}
        </Button>
      </div>

      {submitted && (
        <p className="text-gold text-sm">
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
    </form>
  );
}
