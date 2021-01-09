import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../../../firebase";
import PlusPath from "../../../IMG/Plus.png";

const MainInfoBackground = styled.div`
  width: 100%;
  padding-top: 30px;
  background-color: #f8f8f8;
`;

const MainInfoContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: white;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 15px;
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

  .appearance-production {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      display: flex;

      width: 33%;
      height: 76px;
    }

    .character-box {
      display: flex;
      align-items: center;
      width: 100%;

      p {
        margin: 5px 0 0 0px;

        color: rgb(140, 140, 140);
        font-size: 14px;
        font-weight: 400;
      }

      .title {
        color: rgb(30, 30, 30);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.7px;
        line-height: 22px;
        white-space: nowrap;
      }
    }

    li img {
      width: 56px;
      width: 56px;
    }

    li .character-text-box {
      width: 100%;
      margin-left: 5%;
      border-bottom: 1px solid rgb(227, 227, 227);
    }
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
  const { movies, input, users, comments } = useSelector((state) => ({
    input: state.input,
    movies: state.movies,
    users: state.users,
    comments: state.comments,
  }));

  useEffect(() => {
    dispatch({
      type: "COMMENT_RESET",
    });

    const MOVIE_RESPONSE = db.ref(`/Movies/${matchId - 1}/comments`);
    MOVIE_RESPONSE.on("child_added", (data) => {
      const commnet = data.val();

      const user = {
        userName: commnet.userName,
        comment: commnet.comment,
      };

      dispatch({
        type: "COMMENT",
        user,
      });
    });
  }, []);

  const dispatch = useDispatch();

  const matchId = Number(match.params.id);

  const movie = movies[matchId - 1].character;

  const onChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      input: e.target.value,
    });
  };

  const onClick = () => {
    dispatch({
      type: "ADD_COMENT",
      input,
    });

    db.ref(`/Movies/${matchId - 1}/comments`).push({
      comment: input,
      userName: users.user.userName,
    });
  };

  const character1 = movie.map((test) => test.character1);
  const character2 = movie.map((test) => test.character2);
  const character3 = movie.map((test) => test.character3);
  const character4 = movie.map((test) => test.character4);
  const character5 = movie.map((test) => test.character5);
  const character6 = movie.map((test) => test.character6);

  // console.log(character1);
  // console.log(character2);
  // console.log(character3);
  // console.log(character4);
  // console.log(character5);
  // console.log(character6);

  // console.log(
  //   "test",
  //   movie.character.map((test) => test)
  // );
  // console.log(
  //   "character1",
  //   movie.character.map((test) => test.character1)
  // );

  return (
    <MainInfoBackground>
      <MainInfoContainer>
        <div className="content-box">
          <div className="basic-information">
            <h3>기본정보</h3>
            <a href="#!">더보기</a>
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
          <div className="appearance-production">
            <ul>
              {character1.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
              {character2.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
              {character3.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
              {character4.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
              {character5.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
              {character6.map((character) => (
                <li>
                  <div className="character-box">
                    <img src={character.character_image} alt=""></img>
                    <div className="character-text-box">
                      <p className="title">{character.character_name}</p>
                      <p>{character.character_position}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-information">
            <h3>댓글</h3>
          </div>
          <div className="coment-box">
            <div className="coment-input">
              <input onChange={onChange} value={input}></input>
              <button onClick={onClick}>
                <img className="StatusImage" src={PlusPath} alt=""></img>
              </button>
            </div>
            <div className="coments">
              <ul>
                {comments.map((comment) => (
                  <li>
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
