import axios from "axios";

/**
 * Creates a custom multipurpose axios instance and returns method response
 * @param param0 = {url -required, method = http method, params = query parameters, auth = authorization key}
 * @returns
 */
export default function createAxios(auth) {
  const client = axios.create();
  if (auth) {
    client.defaults.headers.common["Authorization"] = auth;
  }

  return client;
}
