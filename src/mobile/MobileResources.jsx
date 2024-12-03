import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const sections = {
  compare:[
    "Excel vs Genemod", "LabAchives vs Genemod", "Quartzy vs Genemod", "FreezerPro vs Genemod"
],
 learn : ["Blogs", "Case studies", "LIMS", "ERN"]
};

function MobileResources() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full bg-white">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex  justify-between px-4 py-2 text-[20px] font-bold text-customBluee  "
      >
        Resources
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-white rounded-b-md divide-y divide-gray-200">
          {Object.entries(sections).map(([section, items]) => (
            <div key={section} className="px-4 py-4">
              <h3 className="mb-3 text-[20px] font-semibold text-customBlue uppercase tracking-wide">
                {section}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-2 py-1 text-customBlue text-[20px] rounded-md cursor-pointer hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileResources;
