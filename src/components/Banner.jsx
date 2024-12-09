import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      modules={[Pagination, Navigation, Keyboard]}
      className="mySwiper"
      aria-label="Visa Navigator Carousel"
    >
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                {/* Explore Visa Options */}
                <Typewriter words={["Explore Visa Options"]} loop={0} />
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                <Typewriter words={["Expert Guidance"]} loop={0} />
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-[#4682A9] text-white">
          <div className="flex h-full items-center justify-center px-4 text-center">
            <div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                <Typewriter words={["Start Your Journey"]} loop={0} />
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
