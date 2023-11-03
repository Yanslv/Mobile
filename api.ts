import axios from "axios";

let servers = {
  local: "http://172.26.0.15:81/api",
  prod: "http://18.222.155.201/api"
};

const api = axios.create({
  baseURL: servers.prod
});

export default api; 