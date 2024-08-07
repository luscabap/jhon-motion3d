import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataClients } from "../../data/dataClients";
import { TitleSection } from "../TitleSection";

export const CarouselClients = () => {

  return (
    <div>
      <TitleSection text="Clients"/>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
        autoplay={{
          delay: 2000,
        }}
        loopAdditionalSlides={1}
        pagination={true}
        className="max-w-full my-8 z-30"
      >
        {dataClients.map((client) => (
          <SwiperSlide 
            key={client.id} 
            className="bg-colorTerciary flex flex-col items-center justify-between min-h-52 rounded-lg z-30 lg:min-h-96 2xl:min-h-52"
          >
            <img src={client.srcImg} alt={`${client.name} logo`} className="rounded-lg 2xl:h-12 max-w-full"/>
            <h3 className="text-center text-colorContrast">{client.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
