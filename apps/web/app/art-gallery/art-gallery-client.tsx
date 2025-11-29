"use client"

import Image from "next/image"
import { Download } from "lucide-react"

const artworks = [
  {
    id: 1,
    src: "/images/features/water-lily-pond-1.png",
    title: "Water Lily Pond",
    verse: "Consider how the wild flowers grow. They do not labor or spin.",
    reference: "Luke 12:27",
    prompt: "Monet-style water lily pond with vibrant flowers and peaceful reflections",
  },
  {
    id: 2,
    src: "/images/features/riverside-scene.png",
    title: "Riverside Peace",
    verse: "He leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:2-3",
    prompt: "Impressionist riverside scene with lush vegetation and serene water",
  },
  {
    id: 3,
    src: "/images/features/garden-archway.png",
    title: "Garden Archway",
    verse: "Enter through the narrow gate.",
    reference: "Matthew 7:13",
    prompt: "Monet-style garden archway with blooming flowers and blue sky",
  },
  {
    id: 4,
    src: "/images/features/water-lily-pond-2.png",
    title: "Lily Garden",
    verse: "See how the flowers of the field grow.",
    reference: "Matthew 6:28",
    prompt: "Impressionist water lilies with willow trees and vibrant colors",
  },
  {
    id: 5,
    src: "/images/features/vineyard-mountains.png",
    title: "Vineyard Landscape",
    verse: "I am the vine; you are the branches.",
    reference: "John 15:5",
    prompt: "Monet-style vineyard with mountains and cypress trees",
  },
  {
    id: 6,
    src: "/images/landing/bordighera-painting.jpg",
    title: "Coastal Beauty",
    verse: "The heavens declare the glory of God.",
    reference: "Psalm 19:1",
    prompt: "Mediterranean coastal scene with palm trees in impressionist style",
  },
  {
    id: 7,
    src: "/images/landing/calm-sea-painting.png",
    title: "Calm Waters",
    verse: "Peace, be still.",
    reference: "Mark 4:39",
    prompt: "Peaceful ocean scene with gentle waves and serene sky",
  },
  {
    id: 8,
    src: "/images/landing/garden-pond-painting.png",
    title: "Garden Reflection",
    verse: "Every good and perfect gift is from above.",
    reference: "James 1:17",
    prompt: "Garden pond with reflections in impressionist painting style",
  },
  {
    id: 9,
    src: "/images/landing/hero-clouds.png",
    title: "Heavenly Clouds",
    verse: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    reference: "Psalm 19:1",
    prompt: "Dramatic sky with volumetric clouds and heavenly light rays in impressionist style",
  },
  {
    id: 10,
    src: "/images/404-jesus-hillside.png",
    title: "Jesus on the Hillside",
    verse: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.",
    reference: "John 15:5",
    prompt: "Monet-style painting of Jesus and his disciples on a hillside overlooking a coastal landscape",
  },
]

export default function ArtGalleryClient() {
  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `altarflow-${title.toLowerCase().replace(/\s+/g, "-")}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      {/* Hero Section */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#1c1c1c] to-[#252525] py-16 lg:py-14">
        <div className="mx-auto max-w-[92%] lg:max-w-[85%]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white lg:text-6xl">Art Gallery</h1>
            <p className="text-lg leading-relaxed text-white/80 lg:text-xl font-serif">
              Christian art inspired by impressionist masters.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[92%] lg:max-w-[85%]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group flex flex-col overflow-hidden bg-[#252525] shadow-xl transition-transform hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={artwork.src || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Bible Verse */}
                  <div className="mb-4 flex-1 rounded-lg bg-[#1c1c1c] p-4">
                    <p className="mb-2 font-serif italic leading-relaxed text-white/90">{artwork.verse}</p>
                    <p className="text-sm font-medium text-[#5B9BD5]">{artwork.reference}</p>
                  </div>

                  {/* Download Icon */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Midjourney/Altarflow illustration
                    </p>
                    <button
                      onClick={() => handleDownload(artwork.src, artwork.title)}
                      className="text-[#5B9BD5] transition-colors hover:text-[#4A8AC4]"
                      aria-label={`Download ${artwork.title}`}
                    >
                      <Download className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Usage Info */}
          <div className="mt-16 text-center">
            <p className="text-sm text-white/60 font-light font-mono italic">
              All images created using Midjourney with carefully crafted prompts to inspire faith and beauty. All assets
              are used in Altarflow and they are free to download.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
