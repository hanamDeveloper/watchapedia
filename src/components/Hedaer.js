import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoPath from "../IMG/yspedia.png";
import Modal from "./Modal/Modal";
import { useSelector, useDispatch } from "react-redux";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  width: 100%;
  height: 62px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
  z-index: 10;
`;

const HeaderBox = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;

  .Category {
    position: relative;
    height: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul :first-child {
    margin-left: 0px;
  }

  li {
    color: rgb(126, 126, 126);
    margin-left: 24px;
    list-style: none;
  }

  .right-content {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    width: 50%;
    right: 0px;
  }

  /* .right-content label {
    width: 300px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxwYXRoIGZpbGw9IiNCQUJBQzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODE0IDE1LjczNWMtMy4yMDcgMC01LjgxNy0yLjYzLTUuODE3LTUuODYxIDAtMy4yMzMgMi42MS01Ljg2MiA1LjgxNy01Ljg2MiAzLjIwNyAwIDUuODE4IDIuNjMgNS44MTggNS44NjJzLTIuNjEgNS44Ni01LjgxOCA1Ljg2bTkuODQxIDIuNTRsLTMuNjYtMy43MDRjLjk4LTEuMzEgMS41NzEtMi45MzIgMS41NzEtNC42OTYgMC00LjMwOC0zLjQ3OC03LjgxMi03Ljc1Mi03LjgxMi00LjI3NCAwLTcuNzUyIDMuNTA0LTcuNzUyIDcuODEyIDAgNC4zMDcgMy40NzggNy44MSA3Ljc1MiA3LjgxIDEuODI5IDAgMy41MDctLjY0NCA0LjgzNC0xLjcxNGwzLjYzNyAzLjY4Yy4xODIuMTg2LjQyNi4yODguNjg1LjI4OC4yNTcgMCAuNS0uMS42ODMtLjI4NC4xODItLjE4NC4yODQtLjQzLjI4NS0uNjkgMC0uMjYtLjEtLjUwNS0uMjgzLS42OSIvPgo8L3N2Zz4K")
      9px 8px no-repeat rgb(245, 245, 247);
    height: 38px;
    padding: 7px 10px 8px 36px;
    border-radius: 2px;
  } */

  .label {
    width: 300px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxwYXRoIGZpbGw9IiNCQUJBQzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODE0IDE1LjczNWMtMy4yMDcgMC01LjgxNy0yLjYzLTUuODE3LTUuODYxIDAtMy4yMzMgMi42MS01Ljg2MiA1LjgxNy01Ljg2MiAzLjIwNyAwIDUuODE4IDIuNjMgNS44MTggNS44NjJzLTIuNjEgNS44Ni01LjgxOCA1Ljg2bTkuODQxIDIuNTRsLTMuNjYtMy43MDRjLjk4LTEuMzEgMS41NzEtMi45MzIgMS41NzEtNC42OTYgMC00LjMwOC0zLjQ3OC03LjgxMi03Ljc1Mi03LjgxMi00LjI3NCAwLTcuNzUyIDMuNTA0LTcuNzUyIDcuODEyIDAgNC4zMDcgMy40NzggNy44MSA3Ljc1MiA3LjgxIDEuODI5IDAgMy41MDctLjY0NCA0LjgzNC0xLjcxNGwzLjYzNyAzLjY4Yy4xODIuMTg2LjQyNi4yODguNjg1LjI4OC4yNTcgMCAuNS0uMS42ODMtLjI4NC4xODItLjE4NC4yODQtLjQzLjI4NS0uNjkgMC0uMjYtLjEtLjUwNS0uMjgzLS42OSIvPgo8L3N2Zz4K")
      9px 8px no-repeat rgb(245, 245, 247);
    height: 38px;
    padding: 7px 10px 8px 36px;
    border-radius: 2px;
  }

  input {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0em.3px;
    line-height: 23px;
    background: rgb(0, 0, 0, 0);
    padding: 0px 0px 1px;
    border: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(53, 53, 53);
  }

  button {
    cursor: pointer;
    background: transparent;
    color: rgb(116, 116, 123);
    font-size: 14px;
    letter-spacing: -0px.3px;
    padding: 0px;
    border: 0px;
    margin: 15px 0px;
  }

  button.sign-up {
    text-align: center;
    border-radius: 6px;
    font-weight: 500;
    line-height: 20px;
    box-sizing: border-box;
    width: auto;
    min-width: 72px;
    height: 32px;
    color: rgb(53, 53, 53);
    padding: 5px 14px 6px;
    border: 1px solid rgba(116, 116, 123, 0.5);
  }

  img {
    width: 151px;
    height: 37px;
  }
`;
function Header() {
  const dispatch = useDispatch();

  const onClickOpenModal = (modal) => {
    dispatch({
      type: "OPEN_MODAL",
      modal,
    });
  };
  return (
    <HeaderContainer>
      <HeaderBox>
        <div className="Category">
          <ul>
            <li>
              <Link to="/">
                <img src={LogoPath} alt=""></img>
              </Link>
            </li>
            <li>영화</li>

            <div className="right-content">
              <ul>
                <li>
                  <form>
                    <label>
                      <input placeholder="작품 제목, 배우, 감독을 검색해보세요"></input>
                    </label>
                  </form>
                </li>
                <li>
                  <button onClick={() => onClickOpenModal(true)}>로그인</button>
                  <Modal />
                </li>
                <li>
                  <button className="sign-up">회원가입</button>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
}

export default Header;
