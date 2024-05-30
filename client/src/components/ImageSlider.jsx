import React from 'react'
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import rect1 from "../assets/react.svg"
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const ImageSlider = () => {
    return (
        <div className='p-2 w-full'>
            <CCarousel controls>
                <CCarouselItem>
                    <CImage className="d-block w-full h-[80vh] md:h-[60vh] lg:h-[60vh] object-cover" src={slide1} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-full h-[80vh] md:h-[60vh] lg:h-[60vh] object-cover" src={slide2} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-full h-[80vh] md:h-[60vh] lg:h-[60vh] object-cover" src={slide3} alt="slide 3" />
                </CCarouselItem>
                {/* <CCarouselItem>
                    <CImage className="d-block w-full h-[80vh] md:h-[60vh] lg:h-[50vh] object-contain" src={rect1} alt="slide 4" />
                </CCarouselItem> */}
            </CCarousel>
        </div>

    )
}

export default ImageSlider;
