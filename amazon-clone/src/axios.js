import axios from "axios";

const instance = axios.create({
    // The API (netlify function) URL
    // baseURL: 'https://silly-pare-f56053.netlify.app/.netlify/functions/app/'
    // baseURL: 'http://localhost:9000/.netlify/functions/app' 
});

export default instance;