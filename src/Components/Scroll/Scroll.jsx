import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useState, useRef, useEffect } from "react";

function Scroll() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const [topPosition, setTopPosition] = useState(20);

  useEffect(() => {
    if (swiperRef.current) {
      const lastSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.slides.length - 1];
      const slideHeight = lastSlide ? lastSlide.offsetHeight : 0;
      setTopPosition(slideHeight + 20);
    }
  }, [swiperRef.current?.swiper?.activeIndex]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#161616]">
      <div className="p-5 rounded-lg relative w-[80%]">
        <div className="flex items-center gap-x-[15px] mb-5">
          <h2 className="text-white text-[25px] font-spartan">Recommended</h2>
          <button className="bg-[#FFFFFF0F] font-spartan px-[18px] py-[8px] rounded-full text-yellow-500">
            View All
          </button>
        </div>

        <div className="absolute top-[20px] right-[20px] flex space-x-2 z-10">
          <button
            className={`swiper-prev-btn ${isBeginning ? "opacity-50 cursor-not-allowed" : ""} text-yellow-500 bg-[#FFFFFF0F] rounded-full w-8 h-8 flex items-center justify-center`}
            disabled={isBeginning}
          >
            &lt;
          </button>
          <button
            className={`swiper-next-btn ${isEnd ? "opacity-50 cursor-not-allowed" : ""} text-yellow-500 bg-[#FFFFFF0F] rounded-full w-8 h-8 flex items-center justify-center`}
            disabled={isEnd}
          >
            &gt;
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          observeParents={true}
          observer={true}
          pagination={{ clickable: true }}
          loop={false}
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            2000: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={false}
          modules={[Navigation, Autoplay]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {[...Array(20)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#181818] rounded-[15px] shadow-lg overflow-hidden relative max-w-full">
                <div className="relative h-[270px]">
                  <img
                    src="/imagine-dragons.jpeg"
                    alt="Monkey Summer"
                    className="w-full h-full object-cover rounded-[15px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-[15px]"></div>

                  <div className="absolute bottom-4 left-[1px] text-white w-full px-4 font-spartan">
                    <p className="text-[12px] text-gray-300 font-spartan">Concert</p>
                    <h3 className="text-[18px] font-semibold font-spartan">Monkey Summer</h3>
                    <p className="text-[12px] text-gray-300 font-spartan">
                      Factory Tbilisi, Monday 22:00
                    </p>

                    <div className="mt-2 flex gap-x-[8px] flex-wrap">
                      <span className="font-spartan bg-[#FFFFFF4D] text-[10px] text-white px-[20px] py-[10px] rounded-[30px]">
                        Music
                      </span>
                      <span className="font-spartan bg-[#FFFFFF4D] text-[10px] text-white px-[20px] py-[10px] rounded-[30px]">
                        TBILISI CONCERT HALL
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-lg">
                    from 150 GEL
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Scroll;
