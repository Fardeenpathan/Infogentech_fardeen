
import BlogClient from "./BlogClient"; 
import React from "react";

const API_BASE = "https://97fzff04-5000.inc1.devtunnels.ms/api";

async function fetchBlogBySlug(slug) {
  const res = await fetch(`${API_BASE}/blogs/slug/${slug}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.success ? data.data : null;
}

function convertBlocksToHtml(blocks = []) {
  let html = "";
  const sortedBlocks = [...blocks].sort((a,b) => (a.order||0)-(b.order||0));
  sortedBlocks.forEach(block => {
    if (!block || !block.type) return;
    switch (block.type) {
      case "paragraph":
        html += `<p class="mb-6">${block.data?.content || ""}</p>`;
        break;
      case "heading":
        const level = block.data?.level || 2;
        html += `<h${level} class="font-semibold text-5xl mb-8">${block.data?.content || ""}</h${level}>`;
        break;
      case "list":
        const isOrdered = block.data?.style === "ordered" || block.data?.style === "ol";
        if (isOrdered) {
          html += "<ol class='my-4 pl-6 list-decimal'>";
          (block.data.items || []).forEach(i => html += `<li class="mb-2">${(typeof i === "string") ? i : (i?.content||i?.text||"")}</li>`);
          html += "</ol>";
        } else {
          html += "<ul class='my-4 pl-6 list-disc'>";
          (block.data.items || []).forEach(i => html += `<li class="mb-2">${(typeof i === "string") ? i : (i?.content||i?.text||"")}</li>`);
          html += "</ul>";
        }
        break;
      case "image":
        html += `<img src="${block.data?.url || ""}" alt="${block.data?.caption || ""}" style="max-width:100%;height:auto;" />`;
        if (block.data?.caption) html += `<p style="text-align:center;font-style:italic;margin-top:8px;">${block.data.caption}</p>`;
        break;
      case "quote":
        html += `<blockquote style="border-left:4px solid #ddd;padding-left:16px;margin:16px 0;font-style:italic;">${block.data?.text || ""}</blockquote>`;
        break;
      default:
        if (block.data?.content) html += `<p>${block.data.content}</p>`;
    }
  });
  return html;
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const data = await fetchBlogBySlug(slug);
  if (!data) {
    return { title: "Blog | Infogentech", description: "Infogentech" };
  }

  const blog = data;
  const url = `https://infogentech.com/blogs/${slug}`;
  const image = blog.featuredImage?.url || "https://infogentech.com/default-og-image.png";

  return {
    title: blog.title,
    description: blog.excerpt || "",
    keywords: blog.keywords ? blog.keywords.split(",").map(k=>k.trim()) : [],
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "",
      url,
      images: image ? [image] : [],
      type: "article",
      publishedTime: blog.createdAt,
    },
    twitter: {
      card: "infogentech",
      title: blog.title,
      description: blog.excerpt || "",
      images: image ? [image] : []
    },
  };
}

export default async function Page({ params }) {
  const slug = params.slug;
  const data = await fetchBlogBySlug(slug);

  if (!data) {
    return (
      <div className="container mx-auto mt-24 px-10">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  const blog = {
    ...data,
    image: data.featuredImage?.url || "",
    content: data.blocks && Array.isArray(data.blocks) ? convertBlocksToHtml(data.blocks) : (data.content || "")
  };

  return <BlogClient blog={blog} slug={slug} />;
}
