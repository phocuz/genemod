import customImage from "../assets/layout2.png";
import icon from "../assets/icon.png"

function Custom() {
    return (
        <div>
         <h1 className="text-center text-customBlue font-bold text-[40px]">Custom room layouts for your biopharma <br />research</h1>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 p-4 md:p-8">
             <div className="max-w-lg flex flex-col gap-4 text-center md:text-left">
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                     Create visual layouts specifically for biopharma benches, offices, and research spaces.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px] " />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                     Efficiently oversee and track biopharma consumables, making the most of your resources.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]"/>
                 <h2 className="text-customBlue text-start text-[18px] font-semibold">
                     Our virtual room editor for specialized biopharma spaces helps you cater to all your research needs.
                 </h2>
               </div>
             </div>

            {/* Image */}
            <img
                src={customImage}
                alt="customable layout"
                className=" "
                />
        </div>
    </div>
    );
}

export default Custom;
