import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "../lib/api/strapi";
import { getStrapiMediaUrl } from "../lib/api/strapi";
import type { BlogPost } from "../lib/types/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, inspiration, and stories from Auriga Homes",
};

const teasers = [
  {
    title: "The Case for Restraint in Modern Architecture",
    category: "Design Philosophy",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Materials That Age Beautifully",
    category: "Craftsmanship",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Designing for How You Actually Live",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85&auto=format&fit=crop",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = getStrapiMediaUrl(post.featuredImage?.[0]?.url);
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none" }} className="group">
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", marginBottom: "24px", background: "rgba(184,150,90,0.06)" }}>
        {imageUrl ? (
          <Image src={imageUrl} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" unoptimized />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-display font-light italic" style={{ fontSize: "18px", color: "rgba(184,150,90,0.4)" }}>Auriga Homes</span>
          </div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,12,11,0.7)", opacity: 0, transition: "opacity 0.4s" }} className="group-hover:opacity-100" />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }} className="group-hover:opacity-100">
          <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "white", border: "1px solid rgba(255,255,255,0.5)", padding: "10px 24px" }}>Read More →</span>
        </div>
      </div>
      <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B8965A", marginBottom: "10px" }}>{date}</div>
      <h3 className="font-display font-light" style={{ fontSize: "24px", lineHeight: 1.25, color: "#161412", marginBottom: "12px", transition: "color 0.25s" }} >{post.title}</h3>
      {post.excerpt && <p style={{ fontSize: "13px", fontWeight: 300, color: "#4A443C", lineHeight: 1.8, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>}
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const hasPosts = posts.length > 0;

  return (
    <div style={{ minHeight: "100vh", background: "#F7F4EF" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&q=90&auto=format&fit=crop"
          alt="Auriga Homes — Journal"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,12,11,0.2) 0%, rgba(13,12,11,0.75) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>Journal</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h1 className="font-display font-light" style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0, color: "white", letterSpacing: "-0.01em" }}>
            Insights &amp;<br />
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>Inspiration</em>
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginTop: "28px", maxWidth: "460px", lineHeight: 1.8, fontWeight: 300 }}>
            Stories, ideas, and perspectives from the world of architecture and design.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(184,150,90,0.8), transparent)" }} />
        </div>
      </section>

      {hasPosts ? (
        /* ── POSTS GRID ── */
        <section style={{ padding: "100px clamp(32px, 6vw, 96px)", maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", paddingBottom: "32px", borderBottom: "1px solid rgba(184,150,90,0.2)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Latest</span>
              </div>
              <h2 className="font-display font-light" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, color: "#161412" }}>
                Recent <em style={{ fontStyle: "italic", color: "#B8965A" }}>Articles</em>
              </h2>
            </div>
            <span className="font-display font-light italic" style={{ fontSize: "13px", color: "#4A443C" }}>{posts.length} articles</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px 40px" }}>
            {posts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        </section>
      ) : (
        /* ── COMING SOON ── */
        <section style={{ background: "#F7F4EF" }}>

          {/* Statement */}
          <div style={{ padding: "100px clamp(32px, 6vw, 96px)", borderBottom: "1px solid rgba(184,150,90,0.2)", textAlign: "center" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Coming Soon</span>
                <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              </div>
              <p className="font-display font-light italic" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#161412", lineHeight: 1.4, marginBottom: "32px" }}>
                &ldquo;We are crafting stories as carefully as we craft spaces. They&apos;re almost ready.&rdquo;
              </p>
              <p style={{ fontSize: "14px", fontWeight: 300, color: "#4A443C", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
                Our journal will cover architecture, design philosophy, material selection, and the stories behind the homes we build. Check back soon.
              </p>
            </div>
          </div>

          {/* Teaser cards — blurred previews of upcoming posts */}
          <div style={{ padding: "80px clamp(32px, 6vw, 96px)", maxWidth: "1440px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Upcoming</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
              {teasers.map((teaser) => (
                <div key={teaser.title} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image src={teaser.image} alt={teaser.title} fill className="object-cover" style={{ filter: "blur(2px) grayscale(20%)" }} unoptimized />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,12,11,0.6)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", marginBottom: "10px" }}>{teaser.category}</div>
                    <h3 className="font-display font-light" style={{ fontSize: "22px", color: "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>{teaser.title}</h3>
                    <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "16px", height: "1px", background: "#B8965A" }} />
                      <span style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Coming Soon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* ── SUBSCRIBE / CTA ── */}
      <section style={{ background: "#161412", padding: "100px clamp(32px, 6vw, 96px)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Stay Informed</span>
            </div>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1, color: "white", marginBottom: "20px" }}>
              Be the first to<br />
              <em style={{ fontStyle: "italic", color: "#B8965A" }}>read our stories</em>
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "400px" }}>
              We write when we have something worth saying. No noise, no newsletters for the sake of it — just ideas that matter.
            </p>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ borderBottom: "1px solid rgba(184,150,90,0.3)", paddingBottom: "16px", marginBottom: "32px" }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontSize: "15px", fontWeight: 300, color: "white", padding: "8px 0" }}
                />
              </div>
              <Link
                href="/contact"
                style={{ display: "inline-block", background: "#B8965A", color: "white", padding: "16px 40px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", alignSelf: "flex-start", transition: "background 0.3s" }}
                className="hover:bg-[#D4B483]"
              >
                Notify Me →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
