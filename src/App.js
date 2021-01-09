import React, { useEffect } from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import { db } from "./firebase";
import { useDispatch } from "react-redux";
import "./CSS/reset.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    // db.ref("/Movies/0").update({
    //   id: 1,
    //   movie_name: "원더우먼 1984",
    //   since: "5050",
    // });
    const MOVIE_RESPONSE = db.ref("/");
    await MOVIE_RESPONSE.on("child_added", (data) => {
      const movies = data.val();
      dispatch({ type: "SAVE_MOVIES", movies });
    });
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  // const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // });
  return (
    <>
      <div className="App">
        <MainContainer></MainContainer>
      </div>
    </>
  );
}

export default App;
