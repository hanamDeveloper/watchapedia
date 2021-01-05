import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesBox = styled.div`
  .Category {
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
    line-height: 30px;
  }

  .Category p {
    color: #292a32;
    font-size: 22px;
    font-weight: 1000;
    letter-spacing: -0.4px;
    line-height: 30px;
  }
`;

const MoviesSlider = styled.div`
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  margin: 0px -8px;

  li {
    list-style: none;
  }
  img {
    display: inline-block;
    width: 13vw;
    box-sizing: border-box;
  }

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    margin: 0px 8px;
  }

  .RankNumber {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 28px;
    height: 28px;
    line-height: 27px;
    background-color: rgba(0, 0, 0, 0.77);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: normal;
    text-align: center;
    border-radius: 4px;
    opacity: 1;
    transition: opacity 300ms ease 0s;
  }

  .MovieInfo {
    font-size: 12px;
    text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
  }

  .MovieInfo p {
    color: #292a32;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }

  .MovieInfo__name {
    font-size: 16px !important;
    font-weight: bold !important;
  }

  .MovieInfo__average {
    color: #555765;
  }

  .MovieInfo__performance {
    color: #74747b !important;
    font-size: 13px !important;
    letter-spacing: -0.3px;
  }
  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    left: 0px;
    top: -100%;
    color: black;
  }

  .slick-initialized .slick-slide {
    width: 14.05vw !important;
  }

  .slick-slider {
    display: flex;
    justify-content: center;
  }
`;

function MoviesSliderContainer() {
  const { movies } = useSelector((state) => ({
    movies: state.movies,
  }));

  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <MoviesBox>
        <div className="Category">
          <p>총 평점 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{movie.id}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                        <p className="MovieInfo__performance">
                          예매율 34% ・ 누적 관객 30만명
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>10대가 좋아하는 영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <li>
                    <Link to="/movieinfo">
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">{movie.grade}</p>
                        <p className="MovieInfo__performance">
                          예매율 34% ・ 누적 관객 30만명
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>20대가 좋아하는 영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <li>
                    <Link to="/movieinfo">
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">{movie.grade}</p>
                        <p className="MovieInfo__performance">
                          예매율 34% ・ 누적 관객 30만명
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>30대가 좋아하는 영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <li>
                    <Link to="/movieinfo">
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">{movie.grade}</p>
                        <p className="MovieInfo__performance">
                          예매율 34% ・ 누적 관객 30만명
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
              <a href="#!"></a>
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
    </>
  );
}

export default MoviesSliderContainer;
