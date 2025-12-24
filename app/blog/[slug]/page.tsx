import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import { Button } from "../../components/ui/Button";
import { BlocksRenderer } from "../../components/blog/BlocksRenderer";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getStrapiMediaUrl,
} from "../../lib/api/strapi";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const featuredImage = post.featuredImage?.[0];
  const imageUrl = getStrapiMediaUrl(featuredImage?.url);

  return (
    <>
      {/* Hero Image */}
      {imageUrl && (
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image
            src={imageUrl}
            alt={featuredImage?.alternativeText || post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
        </div>
      )}

      {/* Back Link */}
      <Section className="py-6 border-b border-sage/10">
        <Container size="narrow">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-wider text-charcoal/60 hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </Container>
      </Section>

      {/* Post Content */}
      <Section>
        <Container size="narrow">
          <article>
            {/* Post Header */}
            <header className="mb-12">
              <p className="text-gold uppercase tracking-widest text-sm mb-4">
                {formattedDate}
              </p>
              <Heading variant="h1" className="mb-6">
                {post.title}
              </Heading>
              {post.excerpt && (
                <p className="text-xl text-charcoal/70 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </header>

            {/* Post Body */}
            <div className="border-t border-sage/20 pt-12">
              <BlocksRenderer content={post.content} />
            </div>
          </article>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cream">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading variant="h2" className="mb-6">
              Ready to Start Your Project?
            </Heading>
            <p className="text-lg text-charcoal/80 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/blog" variant="secondary">
                More Articles
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
