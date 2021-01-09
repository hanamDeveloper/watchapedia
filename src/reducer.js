import produce from "immer";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return produce(state, (draft) => {
        draft.login = !draft.login;
        draft.users.user.userName = action.user.displayName;
      });
    case "COMMENT":
      return produce(state, (draft) => {
        draft.comments.push(action.user);
      });
    case "COMMENT_RESET":
      return produce(state, (draft) => {
        draft.comments = [];
      });
    case "CHANGE_INPUT":
      return produce(state, (draft) => {
        draft.input = action.input;
      });
    case "ADD_COMENT":
      return produce(state, (draft) => {
        draft.input = "";
      });
    //  {
    //   ...state,
    //   login: !state.login,
    // };
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
  users: {
    user: {
      userName: "",
      userEmail: "",
      userAge: 0,
    },
  },
  input: "",
  comments: [],
};
