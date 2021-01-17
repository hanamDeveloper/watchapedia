import React, { useEffect } from "react";
import styled from "styled-components";
import PlusPath from "../../../IMG/Plus.png";
import DownArrow from "../../../IMG/DownArrow.PNG";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase";

const PaneBox = styled.div`
  text-align: center;
  padding: 14px 16px 22px;

  .WidthGrid {
    max-width: 960px;
    margin: 0 auto;

    @media ${(props) => props.theme.tablet} {
      max-width: 640px;
    }

    @media ${(props) => props.theme.mobile} {
      max-width: auto;
    }
  }

  .WidthRow {
    margin: 0 -8px;

    @media ${(props) => props.theme.tablet} {
      margin: 0;
    }
  }

  .WidthCol {
    padding: 0 8px;

    @media ${(props) => props.theme.tablet} {
      padding: 0;
    }
  }

  .PaneInner {
    text-align: left;
    margin: 0px 0px 0px 191px;
    &:after {
      display: block;
      content: "";
      clear: both;
    }

    @media ${(props) => props.theme.tablet} {
      margin: 0px 0px 0px 173px;
    }

    @media ${(props) => props.theme.mobile} {
      text-align: center;
      margin: 0;
    }
  }

  .Title {
    width: 520px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 33px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 40px;

    @media ${(props) => props.theme.tablet} {
      font-size: 25px;
      letter-spacing: -0.9px;
      line-height: 30px;
    }

    @media ${(props) => props.theme.mobile} {
      width: auto;
    }
  }

  .Detail {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;

    @media ${(props) => props.theme.tablet} {
      font-size: 15px;
      letter-spacing: -0.5px;
      line-height: 20px;
      margin-top: 3px;
    }
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

    @media ${(props) => props.theme.tablet} {
      margin: 39px 21px 0px 0px;
    }

    @media ${(props) => props.theme.mobile} {
      float: none;
      margin: 19px 0px 14px;
    }
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

    @media ${(props) => props.theme.tablet} {
      width: 213px;
    }

    @media ${(props) => props.theme.mobile} {
      width: 254px;
    }
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
    @media ${(props) => props.theme.mobile} {
      float: none;
      margin: 0;
    }

    .Evaluate {
      text-align: left;
      color: rgb(120, 120, 120);
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.2px;
      line-height: 16px;

      @media ${(props) => props.theme.mobile} {
        text-align: center;
      }

      .grade_text {
        display: inline-block;
      }
    }
  }

  .grade-star {
    position: relative;
    width: 200px;
    cursor: pointer;
    margin: 0 auto;
  }

  .blind {
    position: absolute;
    overflow: hidden;
    margin: -1px;
    padding: 0;
    width: 1px;
    height: 1px;
    border: none;
    clip: rect(0, 0, 0, 0);
  }

  .startRadio {
    display: inline-block;
    overflow: hidden;
    height: 40px;
  }
  .startRadio:after {
    content: "";
    display: block;
    position: relative;
    z-index: 10;
    height: 40px;
    background: url("data:image/png;base64,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")
      repeat-x 0 0;
    background-size: contain;
    pointer-events: none;
  }
  .startRadio__box {
    position: relative;
    z-index: 1;
    float: left;
    width: 20px;
    height: 40px;
    cursor: pointer;
  }
  .startRadio__box input {
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
  }
  .startRadio__box input:checked + .startRadio__img {
    background-color: #ffe066;
  }
  .startRadio__img {
    display: block;
    position: absolute;
    right: 0;
    width: 500px;
    height: 40px;
    pointer-events: none;
  }
`;

function PaneContainer({ match }) {
  const { movies, vote } = useSelector((state) => ({
    movies: state.movies,
    vote: state.vote,
    users: state.users,
  }));

  const dispatch = useDispatch();

  const matchId = Number(match.params.id);

  const Movie = movies.find((movie) => movie.id === matchId);

  const movieGrade = movies[matchId - 1].grade;

  const fetchVotes = () => {
    const vote = movies[matchId - 1].votes;

    dispatch({
      type: "VOTE",
      vote,
    });
  };

  useEffect(() => {
    fetchVotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickStar = (star) => {
    let average = (movieGrade * vote + star) / (vote + 1);

    alert(`${star} 점을 주셨어요!`);

    average = average.toFixed(1);
    db.ref(`/Movies/Movies/${matchId - 1}`).update({
      grade: average,
      votes: vote + 1,
    });
  };

  const KeepMovie = () => {
    alert("업데이트 예정입니다!");
  };

  return (
    <PaneBox>
      <div className="WidthGrid">
        <div className="WidthRow">
          <div className="WidthCol">
            <div className="PaneInner">
              <h1 className="Title">{Movie.movie_name}</h1>
              <div className="Detail">
                {Movie.since} ・ 액션 ・ {Movie.contry}
              </div>
              <div className="ContentRatings">
                평균 ★{Movie.grade} (5,134명)
              </div>
              <div className="ButtonBlock">
                <div className="Self">
                  <button className="StylelessButton-ActionButton">
                    <div className="contentActionStatusImage">
                      <img className="StatusImage" src={PlusPath} alt=""></img>
                      <div onClick={KeepMovie} className="ActionStatus">
                        보고싶어요
                      </div>
                    </div>
                  </button>
                  <button className="StylelessButton-ActionDropDownButton">
                    <img src={DownArrow} alt=""></img>
                  </button>
                  <div className="StarBlock"></div>
                </div>
              </div>
              <div className="Grade">
                <div className="Evaluate">
                  <div className="grade_text">평가하기</div>
                </div>
                <div className="grade-star">
                  <div className="startRadio">
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(0.5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 1개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(1)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 1.5개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(1.5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 2개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(2)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 2.5개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(2.5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 3개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(3)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 3.5개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(3.5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 4개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(4)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 4.5개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(4.5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 5개</span>
                      </span>
                    </label>
                    <label className="startRadio__box">
                      <input
                        type="radio"
                        name="star"
                        onClick={() => onClickStar(5)}
                      />
                      <span className="startRadio__img">
                        <span className="blind">별 5.5개</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaneBox>
  );
}

export default PaneContainer;
