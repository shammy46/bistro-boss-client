import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Slide1 from '../../../assets/home/slide1.jpg'
import Slide2 from '../../../assets/home/slide2.jpg'
import Slide3 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
  return (
    <section>

      <SectionTitle
        heading={ "From 11:00am to 10:00pm"}
        subHeading={"order online" }>
      </SectionTitle>


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10 "
      >
        <SwiperSlide>
          <img src={Slide1} className="" alt="" />
          <h3 className="text-4xl text-white -mt-16 mr-24  text-center  uppercase ">Salads</h3>

        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" />
          <h3 className="text-4xl text-white -mt-16 mr-24  text-center  uppercase ">pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" />
          <h3 className="text-4xl text-white -mt-16 mr-24  text-center  uppercase ">soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="" />
          <h3 className="text-4xl text-white -mt-16 mr-24  text-center  uppercase ">deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="" />
          <h3 className="text-4xl text-white -mt-16 mr-24  text-center  uppercase ">Salads</h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;