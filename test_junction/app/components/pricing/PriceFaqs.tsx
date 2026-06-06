"use client";
import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const PriceFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "How does the pricing structure work?",
      answer:
        "Pricing is based on a flexible model that adapts to your needs. We offer monthly, yearly, and one-time payment options to suit various requirements.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, plans can be easily upgraded or downgraded based on your usage. Changes take effect immediately without any disruption to your service.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "We offer a 30-day money-back guarantee for all our subscription plans. If you're not satisfied, you can request a full refund.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, our pricing is transparent. All charges are clearly mentioned in the invoice, and you will never be billed for any hidden fees.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes, our dedicated support team is available 24/7 to assist you with any issues or queries you may have.",
    },
  ];

  return (
    <div className="mt-10 py-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[#252B42] font-bold text-[32px] sm:text-[40px]">Pricing FAQs</h2>
        <p className="text-[#737373] text-[16px] sm:text-[20px] mt-4 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between <br className="hidden sm:block" />
          the two major realms of Classical physics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-sm flex flex-col gap-2 border border-transparent hover:border-gray-200 transition-all cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-start sm:items-center gap-2">
              {activeIndex === index ? (
                <FiChevronDown className="text-[#23A6F0] text-[25px] flex-shrink-0" />
              ) : (
                <FiChevronRight className="text-[#23A6F0] text-[25px] flex-shrink-0" />
              )}
              <h3 className="text-[#252B42] font-bold text-[16px]">
                {faq.question}
              </h3>
            </div>
            {activeIndex === index && (
              <p className="text-[#737373] text-[14px] mt-2 ml-8 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="text-[#737373] text-[16px] sm:text-[20px] text-center mt-12 sm:mt-16">
        Haven&apos;t got your answer? <Link href="/contact" className="text-[#23A6F0] hover:underline">Contact our support</Link>
      </p>
    </div>
  );
};

export default PriceFaqs;
