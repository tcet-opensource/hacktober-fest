//   import React from 'react';

//   function HeroPage() {
//     return (
//       <div className="flex items-center justify-between p-8">
//           <div className="w-1/2">
//           <h1 className="text-3xl font-bold  mb-4">Hacktoberfest   TCET-OpenSource</h1>
//           <p className="text-lg mb-4">TCET Open Source aims to streamline software engineering education and development into a single organization. Kindly star our repos,...</p>
//           <div className="space-x-4">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now</button>
//             <button className="flex p-8 justify-center items-center gap-8 rounded-10 border border-solid border-#3C3E5F">About Us</button>
//           </div>
//         </div>
        
//           <div className="w-1/2">
//           <img src="Group 36.svg" className="max-w-full h-auto" alt="Hero Image" />
//         </div>
//       </div>
//     );
//   }

//   export default HeroPage;


// // import React from 'react';

// // function HeroPage() {
// //   // Content data
// //   const title = "Hacktoberfest TCET-OpenSource";
// //   const description = "TCET Open Source aims to streamline software engineering education and development into a single organization. Kindly star our repos,...";

// //   return (
// //     <div className="flex items-center justify-between p-8">
// //       <div className="w-1/2">
// //         <h1 className="text-3xl font-bold mb-4">{title}</h1>
// //         <p className="text-lg mb-4">{description}</p>
// //         <div className="space-x-4">
// //           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded">Register Now</button>
// //           <button className="flex p-8 justify-center items-center gap-8 rounded-10 border border-solid border-#3C3E5F">About Us</button>
// //         </div>
// //       </div>
      
// //       <div className="w-1/2">
// //         <img src="Group 36.svg" className="max-w-full h-auto" alt="Hero Image" />
// //       </div>
// //     </div>
// //   );
// // }

// // export default HeroPage;




// const HeroPage = () => {
//   return (
//     <div className="flex items-center justify-between p-8 p-16 items-start gap-2 rounded-lg border border-gray-300 bg-opacity-3">
//       <div className="w-1/2">
//         <h1 className="text-blue-200 font-sans text-4xl tracking-wide leading-normal">
//           Hacktoberfest TCET-OpenSource
//         </h1>
//         <p className="text-gray-300 font-inter text-base font-normal leading-6 tracking-tighter">
//           TCET Open Source aims to streamline software engineering education and development
//           into a single organization. Kindly star our repos, ...
//         </p>
//         <div className="flex space-x-4">
//           <button className="flex items-center justify-center gap-8 p-2 rounded-10 border border-solid border-gray-700 bg-blue-500 shadow-lg backdrop-blur-2">
//             Register Now
//           </button>
//           <button className="flex p-8 justify-center items-center gap-8 rounded-10 border border-solid border-gray-800 text-white text-lg font-inter font-medium text-18 leading-28">
//             About Us
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <img src="" className="max-w-full h-auto" alt="Hero Image" />
//       </div>
//     </div>
//   );
// };

// export default HeroPage;



// import React from "react";
// import "../globals.css";

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
//         <body  className="p-16" key={index}>
          
//             <div className="flex  items-center justify-between p-8 p-16 items-start gap-2 rounded-lg border border-gray-300 bg-opacity-3">
//       <div className="w-1/2 ">
//         <h1 className="text-blue-200 title font-sans text-4xl tracking-wide leading-normal">
         
//         </h1>
//         <p className="text-gray-300  description text-base font-normal leading-6 tracking-tighter">
//         </p>
//         <div className="flex gap-6 ">
//           <button className="flex items-center justify-center gap-8 p-2 rounded-10 border border-solid border-gray-700 bg-blue-500 shadow-lg backdrop-blur-2">
//             Register Now
//           </button>
//           <button className="flex p-2 justify-center items-center gap-8 rounded-10 border border-solid border-gray-800 text-white text-lg font-inter font-medium text-18 leading-28">
//             About Us
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <img src=" \public\HeroSection\Group 36.svg" className="max-w-full h-auto"  />
//       </div>
//     </div>
//     </body>
//       ))}
//     </div>
//   );
// }

// export default HeroSection;



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
                <body className="p-16 relative " key={index} >
    <div className="flex items-center justify-between p-8 rounded-2xl border border-[#3C3C3C]">
       <div className="w-1/2 mx-14 my-12   ">
       

        <h1 className="text-[#E0E2FF] font-sans text-5xl font-medium tracking-tight leading-normal tracking-wide" style={{ lineHeight: '1.3' }}>
            {item.title.split(" ").slice(0, 1).join(" ")}
            <br />
            {item.title.split(" ").slice(1).join(" ")}
        </h1>

       
         <p className="text-[#E0E2FF] w-4/5 description text-base  leading-6 tracking-tighter">
            {item.description}
         </p>
         <br/>

        <div className="flex gap-6 ">

          <button className="flex items-center justify-center gap-8 p-2 button-one rounded-xl button-one  bg-[#4C58FE] shadow-lg text-white text-lg font-medium ">
            Register Now
          </button>

          <button className="flex p-2 justify-center items-center  rounded-xl border border-gray-800 text-white text-lg font-inter font-medium">
            About Us
            <img src="/HeroSection/chevron-right.svg" className="gap-y-2 "/>
          </button>

        </div>
      </div>
     
      <div className="w-1/2 ">
        <img src=" /HeroSection/Group 36.svg" className="max-w-full h-auto"  />
      </div>

    </div>
              
                </body>
            ))}
        </div>
    );
}

export default HeroSection;