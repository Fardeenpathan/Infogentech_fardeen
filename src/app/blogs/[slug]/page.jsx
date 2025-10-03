
"use client";

import Image from "next/image";
import Icons from "@/components/ui/Icon";  
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Eye } from "lucide-react";
import SubscribeContact from "@/components/SubscribeContact";
import dayjs from "dayjs";

export default function BlogSlugPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openId, setOpenId] = useState(null);
  const faqData = [
    {
      id: 1,
      question: "What types of hosting plans do you offer?",
      answer: "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
    },
    {
      id: 2,
      question: "What is the uptime guarantee for your hosting services?",
      answer: "We guarantee an uptime of 99.9% for all our hosting services.",
    },
    {
      id: 3,
      question: "Do you provide 24/7 customer support?",
      answer: "Yes, our support team is available 24/7 via live chat, email, and phone.",
    }
  ];

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetch(`https://97fzff04-5000.inc1.devtunnels.ms/api/blogs/slug/${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError("Blog not found");
          } else {
            setError("Failed to fetch blog");
          }
          return;
        }
        
        const data = await response.json();
        
        if (data.success) {
          let content = data.data.content || '';
          if (data.data.blocks && Array.isArray(data.data.blocks)) {
            content = convertBlocksToHtml(data.data.blocks);
          }
          
          const blogData = {
            ...data.data,
            content: content,
            image: data.data.featuredImage?.url || '',
            category: data.data.category?.name || data.data.category
          };
          console.log(blogData.content, "prakash")
          setBlog(blogData);
          console.log("Fetched blog data:", blogData);
        } else {
          setError(data.message || "Failed to fetch blog");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    const convertBlocksToHtml = (blocks) => {
      if (!blocks || !Array.isArray(blocks)) return '';
      
      let html = '';
      const sortedBlocks = blocks.sort((a, b) => (a.order || 0) - (b.order || 0));
      
      sortedBlocks.forEach(block => {
        if (!block || !block.type) return;
        
        switch (block.type) {
          case 'paragraph':
            html += `<p class="mb-6">${block.data?.content || ''}</p>`;
            break;
          case 'heading':
            const level = block.data?.level || 2;
            html += `<h${level} class="font-semibold text-5xl mb-8">${block.data?.content || ''}</h${level}>`;
            break;
          case 'list':
            if (block.data?.style === 'ordered') {
              html += '<ol>';
              block.data.items?.forEach(item => {
                html += `<li>${item}</li>`;
              });
              html += '</ol>';
            } else {
              html += '<ul>';
              block.data.items?.forEach(item => {
                html += `<li>${item}</li>`;
              });
              html += '</ul>';
            }
            break;
          case 'image':
            html += `<img src="${block.data?.url || ''}" alt="${block.data?.caption || ''}" style="max-width: 100%; height: auto;" />`;
            if (block.data?.caption) {
              html += `<p style="text-align: center; font-style: italic; margin-top: 8px;">${block.data.caption}</p>`;
            }
            break;
          case 'quote':
            html += `<blockquote style="border-left: 4px solid #ddd; padding-left: 16px; margin: 16px 0; font-style: italic;">${block.data?.text || ''}</blockquote>`;
            break;
          default:
            if (block.data?.content) {
              html += `<p>${block.data.content}</p>`;
            }
        }
      });
      
      return html;
    };

    fetchBlog();
  }, [slug]);

  const toggleFAQ = (id) => {
    setOpenId(prevId => prevId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-24 px-10">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-24 px-10">
        <div className="flex justify-center items-center flex-col min-h-[400px]">
          <h1 className="text-2xl font-bold text-red-500 mb-4">{error}</h1>
          <Link href="/blogs" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto mt-24 px-10">
        <div className="flex justify-center items-center flex-col min-h-[400px]">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Link href="/blogs" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-24 text-wrap px-10">
      <div className="mb-8">
        <Link href="/blogs" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {blog.category && (
            <span className="flex items-center gap-1">
              <Tag size={16} />
              {blog.category}
            </span>
          )}
        </div>
         <h1 className="font-avalors text-[24px] font-normal leading-[100%] tracking-[0.03em] mt-6 text-center text-primary">
          PUBLISHED {dayjs(blog.createdAt).format('DD MMM YYYY')}
           
        </h1>
        <h1 className="font-avalors text-[32px] font-normal leading-[100%] tracking-[0.03em] mt-6 text-center">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="font-jost font-medium text-lg leading-6 text-center align-middle mt-8 max-w-4xl">
            {blog.excerpt}
          </p>
        )}

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1400}
            height={460}
            className="mt-20 rounded-2xl h-[560px] object-cover"
          />
        )}

        <div 
          className="mt-18 font-kumbh-sans text-[20px] leading-[30px] max-w-4xl w-full prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
          
        />

        <div className="text-[#82828C] mt-12 border-2 container mx-auto px-10"></div>
      </div>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16">
          <h2 className="font-jost text-[30px] font-normal leading-[38px] text-primary mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <Link 
                key={relatedBlog._id} 
                href={`/blogs/${relatedBlog.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {relatedBlog.image && (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={14} />
                    {formatDate(relatedBlog.createdAt)}
                    {relatedBlog.category && (
                      <>
                        <span>•</span>
                        <span className="text-primary">{relatedBlog.category}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-jost text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  {relatedBlog.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedBlog.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-jost text-[30px] font-normal leading-[38px] text-primary">
          FAQs
        </h2>
        <div className="rounded-lg">
          {faqData.map((faq) => (
            <div key={faq.id} className="border-b border-[#0A071B]/10 linearGradientFaq mb-2">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div>{faq.question}</div>
                <div className="cursor-pointer">
                  <Icons name={openId === faq.id ? "Minus" : "Add"} />
                </div>
              </button>
              {openId === faq.id && (
                <div className="answer flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold focus:outline-none p-5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <SubscribeContact />
    </div>
  );
}