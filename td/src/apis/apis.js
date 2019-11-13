import axios from "axios";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url = "http://localhost:3001";

export default axios.create({
  baseURL: url
});
