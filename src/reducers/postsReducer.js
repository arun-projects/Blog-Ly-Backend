import initialState from "./initialState";
import update from "immutability-helper";

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS_SUCCESS": {
      return Object.assign({}, state, {
        posts: action.payload
      });
    }

    case "GET_ONE_POST_SUCCESS": {
      return Object.assign({}, state, {
        post: action.payload
      });
    }

    case "ENTERING_NEW_POST": {
      return update(state, {
        newPost: {
          $merge: {
            [action.name]: action.value
          }
        }
      });
    }

    case "SUBMIT_POST_SUCCESS": {
      return Object.assign({}, state, {
        newPostSuccess: true
      });
    }

    default: {
      return state;
    }
  }
}
