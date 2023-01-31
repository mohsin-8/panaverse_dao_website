import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// import images
import img1 from "../../public/gallery1.jpg";
import img2 from "../../public/gallery2.jpg";
import img4 from "../../public/gallery4.jpg";
import img5 from "../../public/gallery5.jpg";
import img6 from "../../public/gallery6.jpg";
import img7 from "../../public/gallery7.jpg";
import img8 from "../../public/gallery8.jpg";

// Import Swiper styles
import "swiper/css";

import styles from "./Wit_Sec.module.css";

// import required modules
import Image from "next/image";
import { Container, Heading, Text } from "@chakra-ui/react";

const Wit_Sec = () => {
  return (
    <div className={styles.WitMain}>
      <Container padding={"30px 0px"}>
        <Heading
          fontSize={30}
          fontWeight={700}
          color={"#fff"}
          textAlign="center"
        >
          WOMEN INCLUSION IN TECHNOLOGY
        </Heading>
        <Text
          fontSize={15}
          fontWeight={400}
          color={"#fff"}
          textAlign="center"
          letterSpacing={"5px"}
          mt="10px"
        >
          PIAIC WOMEN'S GALLERY
        </Text>
      </Container>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={styles.img} src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img2} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img4} alt="img4" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img5} alt="img5" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img6} alt="img6" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img7} alt="img7" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.img} src={img8} alt="img8" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Wit_Sec;
