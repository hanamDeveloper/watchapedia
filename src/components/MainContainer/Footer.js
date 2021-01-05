import React from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
  position: absolute;
  width: 100%;
  height: 280px;
  margin-top: 50px;

  h2 {
    margin: 0;
    color: #d1d1d2;
  }

  span {
    color: #ff0558;
  }

  .count-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101113;
    height: 20%;
  }

  .contact-container {
    display: flex;
    background-color: #1c1d1f;
    height: 80%;

    .contact {
      width: 90%;
      padding: 15px 100px;
      color: #d1d1d2;
    }
  }
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <div className="count-container">
          <h2>
            지금까지 <span>★ 580,381,025 개의 평가가</span> 쌓였어요.
          </h2>
        </div>
        <div className="contact-container">
          <div className="contact">
            <p>서비스 이용약관 ㅣ 개인정보 처리방침 ㅣ 회사 안내</p>
            <p>고객센터 ㅣ zmf1118@gmail.com</p>
            <p>주식회사 왓쨔 ㅣ 대표 김영섭 ㅣ 경기도 하남시 미사 퀸즈파크</p>
            <p>사업자 등록번호 없음</p>
            <p>© 2021 Watccha. Inc</p>
          </div>
        </div>
      </FooterContainer>
      <div></div>
    </>
  );
}

export default Footer;
