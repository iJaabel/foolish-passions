import axios from "axios";
import { store } from "./index";

/**
 * All A.P.I calls will be handled here.
 * C.R.U.D operations will be store in state.
 *
 * Subscribe operations are here during development
 * so that the state is logged in the console on update
 *
 * Most of these functions can be consolidated
 */

// remember to handle these
const api = `http://localhost:8800/api/`;
const postsTLEndPoint = `posts/timeline/`;
const userEndPoint = `users/`;
const profileEndPoint = `profile/`;
const byUsername = `?username=`
const byUserId = `?userId=`
// const postEndPoint = `posts/`
// const likes = `like/`
// const follow = `follow/`
// const unfollow = `unfollow/`

// const samplePostId = `61be1f53392116a72bb354a8`;
const sampleUserId = `61be16d1a17c985d2a2f2651`;




// *** Posts ***
// Create

export async function network(type, { post, user, userId, postId }, fn) {
  //type must be a string
  //object with 4 paramaters
  //callback function that exec with promise
  switch (type) {
    // Read
    case "get":
      if (post) {
        const res = await axios.get(api + postsTLEndPoint + sampleUserId);
        fn(res.data);
      };
      if (user) {

      };
      break;
    default:
      break;
  }
}

export async function getTimelinePosts() {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });
  store.dispatch({ type: "post/isPending" });
  
  try {
    const res = await axios.get(api + postsTLEndPoint + sampleUserId);
    store.dispatch({ type: "post/pendingSuccess", payload: res.data });
  } catch (error) {
    store.dispatch({ type: "post/pendingRejected", payload: error });
    console.error(error.name, error.message);
  }

  unsubscribe();
}

export async function getProfilePosts(username) {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });

  if (username === undefined || null || NaN) {
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
// Update is write
export async function getProfileById(userId) {
  const unsubscribe = store.subscribe(() => {
    console.log("State on change", store.getState())
  })
  if(userId === undefined || null || NaN) {
    unsubscribe()
    return
  }
  store.dispatch({type: "post/isPending"})
  try {
    const res = await axios.get(api + profileEndPoint + userId)
    store.dispatch({type: "post/pendingSuccess", payload: res.data})
  } catch (error){
    store.dispatch({
      type: "post/pendingRejected", payload: error
    })
    console.error({message: error.message})
  }
}
// Delete

// *** Users ***

// Create
export async function createUser(user) {
  cont unsubscribe = store.subscribe(()=>{
    console.log("State on update: \n", store.getState())
  })
}
// Read
export async function getUser(username) {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });
  if (username === undefined || null || NaN) {
    unsubscribe()
    return
  }
  store.dispatch({ type: "user/isPending" });
  try {
    const res = await axios.get(api + userEndPoint + byUsername + username);
    store.dispatch({ type: "user/pendingSuccess", payload: [res.data] });

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
    const res = await axios.get(api + userEndPoint + byUserId + userId);
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
