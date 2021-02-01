import produce from "immer";

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
    commentInput: "",
  },
  comments: [],
  vote: 0,
  votes: 0,
  searchMovie: [],
  scrollHeight: false,
  mobileSearch: false,
  saveStar: 0,
  movieNames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return produce(state, (draft) => {
        draft.login = true;
        draft.modal = false;
        draft.users.user.userName = action.user.displayName;
        draft.users.user.userEmail = action.user.email;
      });
    case "LOGOUT":
      return produce(state, (draft) => {
        draft.users = initialState.users;
        draft.login = false;
        draft.saveStar = 0;
      });
    case "COMMENT":
      return produce(state, (draft) => {
        draft.comments.push(action.user);
      });
    case "VOTE":
      return produce(state, (draft) => {
        draft.vote = action.vote;
      });
    case "VOTES":
      return produce(state, (draft) => {
        draft.votes = action.vote;
      });
    case "SAVE_USER_MOVIE_INFO":
      return produce(state, (draft) => {
        draft.saveStar = action.star;
      });
    case "RESET_SAVE_STAR":
      return produce(state, (draft) => {
        draft.saveStar = 0;
      });
    case "SAVE_MOVIE_NAMES":
      return produce(state, (draft) => {
        draft.movieNames = action.MovieNames;
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
        draft.inputs.commentInput = "";
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
    case "MOBILE_SEARCH":
      return produce(state, (draft) => {
        draft.mobileSearch = !state.mobileSearch;
      });
    default:
      return state;
  }
}
