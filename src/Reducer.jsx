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
    default:
      return state;
  }
}
