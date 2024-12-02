import customImage from "../assets/layout3.png";
import icon from "../assets/icon.png"

function Collaborative() {
    return (
        <div>
         <h1 className="text-center text-customBlue font-bold text-[40px]">Collaborative tracking of biopharma  <br />consumables</h1>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 p-4 md:p-8">
             <div className="max-w-lg flex flex-col gap-4 text-center md:text-left">
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]" />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                     Streamline how your monitor and update biopharma research consumable quantities.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px] " />
                 <h2 className="text-customBlue text-start font-semibold text-[18px]">
                    Easily document essential consumable data, such as lot numbers and activity, so that you maintain research compliance.
                 </h2>
               </div>
               <div className="flex gap-4">
                 <img src={icon} alt="icon" className="w-[20px] h-[20px]"/>
                 <h2 className="text-customBlue text-start text-[18px] font-semibold">
                     Collaborative features all but guarantee consistent data integrity and alignment across your biopharma research team.
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

export default Collaborative;
