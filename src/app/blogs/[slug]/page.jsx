"use client";

import { useParams } from "next/navigation";

const BlogSlugPage = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="container mx-auto mt-24">
      <h1>Blog Slug Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default BlogSlugPage;
