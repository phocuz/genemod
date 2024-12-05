
import Marquee from 'react-fast-marquee';
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"
const ImageMarquee = () => {
  return (
    <Marquee pauseOnHover={true} speed={30}>
     <img src={image1} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image2} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image3} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image4} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image5} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image6} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image7} alt="marquee-image" className="w-[158px] h-[60px]" />
     <img src={image8} alt="marquee-image" className="w-[158px] h-[60px]" />
    </Marquee>
  );
};

export default ImageMarquee;
