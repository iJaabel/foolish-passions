// import { isPending, pendingSuccess, pendingRejected } from "./userSlice";
import axios from "axios";


const postsTLEndPoint = `http://localhost:8800/api/posts/timeline/`;
const userEndPoint = `http://localhost:8800/api/users/`;
const sampleId = `61be16d1a17c985d2a2f2651`;

export const sampleFc = async (user, dispatch) => {};

export async function getPosts() {
  const res = await axios.get(postsTLEndPoint + sampleId);
  console.log("getPost network data after await:\n", res.data);
  return res.data;
}

export async function getUser() {
  const res = await axios.get(userEndPoint + sampleId);
  console.log(
    "getUser network data after await:\n",
    res,
    "\nand it's res.data:\n",
    res.data
  );
  return res.data;
}
