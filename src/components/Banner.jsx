import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="mySwiper"
      aria-label="Visa Navigator Carousel"
    >
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Explore Visa Options
              </h1>
              <p className="mt-4">
                Navigate through various visa categories tailored for your
                destination.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Expert Guidance
              </h1>
              <p className="mt-4">
                Get expert advice and step-by-step instructions for a smooth
                process.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Start Your Journey
              </h1>
              <p className="mt-4">
                Begin your application with confidence and track your progress
                online.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
