import produce from "immer";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return produce(state, (draft) => {
        draft.login = true;
        draft.users.user.userName = action.user.displayName;
      });
    case "LOGOUT":
      return produce(state, (draft) => {
        draft.login = false;
      });
    case "COMMENT":
      return produce(state, (draft) => {
        draft.comments.push(action.user);
      });
    case "VOTES":
      console.log("state", state.votes);
      console.log("action", action.votes);
      return produce(state, (draft) => {
        draft.votes = action.votes;
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
  votes: 0,
};
