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
    case "USER": {
      const updatedUsers = state.allUsers?.reduce(
        (acc, item) =>
          item?.username === action.payload.followUser?.username
            ? [...acc, action.payload.followUser]
            : [...acc, { ...item }],
        []
      );
      return {
        ...state,
        user: action.payload.user,
        allUsers: updatedUsers,
      };
    }
    case "NEW_USER": {
      const updatedUser = {
        ...action.payload.user,
        avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png",
      };
      return {
        ...state,
        user: updatedUser,
        allUsers: [...state.allUsers, updatedUser],
      };
    }
    case "UPDATE_USERS": {
      const updatedUsers = state.allUsers?.reduce(
        (acc, item) =>
          item?.username === state.user?.username
            ? [...acc, state.user]
            : [...acc, { ...item }],
        []
      );
      return {
        ...state,
        allUsers: updatedUsers,
      };
    }
    case "TREND":
      return {
        ...state,
        trend: !state.trend,
      };
    case "RECENT":
      return {
        ...state,
        recent: !state.recent,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        loggedUserPosts: [],
      };
    default:
      return state;
  }
}
