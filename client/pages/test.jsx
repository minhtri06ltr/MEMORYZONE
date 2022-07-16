import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Test = () => {
  const array = [
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_2.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_1.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_3.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_4.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_5.jpg?1657861540028",
  ];
  const settings = {
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        <span>test</span>
      </div>
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            priority
            src={array[0]}
            width="100%"
            height={61}
            layout="responsive"
            quality={100}
            alt="Memoryzone first main slider banner"
          />
        </div>
        <div>
          <img src={array[1]} />
        </div>
        <div>
          <img src={array[2]} />
        </div>
        <div>
          <img src={array[3]} />
        </div>
        <div>
          <img src={array[4]} />
        </div>
      </Slider>
    </div>
  );
};

export default Test;
