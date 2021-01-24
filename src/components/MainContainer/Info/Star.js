import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { db, dbStore } from "../../../firebase";

const StarContainer = styled.div`
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
function Star({ matchId }) {
  const { movies, vote, users, saveStar, movieNames, login } = useSelector(
    (state) => ({
      movies: state.reducer.movies,
      vote: state.reducer.vote,
      users: state.reducer.users,
      saveStar: state.reducer.saveStar,
      movieNames: state.reducer.movieNames,
      login: state.reducer.login,
    })
  );

  const dispatch = useDispatch();

  const movieGrade = movies[matchId - 1].grade;
  const movieName = movies[matchId - 1].movie_name;

  //별점 클릭
  const onClickStar = (star) => {
    let average = (movieGrade * vote + star) / (vote + 1);

    dispatch({
      type: "ADD_USER_HAS_MOVIE",
    });

    alert(`${star} 점을 주셨어요!`);

    average = average.toFixed(1);
    db.ref(`/Movies/Movies/${matchId - 1}`).update({
      grade: average,
      votes: vote + 1,
    });

    //사용자 이메일과 영화에 해당하는 값 조회
    dbStore
      .collection("users")
      .where("MovieName", "==", `${movieName}`)
      .where("userEmail", "==", `${users.user.userEmail}`)
      .get()
      .then(function (querySnapshot) {
        //해당 영화에 대한 평점 정보가 있을 경우
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function (doc) {
            //해당 영화의 키값으로 정보 수정
            dbStore.collection("users").doc(`${doc.id}`).update({
              myStar: star,
            });

            //수정한 값을 다시 조회
            dbStore
              .collection("users")
              .doc(`${doc.id}`)
              .get()
              .then(function (doc) {
                const saveUserMovieInfo = doc.data();
                //수정 후 별점을 리듀서를 통해 상태 없데이트
                dispatch({
                  type: "SAVE_USER_MOVIE_INFO",
                  star: saveUserMovieInfo.myStar,
                });
              });
          });
        } else {
          //해당 영화에 대한 평점 정보가 없을 경우 DB에 저장
          dbStore.collection("users").add({
            userName: users.user.userName,
            userEmail: users.user.userEmail,
            MovieName: movieName,
            myStar: star,
          });
          //리듀서를 통해 star 값 업데이트 -> 리렌더링
          dispatch({
            type: "SAVE_USER_MOVIE_INFO",
            star: star,
          });
        }
      });
  };

  const onLogOutClick = () => {
    alert("로그인 후 이용가능합니다.");
  };

  useEffect(() => {
    //처음 영화상세페이지 들어왔을 때 사용자 이메일과 영화에 해당하는 값 조회
    dbStore
      .collection("users")
      .where("MovieName", "==", `${movieName}`)
      .where("userEmail", "==", `${users.user.userEmail}`)
      .get()
      .then(function (querySnapshot) {
        //console.log("TF11", querySnapshot.size);
        //해당 영화에 대한 평점 정보가 있을 경우
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function (doc) {
            //console.log("star", doc.data().myStar);
            dispatch({
              type: "SAVE_USER_MOVIE_INFO",
              star: doc.data().myStar,
            });
          });
        } else {
          //해당 영화에 대한 평점 정보가 없을 경우
          dispatch({
            type: "RESET_SAVE_STAR",
          });
        }
      });
  }, [dispatch, movieName, movieNames, users.user.userEmail]);

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
  return (
    <StarContainer>
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
                onClick={login ? () => onClickStar(0.5) : () => onLogOutClick()}
                checked={saveStar === 0.5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 0.5개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(1) : () => onLogOutClick()}
                checked={saveStar === 1 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 1개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(1.5) : () => onLogOutClick()}
                checked={saveStar === 1.5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 1.5개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(2) : () => onLogOutClick()}
                checked={saveStar === 2 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 2개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(2.5) : () => onLogOutClick()}
                checked={saveStar === 2.5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 2.5개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(3) : () => onLogOutClick()}
                checked={saveStar === 3 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 3개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(3.5) : () => onLogOutClick()}
                checked={saveStar === 3.5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 3.5개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(4) : () => onLogOutClick()}
                checked={saveStar === 4 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 4개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(4.5) : () => onLogOutClick()}
                checked={saveStar === 4.5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 4.5개</span>
              </span>
            </label>
            <label className="startRadio__box">
              <input
                type="radio"
                name="star"
                onClick={login ? () => onClickStar(5) : () => onLogOutClick()}
                checked={saveStar === 5 ? true : false}
                readOnly
              />
              <span className="startRadio__img">
                <span className="blind">별 5개</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </StarContainer>
  );
}

export default Star;
