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
 * 
 * current working exports
 * getTimelinePosts() : takes userId, only sends sampleUserId for now
 * getProfilePosts(username) : takes the username and returns that profile's posts
 * getProfileById(userId) : gets the profile information
 * getUser(username) : finds user with the byUsername params
 * getUserById(userId) : gets the user obj from database by userId
 * 
 */

// remember to handle these string paths and place them into .env
const api = `http://localhost:8800/api/`;
const loginEndPoint = `account/login`
const registerEndPoint = `account/register`
const postsTLEndPoint = `posts/timeline/`;
// const postEndPoint = `posts/`
const userEndPoint = `users/`;
const profileEndPoint = `profile/`;

// const likes = `like/`
// const follow = `follow/`
// const unfollow = `unfollow/`

const byUsername = `?username=`
const byUserId = `?userId=`

// const samplePostId = `61be1f53392116a72bb354a8`;
const sampleUserId = `61be16d1a17c985d2a2f2651`;

// *** Posts *** Read/Write

// export async function network(type, { post, user, userId, postId }, fn) {
//   //type must be a string
//   //object with 4 paramaters
//   //callback function that exec with promise
//   switch (type) {
//     // Read
//     case "get":
//       if (post) {
//         const res = await axios.get(api + postsTLEndPoint + sampleUserId);
//         fn(res.data);
//       };
//       if (user) {

//       };
//       break;
//     default:
//       break;
//   }
// }

export async function login(credentials) {


  const unsubscribe = store.subscribe(() => {
    console.log("state after dispatch", store.getState())
  })

  if (credentials === undefined || null || NaN) {
    unsubscribe()
    throw new Error("Something went wrong")
  }


  try {
    store.dispatch({ type: "user/pending" })
    store.dispatch({ type: "post/pending" })

    const res = await axios.post(api + loginEndPoint, credentials)

    console.log("\nwhat is in the res object?\n\n",res)
    store.dispatch({ type: "user/storeActiveUser", payload: res.data[0].active })
    store.dispatch({type:"user/storeLib", payload:res.data[0].lib})
    store.dispatch({type:"post/storeOwner", payload: res.data[1].owner})
    store.dispatch({type:"post/storeCollection", payload: res.data[1].collection})

  } catch (error) {

    store.dispatch({ type: "user/rejected", payload: error })

    console.error(error.name, error.message)

    store.dispatch({ type: "user/pending" })
    store.dispatch({ type: "post/pending" })
  }

}




export async function registerUser(user) {
  const unsubscribe = store.subscribe(() => {
    console.log("state after dispatch", store.getState())
  })
  if (user === undefined || null || NaN) {
    unsubscribe()
    throw new Error("Something went wrong")
  }
  try {
    await axios.post(api + registerEndPoint, user)
  } catch (error) {
    store.dispatch({ type: "user/pendingRejected", payload: error })
    console.error(error.name, error.message)
  }
}

export async function getTimelinePosts() {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });

  try {
  store.dispatch({ type: "user/isPending" });
    const res = await axios.get(api + postsTLEndPoint + sampleUserId);
    store.dispatch({ type: "user/storeTimelinePosts", payload: res.data });
  store.dispatch({ type: "user/isPending" });
  } catch (error) {
    store.dispatch({ type: "user/pendingRejected", payload: error });
    console.error(error.name, error.message);
  store.dispatch({ type: "user/isPending" });
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


  try {
  store.dispatch({ type: "user/isPending" });
    const res = await axios.get(api + profileEndPoint + username);
    // console.log("what is response in getProfilePosts: \n", res.data)
    if (res) store.dispatch({ type: "user/storeProfilePosts", payload: res.data });
  store.dispatch({ type: "user/isPending" });
  } catch (error) {
    store.dispatch({ type: "user/pendingRejected", payload: error });
    console.error(error.name, error.message);
  store.dispatch({ type: "user/isPending" });
  }
  unsubscribe();
}

export async function getProfileById({ userId }) {
  const unsubscribe = store.subscribe(() => {
    console.log("State on change", store.getState())
  })
  if (userId === undefined || null || NaN) {
    unsubscribe()
    return
  }
  store.dispatch({ type: "post/isPending" })
  try {
    const res = await axios.get(api + profileEndPoint + userId)
    if (res) store.dispatch({ type: "post/pendingSuccess", payload: res.data })
  } catch (error) {
    store.dispatch({
      type: "post/pendingRejected", payload: error
    })
    console.error({ message: error.message })
  }
}

// *** Users ***
export async function createUser({ user }) {
  const unsubscribe = store.subscribe(() => {
    console.log("State on update: \n", store.getState())
  })

  unsubscribe()
}

export async function getActiveUser(username) {
  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });
  if (username === undefined || null || NaN) {
    unsubscribe()
    return
  }
  console.log()
  try {
  store.dispatch({ type: "user/isPending" });
    const res = await axios.get(api + userEndPoint + byUsername + username);
    if (res) store.dispatch({ type: "user/storeActiveUser", payload: res.data });
  store.dispatch({ type: "user/isPending" });

  } catch (error) {
    store.dispatch({ type: "user/pendingRejected", payload: error });

    console.error(error.name, error.message);
  store.dispatch({ type: "user/isPending" });
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
