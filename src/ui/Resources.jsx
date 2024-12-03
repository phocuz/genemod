import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const compare = [
    "Excel vs Genemod", "LabAchives vs Genemod", "Quartzy vs Genemod", "FreezerPro vs Genemod"
]
const learn =["Blogs", "Case studies", "LIMS", "ERN"]


function Resources(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2  text-customDark rounded-md font-bold transition-colors flex gap-4 "
      >
        Resources
        <div className="mt-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20  w-[1000px] bg-white left-0  border border-gray-200 shadow  rounded-lg p-10 z-10">
          <div className="grid grid-cols-2 gap-6">
            {/* Industries Section */}
            <div className="border-r border-gray-200 pr-6 text-[20px]">
              <h3 className=" font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Industry
              </h3>
              <ul className="space-y-3">
                {compare.map((item) => (
                  <li 
                    key={item} 
                    className="text-[20px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-md transition-colors
                     duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Section */}
            <div className="pr-6">
              <h3 className="text-[20px] font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Learn
              </h3>
              <ul className="space-y-3">
                {learn.map((item) => (
                  <li 
                    key={item} 
                    className="text-[20px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-md transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
