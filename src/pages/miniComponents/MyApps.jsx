import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
      import  { useRef } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
// Import Swiper styles


// import required modules
const MyApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/softwareapplication/getall",
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
    };
    getMyApps();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY WEBSITES
      </h1>
<div>  <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/public/Screenshot 2025-06-13 104620.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/Screenshot 2025-06-13 103841.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/Screenshot 2025-06-13 104415.png" alt="" /></SwiperSlide>
        
      </Swiper>
    </></div>
{/* // Import Swiper React components */}





      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps &&
          apps.map((element) => {
            return (
              <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            );
          })}
      </div> */}
    </div>
  );
};
 

export default MyApps;
