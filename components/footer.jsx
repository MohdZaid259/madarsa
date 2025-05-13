import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-amiri text-2xl mb-4">Girls&apos; Madrasa</h3>
          <p className="mb-4">A center for Islamic education and spiritual growth</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/admission" className="hover:underline">
              Admission
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="mb-4">
            <p className="notranslate font-amiri text-xl">مدرسة البنات الإسلامية</p>
          </div>
          <p className="text-sm">© {currentYear} Girls&apos; Madrasa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

