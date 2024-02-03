import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "39f056ee78c74fbbb95b09eef9280caa",
  },
});
