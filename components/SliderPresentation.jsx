import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

const SliderPresentation = ({children}) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      //breakpoints={settings}
      modules={[Pagination]}
      className="mySwiper">
      {children}
    </Swiper>
  );
};



const ContainerButton = styled.button`

`;

export default SliderPresentation;
