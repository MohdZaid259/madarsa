import Image from "next/image"
import Link from "next/link"
import QuoteCard from "@/components/quote-card"
import Head from "next/head"
import Contact from '@/components/contact.jsx' 
import Courses from '@/components/courses.jsx'
import Gallery from '@/components/gallary.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Girls' Madrasa - Islamic Education for Young Women</title>
        <meta
          name="description"
          content="A center for Islamic education providing quality Quranic studies, Arabic language, and Islamic sciences for girls in a nurturing environment."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-beige-100 py-12 md:py-[88px]">
        <div className="container-custom text-center">
          <h1 className="text-green-700 mb-6">Welcome to Girls&apos; Madrasa</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            A place of learning, spirituality, and growth for young Muslim women
          </p>
          <p dir="rtl" className="font-amiri text-2xl md:text-3xl mb-8 max-w-3xl mx-auto notranslate">
            مدرسة البنات - مكان للتعلم والروحانية والنمو للشابات المسلمات
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/admission" className="btn-primary rounded-xl">
              Apply for Admission
            </Link>
            <Link href="/about" className="btn-secondary rounded-xl">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container-custom">
        <QuoteCard
          arabicText="طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
          text="Seeking knowledge is an obligation upon every Muslim."
          source="Prophet Muhammad (peace be upon him)"
        />
      </section>

      {/* Programs Overview */}
      <section className="bg-beige-100 py-8 pt-6 mb-8">
        <div className="px-32 py-8">
          <h1 className="section-title text-5xl py-4">Our Programs</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card rounded-xl">
              <h3 className="text-green-700 mb-3">Quranic Studies</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                دراسات قرآنية
              </p>
              <p>Memorization, recitation, and understanding of the Holy Quran with proper tajweed.</p>
            </div>
            <div className="card rounded-xl">
              <h3 className="text-green-700 mb-3">Islamic Sciences</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                العلوم الإسلامية
              </p>
              <p>Study of Hadith, Fiqh, Aqeedah, and Islamic history with qualified teachers.</p>
            </div>
            <div className="card rounded-xl">
              <h3 className="text-green-700 mb-3">Arabic Language</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                اللغة العربية
              </p>
              <p>Comprehensive Arabic language program to understand Islamic texts in their original form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses page */}
      <Courses/>

      {/* Call to Action */}
      <section className="container-custom mt-8 text-center">
        <h2 className="section-title">Join Our Community</h2>
        <p className="max-w-3xl mx-auto mb-4 text-xl">
          We welcome dedicated students who are eager to learn and grow in their faith. Applications for the new
          academic year are now open.
        </p>
        <p dir="rtl" className="font-amiri text-2xl max-w-3xl mx-auto mb-8 notranslate">
          نرحب بالطالبات المتفانيات اللواتي يتطلعن إلى التعلم والنمو في إيمانهن
        </p>
      </section>

      {/* Gallery */}
      <Gallery/>

      {/* Contact page*/}
      <Contact/>
    </>
  )
}

