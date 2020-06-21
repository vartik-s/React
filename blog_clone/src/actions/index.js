import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash";

const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/users/" + id);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  userId.forEach((id) => dispatch(fetchUser(id)));
};

export { fetchPostsAndUsers };
