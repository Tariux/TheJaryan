import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LogoEffectLarge from '../Component/LogoEffectLarge';
import TextTyping from '../Component/TextTyping';

import $ from "jquery";
import AboutMe from './AboutMe';
import ImageGallery from './ImageGallery';


function Slider() {

    const nextSection = (e) => {
        let next = ($(e.target).attr("data-tag")) ? $(e.target).attr("data-tag") : false

        if (next) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + next).offset().top
        }, 200);      
      }
    }

    return (
        <section id='slider'>

            <>
                <Swiper
                    dir="rtl"
                    centeredSlides={true}
                    autoplay={{
                        delay: 100,
                    }}
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div className='content'>
                            <div className='col-sm-10 col-xl-4 col-lg-5 col-md-6'>
                                <LogoEffectLarge />

                            </div>
                            <h1><TextTyping text='L I V E . F R E E . O R . D I E' speed={50} delay={100} /></h1>
                            <div className='next animate__animated animate__shakeY'>
                            <i onClick={e => nextSection(e)} data-tag='about' class="fa-solid fa-angles-down"></i>                            </div>
                        </div>
                        <div className='cover' style={{ backgroundImage: "url('/static/images/slider1.jpg')" }}>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <AboutMe className="noselect" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ImageGallery id="gallery" />

                    </SwiperSlide>
                </Swiper>
            </>
        </section>
    )
}

export default Slider