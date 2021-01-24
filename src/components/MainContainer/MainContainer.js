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
  animation: backColor 1s;

  @keyframes backColor {
    0% {
      opacity: 0;
      display: block;
    }
    50% {
      opacity: 0;
    }
    100% {
      display: none;
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }
`;

function MainContainer() {
  return (
    <>
      <Route path="/" component={MobileHeader} />

      <Route path="/" component={Header}></Route>
      <div className="nodeblog">
        <MainPageContainer>
          <Route path="/" component={MoviesContainer} exact></Route>
        </MainPageContainer>
      </div>
      <Route path="/movieinfo:id" component={MovieInfo} exact></Route>

      <Footer />
      <MobileFooter />
      <Route path="/" component={Input}></Route>
    </>
  );
}

export default MainContainer;
