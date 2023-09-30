import docLogo from "/PartnersSection/docLogo.svg";
import { SponArr, CloudArr } from "./data.js";
import sponsorGradient from "/PartnersSection/sponsorGradient.svg";
function CloudSection() {
  return (
    <section className="">
      {/* <img src={sponsorGradient} className="absolute w-1/3 h-5/6" /> */}
      <div className="px-6 py-9 md:p-16">
        {SponArr.map((data, index) => (
          <div className="text-[#D6D9F6] md:mb-16 mb-12 items-center justify-center flex" key={index}>
            <p className="text-[#E0E2FF] text-3xl md:text-4xl font-medium mb-3 font-spline">
              {data.cloud}
            </p>
          </div>
        ))}
        <div className="flex flex-wrap justify-around gap-5">
          {CloudArr.map((image, index) => (
            <div
              className="flex flex-col items-center justify-evenly"
              key={index}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.img}
                  width={image.width}
                  height={image.height}
                  className="md:mb-3 rounded-xl"
                />
                <p className="text-lg font-medium text-white">{image.text}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CloudSection;
