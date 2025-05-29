import haji from '@/public/haji.png'
import mufti from '@/public/mufti.png'

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
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 relative border-red-500">
            <h3 className="text-green-700 mb-2">Haji Abdul Qayyum</h3>
            <p className="font-bold mb-1">Manager</p>
            <p>
              Abdul Qayyum ensures smooth coordination between <br /> staff, students, and administration, and oversees logistics, <br /> maintenance, and support services.
            </p>
            <img className='w-36 aspect-square rounded absolute top-0 right-0 ring-2 ring-red-500' src={haji.src} alt="img" />
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 relative border-blue-500">
            <h3 className="text-green-700 mb-2">Mufti Ghulam Moinuddeen</h3>
            <p className="font-bold mb-1">Principal</p>
            <p>
              Ghulam Moinuddeen has over 15 years of experience <br /> in Islamic education. She oversees all academic programs <br /> and administrative functions of the madrasa.
            </p>
            <img className='w-36 aspect-square rounded absolute object-cover top-0 right-0 ring-2 ring-blue-500' src={mufti.src} alt="img" />
          </div>
        </div>
      </section>

      {/* Teaching Faculty */}
      <section className="mb-12">
        <h2 className="section-title">Teaching Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-yellow-500">
            <h3 className="text-green-700 mb-2">Alima Fazila Aliya khatoon</h3>
            <p className="font-bold mb-1">Quranic and Arabic Instructor</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-emerald-500">
            <h3 className="text-green-700 mb-2">Alima Fazila Kaneez Fatima</h3>
            <p className="font-bold mb-1">Quranic and Arabic Instructor</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-pink-500">
            <h3 className="text-green-700 mb-2">Alima Fazila Ashrafi Sahiba</h3>
            <p className="font-bold mb-1">Quranic Instructor</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-purple-500">
            <h3 className="text-green-700 mb-2">Rabiya khatoon</h3>
            <p className="font-bold mb-1">General Education</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-orange-500">
            <h3 className="text-green-700 mb-2">Naseema Khatoon</h3>
            <p className="font-bold mb-1">General Education</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-blue-500">
            <h3 className="text-green-700 mb-2">Alima Fazila Kaneez Amina</h3>
            <p className="font-bold mb-1">Quranic and Arabic Instructor</p>
          </div>

          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-green-500">
            <h3 className="text-green-700 mb-2">Alima Fazila Muskan sahiba</h3>
            <p className="font-bold mb-1">Quranic and Arabic Instructor</p>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section>
        <h2 className="section-title">Support Staff</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card rounded-xl shadow-lg rounded-l-none border-l-4 border-y-0 border-r-0 border-pink-500">
            <h3 className="text-green-700 mb-2">Mawlawi Mushtaq</h3>
            <p className="font-bold mb-1">Administrative Assistant</p>
            <p>Sister Amina manages the office, handles inquiries, and assists with admissions and record-keeping.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

