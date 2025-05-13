export default function AdmissionPage() {
  return (
    <div className="container-custom">
      <h1 className="text-center mt-8 text-green-700 mb-8">Admission Process</h1>

      <p className="text-xl mb-8 max-w-3xl mx-auto text-center">
        We welcome dedicated students who are eager to learn and grow in their faith. Follow these simple steps to apply
        for admission to our madrasa.
      </p>

      <div className="card mb-12">
        <h2 className="text-green-700 mb-6">Eligibility Criteria</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Age: 10-18 years (exceptions may be considered)</li>
          <li>Basic reading and writing skills</li>
          <li>Basic knowledge of Islamic principles</li>
          <li>Commitment to completing the program</li>
          <li>Parental/guardian support and consent</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-green-700 mb-6">Application Steps</h2>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              1
            </div>
            <div className="card flex-grow">
              <h3 className="text-green-700 mb-2">Complete Application Form</h3>
              <p className="mb-2">
                Fill out the application form with all required information about the student and family.
              </p>
              <p className="mb-2">You can obtain the form by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Downloading it from our website</li>
                <li>Collecting it in person from our office</li>
                <li>Requesting it via email or phone</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              2
            </div>
            <div className="card flex-grow">
              <h3 className="text-green-700 mb-2">Submit Required Documents</h3>
              <p className="mb-2">Along with the completed application form, please submit:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy of birth certificate</li>
                <li>Two recent passport-sized photographs</li>
                <li>Previous academic records (if applicable)</li>
                <li>Any certificates from previous Islamic studies (if applicable)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              3
            </div>
            <div className="card flex-grow">
              <h3 className="text-green-700 mb-2">Assessment Interview</h3>
              <p className="mb-2">
                Once your application is received, we will schedule an assessment interview with the student and
                parents/guardians.
              </p>
              <p>The interview will assess:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Basic Islamic knowledge</li>
                <li>Reading ability (Arabic and native language)</li>
                <li>Student's interest and motivation</li>
                <li>Family support for the student's education</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              4
            </div>
            <div className="card flex-grow">
              <h3 className="text-green-700 mb-2">Admission Decision</h3>
              <p className="mb-2">
                After the interview and assessment, we will notify you of the admission decision within two weeks.
              </p>
              <p>If accepted, you will receive:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Official acceptance letter</li>
                <li>Registration instructions</li>
                <li>Fee structure and payment information</li>
                <li>List of required supplies and materials</li>
                <li>Academic calendar</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              5
            </div>
            <div className="card flex-grow">
              <h3 className="text-green-700 mb-2">Complete Registration</h3>
              <p className="mb-2">To finalize the admission process, complete the registration by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Paying the registration fee</li>
                <li>Signing the parent/student agreement</li>
                <li>Attending the orientation session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-12">
        <h2 className="text-green-700 mb-4">Important Dates</h2>
        <ul className="space-y-3">
          <li>
            <strong>Application Period:</strong> January 15 - March 30
          </li>
          <li>
            <strong>Assessment Interviews:</strong> April 1 - April 30
          </li>
          <li>
            <strong>Admission Decisions:</strong> By May 15
          </li>
          <li>
            <strong>Registration Deadline:</strong> June 15
          </li>
          <li>
            <strong>Orientation Day:</strong> August 15
          </li>
          <li>
            <strong>Classes Begin:</strong> September 1
          </li>
        </ul>
      </div>

      <div className="card mb-12">
        <h2 className="text-green-700 mb-4">Fee Structure</h2>
        <p className="mb-4">
          Our madrasa strives to keep education affordable while maintaining quality. Financial aid is available for
          eligible families.
        </p>
        <ul className="space-y-3">
          <li>
            <strong>Application Fee:</strong> $20 (non-refundable)
          </li>
          <li>
            <strong>Registration Fee:</strong> $50 (annual, one-time)
          </li>
          <li>
            <strong>Tuition Fee:</strong> $100 per month
          </li>
          <li>
            <strong>Books and Materials:</strong> $75 per year
          </li>
        </ul>
        <p className="mt-4 text-green-700 font-bold">
          Note: No student will be denied education due to financial constraints. Please contact us to discuss financial
          aid options.
        </p>
      </div>

    </div>
  )
}

