import register from "/RegisterSection/register.svg";

function RegisterSection() {
  return (
    <div className="px-16">
      <div
        className="relative flex items-center justify-center rounded-xl sm:px-8 md:px-16 sm:m-4 md:m-16"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
        }}
      >
        <img src={register} alt="Rocket" className="h-screen w-fit md:w-full" />
        <div className="absolute top-0 sm:top-8 md:top-16 left-0 right-0 flex flex-col items-center justify-center p-10 sm:p-8 text-[#E0E2FF] gap-1 text-center">
          <h2 className="text-3xl font-medium sm:text-3xl md:text-5xl font-spline">
            {"Find out about"}
            <br />
            {"Hacktober Fest"}
          </h2>
          <p className="justify-center mt-3 text-center text-md sm:text-base md:text-xl">
            {"Lorem ipsum dolor sit amet consectetur."}
            <br />
            {"Tellus cringissim amet ultricies lobortis nunc egestas amet id."}
          </p>
          <button className="bg-[#4C58FE] font-medium text-white px-3 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-md mt-4">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterSection;
