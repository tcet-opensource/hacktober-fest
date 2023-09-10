import React from "react";
import faqData from "./faq-data";

const FAQSection = () => {
  return (
    <section className="px-8 my-12 text-lg font-inter lg:p-16">
      <div className="flex flex-col gap-2 mx-auto md:px-16 md:py-14 lg:w-3/4">
        <h1 className="text-3xl font-medium text-white">FAQ</h1>
        {faqData.map(({ id, question, answer }) => (
          <details
            key={id}
            className="p-1 bg-gradient-to-tr rounded-xl border border-gray-800 cursor-pointer group from-slate-800 to-slate-900"
          >
            <summary className="flex gap-2 justify-between items-center p-3 text-sm text-purple-300">
              {question}
              <img
                src="./FAQSection/arrow.svg"
                alt="down-arrow"
                className="w-4 h-4 group-open:rotate-180"
              />
            </summary>
            <div className="px-3 mb-4">
              <p className="box-content text-sm text-purple-200">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
