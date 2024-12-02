import { useState } from "react";

const inventory = [
    "Virtual Freezers", "Consumables", "Orders", "Alerts"
]
const notebook =["Experiments", "Protocols", "Version Control", "Reports"]
const platform = ["Genemod AI", "Security", "Integrations", "Equipment"]

function Products(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2  text-customDark rounded-md  transition-colors font-bold "
      >
        Products
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20  w-[1000px] left-0 bg-white border border-gray-200 shadow  rounded-lg p-10 z-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Inventory Section */}
            <div className="border-r border-gray-200 pr-6 text-[20px]">
              <h3 className=" font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Inventory
              </h3>
              <ul className="space-y-3">
                {inventory.map((item) => (
                  <li 
                    key={item} 
                    className="text-[20px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Notebook Section */}
            <div className="border-r border-gray-200 pr-6">
              <h3 className="text-[20px] font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Notebook
              </h3>
              <ul className="space-y-3">
                {notebook.map((item) => (
                  <li 
                    key={item} 
                    className="text-[20px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Section */}
            <div>
              <h3 className="text-[20px] font-semibold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Platform
              </h3>
              <ul className="space-y-3">
                {platform.map((item) => (
                  <li 
                    key={item} 
                    className="text-[20px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer"
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

export default Products
;