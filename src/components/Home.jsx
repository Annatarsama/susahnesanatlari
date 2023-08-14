import hizmetler1 from "../media/hizmetler1.jpeg";
import hizmetler2 from "../media/hizmetler2.jpeg";
import hizmetler3 from "../media/hizmetler3.jpeg";
import hizmetler4 from "../media/hizmetler4.jpeg";
import hizmetler5 from "../media/hizmetler5.jpeg";
import hizmetler6 from "../media/hizmetler6.jpeg";
import hizmetler7 from "../media/hizmetler7.jpeg";

import style from "../styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import "./style.css"

export default function Home(){
    return (
        <div id="home" className={style.home}>
            <h3>Gösterilerden Kareler</h3>
            <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation,Pagination]} className={style.swiper}>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler1} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler2} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler3} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler4} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler5} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler6} alt="resim" />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <img src={hizmetler7} alt="resim" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}