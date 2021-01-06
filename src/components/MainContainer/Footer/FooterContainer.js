import React from "react";
import styled from "styled-components";
import ContactContainer from "./ContactContainer";
import CountContainer from "./CountContainer";

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
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <CountContainer />
        <ContactContainer />
      </FooterContainer>
    </>
  );
}

export default Footer;
