import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Hedaer";
import Footer from "./Footer/FooterContainer";
import MovieInfo from "./Info/MovieInfo";
import MoviesContainer from "./MoviesContainer";

const MainPageContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`;

function MainContainer() {
  return (
    <>
      <Header />

      <MainPageContainer>
        <Route path="/" component={MoviesContainer} exact></Route>
      </MainPageContainer>
      <Route path="/movieinfo:id" component={MovieInfo} exact></Route>

      <Footer />
    </>
  );
}

export default MainContainer;
