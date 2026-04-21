import { Link } from 'react-router-dom'
import { BookOpen, Shield, HelpCircle, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Health & Wellness Resource
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A resource to help international students at GWU understand their healthcare rights and access support services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link
            to="/rights"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500"
          >
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Know Your Rights
            </h2>
            <p className="text-gray-600">
              Understand your legal rights as an international student regarding healthcare access and privacy.
            </p>
          </Link>

          <Link
            to="/resources"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500"
          >
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Resources
            </h2>
            <p className="text-gray-600">
              Find local healthcare providers, support services, and financial assistance programs.
            </p>
          </Link>

          <Link
            to="/faq"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500"
          >
            <HelpCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              FAQ
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about healthcare access and student visa considerations.
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support & Information
          </h2>
          <p className="text-gray-700 mb-4">
            Navigating healthcare as an international student can be challenging, especially when dealing with unfamiliar systems and regulations. This resource provides accurate, confidential information to help you make informed decisions about your health and wellbeing.
          </p>
          <p className="text-gray-700 mb-4">
            We understand that students come from diverse backgrounds and cultures. Our goal is to provide non-judgmental information about all available healthcare options, respecting your personal values and circumstances.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
            <p className="text-sm text-gray-700">
              <strong>Privacy & Confidentiality:</strong> All healthcare information is protected by law. Your medical decisions are private and will not be shared with your school, family, or home country without your explicit consent.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Need to Talk to Someone?
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Support is available. Healthcare professionals can provide information and answer questions in a safe, non-judgmental environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:202-994-5300"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              GWU Student Health: (202) 994-5300
            </a>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
