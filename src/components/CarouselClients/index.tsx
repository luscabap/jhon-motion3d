import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataClients } from "../../data/dataClients";

export const CarouselClients = () => {
  return (
    <div>
      <h3 className="px-5 font-fontContrast text-3xl">Clients</h3>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={3}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={true}
        className="max-w-full my-8"
      >
        {dataClients.map((client) => (
          <SwiperSlide key={client.id} className="max-w-full bg-colorTerciary flex flex-col items-center justify-between min-h-52 min-w-44 rounded-lg">
            <img src={client.srcImg} alt={`${client.name} logo`} className="rounded-lg"/>
            <h3 className="text-center text-colorContrast">{client.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
