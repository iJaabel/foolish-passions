// import { isPending, pendingSuccess, pendingRejected } from "./userSlice";
import axios from "axios";
import { store } from "./index";

const postsTLEndPoint = `http://localhost:8800/api/posts/timeline/`;
const userEndPoint = `http://localhost:8800/api/users/`;
const sampleId = `61be16d1a17c985d2a2f2651`;

export async function getPosts() {
  console.log(
    "1st getPosts function in network just started. Logging store.getState:\n",
    store.getState()
  );

  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch:\n", store.getState());
  });


  const res = await axios.get(postsTLEndPoint + sampleId);


  console.log(
    "2nd getPosts function in network has completed. Logging store.getState:\n",
    store.getState()
  );

  unsubscribe();

  return res.data;
}

export async function getUser() {
  console.log(
    "1st getUser function in network just started. Logging store.getState:\n",
    store.getState()
  );
  store.dispatch({ type: "isPending", payload: true });

  const res = await axios.get(userEndPoint + sampleId);

  store.dispatch({ type: "pendingSuccess", payload: res.data });

  console.log(
    "2nd completing getUser function in network. Logging store.getState:\n",
    store.getState()
  );
  return res.data;

  // console.log(
  //   "getUser network data after await:\n",
  //   res,
  //   "\nand it's res.data:\n",
  //   res.data
  // );
}
