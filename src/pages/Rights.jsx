import { CheckCircle, AlertCircle } from 'lucide-react'

export default function Rights() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Know Your Rights
      </h1>
      
      <div className="prose max-w-none">
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-0 mb-3">
            Your Rights as an International Student
          </h2>
          <p className="text-gray-700 mb-0">
            As an international student in the United States, you have the same rights to reproductive healthcare, including abortion, as U.S. citizens. Your visa status does not affect your ability to access these services.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Legal Rights in Washington, D.C.
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Abortion is Legal</h3>
                <p className="text-gray-700">
                  Abortion is legal in Washington, D.C. at all stages of pregnancy. There are no mandatory waiting periods or parental consent requirements for adults.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Privacy Protection</h3>
                <p className="text-gray-700">
                  Your medical information is protected by HIPAA (Health Insurance Portability and Accountability Act). Healthcare providers cannot share your information without your explicit consent.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">No Visa Impact</h3>
                <p className="text-gray-700">
                  Accessing reproductive healthcare, including abortion, should not affect your visa status or immigration standing. This information is confidential and clinics generally keep it confidential, though you should verify the clinic's privacy policies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Insurance Coverage</h3>
                <p className="text-gray-700">
                  Many insurance companies will cover the cost of an abortion, including <a href="https://gwdocs.com/obgyn-student-health" target="_blank" rel="noopener noreferrer">The George Washington University Student Health Insurance Plan (SHIP) through Aetna Student Health</a>. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Important Considerations
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-0">State Laws Vary</h3>
                <p className="text-gray-700 mb-0">
                  If you travel outside of D.C., be aware that abortion laws vary significantly by state. Some states have severe restrictions or bans. Always check local laws before traveling.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Informed Consent</h3>
              <p className="text-gray-700">
                You have the right to receive complete information about any medical procedure, including risks, benefits, and alternatives, in a language you understand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Right to Refuse</h3>
              <p className="text-gray-700">
                You have the right to refuse any medical treatment or procedure at any time, for any reason.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Accompaniment</h3>
              <p className="text-gray-700">
                You have the right to have a support person with you during medical appointments and procedures, if you choose.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            GWU Student Health Services
          </h2>
          <p className="text-gray-700 mb-4">
            GWU Student Health Center provides many reproductive health services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Pregnancy testing and counseling</li>
            <li>Contraception services</li>
            <li>Emergency contraception (Plan B) - available in District House (B2)/West Hall (B)</li>
            <li>STI testing and treatment</li>
            <li>Referrals to pregnancy care/gynecology services</li>
            <li>Mental health support</li>
          </ul>
          <p className="text-gray-700 mt-4">
            All services are confidential and your information will not be shared with the university administration, your home country, or immigration authorities.
          </p>
        </section>

        <div className="bg-gray-100 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Need Legal Advice?
          </h3>
          <p className="text-gray-700 mb-4">
            If you have specific legal questions about your rights or need legal assistance, consider contacting:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>GWU Student Legal Services (free for students)</li>
            <li>If/When/How Legal Helpline: 1-844-868-2812</li>
            <li>National Immigration Law Center</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
