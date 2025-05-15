import Image from "next/image"
import QuoteCard from "@/components/quote-card"
import Head from "next/head"
import bg from '@/public/bg.webp'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Our Madrasa - Girls' Islamic Education</title>
        <meta
          name="description"
          content="Learn about our madrasa's history, mission, vision, values, and facilities dedicated to providing quality Islamic education for girls."
        />
      </Head>

      <div className="container-custom my-0 md:my-8 ">
        <h1 className="text-center text-green-700 mb-8">About Our Madrasa</h1>

        <QuoteCard
          arabicText="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ"
          text="Whoever takes a path in search of knowledge, Allah makes the path to Paradise easy for him."
          source="Sahih Muslim"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-green-700 mb-4">Our History</h2>
            <p className="mb-4">
              Established in 2005, our madrasa began as a small gathering of young girls eager to learn about their
              faith. What started with just 15 students and 2 teachers has now grown into a full-fledged educational
              institution serving over 200 students from our community and beyond.
            </p>
            <p>
              Over the years, we have expanded our facilities and curriculum while maintaining our commitment to
              providing quality Islamic education in a nurturing environment.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={bg.src}
              alt="Historical photo of our madrasa building"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-green-700 mb-4">Our Mission</h2>
          <div className="p-4 bg-beige-50 rounded-lg border border-beige-200 mb-4">
            <p dir="rtl" className="font-amiri text-xl leading-relaxed notranslate">
              قال الله تعالى: ﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾
            </p>
            <p className="mt-2 italic">"And say: My Lord, increase me in knowledge." - Quran (20:114)</p>
          </div>
          <p className="mb-4">
            The Girls&apos; Madrasa is dedicated to providing comprehensive Islamic education to young women, empowering
            them with knowledge, values, and skills to lead meaningful lives guided by Islamic principles.
          </p>
          <p>
            We aim to nurture well-rounded individuals who excel in both religious and worldly knowledge, and who can
            contribute positively to their families and communities.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-green-700 mb-4">Our Vision</h2>
          <p dir="rtl" className="font-amiri text-xl mb-4 notranslate">
            أن نكون مركزًا للتميز في التعليم الإسلامي للفتيات، معروفًا بتخريج طالبات يجسدن القيم الإسلامية، ويظهرن شخصية
            قوية، ويخدمن كقدوة إيجابية في المجتمع
          </p>
          <p>
            To be a center of excellence in Islamic education for girls, recognized for producing graduates who embody
            Islamic values, demonstrate strong character, and serve as positive role models in society.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-green-700 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Excellence in Education:</strong> Commitment to high standards in teaching and learning
            </li>
            <li>
              <strong>Islamic Ethics:</strong> Adherence to Islamic principles in all aspects of our institution
            </li>
            <li>
              <strong>Inclusivity:</strong> Welcoming students from diverse backgrounds and circumstances
            </li>
            <li>
              <strong>Community Service:</strong> Encouraging students to give back to their communities
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Regularly evaluating and enhancing our programs
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-700 mb-4">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-pink-500">
              <h3 className="text-green-700 mb-3">Learning Spaces</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                قاعات الدراسة
              </p>
              <p>Spacious, well-lit classrooms equipped with comfortable seating and educational materials.</p>
            </div>
            <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-blue-500">
              <h3 className="text-green-700 mb-3">Library</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                المكتبة
              </p>
              <p>A collection of Islamic books, references, and resources for research and self-study.</p>
            </div>
            <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-emerald-500">
              <h3 className="text-green-700 mb-3">Prayer Hall</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                قاعة الصلاة
              </p>
              <p>A dedicated space for congregational prayers and spiritual activities.</p>
            </div>
            <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-yellow-500">
              <h3 className="text-green-700 mb-3">Outdoor Area</h3>
              <p dir="rtl" className="font-amiri text-xl mb-2 notranslate">
                المساحة الخارجية
              </p>
              <p>Safe outdoor space for recreation and physical activities during breaks.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

