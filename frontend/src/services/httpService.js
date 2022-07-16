import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://csci5709-backend.herokuapp.com";
export const baseURL = "https://csci5709-backend.herokuapp.com";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("Unexpected error occurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
