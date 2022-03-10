import axios from "axios";

/**
 * defalut api headers and base url
 */
export default axios.create({
  baseURL: "https://api.jsonbin.io",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
