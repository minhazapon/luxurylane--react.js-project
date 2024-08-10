// text-[#0096FF] bg-[#030637]


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Service = () => {



    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div>

            <div>
                <p className=" text-[#0096FF] text-center text-6xl">Our services include</p>
            </div>

{/* ---------------------------------------------------------------------- */}

            <div className=' mt-20'>

            <>


              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                   <div className=' flex justify-center'>
                    <div className=' bg-[#030637] border-[1px] border-[#0096FF] w-[300px] p-3'>
                        <p className=' text-[#0096FF] text-4xl font-mono'>Auto Repair</p>
                        <p className=' mt-5 text-[#0096FF] '>Sample text. Click to select the Text<br></br> Element.</p>
                        <img className=' mt-5 h-[100px]' src="https://cdn-icons-png.flaticon.com/128/1850/1850682.png" alt="" />
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
              
              </Swiper>
            </>



                
                
                
            </div>   






            </div>
            
        </div>
    );
};

export default Service;