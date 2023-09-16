import React from "react";

const contentArray = [
  {
    id: 1,
    title: "Hacktoberfest TCET-OpenSource",
    description:
      "TCET Open Source aims to streamline software engineering education and development into a single organization. Kindly star our repos, ...",
  },
];

function HeroSection() {
  return (
    <div>
      {contentArray.map((item, index) => (
        <body className="p-6 lg:p-16 " key={index} >
        <div className="flex flex-col items-center justify-between p-2 rounded-2xl border border-[#3C3C3C] md:flex-row  relative  "
             style={{
               background: "rgba(255, 255, 255, 0.03)"
             }}
        >
          <div className=" w-full lg:w-1/2 p-5 lg:items-center mx-14 my-12 ">



            <h1 className="text-[#E0E2FF]  font-sans text-4xl font-semibold tracking-tight leading-normal tracking-wide lg:text-5xl "
                style={{ lineHeight: '1.3' }}>
              {item.title.split(" ").slice(0, 1).join(" ")}
              <br />
              {item.title.split(" ").slice(1).join(" ")}
            </h1>


            <p className="text-[#E0E2FF] w-4/5 lg:w-full description text-base leading-6 tracking-tighter">
              {item.description}
            </p>
            <br/>

            <div className="flex flex-row gap-6 ">

              <button className="flex items-center justify-center gap-8 p-2 button-one rounded-xl button-one  bg-[#4C58FE] shadow-lg text-white text-lg font-medium ">
                Register Now
              </button>

              <button className="flex p-2 justify-center items-center  rounded-xl border border-gray-800 text-white text-lg font-medium">
                About Us
                <img src="/HeroSection/chevron-right.svg" className="gap-y-2 "/>
              </button> 

              <img src="/HeroSection/Line 6.png" className=" absolute hidden lg:block bottom-0 left-1/2 transform -translate-y-1/2 z-[-1] w-1 h-[333px] opacity-60"/>

            </div>
          </div>

          <div className="w-full lg:w-1/2   ">
           <img src="/HeroSection/Ellipse 24.png" className="fixed bottom-0 right-0 z-[-1] w-1/2 h-3/4 flex-shrink-0 "/>
            <img src=" /HeroSection/Group 36.svg" className="max-w-full h-auto relative z-10"  />
           
          </div>

        </div>

        </body>
      ))}
    </div>
  );
}

export default HeroSection;


// import React from "react";

// const contentArray = [
//   {
//     id: 1,
//     title: "Hacktoberfest TCET-OpenSource",
//     description:
//       "TCET Open Source aims to streamline software engineering education and development into a single organization. Kindly star our repos, ...",
//   },
// ];

// function HeroSection() {
//   return (
//     <div>
//       {contentArray.map((item, index) => (
//         <body className="p-16 relative" key={index}>
//           <div
//             className="flex flex-col items-center justify-between p-2 rounded-2xl border border-[#3C3C3C] md:flex-row "
//             style={{
//               background: "rgba(255, 255, 255, 0.03)",
//             }}
//           >
//             <div className="w-full lg:w-1/2 mx-14 my-12">
//               <h1
//                 className="text-[#E0E2FF] font-sans text-5xl font-medium tracking-tight leading-normal tracking-wide"
//                 style={{ lineHeight: "1.3" }}
//               >
//                 {item.title.split(" ").slice(0, 1).join(" ")}
//                 <br />
//                 {item.title.split(" ").slice(1).join(" ")}
//               </h1>

//               <p className="text-[#E0E2FF] w-4/5 lg:w-full description text-base leading-6 tracking-tighter">
//                 {item.description}
//               </p>
//               <br />

//               <div className="flex flex-col lg:flex-row gap-6">
//                 <button className="flex items-center justify-center gap-8 p-2 button-one rounded-xl button-one bg-[#4C58FE] shadow-lg text-white text-lg font-medium">
//                   Register Now
//                 </button>

//                 <button className="flex p-2 justify-center items-center rounded-xl border border-gray-800 text-white text-lg font-medium">
//                   About Us
//                   <img src="/HeroSection/chevron-right.svg" className="gap-y-2" />
//                 </button>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2">
//               <img src="/HeroSection/Group 36.svg" className="max-w-full h-auto" />
//             </div>
//           </div>
//         </body>
//       ))}
//     </div>
//   );
// }

// export default HeroSection;
