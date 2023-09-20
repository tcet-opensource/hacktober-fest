export default function RegisterSection() {
    return (
        <div className="px-8 md:px-16">

            <div
                className="relative h-[calc(2*100vh/3)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-20px)] bg-no-repeat bg-cover bg-center bg-[#15122a] border border-[#3C3C3C] rounded-2xl flex flex-col items-center overflow-hidden"
                style={{
                    backgroundImage: "url('RegisterSection/register.svg')",
                }}
            >
                <div className="flex flex-col items-center justify-between mt-8 md:mt-16 [&>*]:text-[#E0E2FF]">
                    <h2 className="text-3xl font-medium sm:text-3xl text-center md:text-5xl font-spline">
                        Find out about
                        <br />
                        Hacktober Fest
                    </h2>
                    <p className="justify-center mt-3 px-4 text-center text-md sm:text-base md:text-xl">
                        Lorem ipsum dolor sit amet consectetur.
                        <br />
                        Tellus cringissim amet ultricies lobortis nunc egestas amet id.
                    </p>
                    <button className="bg-[#4C58FE] font-medium text-white px-3 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-md mt-8">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}