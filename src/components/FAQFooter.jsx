import React, { useState } from 'react';
import HeaderPattern from '../assets/Headerpatternleft.svg';
import faqbutton from '../assets/faqbutton.svg';


const faqsData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
    answer: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
    answer: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
  }
];

const FAQSection = () => {
  const [openFaqId, setOpenFaqId] = useState(faqsData[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-[Aclonica]"> 
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ Items */}
          <div className="space-y-4">
            {faqsData.map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-lg transition-all duration-300 ${
                  openFaqId === faq.id ? 'shadow-lg border border-gray-100' : 'shadow-sm border border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className={`text-gray-900 ${openFaqId === faq.id ? 'font-semibold' : ''}`}>
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-200 ${openFaqId === faq.id ? 'rotate-180 text-orange-500' : 'text-gray-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaqId === faq.id && (
                  <div className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - FAQ Header */}
          <div className="md:pl-12">
            <div className="md:sticky md:top-8">
          <h2 className="text-[#EE7A2B] text-[20px] tracking-[0.4em] uppercase mb-3">
           FAQ
            </h2>
              <h1 className="text-4xl text-gray-800 mb-6 leading-tight">
                Find answers to common queries about our products and services.
              </h1>
              <div className="flex items-center gap-4 mb-8">
                
               <img 
            src={HeaderPattern} 
            alt="pattern" 
             className="w-[550px] h-20" 
              />
            
              </div>
              <div className="relative inline-block">
                <img src={faqbutton} alt="faqbutton" className="w-[180px] h-10 -ml-3" />
                             
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
