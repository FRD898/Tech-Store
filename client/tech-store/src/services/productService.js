import axios from "axios";
async function getProducts(){
    const baseURL = "http://localhost:5000/products"
    var res;
    await axios.get(baseURL)
    .then((response)=>{
        //console.log("service",response.data)
        if(response.status == 200){
            res = response.data.products
        }else{
            res=null
        }
    })
    .catch((error)=>{
        console.error(error);
        res = null;
    })
    return res;
}
async function removeProduct(productID){
    const baseURL = "http://localhost:5000/delete"
    var res;
    await axios.post(baseURL,{id:productID})
    .then((response)=>{
        //console.log("service",response.data)
        if(response.status == 200){
            res = 'ok'
        }else{
            res= null
        }
    })
    .catch((error)=>{
        console.error(error);
        res = null;
    })
    return res;
}

async function addProduct(product){
    const baseURL = "http://localhost:5000/add"
    var res;
    await axios.post(baseURL,{product:product})
    .then((response)=>{
        //console.log("service",response.data)
        if(response.status == 200){
            res = 'ok'
        }else{
            res= null
        }
    })
    .catch((error)=>{
        console.error(error);
        res = null;
    })
    return res;
}

export {getProducts, removeProduct, addProduct};