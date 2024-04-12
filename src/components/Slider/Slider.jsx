import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import { products } from '../../data';

export default function Slider() {

    const responsiveSettings = {
        1920: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
    }

    return (
        <>
        
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={responsiveSettings}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Card {...products[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[1]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[2]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[3]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[4]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[5]} />
            </SwiperSlide>
            <SwiperSlide>
                <Card {...products[6]} />
            </SwiperSlide>
        </Swiper>
        
        </>
    )
}