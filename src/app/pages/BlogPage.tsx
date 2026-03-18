import { Link } from "react-router";
import { blogPosts } from "../../data/blogPosts";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl mb-4">
          Growth & Tech{" "}
          <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          In-depth guides by CelestiCore on web engineering, product strategy, cloud deployment,
          and business growth. These resources are written for founders, product teams, and
          operators building scalable digital systems.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col"
            >
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

              <h2 className="text-2xl leading-tight text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>

              <div className="text-sm text-gray-500 mb-6">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readMinutes} min read</span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A020F0] to-[#8B3FD8] text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}