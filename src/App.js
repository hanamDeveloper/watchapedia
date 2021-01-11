import React, { useEffect } from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import { db } from "./firebase";
import { useDispatch } from "react-redux";
import "./CSS/reset.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const MOVIE_RESPONSE = db.ref("/");
    await MOVIE_RESPONSE.on("child_added", (data) => {
      const movies = data.val();
      dispatch({ type: "SAVE_MOVIES", movies });
    });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="App">
        <MainContainer></MainContainer>
      </div>
    </>
  );
}

export default App;
