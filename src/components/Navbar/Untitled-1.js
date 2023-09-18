import faqData from "./faq-data";

const FAQSection = () => {
  return (
    <section className="px-8 my-12 lg:p-16">
      <div className="flex flex-col gap-3 mx-auto md:px-16 md:py-14 lg:w-3/4">
        <h1 className="text-4xl font-medium text-white">FAQ</h1>
        {faqData.map(({ id, question, answer }) => (
          <details
            key={id}
            className="rounded-xl cursor-pointer group border-1 border-solid border-[#170F1E]"
            style={{
              background:
                "linear-gradient(145deg, rgba(75, 72, 72, 0.30) 13.28%, rgba(187, 180, 180, 0.21) 87.52%)",
            }}
          >
            <summary className="flex gap-2 justify-between items-center px-4 md:px-8 py-5 text-lg text-indigo-300 ">
              {question}
              <img
                src="./FAQSection/arrow.svg"
                alt="down-arrow"
                className="w-4 h-4 group-open:rotate-180"
              />
            </summary>
            <div className="px-4 md:px-8 mb-4">
              <p className="box-content text-lg text-[#AAACCD]">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
