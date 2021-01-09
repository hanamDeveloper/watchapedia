import React from "react";
import styled from "styled-components";

const ContactBox = styled.div`
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
function ContactContainer() {
  return (
    <ContactBox>
      <div className="contact-container">
        <div className="contact">
          <p>서비스 이용약관 ㅣ 개인정보 처리방침 ㅣ 회사 안내</p>
          <p>고객센터 ㅣ zmf1118@gmail.com</p>
          <p>주식회사 왓쨔 ㅣ 대표 김영섭 ㅣ 경기도 하남시 미사 퀸즈파크</p>
          <p>사업자 등록번호 없음</p>
          <p>© 2021 Watccha. Inc</p>
        </div>
      </div>
    </ContactBox>
  );
}

export default ContactContainer;
