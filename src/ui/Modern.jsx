import copyIcon from "../assets/copy-icon.png";
import circleIcon from "../assets/circle-icon.png";
import flowerIcon from "../assets/flower-icon.png";

function Modern() {
    return (
        <div className="px-4 py-8 flex flex-col gap-6">

            {/* Header Section */}
            <div className="mb-8 flex flex-col gap-4">
                <h1 className="text-center text-customBlue font-bold text-[26px] sm:text-[35px] lg:text-[45px] leading-tight">
                    The modern R&D platform that can scale <br /> with your custom or high-volume needs
                </h1>
                <p className="text-gray-400 text-center text-base sm:text-lg lg:text-xl">
                    Tailor Genemod for site-wide licenses of any scale
                </p>
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* First Box */}
                <div className="flex flex-col gap-4 rounded-lg p-6 bg-white">
                    <img src={copyIcon} alt="copy-image" className="w-8 h-8" />
                    <h2 className="text-customBlue font-bold text-[19px] ">
                        A source of truth for your inventory
                    </h2>
                    <p className="text-gray-400 text-[19px]">
                        From reagents to custom item types - we customize to match exactly how it is in the lab.
                    </p>
                    <button className="text-customBluee border-2 border-customBluee py-2 px-4 rounded">
                        Virtual freezers
                    </button>
                </div>

                {/* Second Box */}
                <div className="flex flex-col gap-4 rounded-lg p-6 bg-white">
                    <img src={circleIcon} alt="circle-image" className="w-8 h-8" />
                    <h2 className="text-customBlue font-bold text-[19px]">
                        A source of truth for your inventory
                    </h2>
                    <p className="text-gray-400 text-[19px]">
                        From reagents to custom item types - we customize to match exactly how it is in the lab.
                    </p>
                    <button className="text-customBluee border-2 border-customBluee py-2 px-4 rounded">
                        Virtual freezers
                    </button>
                </div>

                {/* Third Box */}
                <div className="flex flex-col gap-4 rounded-lg p-6 bg-white">
                    <img src={flowerIcon} alt="flower-image" className="w-8 h-8" />
                    <h2 className="text-customBlue font-bold text-[19px]">
                        A source of truth for your inventory
                    </h2>
                    <p className="text-gray-400 text-[19px]">
                        From reagents to custom item types - we customize to match exactly how it is in the lab.
                    </p>
                    <button className="text-customBluee border-2 border-customBluee py-2 px-4 rounded">
                        Virtual freezers
                    </button>
                </div>
            </div>

            <button className="mx-auto w-[320px] h-[56px] bg-customBluee p-4 text-white font-semibold text-[20px]">Sign up for free</button>
        </div>
    );
}

export default Modern;
