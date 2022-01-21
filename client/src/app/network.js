// import { isPending, pendingSuccess, pendingRejected } from "./userSlice";
import axios from "axios";
import { store } from "./index";

const api = `http://localhost:8800/api/`;
const postsTLEndPoint = `posts/timeline/`;
const userEndPoint = `users/`;
const profileEndPoint = `profile/`;

// const samplePostId = `61be1f53392116a72bb354a8`;
const sampleUserId = `61be16d1a17c985d2a2f2651`;

/**
 * C.R.U.D
 */

// Create

// Read
export async function getTimelinePosts() {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });

  store.dispatch({ type: "post/isPending" });
  try {
    const res = await axios.get(api + postsTLEndPoint + sampleUserId);
    store.dispatch({ type: "post/pendingSuccess", payload: res.data });

    const state = store.getState();
    return state.post;
  } catch (error) {
    store.dispatch({ type: "post/pendingRejected", payload: error });
    console.error(error.name, error.message);
  }

  unsubscribe();
}

export async function getProfilePosts({ username }) {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });

  if (username === undefined || null || NaN || "style.css") {
    unsubscribe();
    return;
  }

  store.dispatch({ type: "post/isPending" });

  try {
    const res = await axios.get(api + profileEndPoint + username);
    store.dispatch({ type: "post/pendingSuccess", payload: res.data });
  
  } catch (error) {
    store.dispatch({ type: "post/pendingRejected", payload: error });
    console.error(error.name, error.message);
  }
  unsubscribe();
}

// ===

export async function getUser() {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });

  store.dispatch({ type: "user/isPending" });
  try {
    const res = await axios.get(api + userEndPoint + sampleUserId);
    store.dispatch({ type: "user/pendingSuccess", payload: res.data });

    const state = store.getState();
    return state.user;
  } catch (error) {
    store.dispatch({ type: "post/pendingRejected", payload: error });

    console.error(error.name, error.message);
  }

  unsubscribe();
}

export async function getUserById({ userId }) {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });
  if (userId === undefined || null || NaN) {
    unsubscribe();
    return;
  }
  store.dispatch({ type: "user/isPending" });
  try {
    const res = await axios.get(api + userEndPoint + userId);
    store.dispatch({ type: "user/pendingSuccess", payload: res.data });

    const state = store.getState();
    return state.user;
  } catch (error) {
    store.dispatch({ type: "post/pendingRejected", payload: error });

    console.error(error.name, error.message);
  }

  unsubscribe();
}

// Update
// Delete
