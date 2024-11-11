import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
