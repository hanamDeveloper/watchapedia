import produce from "immer";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_MOVIES":
      return produce(state, (draft) => {
        draft.movies = action.movies;
      });
    default:
      return state;
  }
}

export const initialState = {
  movies: [],
};
