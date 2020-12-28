import React from "react";
import styled from "styled-components";
import Header from "../Hedaer";
import MoviesContainer from "./MoviesContainer";

const MainPageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70%;
`;

function MainContainer() {
  return (
    <>
      <Header />
      <MainPageContainer>
        <MoviesContainer></MoviesContainer>
      </MainPageContainer>
    </>
  );
}

export default MainContainer;
