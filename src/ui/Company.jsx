import { useState } from "react";

const company = [
    "About","Careers","Events","Contact us"
]



function Company(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2  text-customDark rounded-md font-bold transition-colors"
      >
        Company
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20  w-[1000px] left-0 bg-white border border-gray-200 shadow  rounded-lg p-10 z-10">
          <div className="grid grid-cols-1 gap-6">
            {/* Industries Section */}
            <div className=" pr-6 text-[20px]">
              <h3 className=" font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Industry
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
