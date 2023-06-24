import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function PostCard({ item }){
  const { state, likeHandler, dislikePostHandler, removeBookmarkHandler, bookmarkHandler } = useContext(postContext);
  return (
    <li key={item._id}>
                <h3>{item.username}</h3>
                <p>{item.content}</p>
                <div className="post-icons">
                  {item.likes.likedBy.find(
                    ({ username }) => username === state.user.username
                  ) ? (
                    <span
                      className="fa fa-heart"
                      onClick={() => dislikePostHandler(item._id)}
                    >
                      {item.likes.likeCount}
                    </span>
                  ) : (
                    <span
                      className="	fa fa-heart-o"
                      onClick={() => likeHandler(item._id)}
                    >
                      {item.likes.likeCount}
                    </span>
                  )}

                  <span className="fa fa-comment-o"></span>
                  <span className="fa fa-share-alt"></span>
                  {state.user?.bookmarks?.includes(item) ? (
                    <span
                      className="fa fa-bookmark"
                      onClick={() => removeBookmarkHandler(item._id)}
                    ></span>
                  ) : (
                    <span
                      className="fa fa-bookmark-o"
                      onClick={() => bookmarkHandler(item._id)}
                    ></span>
                  )}
                </div>
              </li>
  )
}