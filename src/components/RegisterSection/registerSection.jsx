
function RegisterSection() {
  return (
  
      <section className=" flex items-center justify-center sm:p-4 md:p-16" >
        <div className="bg-white bg-opacity-5 backdrop-blur border border-white border-opacity-10  sm:h-screen w-screen m-8 sm:m-12 rounded-lg text-center text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col gap-y-3  " style={{
        backgroundImage:"url('/RegisterSection/register.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center"
      }}>
            <h1 className="text-2xl sm:text-3xl  md:text-4xl xl:text-5xl font-semibold mb-2 text-center md:w-96 self-center spline-sans title-color mt-4 sm:mt-6 md:mt-8 xl:mt-16">
              Find out about Hacktober Fest
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base xl:text-lg px-4 sm:px-8 md:px-24 lg:px-44 xl:px-64 self-center">
              Lorem ipsum dolor sit amet consectetur. Tellus dignissim amet
              ultricies lobortis nunc egestas amet id.
            </p>
            <button className="button-bg text-white rounded-lg z-10 py-2 px-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mx-auto block text-sm sm:text-base lg:text-lg">
              Register Now
            </button>
       
        </div>
       
      </section>
   
  );
}

export default RegisterSection;
