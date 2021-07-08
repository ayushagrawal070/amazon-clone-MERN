import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    // baseURL: 'http://localhost:8001',
    baseURL: 'https://amazon-backend01.herokuapp.com/',
});


export default instance;