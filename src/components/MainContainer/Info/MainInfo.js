import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../../../firebase";
import PlusPath from "../../../IMG/Plus.png";
import Input from "../../Input";
import Production from "./Production";

const MainInfoBackground = styled.div`
  width: 100%;
  padding-top: 30px;
  background-color: #f8f8f8;
`;

const MainInfoContainer = styled.div`
  width: 976px;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: white;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 15px;

  @media ${(props) => props.theme.tablet} {
    width: 640px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  p {
    margin: 10px 0px;
  }

  .content-box {
    width: 95%;
    padding-bottom: 15px;
    margin: 0 auto;
    border-bottom: 1px solid rgb(227, 227, 227);

    &:last-child {
      border-bottom: none;
    }
  }

  .content-box .basic-information {
    position: relative;
    display: flex;
    align-items: center;
  }

  .content-box .basic-information a {
    position: absolute;
    right: 0;
  }

  .coment-box {
    width: 95%;
    margin: 0 auto;
    padding: 15px;
    background-color: #f8f8f8;
    justify-content: center;
    border-radius: 15px;

    .coment-input {
      display: flex;
      width: 100%;

      input {
        width: 80%;
        padding: 8px 0;
        border-radius: 7px;
        border: 2px solid rgb(227, 227, 227);
      }

      button {
        width: 20%;
        display: flex;
        background-color: rgb(255, 47, 110);
        box-sizing: border-box;
        border-radius: 6px;
        margin: 0px auto;
        justify-content: center;
        align-items: center;
      }
    }

    span {
      color: rgb(140, 140, 140);

      &:last-child {
        margin-left: 5px;
      }
    }

    li {
      padding: 5px 0px 5px 10px;
      margin: 10px 0;
      border: 1px solid rgb(227, 227, 227);
      border-radius: 7px;
    }
  }
`;

function MainInfo({ match }) {
  const { movies, inputs, comments, login, users } = useSelector((state) => ({
    inputs: state.reducer.inputs,
    movies: state.reducer.movies,
    comments: state.reducer.comments,
    login: state.reducer.login,
    users: state.reducer.users,
  }));

  const id = useRef(comments.length);

  useEffect(() => {
    dispatch({
      type: "COMMENT_RESET",
    });

    const MOVIE_RESPONSE = db.ref(`/Movies/Movies/${matchId - 1}/comments`);
    MOVIE_RESPONSE.on("child_added", (data) => {
      const comment = data.val();

      const user = {
        userName: comment.userName,
        comment: comment.comment,
        id: id.current++,
      };

      dispatch({
        type: "COMMENT",
        user,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const matchId = Number(match.params.id);

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  const onClick = () => {
    dispatch({
      type: "ADD_COMENT",
    });

    db.ref(`/Movies/Movies/${matchId - 1}/comments`).push({
      comment: inputs.commentInput,
      userName: users.user.userName,
    });
  };

  return (
    <MainInfoBackground>
      <MainInfoContainer>
        <div className="content-box">
          <div className="basic-information">
            <h3>기본정보</h3>
          </div>
          <div className="basic-infomation__detail">
            <p>{movies[matchId - 1].movie_name}</p>
            <p>{movies[matchId - 1].movie_genre}</p>
            <p>{movies[matchId - 1].movie_playtime}</p>

            <h4>내용 </h4>
            <p>{movies[matchId - 1].movie_story}</p>
          </div>
        </div>

        <div className="content-box">
          <div className="basic-information">
            <h3>출연/제작</h3>
          </div>
          <Production matchId={matchId} />
        </div>
        <div className="content-box">
          <div className="basic-information">
            <h3>댓글</h3>
          </div>
          <div className="coment-box">
            <div className="coment-input">
              {login ? (
                <Input
                  onChange={onChange}
                  name="commentInput"
                  value={inputs.commentInput}
                ></Input>
              ) : (
                <input readOnly value={"   로그인 후에 이용해주세요"} />
              )}

              <button
                onClick={
                  login ? onClick : () => alert("로그인 후 사용해주세요")
                }
              >
                <img className="StatusImage" src={PlusPath} alt=""></img>
              </button>
            </div>
            <div className="coments">
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <span>{comment.userName} :</span>
                    <span>{comment.comment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MainInfoContainer>
    </MainInfoBackground>
  );
}

export default MainInfo;
