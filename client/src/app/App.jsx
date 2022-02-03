import React, { useEffect } from "react";
import Routes from "./Routes";
import { getUser, getProfilePosts, getTimelinePosts } from "./network"
import { store } from "./index"

/** High level interaction layer
 * When the app renders,
 * it shall build out the larger state
 * gets the current user
 * gets the timeline post
 * gets the profile posts
 * 
 */

export default () => {
    const state = store.getState()
    // console.log("app is starting up...\n This is state in Interactive layer:\n", state)
    const username = "Jane"
    useEffect(() => {
        //All networking shall be called here and set to state
        // console.log("Interactive layer useEffect on component mount is running...")
        getUser(username);
        getTimelinePosts()
        getProfilePosts(username)
        // console.log("api calls have ran, checking state on completion:\n", state)
    }, []);
    return (<Routes />)
}
