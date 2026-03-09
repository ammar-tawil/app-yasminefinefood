import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "For wholesale supply, our standard MOQ is 1 pallet, which can be mixed with various products. For retail chains and private label manufacturing, minimums depend on the product and packaging requirements. Please contact us for a customized quote."
  },
  {
    question: "Do you offer private label services?",
    answer: "Yes, we specialize in end-to-end private label services. We connect you with certified international manufacturers to develop products under your own brand, handling everything from sourcing to compliance and packaging."
  },
  {
    question: "Are your products compliant with Australian Food Standards?",
    answer: "Absolutely. We ensure that all imported products meet the strict FSANZ (Food Standards Australia New Zealand) regulations, including accurate labeling, ingredient compliance, and stringent safety checks."
  },
  {
    question: "What certifications do your partner manufacturers hold?",
    answer: "We strictly partner with manufacturers who hold internationally recognized certifications such as HACCP, ISO 22000, BRC, or IFS, depending on the facility and the product type."
  },
  {
    question: "How long does shipping and importing take?",
    answer: "Standard sea freight from the Middle East to Australia typically takes between 4-6 weeks. Production lead times vary depending on the order scale and private labeling requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          <span className="section-script">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="faq__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {openIndex === index ? (
                      <path d="M5 12h14" />
                    ) : (
                      <>
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </>
                    )}
                  </svg>
                </span>
              </button>
              <div
                className="faq__answer"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
