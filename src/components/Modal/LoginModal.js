import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import loginLogoPath from "../../IMG/로그인 로고.png";
import closePath from "../../IMG/close.png";
import { authService, firebaseInstance } from "../../firebase";

const ModalContainer = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => props.display};
    align-items: center;
    justify-content: center;
  }

  .modal-wrapper p {
    text-align: center;
    color: rgb(140, 140, 140);
    span {
      color: rgb(255, 47, 110);
      cursor: pointer;
    }
  }

  .login-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 24px 16px;
    border-radius: 4px;
    width: 375px;

    img {
      display: inline-block;
      width: 140px;
      height: 70px;
    }
  }

  .modal-title {
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 22px;
    font-weight: 700;
    text-align: center;
    margin: 24px 0px 20px;
  }

  .modal p {
    font-size: 16px;
  }

  .close-wrapper {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    padding: 0;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
    }
  }

  .ButtonBlock {
    float: left;
    margin: 39px 30px 0px 0px;
  }

  .Self {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 47, 110);
    box-sizing: border-box;
    height: 40px;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px 0px;
  }

  .StylelessButton-ActionButton {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    color: rgb(246, 246, 246);
    font-size: 17px;
    font-weight: 500;
  }
`;

function LoginModal() {
  const { modal, signUp } = useSelector((state) => ({
    modal: state.reducer.modal,
    signUp: state.reducer.signUp,
  }));

  const dispatch = useDispatch();

  const onClickOpenModal = (modal) => {
    dispatch({
      type: "OPEN_MODAL",
      modal,
    });
  };

  const onClickSignUp = (clickSingup) => {
    dispatch({
      type: "CLICK_SIGN_UP",
      clickSingup,
    });
  };

  const onSocialClick = async (e) => {
    const { name } = e.target;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      alert("업데이트 예정입니다. 구글로 로그인해주세요");
    }
    await authService.signInWithPopup(provider);
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "LOGIN",
          user,
        });
      }
    });
  }, [dispatch]);

  return (
    <>
      <ModalContainer display={modal ? "flex" : "none"}>
        <div className="modal-wrapper">
          <div className="login-modal">
            <div className="close-wrapper">
              <img
                src={closePath}
                alt=""
                onClick={() => onClickOpenModal(false)}
              />
            </div>
            <img src={loginLogoPath} alt=""></img>
            <p className="modal-title">로그인</p>
            <div className="Self">
              <button
                className="StylelessButton-ActionButton"
                onClick={onSocialClick}
                name="google"
              >
                Continue with Google
              </button>
            </div>
            <div className="Self">
              <button
                className="StylelessButton-ActionButton"
                onClick={onSocialClick}
                name="github"
              >
                Continue with Github
              </button>
            </div>

            <p>
              {signUp ? "계정이있어요!  " : "계정이 없으신가요?  "}
              <span onClick={() => onClickSignUp(!signUp)}>
                {signUp ? "로그인" : "소셜로 로그인 해주세요"}
              </span>
            </p>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

export default LoginModal;
