import docLogo from "/PartnersSection/docLogo.svg";
import { SponArr, ImgArr } from "./data";
import sponsorGradient from "/PartnersSection/sponsorGradient.svg";
function PartnersSection() {
  return (
    <section id="sponserSection" className="">
      {/* <img src={sponsorGradient} className="absolute w-1/3 h-5/6" /> */}
      <div className="px-6 py-9 md:p-16">
        {SponArr.map((data, index) => (
          <div className="text-[#D6D9F6] md:mb-16 mb-12" key={index}>
            <p className="text-[#E0E2FF] text-3xl md:text-4xl font-medium mb-3 font-spline">
              {data.head}
            </p>

            <p className="max-w-md mb-1.5 text-lg">{data.subHead}</p>
            <p className="inline">{data.contact}</p>
            <a
              className="text-[#ACB1FF]"
              href="mailto:opensource@tcetmumbai.in"
              target="_blank"
              rel="noreferrer"
            >
              {data.email}
            </a>
            <button className="text-white bg-[#4C58FE] py-2 px-4 flex mt-6 rounded-xl text-lg items-center justify-center gap-2 shadow-sm">
              <img src={docLogo} />
              Sponsorship Prospectus
            </button>
          </div>
        ))}
        
        <div className="flex flex-wrap justify-around gap-5">
          {ImgArr.map((image, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <img
                src={image.img}
                width={120}
                height={120}
                className="md:mb-3"
              />
              <p className="text-lg font-medium text-white">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

