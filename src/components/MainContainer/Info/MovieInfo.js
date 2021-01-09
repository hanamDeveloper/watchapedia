import React from "react";
import styled from "styled-components";
import MainInfo from "./MainInfo";
import PosterContainer from "./PosterContainer";
import PaneContainer from "./PaneContainer";

const Main = styled.section`
  padding-top: 0px;
  padding-bottom: unset;
  border-bottom: 1px solid #e3e3e3;
  .Content {
    display: flex;
  }

  .Background {
    flex: 1;
    background: #f8f8f8;
  }

  section {
    background-color: #fff;
  }

  h1 {
    margin: 0;
  }

  .WidthGrid {
    max-width: 960px;
    margin: 0 auto;
  }

  .WidthRow {
    margin: 0 -8px;
  }

  .WidthCol {
    padding: 0 8px;
  }
`;

function MovieInfo({ match }) {
  // db.ref("/Movies/0").update({
  //   grade: matchId,
  // });
  return (
    <>
      <Main>
        <div className="Content">
          <div className="Background">
            <section>
              <PosterContainer match={match} />
              <PaneContainer match={match} />
            </section>
          </div>
        </div>
      </Main>
      <MainInfo match={match} />
    </>
  );
}

export default MovieInfo;
