import Image from "next/image";
import type {
  BlocksContent,
  Block,
  InlineNode,
  TextNode,
  LinkNode,
} from "@/lib/types/blog";
import { getStrapiMediaUrl } from "@/lib/api/strapi";

interface BlocksRendererProps {
  content: BlocksContent;
}

export function BlocksRenderer({ content }: BlocksRendererProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((block, index) => (
        <RenderBlock key={index} block={block} />
      ))}
    </div>
  );
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-4 text-charcoal/80 leading-relaxed">
          {block.children.map((child, index) => (
            <RenderInline key={index} node={child} />
          ))}
        </p>
      );

    case "heading": {
      const headingClasses: Record<number, string> = {
        1: "text-4xl font-display tracking-wide mb-6 mt-8",
        2: "text-3xl font-display tracking-wide mb-5 mt-7",
        3: "text-2xl font-display tracking-wide mb-4 mt-6",
        4: "text-xl font-display tracking-wide mb-3 mt-5",
        5: "text-lg font-display tracking-wide mb-2 mt-4",
        6: "text-base font-display tracking-wide mb-2 mt-4",
      };
      const className = headingClasses[block.level];
      const children = block.children.map((child, index) => (
        <RenderInline key={index} node={child} />
      ));

      switch (block.level) {
        case 1:
          return <h1 className={className}>{children}</h1>;
        case 2:
          return <h2 className={className}>{children}</h2>;
        case 3:
          return <h3 className={className}>{children}</h3>;
        case 4:
          return <h4 className={className}>{children}</h4>;
        case 5:
          return <h5 className={className}>{children}</h5>;
        case 6:
          return <h6 className={className}>{children}</h6>;
        default:
          return <p className={className}>{children}</p>;
      }
    }

    case "list": {
      const listItems = block.children.map((item, index) => (
        <li key={index} className="text-charcoal/80">
          {item.children.map((child, childIndex) => (
            <RenderInline key={childIndex} node={child} />
          ))}
        </li>
      ));

      if (block.format === "ordered") {
        return (
          <ol className="list-decimal list-inside mb-4 space-y-2">
            {listItems}
          </ol>
        );
      }
      return (
        <ul className="list-disc list-inside mb-4 space-y-2">{listItems}</ul>
      );
    }

    case "image": {
      const imgUrl = getStrapiMediaUrl(block.image?.url);
      if (!imgUrl) return null;
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={imgUrl}
              alt={block.image?.alternativeText || "Blog image"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          {block.image?.alternativeText && (
            <figcaption className="text-sm text-charcoal/60 mt-2 text-center italic">
              {block.image.alternativeText}
            </figcaption>
          )}
        </figure>
      );
    }

    case "quote":
      return (
        <blockquote className="border-l-4 border-gold pl-6 my-6 italic text-charcoal/70">
          {block.children.map((child, index) => (
            <RenderInline key={index} node={child} />
          ))}
        </blockquote>
      );

    case "code":
      return (
        <pre className="bg-charcoal text-cream p-4 overflow-x-auto my-4 text-sm">
          <code>
            {block.children.map((child, index) => (
              <RenderInline key={index} node={child} />
            ))}
          </code>
        </pre>
      );

    default:
      return null;
  }
}

function RenderInline({ node }: { node: InlineNode }) {
  if (node.type === "link") {
    return (
      <a
        href={(node as LinkNode).url}
        className="text-gold hover:text-gold/80 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {(node as LinkNode).children.map((child, index) => (
          <RenderText key={index} node={child} />
        ))}
      </a>
    );
  }

  return <RenderText node={node as TextNode} />;
}

function RenderText({ node }: { node: TextNode }) {
  let text: React.ReactNode = node.text;

  if (node.bold) {
    text = <strong>{text}</strong>;
  }
  if (node.italic) {
    text = <em>{text}</em>;
  }
  if (node.underline) {
    text = <u>{text}</u>;
  }
  if (node.strikethrough) {
    text = <s>{text}</s>;
  }
  if (node.code) {
    text = (
      <code className="bg-cream px-1.5 py-0.5 text-sm font-mono">{text}</code>
    );
  }

  return <>{text}</>;
}
