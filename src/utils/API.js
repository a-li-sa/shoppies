import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?s=";
const APIKEY = '&apikey=' + process.env.REACT_APP_OMDB_API_KEY;

export default {
  search: function(query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  }
};
