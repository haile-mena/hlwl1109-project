import { BookOpen, ExternalLink } from 'lucide-react'

export default function Sources() {
  const sources = [
    {
      category: 'Legal Information & Privacy Rights',
      items: [
        {
          title: 'HIPAA Privacy Rule and Reproductive Health',
          organization: 'U.S. Department of Health & Human Services',
          url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/phi-reproductive-health/index.html',
          description: 'Federal guidance on privacy protections for reproductive health information under HIPAA'
        },
        {
          title: 'What to Know and Do About Abortion Access in DC',
          organization: 'ACLU of the District of Columbia',
          url: 'https://www.acludc.org/news/what-know-and-do-about-abortion-access-dc/',
          description: 'Legal information about abortion rights and access in Washington, D.C.'
        },
        {
          title: 'Consumer Alert: Questions and Answers on Abortion Care',
          organization: 'DC Office of the Attorney General',
          url: 'https://oag.dc.gov/release/consumer-alert-questions-and-answers-abortion-care',
          description: 'Official guidance on abortion care rights and protections in D.C.'
        },
        {
          title: 'District of Columbia Abortion Policies',
          organization: 'Guttmacher Institute',
          url: 'https://states.guttmacher.org/policies/dc/abortion-policies',
          description: 'Comprehensive overview of D.C. abortion laws and policies'
        }
      ]
    },
    {
      category: 'GWU Health Services',
      items: [
        {
          title: 'GWU Counseling and Psychological Services',
          organization: 'The George Washington University',
          url: 'https://healthcenter.gwu.edu/counseling-and-psychological-services',
          description: 'Mental health support and counseling services for GWU students'
        },
        {
          title: 'GWU Gynecologic Health Services',
          organization: 'The George Washington University',
          url: 'https://healthcenter.gwu.edu/gynecologic-health',
          description: 'Gynecologic health services available at GWU Student Health Center'
        },
        {
          title: 'GWU Student Health Insurance - OB/GYN Coverage',
          organization: 'The George Washington University',
          url: 'https://gwdocs.com/obgyn-student-health',
          description: 'Information about OB/GYN and reproductive health coverage under GWU student health insurance'
        }
      ]
    },
    {
      category: 'Local Abortion Care Providers',
      items: [
        {
          title: 'Carol Whitehill Moses Center - Abortion Services',
          organization: 'Planned Parenthood of Metropolitan Washington, D.C.',
          url: 'https://www.plannedparenthood.org/health-center/district-of-columbia/washington/20002/carol-whitehill-moses-center-4221-90230/abortion',
          description: 'Abortion services at the Carol Whitehill Moses Center in Washington, D.C.'
        },
        {
          title: 'Carol Whitehill Moses Center - General Services',
          organization: 'Planned Parenthood of Metropolitan Washington, D.C.',
          url: 'https://www.plannedparenthood.org/health-center/district-of-columbia/washington/20002/carol-whitehill-moses-center-4221-90230',
          description: 'Comprehensive reproductive health services including contraception, STI testing, and pregnancy care'
        },
        {
          title: 'DuPont Clinic',
          organization: 'DuPont Clinic',
          url: 'https://dupontclinic.com/#',
          description: 'Private abortion care clinic in Washington, D.C.'
        }
      ]
    },
    {
      category: 'Financial Assistance',
      items: [
        {
          title: 'DC Abortion Fund',
          organization: 'DC Abortion Fund',
          url: 'https://dcabortionfund.org/',
          description: 'Financial assistance for abortion care for D.C. residents and those seeking care in D.C.'
        },
        {
          title: 'Women\'s Reproductive Rights Assistance Project (WRRAP)',
          organization: 'WRRAP',
          url: 'https://wrrap.org/',
          description: 'National organization providing financial assistance for abortion care and emergency contraception'
        },
        {
          title: 'National Abortion Federation Hotline',
          organization: 'National Abortion Federation',
          url: 'https://nationalabortionfederation.org/naf-hotline/',
          description: 'Hotline providing information, referrals, and financial assistance for abortion care'
        }
      ]
    },
    {
      category: 'International Student-Specific Information',
      items: [
        {
          title: 'Abortion Care and Immigration Status',
          organization: 'Hey Jane',
          url: 'https://www.heyjane.com/articles/abortion-care-immigration-status',
          description: 'Information about accessing abortion care as an international student or immigrant'
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Sources & References
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        This website compiles information from trusted medical, legal, and advocacy organizations. All sources are regularly reviewed for accuracy and currency.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          About Our Sources
        </h2>
        <p className="text-gray-700 mb-3">
          The information on this website is compiled from reputable medical organizations, government agencies, legal resources, and advocacy groups. We prioritize:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Evidence-based medical information from professional healthcare organizations</li>
          <li>Current legal information from government sources and legal advocacy groups</li>
          <li>Verified resources from established reproductive health organizations</li>
          <li>Local D.C. resources specific to the GWU community</li>
        </ul>
        <p className="text-gray-700 mt-3 text-sm">
          <strong>Note:</strong> This website provides educational information and should not replace professional medical or legal advice. Always consult with qualified healthcare providers and legal professionals for personalized guidance.
        </p>
      </div>

      <div className="space-y-10">
        {sources.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b-2 border-primary-500 pb-2">
              <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((source, sourceIndex) => (
                <div 
                  key={sourceIndex}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {source.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">
                    {source.organization}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {source.description}
                  </p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Visit Website
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Additional Research & References
        </h2>
        <p className="text-gray-700 mb-4">
          For a comprehensive list of academic sources and research supporting the information on this website, please refer to our health campaign research paper.
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Last Updated:</strong> May 2026
        </p>
        <p className="text-gray-700 text-sm mt-2">
          If you notice any outdated information or have suggestions for additional sources, please contact the GWU Student Health Center.
        </p>
      </div>
    </div>
  )
}
