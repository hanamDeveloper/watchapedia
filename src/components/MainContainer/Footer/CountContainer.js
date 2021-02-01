import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101113;
  height: 20%;
`;

function CountContainer() {
  const { movies, votes } = useSelector((state) => ({
    movies: state.reducer.movies,
    votes: state.reducer.votes,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length !== 0) {
      let vote = 0;
      const votesArray = movies.map((movie) => movie.votes);
      vote = votesArray.reduce((accumulator, current) => accumulator + current);

      dispatch({
        type: "VOTES",
        vote,
      });
    }
  }, [dispatch, movies]);

  return (
    <CountBox>
      <h2>
        지금까지 <span>★ {votes}</span>개의 평가가 쌓였어요.
      </h2>
    </CountBox>
  );
}

export default CountContainer;
