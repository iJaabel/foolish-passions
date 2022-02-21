import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App, store } from "./app";

// import * as serviceWorker from './serviceWorker';
/** When it comes to the application
* one must follow the methodlogies of clean 
* architecture. App side logic should include:
* state manament 
* fetching data from he backend
* 
*/


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change public this. date.now()
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
