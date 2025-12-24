import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import { BlogCard } from "../components/blog/BlogCard";
import { LeatherBackground } from "../components/ui/LeatherBackground";
import { getBlogPosts } from "../lib/api/strapi";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, inspiration, and stories from Auriga Homes",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <LeatherBackground className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Heading variant="hero" className="mb-6">
              Our Blog
            </Heading>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Insights, inspiration, and stories from the world of architecture
              and design
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-charcoal/60">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </Section>
    </LeatherBackground>
  );
}
