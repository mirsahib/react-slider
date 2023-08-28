import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function App() {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="https://dummyimage.com/600x400/000/58b8ba" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://dummyimage.com/600x400/000/c0c4c4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://dummyimage.com/600x400/000/dbff3d" alt="" />
            </SwiperSlide>
        </Swiper>
    );
}
