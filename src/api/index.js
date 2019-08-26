import config from "../config/";
import axios from "axios";

export default {
  async request(url, method, payload) {
    await axios.post(url).then(data => data);
  },
  createUser(data) {
    console.log("Post data ", data);
    this.request("http://localhost:5000/api/addusers", "post", data);
  }
};
