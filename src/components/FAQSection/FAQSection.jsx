import React from "react";
import faqData from "./faq-data";

const FAQSection = () => {
  return (
    <section className="px-8 md:my-4 my-12 lg:p-16">
      <div className="flex text-lg flex-col gap-3 mx-auto md:px-16 md:py-14 lg:w-3/4">
        <h1 className="text-3xl md:text-4xl font-medium text-white font-spline">FAQ</h1>
        {faqData.map(({ id, question, answer }) => (
          <details
            key={id}
            className="rounded-xl cursor-pointer group border-1 border-b border-solid border-[#504d66]"
            style={{
              background:
                "linear-gradient(145deg, rgba(75, 72, 72, 0.30) 13.28%, rgba(187, 180, 180, 0.21) 87.52%)",
            }}
          >
            <summary className="flex gap-2 justify-between items-center px-3 py-4 md:px-8 text-indigo-300">
              {question}
              <img
                src="./FAQSection/arrow.svg"
                alt="down-arrow"
                className="w-5 h-5 group-open:rotate-180"
              />
            </summary>
            <div className="px-3 md:px-8 mb-4">
              <p className="box-content text-[#AAACCD]">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
