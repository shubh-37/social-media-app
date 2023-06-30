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
      };
    }
    case "EDIT_USER":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          bio: action.payload.bio,
          portfolio_link: action.payload.portfolio_link,
          avatar: action.payload.avatar,
        },
      };
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
