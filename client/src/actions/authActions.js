import axios from "axios";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Set token to localStorage
      const { userId } = res.data;
      localStorage.setItem("userID", userId);

      dispatch(setCurrentUser(userId));
    })
};

// Set logged in user
export const setCurrentUser = userId => {
  return {
    type: SET_CURRENT_USER,
    payload: userId
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  axios
    .post("/api/users/logout", {})

  dispatch(setCurrentUser({}));
}
