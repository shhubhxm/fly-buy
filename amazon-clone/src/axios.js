import axios from "axios";

const instance = axios.create({
     baseURL: 'http://localhost:5001/fly-buy-6c344/us-central1/api'    
});

export default instance;