import React, { useEffect } from "react";
import Routes from "./Routes";
import { store } from "./index"

/** High level interaction layer
 * When the app renders,
 * it shall build out the larger state
 * gets the current user
 * gets the timeline post
 * gets the profile posts
 */

export default () => {
    // All networking shall be called here and set to state
    // console.log("app is starting up...\n This is state in Interactive layer:\n", state)

    useEffect(() => {
        // Handling the cookies
        // console.log("Interactive layer firing off onMount...\nThis is what is left in localStorage:\n", JSON.parse(localStorage.getItem('state')))
        if (localStorage.getItem('state')) {
            store.dispatch({ type: "user/pending" })
            store.dispatch({ type: "post/pending" })
            const preLoad = JSON.parse(localStorage.getItem('state'))

            store.dispatch({ type: "user/storeActiveUser", payload: preLoad.user.active })
            store.dispatch({ type: "user/storeLib", payload: preLoad.user.lib })
            store.dispatch({ type: "post/storeOwner", payload: preLoad.post.owner })
            store.dispatch({ type: "post/storeCollection", payload: preLoad.post.collection })
        }

    }, []);

    return (<Routes />)
}
