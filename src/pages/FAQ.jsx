import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'Will accessing abortion care affect my student visa?',
          a: 'No. Accessing reproductive healthcare, including abortion, does not affect your visa status. Medical information is confidential and protected by HIPAA. Healthcare providers cannot and will not report your medical care to immigration authorities.'
        },
        {
          q: 'Is abortion legal in Washington, D.C.?',
          a: 'Yes. Abortion is legal in Washington, D.C. at all stages of pregnancy. There are no mandatory waiting periods, and adults do not need parental consent.'
        },
        {
          q: 'Do I need to tell my parents or family?',
          a: 'No. As an adult, you have the right to make your own healthcare decisions without informing your parents or family. Your medical information is confidential.'
        },
        {
          q: 'Will my school find out?',
          a: 'No. Healthcare providers cannot share your medical information with your school without your explicit written consent. Your reproductive healthcare decisions are private.'
        }
      ]
    },
    {
      category: 'Cost and Insurance',
      questions: [
        {
          q: 'How much does an abortion cost?',
          a: 'The cost varies depending on the type of procedure and how far along the pregnancy is. Medication abortion (abortion pill) typically costs $300-$800, while in-clinic procedures can range from $500-$2,000+. Many clinics offer sliding scale fees based on income, and financial assistance is available.'
        },
        {
          q: 'Does student health insurance cover abortion?',
          a: 'Many student health insurance plans do cover abortion services. Check your GWU student health insurance policy or contact the insurance provider directly. Even if your insurance doesn\'t cover it, financial assistance programs are available.'
        },
        {
          q: 'What if I can\'t afford it?',
          a: 'Financial assistance is available through abortion funds like the DC Abortion Fund and the National Abortion Federation. These organizations help cover the cost of abortion care. Don\'t let cost prevent you from getting care - reach out to these resources.'
        },
        {
          q: 'Can I use my insurance without my parents finding out?',
          a: 'If you\'re on your parents\' insurance plan, an Explanation of Benefits (EOB) may be sent to the policyholder. You can ask the clinic about self-pay options or contact abortion funds for financial assistance to maintain privacy.'
        }
      ]
    },
    {
      category: 'Medical Questions',
      questions: [
        {
          q: 'What are my options if I\'m pregnant?',
          a: 'You have three options: continue the pregnancy and parent, continue the pregnancy and choose adoption, or have an abortion. Only you can decide what\'s right for you. GWU Student Health Center and local clinics offer non-judgmental pregnancy options counseling.'
        },
        {
          q: 'What\'s the difference between medication abortion and surgical abortion?',
          a: 'Medication abortion (the abortion pill) uses pills to end a pregnancy and is available up to 11 weeks from the first day of your last period. Surgical abortion is an in-clinic procedure. Both are safe and effective. Your healthcare provider can help you decide which option is best for you.'
        },
        {
          q: 'Is abortion safe?',
          a: 'Yes. Abortion is one of the safest medical procedures. Both medication and surgical abortion have very low complication rates. Serious complications are rare, and abortion is significantly safer than continuing a pregnancy to term.'
        },
        {
          q: 'How long does it take?',
          a: 'For medication abortion, you take pills at home and the process typically takes several hours to a few days. For surgical abortion, the procedure itself takes 5-10 minutes, though you\'ll be at the clinic for a few hours total for preparation and recovery.'
        }
      ]
    },
    {
      category: 'International Student Specific',
      questions: [
        {
          q: 'What if abortion is illegal in my home country?',
          a: 'Your home country\'s laws do not apply while you\'re in the United States. You have the right to access abortion care in D.C. regardless of the laws in your home country. This information is confidential and will not be shared with your home country.'
        },
        {
          q: 'Can I travel to another state for an abortion?',
          a: 'Yes, but be aware that abortion laws vary significantly by state. Some states have severe restrictions or bans. If you need to travel, research the laws in that state first. It\'s often easier to access care in D.C. where abortion is fully legal.'
        },
        {
          q: 'What if I don\'t speak English fluently?',
          a: 'Many clinics offer interpretation services in multiple languages. You have the right to receive medical care and information in a language you understand. Call ahead to arrange for an interpreter.'
        },
        {
          q: 'Can I bring a friend or support person?',
          a: 'Yes. You have the right to bring a support person with you to appointments and procedures if you choose. Let the clinic know in advance if you\'d like someone to accompany you.'
        }
      ]
    },
    {
      category: 'Privacy and Safety',
      questions: [
        {
          q: 'Is my information confidential?',
          a: 'Yes. Your medical information is protected by HIPAA (Health Insurance Portability and Accountability Act). Healthcare providers cannot share your information without your written consent, except in very limited circumstances required by law.'
        },
        {
          q: 'What if I\'m worried about protesters at clinics?',
          a: 'Some clinics may have protesters outside. Clinics have security measures in place and often have volunteer escorts who can accompany you from your car to the entrance. You can call the clinic ahead of time to ask about their security and escort services.'
        },
        {
          q: 'Can I get abortion pills online?',
          a: 'Yes, there are legitimate telehealth services that provide medication abortion via mail. However, be cautious and use only reputable providers. Organizations like Plan C (plancpills.org) provide information about safe online options.'
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Common questions about reproductive health rights and abortion access for international students.
      </p>

      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-500 pb-2">
              {category.category}
            </h2>
            <div className="space-y-3">
              {category.questions.map((faq, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`
                const isOpen = openIndex === index
                
                return (
                  <div 
                    key={questionIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-700">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-700 mb-4">
          If you didn't find the answer you're looking for, here are some resources that can help:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>GWU Student Health Center:</strong> (202) 994-5300
          </li>
          <li>
            <strong>National Abortion Hotline:</strong> 1-800-230-7526
          </li>
          <li>
            <strong>All-Options Talkline:</strong> 1-888-493-0092
          </li>
          <li>
            <strong>Planned Parenthood Chat:</strong> Available at plannedparenthood.org
          </li>
        </ul>
      </div>
    </div>
  )
}
