export default function reducer(state, action) {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        allPosts: action.payload,
        dataRef: action.payload,
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        allUsers: action.payload,
      };
    case "ADD_USER_POST":
      return {
        ...state,
        loggedUserPosts: action.payload,
      };
    case "LIKE_POST":
      return {
        ...state,
        allPosts: action.payload.post,
      };
    case "BOOKMARK_POST":
      return {
        ...state,
        user: {
          ...state.user,
          bookmarks: action.payload,
        },
      };
    case "DISLIKE_POST":
      return {
        ...state,
        allPosts: action.payload.post,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
