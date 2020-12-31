import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Hedaer";
import Footer from "./Footer";
import MovieInfo from "./MovieInfo";
import MoviesContainer from "./MoviesContainer";

const MainPageContainer = styled.div`
  /* position: relative; */
  margin: 0 auto;
  width: 70%;
`;

function MainContainer() {
  return (
    <>
      <Header />

      <MainPageContainer>
        {/* <MoviesContainer></MoviesContainer> */}
        <Route path="/" component={MoviesContainer} exact></Route>
      </MainPageContainer>
      <Route path="/movieinfo" component={MovieInfo} exact></Route>
      <Footer />
    </>
  );
}

export default MainContainer;
