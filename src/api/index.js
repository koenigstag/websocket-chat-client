import axios from "axios";

export const domain = "localhost:5000";

const httpClient = axios.create({
  baseURL: `http://${domain}/api`,
});

export default httpClient;
