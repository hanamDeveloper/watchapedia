import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const InputContainer = styled.input`
  width: 100%;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 23px;
  background: rgb(0, 0, 0, 0);
  padding: 0px 0px 1px;
  border: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
`;

function Input({ placeholder, width, name, value, history, fontSize }) {
  const { inputs, movies } = useSelector((state) => ({
    inputs: state.reducer.inputs,
    movies: state.reducer.movies,
  }));

  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  const handleEnterPress = (e) => {
    const searchMovie = movies.filter(
      (movie) => movie.movie_name === inputs.search
    );

    let movieId = null;

    if (e.key === "Enter") {
      if (searchMovie.length === 0) {
        alert("정확한 영화제목을 입력해주세요");
      } else {
        movieId = searchMovie[0].id;
        history.push(`/movieinfo${movieId}`);
      }

      dispatch({
        type: "SEARCH_MOVIE",
        inputs,
      });
    }
  };
  return (
    <InputContainer
      fontSize={fontSize}
      onChange={onChange}
      onKeyPress={handleEnterPress}
      name={name}
      value={value}
      placeholder={placeholder}
      width={width}
    ></InputContainer>
  );
}

export default Input;
