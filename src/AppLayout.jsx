import Header from "./Header"
import Accordion from "./ui/Accordion"
import Centralize from "./ui/Centralize"
import Collaborative from "./ui/Collaborative"
import Custom from "./ui/Custom"
import Detailed from "./ui/Detailed"
import Footer from "./ui/Footer"
import ImageMarquee from "./ui/ImageMarquee"
import Integrate from "./ui/Integrate"
import Modern from "./ui/Modern"
import Streamline from "./ui/Streamline"


function AppLayout() {
    return (
        <div className="min-h-screen p-8  border-customDark relative overflow-scroll">
            <Header />
            <Streamline />
            <ImageMarquee/>
            <Custom />
            <Detailed />
            <Collaborative />
            <Centralize />
            <Integrate />
            <Modern />
            <Accordion />
            <Footer />
        </div>
    )
}

export default AppLayout
