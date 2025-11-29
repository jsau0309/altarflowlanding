import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBlogPostBySlug, getAllBlogPosts, urlForImage } from "@/lib/sanity"
import { format } from "date-fns"
import type { Metadata } from "next"
import { PortableText } from "@portabletext/react"

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Altarflow",
    }
  }

  return {
    title: `${post.title} - Altarflow Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Revalidate content every 60 seconds
export const revalidate = 60

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const heroImageUrl = urlForImage(post.featuredImage)
  const authorImageUrl = post.author?.image ? urlForImage(post.author.image) : null

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Header />

      <main className="pt-24 pb-20">
        {/* Full-width Hero Image */}
        {heroImageUrl && (
          <div className="w-full max-w-[1184px] mx-auto px-4 lg:px-8 mb-8">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={heroImageUrl}
                alt={post.featuredImage?.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Image Caption */}
            {post.featuredImage?.alt && (
              <p className="mt-3 text-sm text-white/50 text-center italic">
                {post.featuredImage.alt}
              </p>
            )}
          </div>
        )}

        {/* Mobile: Title and Excerpt after image */}
        <div className="lg:hidden max-w-[1184px] mx-auto px-4 mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-white leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-4 text-lg text-white/70 leading-relaxed font-serif italic">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Mobile: Author Info with dotted separator */}
        {post.author && (
          <div className="lg:hidden max-w-[1184px] mx-auto px-4 mb-8">
            <div className="flex items-start gap-4">
              {authorImageUrl && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                  <Image
                    src={authorImageUrl}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-white/80">
                  By {post.author.name}
                </p>
                {post.categories && post.categories.length > 0 && (
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">
                    {post.categories[0].title}
                  </p>
                )}
                {post.author.bio && (
                  <div className="text-sm text-white/60 leading-relaxed mt-2">
                    {typeof post.author.bio === 'string' ? (
                      <p>{post.author.bio}</p>
                    ) : (
                      <PortableText value={post.author.bio as any} />
                    )}
                  </div>
                )}
                <time
                  dateTime={post.publishedAt}
                  className="mt-3 text-sm text-white/40 block"
                >
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
              </div>
            </div>

            {/* Dotted separator */}
            <div className="border-t border-dotted border-white/30 mt-6" />
          </div>
        )}

        {/* Three-column layout (224px | 736px | 224px) - Desktop */}
        <div className="max-w-[1184px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0">
            {/* Left Sidebar - Author Info (col-span-2 = 224px) - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-2">
              <div className="lg:sticky lg:top-32 lg:pr-6">
                {post.author && (
                  <div className="flex flex-col">
                    {/* Author Avatar and Name */}
                    <div className="flex items-center gap-3 mb-3">
                      {authorImageUrl && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                          <Image
                            src={authorImageUrl}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-medium text-white/70 uppercase tracking-wide">
                          By {post.author.name}
                        </p>
                        {post.categories && post.categories.length > 0 && (
                          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                            {post.categories[0].title}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Author Bio */}
                    {post.author.bio && (
                      <div className="text-sm text-white/60 leading-relaxed mt-2 prose prose-sm prose-invert">
                        {typeof post.author.bio === 'string' ? (
                          <p>{post.author.bio}</p>
                        ) : (
                          <PortableText value={post.author.bio as any} />
                        )}
                      </div>
                    )}

                    {/* Date */}
                    <time
                      dateTime={post.publishedAt}
                      className="mt-4 text-sm text-white/40 block"
                    >
                      {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                    </time>
                  </div>
                )}
              </div>
            </aside>

            {/* Center Content (col-span-8 = 736px) */}
            <article className="lg:col-span-8 min-w-0">
              {/* Title - Desktop only */}
              <header className="hidden lg:block mb-10">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] tracking-tight">
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className="mt-6 text-xl text-white/70 leading-relaxed font-serif italic">
                    {post.excerpt}
                  </p>
                )}

                {/* Dotted separator */}
                <div className="border-t border-dotted border-white/30 mt-8" />
              </header>

              {/* Content */}
              <div className="prose prose-lg prose-invert max-w-none
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-white prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-white/80 prose-p:leading-[1.8] prose-p:mb-6 prose-p:font-serif prose-p:text-[1.125rem]
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-[#5B9BD5] prose-a:underline prose-a:underline-offset-2 prose-a:decoration-[#5B9BD5]/30 hover:prose-a:decoration-[#5B9BD5]
                prose-li:text-white/80 prose-li:leading-[1.8] prose-li:font-serif prose-li:text-[1.125rem]
                prose-blockquote:border-l-4 prose-blockquote:border-white/30 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60 prose-blockquote:font-serif
                prose-img:rounded-lg prose-img:shadow-md
              ">
                {post.content ? (
                  <PortableText value={post.content as any} />
                ) : (
                  <p className="text-white/50">No content available.</p>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-16 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium text-white/70 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Right Margin (col-span-2 = 224px) */}
            <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
