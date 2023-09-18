import React from "react";
import register from '../../../public/RegisterSection/register.svg'

function RegisterSection() {
  return (
    <div className="p-6">
    <div className="flex rounded-xl sm:px-8 md:px-16 justify-center items-center sm:m-4 sm:m-8 md:m-16"
         style={{
           "background": "rgba(255, 255, 255, 0.03)",
         }}
    >
      <img src={register} alt="Rocket" className="w-fit sm:w-32 md:w-full h-screen" />
      <div className="absolute top-4 sm:top-8 md:top-16 left-0 right-0 flex flex-col items-center justify-center p-16 sm:p-8 md:p-16 text-[#E0E2FF] gap-1">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-medium font-spline sm:mt-10">{"Find out about"}<br/>{"Hacktober Fest"}</h2>
        <p className="text-md sm:text-base md:text-xl justify-center mt-3 text-center">{"Lorem ipsum dolor sit amet consectetur."}<br/>{"Tellus cringissim amet ultricies lobortis nunc egestas amet id."}</p>
        <button className="bg-[#4C58FE] font-medium text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md mt-4">Register Now</button>
      </div>
    </div>
    </div>
  );
}

export default RegisterSection;
