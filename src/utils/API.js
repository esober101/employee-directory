/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getEmployees: () => {
        return axios.get('https://randomuser.me/api/?results=10');
    }
};
