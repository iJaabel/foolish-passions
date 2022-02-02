import React, { useEffect } from "react";
import Routes from "./Routes";
import { getUser } from "./network"

/** High level interaction layer
 * When the app renders,
 * it shall build out the larger state
 * gets the current user
 * gets the timeline post
 * gets the profile posts
 * 
 */
export default () => {
    useEffect(() => {
        //All networking shall be called here and set to state
        getUser();
    }, []);
    return (<Routes />)
}
