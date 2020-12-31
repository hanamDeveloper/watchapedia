import React from "react";
import styled from "styled-components";
import characterPath from "../../IMG/Character.PNG";
import PlusPath from "../../IMG/Plus.png";

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
    /* display: flex; */
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

    li {
      padding: 5px 0px 5px 10px;
      margin: 10px 0;
      border: 1px solid rgb(227, 227, 227);
      border-radius: 7px;
    }
  }
`;

function MainInfo() {
  return (
    <MainInfoBackground>
      <MainInfoContainer>
        <div className="content-box">
          <div className="basic-information">
            <h3>기본정보</h3>
            <a href="">더보기</a>
          </div>
          <div className="basic-infomation__detail">
            <p>Wonder Woman 1984</p>
            <p>2020 · 미국 · 액션</p>
            <p>2시간 31분</p>

            <h4>내용 </h4>
            <p>
              세상이 기다린 히어로, 희망이 되다! 1984년 모든 것이 활기찬 시대,
              다이애나 프린스는 고고학자로서 인간들 사이에서 조용히 살고 있다.
              단지 원더 우먼으로서 위기에 처한 사람을 구할 때만 빼고는. 그런
              다이애나 앞에 거짓말처럼 죽었던 스티브 트레버가 나타나고, 거부할
              수 없는 적마저 함께 찾아오는데…지나친 풍요로움이 과잉이 되어 또
              다시 위협받는 인류, 위태로운 세상에 오직 원더 우먼만이 희망이다!
              그 어떤 적도 피하지 않는다!
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-information">
            <h3>출연/제작</h3>
          </div>
          <div className="appearance-production">
            <ul>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="character-box">
                  <img src={characterPath}></img>
                  <div className="character-text-box">
                    패티 젠킨스
                    <p>감독</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-information">
            <h3>댓글</h3>
          </div>
          <div className="coment-box">
            <div className="coment-input">
              <input></input>
              <button>
                <img className="StatusImage" src={PlusPath}></img>
              </button>
            </div>
            <div className="coments">
              <ul>
                <li>김영섭: 지짜 대바기약!!</li>
                <li>최수현: 지짜 대바기약!!</li>
                <li>이정윤: 아휴 머리아파..!!</li>
                <li>김영섭: 지짜 대바기약!!</li>
                <li>최수현: 지짜 대바기약!!</li>
                <li>이정윤: 아휴 머리아파..!!</li>
                <li>김영섭: 지짜 대바기약!!</li>
                <li>최수현: 지짜 대바기약!!</li>
                <li>이정윤: 아휴 머리아파..!!</li>
              </ul>
            </div>
          </div>
        </div>
      </MainInfoContainer>
    </MainInfoBackground>
  );
}

export default MainInfo;