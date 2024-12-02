import integratedImage from "../assets/layout4.png";
import arrow from "../assets/arrow-right.png"

function Integrate() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 bg-customBluee text-white rounded-lg mx-auto max-w-[1280px] lg:h-[440px] px-4 py-8 my-10">
            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-lg">
                <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold tracking-wide leading-tight">
                    Integrate your research <br className="hidden lg:block" /> workflows and database
                </h1>
                <div className="flex justify-center mx-auto  gap-2 bg-white rounded-lg text-customNavyBlue px-4 py-2 font-bold w-[150px] md:w-[180px] lg:w-[201px] ">
                <button className=" md:text-[16px] lg:text-[20px] whitespace-nowrap">
                    Request demo 
                </button>
                <img src={arrow} alt="arrow-right" className="w-[28px] h-[28px] flex justify-center items-center"/>
                </div>
            </div>

            {/* Image Section */}
            <img
                src={integratedImage}
                alt="Integrate image"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
        </div>
    );
}

export default Integrate;
