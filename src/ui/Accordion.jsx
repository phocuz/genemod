import  { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    title: "What makes Genemod's consumable feature unique?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "Can I customize the research space to match the real-life space?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "What is the best practice for using the consumable feature?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  },
  {
    title: "Can I integrate the consumable feature with other features in Genemod?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-customBluee text-[30px]">Frequently Asked Questions</h1>
      <div className="space-y-4 lg:mx-auto w-auto lg:w-[1000px]">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-y-2"
          >
            <button 
              onClick={() => toggleAccordion(index)}
              className="w-full  p-4 flex justify-between items-center text-left 
                        text-customBluee transition-colors text-[20px]"
            >
              <span className="font-semibold text-[22px]">{faq.title}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {openIndex === index && (
              <div 
                className="p-4 bg-white text-customBluee 
                          animate-fade-in-down text-[18px]"
              >
                {faq.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;