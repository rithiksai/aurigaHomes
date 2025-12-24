import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types/blog";
import { getStrapiMediaUrl } from "@/lib/api/strapi";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const featuredImage = post.featuredImage?.[0];
  const imageUrl = getStrapiMediaUrl(featuredImage?.url);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-sage/20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={featuredImage?.alternativeText || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sage/60 font-display text-lg">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-forest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <span className="text-cream font-display text-xl md:text-2xl tracking-wide text-center">
            Read More
          </span>
        </div>
      </div>
      <div>
        <p className="text-charcoal/60 text-sm uppercase tracking-wider mb-2">
          {formattedDate}
        </p>
        <h3 className="text-xl font-display tracking-wide mb-2 group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-charcoal/70 text-sm line-clamp-2">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
