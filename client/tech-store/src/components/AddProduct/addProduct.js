import React, { useState } from "react";
import {AddProductStyle as S} from "./addProductStyle";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/productService";

export default function AddProduct(props){
    let navigate = useNavigate();
    const [product,setProduct] = useState({
        name: "",
        price: "",
        image: ""
    });
    function handleChange(e){
        e.preventDefault()
        let target = e.target.id
        if(target === 'name')
            setProduct({...product, name:e.target.value})
        if(target === 'price')
            setProduct({...product, price:e.target.value});
        if(target === 'image')
            setProduct({...product, image:e.target.value});
    }
    function handleAddProduct(e){
        e.preventDefault();
        addProduct(product).then((res)=>{
            if (res=='ok'){
                console.log("product Added")
                navigate("/products");
            }
        }).catch((e)=>{
            console.error(e);
        })
    }
    return (
        <S.StyledContainer>
            <S.StyledTittle>TechStore</S.StyledTittle>
            <S.StyledForm onSubmit={handleAddProduct}>
                <h1>Add Product</h1>
                <S.StyledLabelInput>
                    <S.StyledLabel htmlFor="name">Product Name</S.StyledLabel>
                    <S.StyledInput type="text" id="name" value={product.name} onChange={handleChange}></S.StyledInput>
                    <S.StyledLabel htmlFor="price">Price</S.StyledLabel>
                    <S.StyledInput type="number" id="price" value={product.price} onChange={handleChange}></S.StyledInput>
                    <S.StyledLabel htmlFor="image">Image(URL)</S.StyledLabel>
                    <S.StyledInput type="text" id="image" value={product.image} onChange={handleChange}></S.StyledInput>
                </S.StyledLabelInput>
                <S.StyledButton>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span className="material-symbols-outlined">
                        save
                    </span>
                </S.StyledButton>
            </S.StyledForm>
        </S.StyledContainer>
    )
}
