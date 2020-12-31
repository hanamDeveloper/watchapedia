import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import MoviePath from "../../IMG/Movie.jpg";
import MovieInfo from "./MovieInfo";

const MoviesContainer = styled.section`
  margin: 86px 0 0 auto;
  width: 100%;
`;

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
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 30px;
  }
`;

const MoviesSlider = styled.div`
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  margin: 0px -8px;
  overflow-x: hidden;

  .inner {
    overflow-x: hidden;
    padding-bottom: 145.37037037037038%;
  }

  ul {
    list-style: none;
    padding: 0px;
    white-space: nowrap;
    margin: 0;
  }
  li {
    position: relative;
    display: inline-block;
    width: 14vw;
    padding: 0px 8px;
    box-sizing: border-box;
  }

  a {
    display: inline-block;
    text-decoration: none;
    width: 100%;
  }

  img {
    position: relative;
    width: 100%;

    z-index: -1;
  }

  .RankNumber {
    position: absolute;
    top: 6px;
    left: 14px;
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
    font-weight: 500;
  }

  .MovieInfo__from {
  }

  .MovieInfo__average {
    color: #555765;
  }

  .MovieInfo__performance {
    font-size: 13px !important;
    letter-spacing: -0.3px;
  }
`;

function MainContainer() {
  return (
    <>
      <MoviesContainer>
        <MoviesBox>
          <div className="Category">
            <p>박스오피스</p>
          </div>
          <MoviesSlider>
            <div className="inner">
              <ul>
                <li>
                  <Link to="/movieinfo">
                    <div className="Movie">
                      <div className="RankNumber">1</div>
                      <img src={MoviePath}></img>
                    </div>
                    <div className="MovieInfo">
                      <p className="MovieInfo__name">원더 우먼 1984</p>
                      <p className="MovieInfo__from">2020 ・ 미국</p>
                      <p className="MovieInfo__average">평균 ★ 2.9</p>
                      <p className="MovieInfo__performance">
                        예매율 34% ・ 누적 관객 30만명
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <a href="">
                    <div className="Movie">
                      <div className="RankNumber">1</div>
                      <img src={MoviePath}></img>
                    </div>
                    <div className="MovieInfo">
                      <p className="MovieInfo__name">원더 우먼 1984</p>
                      <p className="MovieInfo__from">2020 ・ 미국</p>
                      <p className="MovieInfo__average">평균 ★ 2.9</p>
                      <p className="MovieInfo__performance">
                        예매율 34% ・ 누적 관객 30만명
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="Movie">
                      <div className="RankNumber">1</div>
                      <img src={MoviePath}></img>
                    </div>
                    <div className="MovieInfo">
                      <p className="MovieInfo__name">원더 우먼 1984</p>
                      <p className="MovieInfo__from">2020 ・ 미국</p>
                      <p className="MovieInfo__average">평균 ★ 2.9</p>
                      <p className="MovieInfo__performance">
                        예매율 34% ・ 누적 관객 30만명
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="Movie">
                      <div className="RankNumber">1</div>
                      <img src={MoviePath}></img>
                    </div>
                    <div className="MovieInfo">
                      <p className="MovieInfo__name">원더 우먼 1984</p>
                      <p className="MovieInfo__from">2020 ・ 미국</p>
                      <p className="MovieInfo__average">평균 ★ 2.9</p>
                      <p className="MovieInfo__performance">
                        예매율 34% ・ 누적 관객 30만명
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="Movie">
                      <div className="RankNumber">1</div>
                      <img src={MoviePath}></img>
                    </div>
                    <div className="MovieInfo">
                      <p className="MovieInfo__name">원더 우먼 1984</p>
                      <p className="MovieInfo__from">2020 ・ 미국</p>
                      <p className="MovieInfo__average">평균 ★ 2.9</p>
                      <p className="MovieInfo__performance">
                        예매율 34% ・ 누적 관객 30만명
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </MoviesSlider>
        </MoviesBox>
      </MoviesContainer>
    </>
  );
}

export default MainContainer;
