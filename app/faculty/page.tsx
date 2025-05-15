export default function FacultyPage() {
  return (
    <div className="py-8 px-4 md:px-24 my-0 md:my-8">
      <h1 className="text-center text-green-700 mb-8">Faculty & Staff</h1>

      <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
        Our dedicated team of scholars and educators are committed to providing quality Islamic education in a nurturing
        environment.
      </p>

      {/* Administration */}
      <section className="mb-12">
        <h2 className="section-title">Administration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-red-500">
            <h3 className="text-green-700 mb-2">Ustadha Aisha Rahman</h3>
            <p className="font-bold mb-1">Principal</p>
            <p className="mb-2">M.A. Islamic Studies, Al-Azhar University</p>
            <p>
              Ustadha Aisha has over 15 years of experience in Islamic education. She oversees all academic programs and
              administrative functions of the madrasa.
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-blue-500">
            <h3 className="text-green-700 mb-2">Ustadha Fatima Malik</h3>
            <p className="font-bold mb-1">Vice Principal</p>
            <p className="mb-2">B.A. Islamic Education, International Islamic University</p>
            <p>
              Ustadha Fatima assists the principal in academic planning and student affairs. She has been with our
              madrasa since its founding.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Faculty */}
      <section className="mb-12">
        <h2 className="section-title">Teaching Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-yellow-500">
            <h3 className="text-green-700 mb-2">Ustadha Khadija Omar</h3>
            <p className="font-bold mb-1">Quran & Tajweed Instructor</p>
            <p className="mb-2">Ijazah in Quran Recitation, Certificate in Tajweed</p>
            <p>
              Ustadha Khadija is a certified Quran teacher with ijazah in multiple recitation styles. She leads our
              Quran memorization program.
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-emerald-500">
            <h3 className="text-green-700 mb-2">Ustadha Maryam Hassan</h3>
            <p className="font-bold mb-1">Arabic Language Instructor</p>
            <p className="mb-2">M.A. Arabic Linguistics, Damascus University</p>
            <p>
              Ustadha Maryam specializes in teaching Arabic to non-native speakers. She has developed our comprehensive
              Arabic curriculum.
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-pink-500">
            <h3 className="text-green-700 mb-2">Ustadha Zaynab Ali</h3>
            <p className="font-bold mb-1">Fiqh & Islamic Studies Instructor</p>
            <p className="mb-2">B.A. Islamic Law, Medina University</p>
            <p>
              Ustadha Zaynab teaches Islamic jurisprudence and contemporary fiqh issues. She also leads workshops on
              practical application of Islamic teachings.
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-purple-500">
            <h3 className="text-green-700 mb-2">Ustadha Ruqayya Khan</h3>
            <p className="font-bold mb-1">Hadith & Seerah Instructor</p>
            <p className="mb-2">Diploma in Hadith Studies, Dar al-Hadith Institute</p>
            <p>
              Ustadha Ruqayya specializes in teaching hadith sciences and the biography of Prophet Muhammad (peace be
              upon him).
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-orange-500">
            <h3 className="text-green-700 mb-2">Ustadha Safiya Mahmood</h3>
            <p className="font-bold mb-1">Aqeedah & Islamic History Instructor</p>
            <p className="mb-2">B.A. Islamic Theology, Al-Madinah International University</p>
            <p>
              Ustadha Safiya teaches Islamic creed and history, with a focus on strengthening students' understanding of
              core Islamic beliefs.
            </p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-blue-500">
            <h3 className="text-green-700 mb-2">Ustadha Halima Yusuf</h3>
            <p className="font-bold mb-1">Junior Class Instructor</p>
            <p className="mb-2">Diploma in Islamic Education, Local Islamic Institute</p>
            <p>
              Ustadha Halima works with our youngest students, providing a strong foundation in Quran, basic Islamic
              studies, and Arabic.
            </p>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section>
        <h2 className="section-title">Support Staff</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-pink-500">
            <h3 className="text-green-700 mb-2">Sister Amina Patel</h3>
            <p className="font-bold mb-1">Administrative Assistant</p>
            <p>Sister Amina manages the office, handles inquiries, and assists with admissions and record-keeping.</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-yellow-500">
            <h3 className="text-green-700 mb-2">Sister Noor Begum</h3>
            <p className="font-bold mb-1">Librarian</p>
            <p>
              Sister Noor maintains our library collection and assists students with finding resources for their
              studies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

