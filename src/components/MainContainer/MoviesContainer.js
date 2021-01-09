import React from "react";
import styled from "styled-components";
import MoviesSliderContainer from "./MovieSlider/MoviesSlider";

const MoviesContainer = styled.section`
  margin: 86px 0 0 auto;
  width: 100%;
`;

function MainContainer() {
  return (
    <>
      <MoviesContainer>
        <MoviesSliderContainer />
      </MoviesContainer>
    </>
  );
}

export default MainContainer;
