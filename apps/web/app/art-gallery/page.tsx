import type { Metadata } from "next"
import ArtGalleryClient from "./art-gallery-client"

export const metadata: Metadata = {
  title: "Art Gallery | Altarflow",
  description:
    "Explore our collection of AI-generated Christian art. Free to use for churches, ministries, and personal projects.",
}

export default function ArtGalleryPage() {
  return <ArtGalleryClient />
}
