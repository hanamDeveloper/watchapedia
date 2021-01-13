import produce from "immer";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return produce(state, (draft) => {
        draft.login = true;
        draft.modal = false;
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
    case "VOTE":
      return produce(state, (draft) => {
        draft.vote = action.vote;
      });
    case "COMMENT_RESET":
      return produce(state, (draft) => {
        draft.comments = [];
      });
    case "CHANGE_INPUT":
      return produce(state, (draft) => {
        draft.inputs[action.name] = action.value;
      });

    case "SEARCH_MOVIE":
      return produce(state, (draft) => {
        draft.inputs.search = "";
      });
    case "ADD_COMENT":
      return produce(state, (draft) => {
        draft.input = "";
      });
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
    case "TEST":
      return produce(state, (draft) => {
        draft.votes = action.vote;
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
      userMovieList: {},
    },
  },
  inputs: {
    search: "",
  },
  comments: [],
  vote: 0,
  votes: 0,
  searchMovie: [],
};
