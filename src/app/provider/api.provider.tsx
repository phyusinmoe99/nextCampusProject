import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://127.0.0.1:8000/api/"
// });
const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      ContentType: "application/json",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  });

instance.interceptors.request.use((config) => {
    console.log("Request Config:", config);
    
    if (!(config.data instanceof FormData)) {
        config.headers['Content-Type'] = "application/json";
    }

    const auth = localStorage.getItem('auth');
    if (auth) {
        const parseAuth = JSON.parse(auth);
        console.log(parseAuth.token);
        if (parseAuth.token) {
            config.headers.Authorization = `Bearer ${parseAuth.token}`;
        }
    }



    return config;
})




export default instance;