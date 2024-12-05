import logo from "../assets/Logo.png";

const products = [
    "Virtual freezers", "Consumables", "Orders", "Alerts",
    "Experiments", "Protocols", "Version control", "Reports",
    "Genemod AI", "Security", "Integration", "Equipment",
];

const solutions = [
    "Biopharma", "Industrial biotech", "Clinical research",
    "Biomanufacturers", "Biorepositories", "Contract services",
    "Cell therapy", "RNA therapy", "Antibodies", "CRO/Consulting",
    "Chemistry", "Startups", "Academia",
];

const resources = [
    "vs Excel", "Blog", "vs LabArchives", "Case studies",
    "vs Quartzy", "LMS", "vs FreezerPro", "ELN",
];

const company = ["Pricing", "About us", "Career", "Events"];
const socials = ["LinkedIn", "X"];

function Footer() {
    return (
        <footer className=" py-10 text-customBluee">
            {/* Main Footer */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 py-10 border-y border-gray-300">
                {/* First Footer Container */}
                <div>
                    <h2 className="text-lg uppercase font-semibold mb-4">Product</h2>
                    <ul className="grid grid-cols-2 gap-2">
                        {products.map((item, index) => (
                            <li key={index} className="text-sm hover:underline whitespace-nowrap">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Second Footer Container */}
                <div>
                    <h2 className="text-lg uppercase font-semibold mb-4">Solutions</h2>
                    <ul className="grid grid-cols-2 gap-2">
                        {solutions.map((item, index) => (
                            <li key={index} className="text-sm hover:underline whitespace-nowrap">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Third Footer Container */}
                <div>
                    <h2 className="text-lg uppercase font-semibold mb-4">Resources</h2>
                    <ul className="grid gap-2">
                        {resources.map((item, index) => (
                            <li key={index} className="text-sm hover:underline">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fourth Footer Container */}
                <div>
                    <div className="mb-6">
                        <h2 className="text-lg uppercase font-semibold mb-4">Company</h2>
                        <ul className="grid gap-2">
                            {company.map((item, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg uppercase font-semibold mb-4">Socials</h2>
                        <ul className="flex space-x-4">
                            {socials.map((social, index) => (
                                <li key={index} className="text-sm hover:underline">
                                    {social}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 px-6">
                <img
                    src={logo}
                    alt="Genemod Logo"
                    className="w-32 mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-right flex gap-4">
                    <p className="text-sm">© 2024 Genemod, Inc.</p>
                    <p className="text-sm hover:underline cursor-pointer">Privacy Policy</p>
                    <p className="text-sm hover:underline cursor-pointer">Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
