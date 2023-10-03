import { SponArr, MLHArr } from "../PartnerSection/data";

export default function MLHSection() {
  return (
    <section className="">
      <div className="px-6 py-9 md:p-16">
        <div className="text-[#D6D9F6] mb-12 items-center justify-center flex">
          <p className="text-[#E0E2FF] text-3xl md:text-4xl font-medium mb-3 font-spline">
            Powered By
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-5">
          {MLHArr.map((image, index) => (
            <div
              className="flex flex-col items-center justify-evenly"
              key={index}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-slate-200 p-4 rounded-xl">
                  <img
                    src={image.img}
                    width={image.width}
                    height={image.height}
                    className="md:mb-3 ml-1"
                  />
                </div>
                <p className="text-xl font-medium text-white mt-6">
                  {image.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
