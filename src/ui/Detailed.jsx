import customImage from "../assets/layout2.png";
import icon from "../assets/icon.png"

function Detailed() {
    return (
        <div>
         <h1 className="text-center text-customBlue font-bold text-[40px]">Detailed categorization</h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-4 md:p-8">



               {/* Image */}
            <img
                src={customImage}
                alt="customable layout"
                
                />

            {/* content */}
             <div className="max-w-lg flex flex-col gap-4 text-center md:text-left">
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                    Set up specific sections or categories designed for biopharma research consumables.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px] " />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                     Improve your organization by defining precise item groups within the biopharma context.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]"/>
                 <h2 className="text-customBlue text-start text-[18px] font-semibold">
                     This refined categorization gives you precise tracking, which is crucial for maintaining the integrity of your biopharma research.
                 </h2>
               </div>
             </div>

        </div>
    </div>
    );
}

export default Detailed;
