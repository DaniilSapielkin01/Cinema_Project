import React from "react";
import Slider from "react-slick";

import { MyMoviesContainer } from "../containers/MyMovies";

export class Carousel extends React.Component {
  render() {
    let settingSlick = {
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <Slider {...settingSlick}>
        <img
          src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />

        <img
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
          alt=""
        />

        <img
          src="http://onlinetao.ru/blog/wp-content/uploads/2015/07/hq-wallpapers_ru_nature_35955_1920x1200.jpg"
          alt=""
        />
        <img
          src="http://wallpaper-yaport.ru/baza/2010/06/02/d8a29bd3f13aa5c9719b10157581b69c.jpg"
          alt=""
        />
        <img
          src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/03/30/13/17/photographer-698908_960_720.jpg"
          alt=""
        />
      </Slider>
    );
  }
}
