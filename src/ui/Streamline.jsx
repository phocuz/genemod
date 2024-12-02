import streamline from "../assets/layout1.png";

function Streamline() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-4 md:p-8">
            {/* Text Content */}
            <div className="max-w-lg flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-customBlue font-bold">
                    Streamline your consumables <br /> management
                </h1>
                <p className="text-customHarsh text-base md:text-lg lg:text-xl font-semibold">
                    Maximize your research efficiency with LIMS <br className="hidden md:block" /> 
                    software that’s tailor-made for tracking biopharma consumables.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="p-3 text-white bg-customBluee font-bold rounded-lg w-full md:w-auto">
                        Request demo
                    </button>
                    <button className="py-2 px-4 md:px-8 text-customBluee border-customBluee border-2 font-bold rounded-lg w-full md:w-auto">
                        Sign up free
                    </button>
                </div>
            </div>

            {/* Image */}
            <img
                src={streamline}
                alt="customable layout"
                className=" "
            />
        </div>
    );
}

export default Streamline;
