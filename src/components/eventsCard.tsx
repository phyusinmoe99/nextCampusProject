import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface eventsProps {
    image?: string,
    title?: string
}

export default function EventsCard({ events}:{events:eventsProps[]}) {
    
    return (
        <div className="h-64 flex items-center justify-center">
                <div className="max-w-5xl">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {events?.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-72 flex items-center justify-center">
                                    <div
                                        className="w-full h-44 cursor-pointer border rounded-md text-center"
                                        style={{
                                            backgroundImage:`url(${event.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <h2 className="text-[#6e6e6d] text-md text-center w-full absolute bottom-0">
                                            {event.title}
                                        </h2>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
    )
}