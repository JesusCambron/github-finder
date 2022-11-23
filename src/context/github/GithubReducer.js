import { GITHUB_ACTIONS_TYPES } from "./githubActionsTypes";

const githubReducer = (state, action) => {
  switch (action.type) {
    case GITHUB_ACTIONS_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case GITHUB_ACTIONS_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GITHUB_ACTIONS_TYPES.CLEAR_SEARCH:
      return {
        ...state,
        users: [],
      };
    case GITHUB_ACTIONS_TYPES.GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GITHUB_ACTIONS_TYPES.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    case GITHUB_ACTIONS_TYPES.GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
