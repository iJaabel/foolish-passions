// import { isPending, pendingSuccess, pendingRejected } from "./userSlice";
import axios from "axios";
import { store } from "./index";

const api = `http://localhost:8800/api/`;
const postsTLEndPoint = `posts/timeline/`;
const userEndPoint = `users/`;

const samplePostId = `61be16d1a17c985d2a2f2651`;
const sampleUserId = `61be16d1a17c985d2a2f2651`

const unsubscribe = store.subscribe(() => {
  console.log("State after dispatch:\n", store.getState());
});

export async function getPosts() {
  store.dispatch({ type: "post/isPending" });
  try {
    const res = await axios.get(api + postsTLEndPoint + samplePostId);
    store.dispatch({ type: "post/pendingSuccess", payload: res.data });
    const state = store.getState();
    return state.post;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser() {
  store.dispatch({ type: "user/isPending" });
  try {
    const res = await axios.get(api + userEndPoint + sampleUserId);
    store.dispatch({ type: "user/pendingSuccess", payload: res.data });
    const state = store.getState();
    return state.user;
  } catch (error) {
    throw new Error(error);
  }
}
unsubscribe();
