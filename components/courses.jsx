import Head from "next/head"

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses & Curriculum - Girls' Madrasa</title>
        <meta
          name="description"
          content="Explore our comprehensive Islamic curriculum including Quranic studies, Islamic sciences, Arabic language, and character development for girls."
        />
      </Head>

      <div className="md:px-24 px-4 py-6 space-y-6">
        <h1 className="text-center text-green-700 ">Courses & Curriculum</h1>

        <p className="text-xl  max-w-3xl mx-auto text-center">
          Our curriculum is designed to provide a comprehensive Islamic education, combining traditional knowledge with
          practical application.
        </p>

        <div className="p-6 bg-beige-50 rounded-lg border border-beige-200  max-w-3xl mx-auto">
          <p dir="rtl" className="font-amiri text-xl text-center leading-relaxed notranslate">
            قال رسول الله صلى الله عليه وسلم: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
          </p>
          <p className="mt-2 italic text-center">
            "The best among you are those who learn the Quran and teach it." - Sahih Al-Bukhari
          </p>
        </div>

        <div className="space-y-12">
          {/* Quranic Studies */}
          <section>
            <h2 className="text-green-700 mb-4 mt-16 border-b border-beige-200 pb-2">
              Quranic Studies{" "}
              <span dir="rtl" className="font-amiri notranslate">
                (دراسات قرآنية)
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-red-500">
                <h3 className="text-green-700 mb-2">
                  Quran Memorization (Hifz){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (حفظ القرآن)
                  </span>
                </h3>
                <p className="mb-2">
                  A structured program for memorizing the Holy Quran with proper retention techniques.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Memorization methodology</li>
                  <li>Revision techniques</li>
                  <li>Tajweed application</li>
                  <li>Understanding of memorized portions</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-blue-500">
                <h3 className="text-green-700 mb-2">
                  Tajweed (Rules of Recitation){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (تجويد)
                  </span>
                </h3>
                <p className="mb-2">Learning the correct pronunciation and recitation of the Quran.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Articulation points of letters</li>
                  <li>Rules of recitation</li>
                  <li>Practical application</li>
                  <li>Recitation styles</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-green-500">
                <h3 className="text-green-700 mb-2">
                  Tafsir (Quranic Interpretation){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (تفسير)
                  </span>
                </h3>
                <p className="mb-2">Understanding the meaning and context of Quranic verses.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Word-by-word translation</li>
                  <li>Contextual understanding</li>
                  <li>Historical background</li>
                  <li>Practical lessons</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Islamic Sciences */}
          <section>
            <h2 className="text-green-700 mb-4 mt-16 border-b border-beige-200 pb-2">
              Islamic Sciences{" "}
              <span dir="rtl" className="font-amiri notranslate">
                (العلوم الإسلامية)
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="card shadow-lg rounded-xl border-x-4 border-y-0 border-yellow-500">
                <h3 className="text-green-700 mb-2">
                  Hadith Studies{" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (دراسات الحديث)
                  </span>
                </h3>
                <p className="mb-2">Study of the sayings and actions of Prophet Muhammad (peace be upon him).</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Collections of authentic hadith</li>
                  <li>Understanding the chain of narration</li>
                  <li>Practical application of hadith</li>
                  <li>Historical context</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-x-4 border-y-0 border-pink-500">
                <h3 className="text-green-700 mb-2">
                  Fiqh (Islamic Jurisprudence){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (فقه)
                  </span>
                </h3>
                <p className="mb-2">Understanding Islamic laws and their application in daily life.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Purification and prayer</li>
                  <li>Fasting and zakat</li>
                  <li>Family law</li>
                  <li>Contemporary issues</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-x-4 border-y-0 border-purple-500">
                <h3 className="text-green-700 mb-2">
                  Aqeedah (Islamic Creed){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (عقيدة)
                  </span>
                </h3>
                <p className="mb-2">Study of Islamic beliefs and theology.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pillars of faith</li>
                  <li>Divine attributes</li>
                  <li>Prophets and messengers</li>
                  <li>Day of Judgment</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-x-4 border-y-0 border-emerald-500">
                <h3 className="text-green-700 mb-2">
                  Seerah (Prophetic Biography){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (سيرة)
                  </span>
                </h3>
                <p className="mb-2">Study of the life and character of Prophet Muhammad (peace be upon him).</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Early life and prophethood</li>
                  <li>Migration and establishment of Islamic state</li>
                  <li>Battles and treaties</li>
                  <li>Character and personal conduct</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Arabic Language */}
          <section>
            <h2 className="text-green-700 mb-4 mt-16 border-b border-beige-200 pb-2">
              Arabic Language{" "}
              <span dir="rtl" className="font-amiri notranslate">
                (اللغة العربية)
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-orange-500">
                <h3 className="text-green-700 mb-2">
                  Arabic Grammar (Nahw){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (نحو)
                  </span>
                </h3>
                <p className="mb-2">Study of Arabic sentence structure and grammatical rules.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Parts of speech</li>
                  <li>Sentence construction</li>
                  <li>Grammatical analysis</li>
                  <li>Practical application</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-blue-500">
                <h3 className="text-green-700 mb-2">
                  Arabic Morphology (Sarf){" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (صرف)
                  </span>
                </h3>
                <p className="mb-2">Study of word formation and derivation in Arabic.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Verb forms and patterns</li>
                  <li>Noun derivation</li>
                  <li>Irregular forms</li>
                  <li>Vocabulary building</li>
                </ul>
              </div>

              <div className="card shadow-lg rounded-xl border-y-4 border-x-0 border-yellow-500">
                <h3 className="text-green-700 mb-2">
                  Conversational Arabic{" "}
                  <span dir="rtl" className="font-amiri notranslate">
                    (المحادثة العربية)
                  </span>
                </h3>
                <p className="mb-2">Practical speaking and listening skills for everyday communication.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Common expressions</li>
                  <li>Dialogue practice</li>
                  <li>Listening comprehension</li>
                  <li>Vocabulary development</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}