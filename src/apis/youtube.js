import axios from "axios";

const KEY = "AIzaSyC51Sv98HQamLHkOvEEjU_HC5jkz4uEmi0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});