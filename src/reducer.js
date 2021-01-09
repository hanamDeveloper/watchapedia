import produce from "immer";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
      };
    case "SAVE_MOVIES":
      return produce(state, (draft) => {
        draft.movies = action.movies;
      });
    case "OPEN_MODAL":
      return produce(state, (draft) => {
        draft.modal = action.modal;
      });
    case "CLICK_SIGN_UP":
      return produce(state, (draft) => {
        draft.signUp = action.clickSingup;
      });

    default:
      return state;
  }
}

export const initialState = {
  modal: false,
  signUp: false,
  login: false,
  movies: [],
};
