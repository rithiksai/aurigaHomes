import { BlogPost, StrapiResponse } from "@/lib/types/blog";
import { ContactSubmission, ContactSubmissionResponse } from "@/lib/types/contact";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetchAPI<StrapiResponse<BlogPost[]>>(
      "/blog-posts?populate=featuredImage&sort=publishedAt:desc"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchAPI<StrapiResponse<BlogPost[]>>(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=featuredImage`
    );
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetchAPI<StrapiResponse<BlogPost[]>>(
      "/blog-posts?fields[0]=slug"
    );
    return response.data.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

export function getStrapiMediaUrl(url: string | undefined | null): string | null {
  if (!url) {
    return null;
  }
  if (url.startsWith("http")) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
}

export async function submitContactForm(
  data: ContactSubmission
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData?.error?.message || `Server error: ${response.status}`
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
