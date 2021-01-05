import React from "react";
import styled from "styled-components";
import PosterPath from "../../IMG/Poster.jpg";
// import PosterPathj from "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_400,q_80,w_280/v1607653127/cdutydgid4pqi26xze0b.jpg";
import MoviePath from "../../IMG/Movie.jpg";
import PlusPath from "../../IMG/Plus.png";
import DownArrow from "../../IMG/DownArrow.PNG";
import MainInfo from "./MainInfo";

const Main = styled.section`
  padding-top: 0px;
  padding-bottom: unset;
  border-bottom: 1px solid #e3e3e3;
  .Content {
    display: flex;
  }

  .Background {
    flex: 1;
    background: #f8f8f8;
  }

  section {
    background-color: #fff;
  }

  .PosterContainer {
    position: relative;
    padding: 360px 0 0;
  }

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

  .Pane {
    text-align: center;
    padding: 14px 16px 22px;
  }

  .PaneInner {
    text-align: left;
    margin: 0px 0px 0px 191px;
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }

  .Title {
    font-size: 33px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 40px;
  }

  .Detail {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }

  .ContentRatings {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    padding: 8px 0px;
    border-top: 1px solid rgb(237, 237, 237);
    border-bottom: 1px solid rgb(237, 237, 237);
    box-sizing: border-box;
    margin-top: 14px;
  }

  .ButtonBlock {
    float: left;
    margin: 39px 30px 0px 0px;
  }

  .Self {
    width: 254px;
    display: flex;
    background-color: rgb(255, 47, 110);
    vertical-align: top;
    box-sizing: border-box;
    height: 40px;
    border-radius: 6px;
    margin: 0px auto;
    overflow: hidden;
  }

  .StylelessButton-ActionButton {
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    flex: 1 1 0%;
    color: rgb(246, 246, 246);
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 22px;
    height: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .contentActionStatusImage {
    display: flex;
    position: relative;
    left: -8px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
  }

  .StatusImage {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: contain;
    margin: 0px 6px 0px 0px;
    transition: all 300ms ease 0s;
  }

  .ActionStatus {
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    color: rgb(246, 246, 246);
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 22px;
  }

  .StylelessButton-ActionDropDownButton {
    background: none;
    border: none;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    box-sizing: border-box;
    width: 51px;
    height: 100%;
    padding: 8px 0;
    border-left: 1px solid #e71252;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .Grade {
    float: left;
    margin: 15px 0 0;
  }

  .Evaluate {
    color: #787878;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 16px;
  }

  .grade-star {
    position: relative;
    text-align: center;
    width: 200px;
    cursor: pointer;
    margin: 3px 0 0;
  }

  .UnratedStars {
    display: inline-block;
    position: relative;
    vertical-align: top;
    height: 40px;
  }

  .UnratedStars span {
    display: inline-block;
    background-size: contain;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VFRSIgZD0iTTIyIDMzLjQ0NEw5LjgzIDQyLjMyN2MtLjc4NC41NzItMS44NDItLjE5Ni0xLjUzOS0xLjExOGw0LjY4Ny0xNC4zMkwuNzY5IDE4LjA2Yy0uNzg3LS41NjktLjM4My0xLjgxMi41ODgtMS44MWwxNS4wNjcuMDMzIDQuNjI0LTE0LjM0Yy4yOTgtLjkyNCAxLjYwNi0uOTI0IDEuOTA0IDBsNC42MjQgMTQuMzQgMTUuMDY3LS4wMzNjLjk3MS0uMDAyIDEuMzc1IDEuMjQxLjU4OCAxLjgxbC0xMi4yMDkgOC44MjkgNC42ODggMTQuMzJjLjMwMi45MjItLjc1NiAxLjY5LTEuNTQgMS4xMThMMjIgMzMuNDQ0eiIvPgogICAgPC9nPgo8L3N2Zz4K)
      no-repeat center;

    vertical-align: top;
    width: 40px;
    height: 40px;
  }
`;

function MovieInfo() {
  return (
    <>
      <Main>
        <div className="Content">
          <div className="Background">
            <section>
              <div className="PosterContainer">
                <div className="PosterBlock">
                  <div className="LeftBackground"></div>
                  <div className="Poster">
                    <img src={PosterPath}></img>
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
                          <img
                            alt="원더 우먼 1984의 포스터"
                            src={MoviePath}
                          ></img>
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
              </div>
              <div className="Pane">
                <div className="WidthGrid">
                  <div className="WidthRow">
                    <div className="WidthCol">
                      <div className="PaneInner">
                        <h1 className="Title">원더 우먼 1984</h1>
                        <div className="Detail">
                          2020 ・ 액션 ・ 미국 ・ 영국 ・ 스페인
                        </div>
                        <div className="ContentRatings">
                          평균 ★2.8 (5,134명)
                        </div>
                        <div className="ButtonBlock">
                          <div className="Self">
                            <button className="StylelessButton-ActionButton">
                              <div className="contentActionStatusImage">
                                <img
                                  className="StatusImage"
                                  src={PlusPath}
                                ></img>
                                <div className="ActionStatus">보고싶어요</div>
                              </div>
                            </button>
                            <button className="StylelessButton-ActionDropDownButton">
                              <img src={DownArrow}></img>
                            </button>
                            <div class="StarBlock"></div>
                          </div>
                        </div>
                        <div className="Grade">
                          <div className="Evaluate">
                            <div className="grade_text">평가하기</div>
                          </div>
                          <div className="grade-start">
                            <div className="UnratedStars">
                              <span src=""></span>
                              <span src=""></span>
                              <span src=""></span>
                              <span src=""></span>
                              <span src=""></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Main>
      <MainInfo />
    </>
  );
}

export default MovieInfo;
