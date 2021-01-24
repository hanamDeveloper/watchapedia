import React from "react";
import styled from "styled-components";
import homePath from "../../IMG/home.svg";
import searchPath from "../../IMG/search.svg";
import mobilestarPath from "../../IMG/mobilestar.svg";
import userPath from "../../IMG/user.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const MobileFooterContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    position: fixed;
    display: block;
    bottom: 0px;
    left: 0px;
    background-color: #ffff;
    width: 100%;
    height: 62px;
    border-top: 1px solid #d2d2d2;
    z-index: 10;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      padding: 0;
    }

    li {
      cursor: pointer;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

function MobileFooter() {
  const dispatch = useDispatch();

  const onClickSearch = () => {
    dispatch({
      type: "MOBILE_SEARCH",
    });
  };

  const onClickAlert = (Alert) => {
    alert(`${Alert}`);
  };
  return (
    <>
      <MobileFooterContainer>
        <ul>
          <li>
            {" "}
            <Link to="/">
              <img src={homePath} alt=""></img>
            </Link>
          </li>
          <li>
            {" "}
            <img onClick={onClickSearch} src={searchPath} alt=""></img>
          </li>
          <li>
            <img
              onClick={() => onClickAlert("보관함은 업데이트 예정입니다")}
              src={mobilestarPath}
              alt=""
            ></img>
          </li>
          <li>
            {" "}
            <img
              onClick={() => onClickAlert("개인정보는 업데이트 예정입니다")}
              src={userPath}
              alt=""
            ></img>
          </li>
        </ul>
      </MobileFooterContainer>
    </>
  );
}

export default MobileFooter;
