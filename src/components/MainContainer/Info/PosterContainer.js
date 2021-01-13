import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PosterBox = styled.div`
  position: relative;
  padding: 360px 0 0;

  .PosterBlock {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .Poster {
    position: relative;
    top: auto;
    left: auto;
    height: 100%;
    /* width: 70%; */
    filter: none;
    background-image: url();
  }

  .LeftBackground {
    background-color: #665f44;
    flex: 1;
  }

  .RightBackground {
    background-color: #665f44;
    flex: 1;
  }

  .LeftGradinet {
    display: block;
    position: absolute;
    width: 150px;
    top: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      -90deg,
      rgba(102, 95, 68, 0) 0%,
      #665f44 100%
    );
  }

  .RightGradinet {
    display: block;
    position: absolute;
    width: 150px;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      90deg,
      rgba(109, 110, 83, 0) 0%,
      rgb(109, 110, 83) 100%
    );
  }

  .DimmedLayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0.35) 2%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  .WidthGrid {
    max-width: 960px;
    margin: 0 auto;
  }

  .WidthRow {
    margin: 0 -8px;
  }

  .WidthCol {
    padding: 0 8px;
  }

  .PosterWithRankingInfoBlock {
    position: relative;
    padding: 0 0 0 166px;
  }

  .StyledLazyLoadingImage {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 166px;
    height: 238px;
    border-width: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  .StyledLazyLoadingImage img {
    width: 100%;
  }

  ul {
    padding: 0 0 10px 25px;
    margin: 0 -4px;
    text-align: left;
  }

  li {
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 18px;
    margin: 0 4px;
  }

  h1 {
    margin: 0;
  }
`;

function PosterContainer({ match }) {
  const { movies } = useSelector((state) => ({
    movies: state.movies,
  }));

  const matchId = Number(match.params.id);

  const Movie = movies.find((movie) => movie.id === matchId);

  return (
    <PosterBox>
      <div className="PosterBlock">
        <div className="LeftBackground"></div>
        <div className="Poster">
          <img src={Movie.movie_poster} alt=""></img>
          <div className="LeftGradinet"></div>
          <div className="RightGradinet"></div>
        </div>
        <div className="RightBackground"></div>
        <div className="DimmedLayer"></div>
      </div>
      <div className="WidthGrid">
        <div className="WidthRow">
          <div className="WidthCol">
            <div className="PosterWithRankingInfoBlock">
              <div className="StyledLazyLoadingImage">
                <img alt="영화 포스터" src={Movie.movie_photo}></img>
              </div>
              <ul className="RankingInfoList">
                <li>
                  예매 순위 · <em>1위(32%)</em>
                </li>
                <li>
                  개봉 · <em>8일째</em>
                </li>
                <li>
                  누적 관객 · <em>34만명</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PosterBox>
  );
}

export default PosterContainer;
