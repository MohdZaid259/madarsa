import { Amiri, Lato } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Wrapper from '@/components/wrapper'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent Google Translate from translating our Arabic text */}
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${amiri.variable} ${lato.variable} font-sans bg-beige-50 text-gray-800`}>
        <Wrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-[url('/bg.jpg')] bg-fixed " >{children}</main>
            <Footer />
          </div>
        </Wrapper>
      </body>
    </html>
  )
}