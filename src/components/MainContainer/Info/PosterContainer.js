import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PosterBox = styled.div`
  position: relative;
  padding: 360px 0 0;

  @media ${(props) => props.theme.tablet} {
    padding: 300px 0px 0px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 44px 0px 0px;
  }

  .PosterBlock {
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    justify-content: center;
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .LeftBackground {
    background-color: #665f44;
    flex: 1 1 0%;
  }

  .Poster {
    position: relative;
    top: auto;
    left: auto;
    width: 1024px;
    height: 100%;
    filter: none;

    img {
      width: 100%;
    }

    @media ${(props) => props.theme.tablet} {
      width: 825px;
    }

    @media ${(props) => props.theme.mobile} {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 110%;
      filter: blur(15px);
      background: center center / cover no-repeat;
    }
  }

  .LeftGradinet {
    display: block;
    position: absolute;
    width: 150px;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(
      -90deg,
      rgba(102, 95, 68, 0) 0%,
      #665f44 100%
    );
    @media ${(props) => props.theme.tablet} {
      width: 100px;
    }

    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }

  .RightGradinet {
    display: block;
    position: absolute;
    width: 100px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    background-image: linear-gradient(
      90deg,
      rgba(58, 51, 54, 0) 0%,
      rgb(58, 51, 54) 100%
    );

    @media ${(props) => props.theme.tablet} {
      width: 100px;
    }

    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }

  .RightBackground {
    background-color: rgb(58, 51, 54);
    flex: 1 1 0%;
  }

  .DimmedLayer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0.35) 2%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.5) 100%
    );

    @media ${(props) => props.theme.mobile} {
      background-image: linear-gradient(
        -180deg,
        rgba(20, 20, 20, 0.3) 1%,
        rgba(20, 20, 20, 0.5) 67%,
        rgb(20, 20, 20) 98%
      );
    }
  }

  .WidthContainer {
    max-width: 960px;
    margin: 0 auto;

    @media ${(props) => props.theme.tablet} {
      max-width: 640px;
    }

    @media ${(props) => props.theme.mobile} {
      max-width: none;
    }
  }

  .WidthBox {
    margin: 0 -8px;

    @media ${(props) => props.theme.tablet} {
      margin: 0;
    }
  }

  .WidthA {
    padding: 0 8px;
    @media ${(props) => props.theme.tablet} {
      padding: 0;
    }
  }

  .PosterWithRankingInfoBlock {
    position: relative;
    padding: 0 0 0 166px;

    @media ${(props) => props.theme.tablet} {
      padding: 0px 0px 0px 153px;
    }

    @media ${(props) => props.theme.mobile} {
      padding: 0;
    }
  }

  .StyledLazyLoadingImage {
    width: 166px;
    height: 238px;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 3px;
    margin: 0px auto;
    background: rgb(248, 248, 248);
    transition: all 300ms ease 0s;
    position: absolute;
    top: 2px;
    left: 0px;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
    @media ${(props) => props.theme.tablet} {
      width: 153px;
      height: 221px;
      box-sizing: border-box;
    }
    @media ${(props) => props.theme.mobile} {
      position: relative;
      box-sizing: border-box;
      width: 114px;
      height: 164px;
    }
  }

  .StyledLazyLoadingImage img {
    vertical-align: top;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
    transition: opacity 420ms ease 0s;
  }

  ul {
    padding: 0 0 10px 25px;
    margin: 0 -4px;
    text-align: left;

    @media ${(props) => props.theme.tablet} {
      padding: 0px 0px 10px 18px;
      margin: 0px -4px;
    }

    @media ${(props) => props.theme.mobile} {
      text-align: center;
      padding: 0px 0px 10px;
      margin: 15px 0px 0px;
    }
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
  const { movies, mobileSearch } = useSelector((state) => ({
    movies: state.reducer.movies,
    mobileSearch: state.reducer.mobileSearch,
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
      <div className="WidthContainer">
        <div className="WidthBox">
          <div className="WidthA">
            <div
              className="PosterWithRankingInfoBlock"
              style={{ marginTop: mobileSearch ? "68px" : "" }}
            >
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
