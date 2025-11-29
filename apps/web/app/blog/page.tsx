import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts, getAllCategories, urlForImage } from "@/lib/sanity"
import { format } from "date-fns"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Revalidate every 60 seconds
export const revalidate = 60

const POSTS_PER_PAGE = 6

interface BlogPageProps {
  searchParams: { category?: string; page?: string }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const [allPosts, sanityCategories] = await Promise.all([
    getAllBlogPosts(),
    getAllCategories(),
  ])

  const selectedCategory = searchParams.category || "all"
  const currentPage = parseInt(searchParams.page || "1", 10)

  // Filter posts by category
  const filteredPosts = selectedCategory === "all"
    ? allPosts
    : allPosts.filter((post) =>
        post.categories?.some(
          (cat) => cat.slug.current === selectedCategory
        )
      )

  // Paginate
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  // Find selected category name
  const selectedCategoryData = sanityCategories.find((c) => c.slug.current === selectedCategory)

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Header />

      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left Sidebar - Title and Filters */}
            <aside className="lg:w-64 lg:flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                {/* Title */}
                <div className="mb-8">
                  <h1 className="text-5xl font-bold text-white/40 lg:text-6xl">
                    Blog {selectedCategory !== "all" && "/"}
                  </h1>
                  {selectedCategory !== "all" && selectedCategoryData && (
                    <h2 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
                      {selectedCategoryData.title}
                    </h2>
                  )}
                </div>

                {/* Category Filters */}
                <nav className="space-y-2">
                  {/* All Posts option */}
                  <Link
                    href="/blog"
                    className={`block text-left text-lg transition-colors hover:text-white ${
                      selectedCategory === "all" ? "text-white font-medium" : "text-white/50"
                    }`}
                  >
                    All Posts
                  </Link>
                  {/* Dynamic categories from Sanity */}
                  {sanityCategories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/blog?category=${category.slug.current}`}
                      className={`block text-left text-lg transition-colors hover:text-white ${
                        selectedCategory === category.slug.current ? "text-white font-medium" : "text-white/50"
                      }`}
                    >
                      {category.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Content - Blog Grid */}
            <div className="flex-1">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-white/60 text-lg">No blog posts in this category yet.</p>
                  <Link href="/blog" className="mt-4 inline-block text-[#5B9BD5] hover:underline">
                    View all posts
                  </Link>
                </div>
              ) : (
                <>
                  <div className="grid gap-8 md:grid-cols-2">
                    {paginatedPosts.map((post) => {
                      const imageUrl = urlForImage(post.featuredImage)
                      const authorImageUrl = post.author?.image ? urlForImage(post.author.image) : null

                      return (
                        <Link
                          key={post._id}
                          href={`/blog/${post.slug.current}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col overflow-hidden rounded-lg bg-[#252525] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                        >
                          {/* Image */}
                          <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-[#1c1c1c]">
                            {imageUrl ? (
                              <Image
                                src={imageUrl}
                                alt={post.featuredImage?.alt || post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <span className="text-white/20 text-6xl font-serif">{post.title.charAt(0)}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-1 flex-col p-6">
                            {/* Category & Date */}
                            <div className="mb-3 flex items-center justify-between text-sm">
                              {post.categories && post.categories.length > 0 && (
                                <span className="font-medium text-[#5B9BD5]">
                                  {post.categories[0].title}
                                </span>
                              )}
                              <span className="text-white/40">
                                {format(new Date(post.publishedAt), "MMM d, yyyy")}
                              </span>
                            </div>

                            {/* Title */}
                            <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#5B9BD5] font-serif">
                              {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="mb-4 flex-1 text-sm text-white/60 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Author */}
                            {post.author && (
                              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                {authorImageUrl && (
                                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                      src={authorImageUrl}
                                      alt={post.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}
                                <span className="text-sm text-white/50">
                                  By {post.author.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Pagination - Only show if more than one page */}
                  {totalPages > 1 && (
                    <div className="mt-16 flex items-center justify-between rounded-lg bg-white/5 p-8">
                      {/* Previous */}
                      {currentPage > 1 ? (
                        <Link
                          href={`/blog?${selectedCategory !== "all" ? `category=${selectedCategory}&` : ""}page=${currentPage - 1}`}
                          className="group flex flex-col items-start gap-2 transition-all hover:-translate-x-2"
                        >
                          <div className="flex items-center gap-2 text-white/60 transition-colors group-hover:text-white">
                            <ArrowLeft className="h-5 w-5" />
                            <span className="text-lg">Previous</span>
                          </div>
                          <span className="text-2xl font-bold text-white">Newer posts</span>
                        </Link>
                      ) : (
                        <div />
                      )}

                      {/* Page indicator */}
                      <span className="text-white/40 text-sm">
                        Page {currentPage} of {totalPages}
                      </span>

                      {/* Next */}
                      {currentPage < totalPages ? (
                        <Link
                          href={`/blog?${selectedCategory !== "all" ? `category=${selectedCategory}&` : ""}page=${currentPage + 1}`}
                          className="group flex flex-col items-end gap-2 transition-all hover:translate-x-2"
                        >
                          <div className="flex items-center gap-2 text-white/60 transition-colors group-hover:text-white">
                            <span className="text-lg">Next</span>
                            <ArrowRight className="h-5 w-5" />
                          </div>
                          <span className="text-2xl font-bold text-white">Older posts</span>
                        </Link>
                      ) : (
                        <div />
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
