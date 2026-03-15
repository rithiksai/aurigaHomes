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
      <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[rgba(184,150,90,0.08)]">
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
            <span className="text-[#B8965A]/50 font-display text-lg">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#0D0C0B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <span className="text-white font-display text-xl md:text-2xl tracking-wide text-center">
            Read More
          </span>
        </div>
      </div>
      <div>
        <p className="text-[#B8965A] text-sm uppercase tracking-wider mb-2">
          {formattedDate}
        </p>
        <h3 className="text-xl font-display tracking-wide mb-2 text-[#161412] group-hover:text-[#B8965A] transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-[#4A443C] text-sm line-clamp-2">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
