
import axios from "axios";

const AxiosInstance =() => {
    const HttpInstance = axios.create({
        baseURL:`${process.env.REACT_APP_API_ENDPOINT}`
    });

    // Request interceptor
    HttpInstance.interceptors.request.use((req) => {
        req.headers.Accept=`application/json`;
        req.headers['Content-Type'] =`application/json`;
    
        if (localStorage.token) {
            req.headers.Authorization = `Bearer ${localStorage.token}`; 
        };
       
        return req;

    }, (error) => {
        return Promise.reject(error);
    });

    // Response interceptor
    HttpInstance.interceptors.response.use(function (response) {
        return response;

    }, async function (error) {

        if(!error.response){
            // alert('network error')
        }
        if(error.response){

            if(error.response.status && error.response.status === 404){
                return Promise.reject(error.response); 

            }else if(error.response.status && error.response.status === 401){
                localStorage.removeItem("token");
                window.location.href = "/login"
                localStorage.clear();
            };
        };
        return Promise.reject(error); 
    });
    return HttpInstance;
};

export default AxiosInstance;