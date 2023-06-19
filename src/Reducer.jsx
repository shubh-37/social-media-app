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
    case "LIKE_POST": {
      const post = action.payload.post?.reduce(
        (acc, item) =>
          item._id === action.payload.id
            ? [
                ...acc,
                {
                  ...item,
                  likes: {
                    ...item.likes,
                    likedBy: [...item.likes.likedBy, action.payload.user],
                  },
                },
              ]
            : [...acc, { ...item }],
        []
      );
      return {
        ...state,
        allPosts: post,
      };
    }
    case "BOOKMARK_POST":
      return {
        ...state,
        bookmarks: action.payload,
      };
    case "DISLIKE_POST": {
      const post = action.payload.post?.reduce(
        (acc, item) =>
          item._id === action.payload.id
            ? [
                ...acc,
                {
                  ...item,
                  likes: {
                    ...item.likes,
                    dislikedBy: [...item.likes.likedBy, action.payload.user],
                  },
                },
              ]
            : [...acc, { ...item }],
        []
      );
      return {
        ...state,
        allPosts: post,
      };
    }
    case "USER": return {
      ...state,
      user: action.payload
    }
    default:
      return state;
  }
}
