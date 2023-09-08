import React from "react";
import faqData from "./faq-data";

const FAQSection = () => {
  return (
    <section className="px-8 font-inter py-5 lg:p-16">
      <div className="flex flex-col gap-2 md:px-16 md:py-14 mx-auto lg:w-3/4">
        <h1 className="text-white font-medium text-3xl">FAQ</h1>
        {faqData.map(({ id, question, answer, isOpen }) => (
          <details
            key={id}
            open={isOpen}
            className="rounded-xl p-1 group border border-slate-800 bg-gradient-to-t from-slate-800 to-slate-900"
          >
            <summary className="flex items-center gap-2 justify-between text-purple-300 p-3 px-6 text-sm">
              {question}
              <img
                src="./FAQSection/arrow.svg"
                alt="down-arrow"
                className="h-4 w-4 md:h-3 md:w-3 group-open:rotate-180"
              />
            </summary>
            <div className="p-4">
              <p className="text-purple-200 box-content text-sm">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
