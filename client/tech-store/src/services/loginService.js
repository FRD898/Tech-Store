import axios from "axios";
export default function userLogin(user){
    const baseURL = "http://localhost:8000/"
    axios.post(baseURL,{
        title: "LoginUser",
        body: user
    })
    .then((response)=>{
        return response;
    })
    .catch((error)=>{
        console.error(error);
        return null;
    })
}