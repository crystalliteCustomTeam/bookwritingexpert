import Image from "next/image";
import React from "react";
import Slider from "react-slick";

// Images
import Book1 from "../public/images/amazonbookpublishing/publishRight1.png";
import Book2 from "../public/images/amazonbookpublishing/publishRight2.png";
import Book3 from "../public/images/amazonbookpublishing/publishRight3.png";
import Book4 from "../public/images/amazonbookpublishing/publishRight4.png";
import Book5 from "../public/images/amazonbookpublishing/publishRight5.png";

const ServiceSlider = () => {
  var partnersslider = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...partnersslider} className="serviceSlider">
        <div>
          <Image src={Book1} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book2} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book3} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book4} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book5} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book1} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book2} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book3} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book4} alt="Service-book" width={150} height={150} />
        </div>
        <div>
          <Image src={Book5} alt="Service-book" width={150} height={150} />
        </div>
      </Slider>
    </>
  );
};

export default ServiceSlider;
