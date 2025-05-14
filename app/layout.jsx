import { Amiri, Lato } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Girls' Madrasa - Islamic Education for Young Women",
  description:
    "A center for Islamic education providing quality Quranic studies, Arabic language, and Islamic sciences for girls in a nurturing environment.",
  keywords: "girls madrasa, islamic education, quran memorization, islamic studies for girls, arabic language learning",
  openGraph: {
    title: "Girls' Madrasa - Islamic Education for Young Women",
    description:
      "A center for Islamic education providing quality Quranic studies, Arabic language, and Islamic sciences for girls in a nurturing environment.",
    url: "https://girlsmadrasa.org",
    siteName: "Girls' Madrasa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Girls' Madrasa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girls' Madrasa - Islamic Education for Young Women",
    description:
      "A center for Islamic education providing quality Quranic studies, Arabic language, and Islamic sciences for girls in a nurturing environment.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://girlsmadrasa.org",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent Google Translate from translating our Arabic text */}
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${amiri.variable} ${lato.variable} font-sans bg-beige-50 text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-[url('/bg.jpg')] bg-fixed " >{children}</main>
          <Footer />
        </div>

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Girls' Madrasa",
              description:
                "A center for Islamic education providing quality Quranic studies, Arabic language, and Islamic sciences for girls.",
              url: "https://girlsmadrasa.org",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Islamic Education Street",
                addressLocality: "Rural Town",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              telephone: "+1-555-123-4567",
              email: "info@girlsmadrasa.org",
            }),
          }}
        />
      </body>
    </html>
  )
}