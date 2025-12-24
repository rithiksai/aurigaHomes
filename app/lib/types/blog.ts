export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  } | null;
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: BlocksContent;
  excerpt: string;
  featuredImage: StrapiImage[] | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi Blocks content types
export type BlocksContent = Block[];

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | ImageBlock
  | QuoteBlock
  | CodeBlock;

export interface ParagraphBlock {
  type: "paragraph";
  children: InlineNode[];
}

export interface HeadingBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InlineNode[];
}

export interface ListBlock {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemBlock[];
}

export interface ListItemBlock {
  type: "list-item";
  children: InlineNode[];
}

export interface ImageBlock {
  type: "image";
  image: StrapiImage;
  children: [{ type: "text"; text: "" }];
}

export interface QuoteBlock {
  type: "quote";
  children: InlineNode[];
}

export interface CodeBlock {
  type: "code";
  children: InlineNode[];
}

export type InlineNode = TextNode | LinkNode;

export interface TextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface LinkNode {
  type: "link";
  url: string;
  children: TextNode[];
}
