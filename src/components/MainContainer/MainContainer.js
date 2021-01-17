import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Hedaer";
import Input from "../Input";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer/FooterContainer";
import MovieInfo from "./Info/MovieInfo";
import MobileFooter from "./MobileFooter";
import MoviesContainer from "./MoviesContainer";

const MainPageContainer = styled.div`
  margin: 0 auto;
  width: 70%;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }
`;

function MainContainer() {
  return (
    <>
      <Route path="/" component={MobileHeader} />
      <Route path="/" component={Header}></Route>
      <MainPageContainer>
        <Route path="/" component={MoviesContainer} exact></Route>
      </MainPageContainer>
      <Route path="/movieinfo:id" component={MovieInfo} exact></Route>

      <Footer />
      <MobileFooter />
      <Route path="/" component={Input}></Route>
    </>
  );
}

export default MainContainer;
