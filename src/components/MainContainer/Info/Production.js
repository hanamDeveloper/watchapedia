import { useSelector } from "react-redux";
import styled from "styled-components";

const ProductionContainer = styled.div`
  .appearance-production {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      display: flex;

      width: 33%;
      height: 76px;
    }

    .character-box {
      display: flex;
      align-items: center;
      width: 100%;

      p {
        margin: 5px 0 0 0px;

        color: rgb(140, 140, 140);
        font-size: 14px;
        font-weight: 400;
      }

      .title {
        color: rgb(30, 30, 30);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.7px;
        line-height: 22px;
        white-space: nowrap;
      }
    }

    li img {
      width: 56px;
      width: 56px;
    }

    li .character-text-box {
      width: 100%;
      margin-left: 5%;
      border-bottom: 1px solid rgb(227, 227, 227);
    }
  }
`;

function Production({ matchId }) {
  const { movies } = useSelector((state) => ({
    movies: state.movies,
  }));

  const movie = movies[matchId - 1].character;

  const character1 = movie.map((test) => test.character1);
  const character2 = movie.map((test) => test.character2);
  const character3 = movie.map((test) => test.character3);
  const character4 = movie.map((test) => test.character4);
  const character5 = movie.map((test) => test.character5);
  const character6 = movie.map((test) => test.character6);
  return (
    <ProductionContainer>
      <div className="appearance-production">
        <ul>
          <li>
            <div className="character-box">
              <img src={character1[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character1[0].character_name}</p>
                <p>{character1[0].character_position}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="character-box">
              <img src={character2[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character2[0].character_name}</p>
                <p>{character2[0].character_position}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="character-box">
              <img src={character3[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character3[0].character_name}</p>
                <p>{character3[0].character_position}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="character-box">
              <img src={character4[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character4[0].character_name}</p>
                <p>{character4[0].character_position}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="character-box">
              <img src={character5[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character5[0].character_name}</p>
                <p>{character5[0].character_position}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="character-box">
              <img src={character6[0].character_image} alt=""></img>
              <div className="character-text-box">
                <p className="title">{character6[0].character_name}</p>
                <p>{character6[0].character_position}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </ProductionContainer>
  );
}

export default Production;
