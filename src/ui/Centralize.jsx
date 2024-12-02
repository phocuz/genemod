import { useState, useEffect } from "react";
import horizontal from "../assets/horizontal.png";
import vertical from "../assets/vertical.png";

function Centralize() {
    const [isHorizontal, setIsHorizontal] = useState(true);

    useEffect(() => {
        // Function to determine if the screen width is greater than a threshold
        const handleResize = () => {
            setIsHorizontal(window.innerWidth > 768); // Example threshold: 768px
        };

        // Initial check and event listener for resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-center text-customBlue font-bold text-[40px]">
                Centralize all research processes within a single, <br /> comprehensive software solution
            </h1>
            <img src={isHorizontal ? horizontal : vertical} alt={isHorizontal ? "horizontal" : "vertical"} />
            <h2 className="text-gray-400 text-center">
                Enhance clinical research breakthroughs with Genemod's br integrated approach to data management.
            </h2>
        </div>
    );
}

export default Centralize;
