import Image from "next/image"
import g1 from '@/public/gallery/g1.jpg'
import g2 from '@/public/gallery/g2.jpg'
import g3 from '@/public/gallery/g3.jpg'
import g4 from '@/public/gallery/g4.jpg'
import g5 from '@/public/gallery/g5.jpg'
import g6 from '@/public/gallery/g6.jpg'
import g7 from '@/public/gallery/g7.jpg'
import g8 from '@/public/gallery/g8.jpg'

export default function GalleryPage() {
  const galleryImages = [
    {
      src: g1,
      alt: "Madrasa main building",
      title: "Our Madrasa Building",
    },
    {
      src: g2,
      alt: "Classroom with desks",
      title: "Spacious Classroom",
    },
    {
      src: g3,
      alt: "Library with bookshelves",
      title: "Our Library",
    },
    {
      src: g4,
      alt: "Prayer hall",
      title: "Prayer Hall",
    },
    {
      src: g5,
      alt: "Outdoor garden area",
      title: "Garden Area",
    },
    {
      src: g6,
      alt: "Islamic calligraphy on wall",
      title: "Islamic Art Display",
    },
    {
      src: g7,
      alt: "Computer lab",
      title: "Computer Resources",
    },
    {
      src: g8,
      alt: "Entrance with Islamic architecture",
      title: "Madrasa Entrance",
    },
  ]

  return (
    <div className="px-24 py-8 pt-0">
      <h1 className="text-center text-green-700 mb-8">Gallery</h1>

      <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
        Take a visual tour of our madrasa facilities and environment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="border border-green-500 rounded-xl overflow-hidden">
            <div className="relative rounded-xl h-64 w-full">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="rounded-xl rounded-b-none object-cover" />
            </div>
            <h3 className="text-green-700 text-center py-3">{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}