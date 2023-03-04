
import axios from "axios";
import "./axios.instance.js";
//let urlHost = import.meta.env.VITE_HOST_SERVER;

export default {
    // data spawns
    getSpawnList: () => {
      return axios.get("getSpawnList");
    },
     // data move tutor
    getMoveTutorList: () => {
      return axios.get("getMoveTutorList");
    }
};