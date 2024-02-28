// import axios from "axios";
const axios = require("axios");
// const fetchData = (fn) => {
//   axios.get("http://www.dell-lee.com/react/api/demo.json").then((response) => {
//     fn(response.data);
//   });
// };

const fetchData = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};

try {
  module.exports = {
    fetchData,
  };
} catch (e) {}
