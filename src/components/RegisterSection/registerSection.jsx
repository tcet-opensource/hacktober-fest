import React from 'react';

function RegisterSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-16">
      <div className="bg-white bg-opacity-5 backdrop-blur border border-white border-opacity-10 h-screen w-screen m-12 rounded-lg text-center text-white relative p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center md:flex-row">

        <div className="flex-grow md:w-1/3" />

        <div className="md:w-1/3 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 spline-sans title-color">Find out about</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 spline-sans title-color">Hacktober Fest</h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Tellus dignissim amet ultricies lobortis nunc egestas amet id.
          </p>
          <button className="button-bg text-white rounded-lg z-10 py-2 px-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mx-auto block text-sm sm:text-base lg:text-lg">Register Now</button>
        </div>

        <div className="flex-grow md:w-1/3" />

        <div className="absolute bottom-0 items-center w-fit h-auto bg-blend-overlay bg-no-repeat" style={{ zIndex: -1 }}>
          <img src="/RegisterSection/register.svg" alt="BG" />
        </div>
      </div>
    </div>
  );
}

export default RegisterSection;
