import { MapPin, Phone, Globe, DollarSign, Heart } from 'lucide-react'

export default function Resources() {
  const clinics = [
    {
      name: 'Carol Whitehill Moses Center of Washington, DC',
      address: '1225 4th Street NE, Washington, DC 20002',
      phone: '(202) 347-8512',
      website: 'https://www.plannedparenthood.org/health-center/district-of-columbia/washington/20002/carol-whitehill-moses-center-4221-90230',
      services: ['Abortion services', 'Birth control', 'STI testing', 'Pregnancy testing & planning']
    },
    {
      name: 'DuPont Clinic',
      address: '1120 19th Street NW, Washington, DC 20036',
      phone: '(202) 844-2004',
      website: 'https://dupontclinic.com/',
      services: ['Abortion services', 'Contraception counseling', 'Private waiting rooms']
    },
    {
      name: 'GWU Student Health Center',
      address: '800 21st Street, NW Washington, DC 20052',
      phone: '(202) 994-5300',
      website: 'https://healthcenter.gwu.edu',
      services: ['Pregnancy testing', 'Contraception', 'STI testing', 'Referrals', 'Counseling']
    }
  ]

  const financialResources = [
    {
      name: 'National Abortion Federation Hotline',
      description: 'Provides financial assistance and referrals',
      contact: '1-800-772-9100',
      website: 'https://nationalabortionfederation.org/naf-hotline/'
    },
    {
      name: 'DC Abortion Fund',
      description: 'Helps DC residents pay for abortion care',
      contact: '202-452-7464',
      website: 'https://dcabortionfund.org/'
    },
    {
      name: "Women's Reproductive Rights Assistance Project (WRRAP)",
      description: 'Provides financial assistance for abortion care',
      contact: 'info@wrrap.org',
      website: 'https://wrrap.org/'
    }
  ]

  const supportServices = [
    {
      name: 'All-Options Talkline',
      description: 'Free, confidential support for pregnancy, parenting, abortion, and adoption',
      contact: '1-888-493-0092',
      hours: 'Available in English and Spanish'
    },
    {
      name: 'Exhale Pro-Voice',
      description: 'After-abortion emotional support textline',
      contact: '617-749-2948',
      hours: 'Available in multiple languages'
    },
    {
      name: 'GWU Counseling and Psychological Services',
      description: 'Free mental health support for GWU students',
      contact: '(202) 994-5300',
      hours: 'Confidential, non-judgmental counseling services'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Resources
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Find clinics, financial assistance, and support services in the Washington, D.C. area.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <MapPin className="h-8 w-8 text-primary-600 mr-3" />
          Local Clinics
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {clinic.name}
              </h3>
              <div className="space-y-2 text-gray-700 text-sm mb-4">
                <p className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-gray-500" />
                  {clinic.address}
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-gray-500" />
                  <a href={`tel:${clinic.phone}`} className="hover:text-primary-600">
                    {clinic.phone}
                  </a>
                </p>
                <p className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 flex-shrink-0 text-gray-500" />
                  <a 
                    href={clinic.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 truncate"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-2">Services:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {clinic.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <DollarSign className="h-8 w-8 text-primary-600 mr-3" />
          Financial Assistance
        </h2>
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6">
          <p className="text-gray-700">
            <strong>Cost should not be a barrier.</strong> Many organizations provide financial assistance for abortion care. Don't hesitate to reach out for help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {resource.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {resource.description}
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Contact:</strong> {resource.contact}
                </p>
                <a 
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <Heart className="h-8 w-8 text-primary-600 mr-3" />
          Emotional Support Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Contact:</strong> {service.contact}
                </p>
                <p className="text-gray-600">{service.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Additional Online Resources
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <Globe className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a 
                href="https://www.abortionfinder.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                AbortionFinder.org
              </a>
              <p className="text-sm">Search for abortion providers near you</p>
            </div>
          </li>
          <li className="flex items-start">
            <Globe className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a 
                href="https://www.ineedana.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                INeedAnA.com
              </a>
              <p className="text-sm">Information about abortion pills and providers</p>
            </div>
          </li>
          <li className="flex items-start">
            <Globe className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a 
                href="https://www.plancpills.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                PlanCPills.org
              </a>
              <p className="text-sm">Information about emergency contraception</p>
            </div>
          </li>
          <li className="flex items-start">
            <Globe className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a 
                href="https://www.bedsider.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Bedsider.org
              </a>
              <p className="text-sm">Birth control information and support</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
