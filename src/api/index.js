import axios from "axios";

export const domain = "192.168.1.148:5000";

const httpClient = axios.create({
  baseURL: `http://${domain}/api`,
});

export default httpClient;
