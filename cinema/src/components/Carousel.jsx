import React from "react";
import Slider from "react-slick";
// import { getMovies } from "../actions/movies";

export class Carousel extends React.Component {
  // componentDidMount() {
  //   // this.props.getMovies();
  //   const movieId = this.props.match.params.id;
  //   const movie = this.props.movies.find(item => item._id === movieId);

  //   this.setState({ movie });
  // }
  render() {
    // const { movie } = this.state;

    let settingSlick = {
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <Slider {...settingSlick}>
          {/* <img
            style={{ height: "auto", width: "auto" }}
            src={movie.poster}
            alt=""
          /> */}
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
          <img
            style={{ height: "auto", width: "auto" }}
            src="https://ewedit.files.wordpress.com/2019/03/avengers-russia.jpg"
            alt=""
          />
        </Slider>
      </div>
    );
  }
}
