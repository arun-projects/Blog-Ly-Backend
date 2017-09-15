import backend from "../../tools/backend";

export const getAllPosts = () => {
  return (dispatch) => {
    backend.request({
      url: "/posts",
      method: "GET"
    }).then((response) => {
      dispatch({
        type: "GET_ALL_POSTS_SUCCESS",
        payload: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const getOnePost = (id) => {
  return (dispatch) => {
    backend.request({
      url: `/posts/${id}`,
      method: "GET"
    }).then((response) => {
      dispatch({
        type: "GET_ONE_POST_SUCCESS",
        payload: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const newPostTyping = (event) => {
  return (dispatch) => {
    dispatch({
      type: "ENTERING_NEW_POST",
      name: event.target.name,
      value: event.target.value
    });
  }
}

export const editPostTyping = (event) => {
  return (dispatch) => {
    dispatch({
      type: "EDITING_POST",
      name: event.target.name,
      value: event.target.value
    });
  }
}

export const submitPost = (newPost, cb) => {
  return (dispatch) => {
    backend.request({
      url: "/posts",
      method: "POST",
      data: {
        post: newPost
      }
    }).then((response) => {
      dispatch({
        type: "SUBMIT_POST_SUCCESS",
        payload: response.data
      });

      cb();
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const submitEditPost = (editPost, id, cb) => {
  return (dispatch) => {
    backend.request({
      url: `/posts/${id}`,
      method: "PUT",
      data: {
        post: editPost
      }
    }).then((response) => {
      dispatch({
        type: "UPDATE_POST_SUCCESS",
        payload: response.data
      });

      cb();
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const destroyPost = (id, cb) => {
  return (dispatch) => {
    backend.request({
      url: `/posts/${id}`,
      method: "DELETE"
    }).then(() => {
      dispatch({
        type: "DESTROY_POST_SUCCESS"
      });

      cb();
    }).catch((err) => {
      console.log(err);
    });
  }
}
