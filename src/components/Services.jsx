import style from "../styles.module.scss";
import hizmetler1 from "../media/hizmetler1.jpeg";
import hizmetler2 from "../media/hizmetler2.jpeg";
import hizmetler3 from "../media/hizmetler3.jpeg";
import hizmetler4 from "../media/hizmetler4.jpeg";
import hizmetler5 from "../media/hizmetler5.jpeg";
import hizmetler6 from "../media/hizmetler6.jpeg";
import hizmetler7 from "../media/hizmetler7.jpeg";
import hizmetler8 from "../media/imgaaa.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Parallax, Navigation } from 'swiper/modules';


export default function Services(){
  const picArray = [hizmetler1,hizmetler2,hizmetler3,hizmetler4,hizmetler5,hizmetler6,hizmetler7,hizmetler8]


    
    return (
        <div id="services" className={style.services}>
                <Swiper slidesPerView={1} speed={600} navigation={true} parallax={true} loop={true} modules={[Parallax, Navigation]} className={style.swiper}>
      <SwiperSlide className={style.swiperSlide}>
            <img src={picArray[0]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[1]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[2]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[3]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[4]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[5]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[6]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
            <img  src={picArray[7]} alt="a" />
            <div className={style.sliderText}>
                <div data-swiper-parallax="-1000" className={style.title}>🌟Kına Gecesi-Henna Night</div>
                <div data-swiper-parallax="-1000" className={style.subtitle}>Subtitle</div>
                <div data-swiper-parallax="-1000" className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    )
}