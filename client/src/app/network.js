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
const api = `https://thawing-headland-20484.herokuapp.com/api/`;
// const api = `http://localhost:8800/api/`;
const loginEndPoint = `account/login`
const registerEndPoint = `account/register`
// const postsTLEndPoint = `posts/timeline/`;
// const postEndPoint = `posts/`
// const userEndPoint = `users/`;
// const profileEndPoint = `profile/`;

// const likes = `like/`
// const follow = `follow/`
// const unfollow = `unfollow/`

// const byUsername = `?username=`
// const byUserId = `?userId=`

// const samplePostId = `61be1f53392116a72bb354a8`;
// const sampleUserId = `61be16d1a17c985d2a2f2651`;

// *** Posts *** Read/Write

export async function login(credentials) {
  const unsubscribe = store.subscribe(() => {
    console.log("state after dispatch", store.getState())
    const current = store.getState()
    if (current !== undefined || null) {
      // console.log("setItem is firing off...")
      localStorage.clear()
      localStorage.setItem('state', JSON.stringify(current))
    }
    // console.log("\nthis is excistingState:\n", excistingState)
    // console.log("\nattempting getting the user:\n", excistingState.user)
  })

  if (credentials === undefined || null || NaN) {
    unsubscribe()
    throw new Error("Something went wrong")
  }

  try {
    store.dispatch({ type: "user/pending" })
    store.dispatch({ type: "post/pending" })

    const res = await axios.post(api + loginEndPoint, credentials)

    console.log("\nwhat is in the res object?\n\n", res)
    store.dispatch({ type: "user/storeActiveUser", payload: res.data[0].active })
    store.dispatch({ type: "user/storeLib", payload: res.data[0].lib })
    store.dispatch({ type: "post/storeOwner", payload: res.data[1].owner })
    store.dispatch({ type: "post/storeCollection", payload: res.data[1].collection })

    unsubscribe()
  } catch (error) {

    store.dispatch({ type: "user/rejected", payload: error })
    store.dispatch({ type: "post/rejected", payload: error })

    console.error(error.name, error.message)

    unsubscribe()
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
