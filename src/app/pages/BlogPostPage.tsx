import { Link, Navigate, useParams } from "react-router";
import { blogPostBySlug, blogPosts } from "../../data/blogPosts";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? blogPostBySlug.get(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .filter((candidate) => candidate.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/blog" className="text-[#A020F0] hover:underline text-sm">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl leading-tight text-gray-900 mt-4 mb-4">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-purple-50 text-[#A020F0]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-5">{post.description}</p>

        <div className="text-sm text-gray-500 mb-10">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{post.readMinutes} min read</span>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl text-gray-900 mb-3">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <h3 className="text-2xl text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="bg-white border border-gray-200 rounded-2xl p-5">
                <h4 className="text-lg text-gray-900 mb-2 leading-snug">{related.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{related.description}</p>
                <Link
                  to={`/blog/${related.slug}`}
                  className="text-[#A020F0] text-sm hover:underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
