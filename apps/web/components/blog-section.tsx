import Link from "next/link"
import { BlogCard } from "@/components/ui/blog-card"
import { getLatestBlogPosts } from "@/lib/sanity"
import { format } from "date-fns"

export async function BlogSection() {
  const posts = await getLatestBlogPosts(3)

  // If no posts from Sanity, show a message or placeholder
  if (!posts || posts.length === 0) {
    return (
      <section className="w-full py-20 lg:py-32 relative" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-16 flex flex-col gap-4 text-center lg:mb-24">
            <h2 className="text-4xl font-semibold md:text-5xl text-[rgba(242,241,237,1)]">Latest from Our Blog</h2>
            <p className="text-lg italic font-medium text-[rgba(242,241,237,1)]">
              Insights and stories to help your ministry thrive.
            </p>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-white/60">No blog posts yet. Check back soon!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-20 lg:py-32 relative" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col gap-3 sm:gap-4 text-center lg:mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold md:text-5xl text-[rgba(242,241,237,1)]">Latest from Our Blog</h2>
          <p className="text-base sm:text-lg italic font-medium text-[rgba(242,241,237,1)]">
            Insights and stories to help your ministry thrive.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mx-auto flex max-w-4xl flex-col space-y-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogCard
                title={post.title}
                date={format(new Date(post.publishedAt), "MMM dd yyyy")}
                description={post.excerpt}
              />
            </Link>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #1c1c1c)",
        }}
      />
    </section>
  )
}
