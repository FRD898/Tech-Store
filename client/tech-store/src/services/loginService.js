import axios from "axios";
export default async function userLogin(user){
    const baseURL = "http://localhost:5000/login"
    var res;
    await axios.post(baseURL,user)
    .then((response)=>{
        //console.log("service",response.data)
        if(response.status == 200){
            res = true
        }else{
            res=false
        }
    })
    .catch((error)=>{
        console.error(error);
        res = false;
    })
    //console.log("..",res);
    return res;
}