import React, { useState } from "react";
import {AddProductStyle as S} from "./addProductStyle";
import { addProduct } from "../../services/productService";

export default function AddProduct(props){
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
                    <S.StyledLabel for="name">Product Name</S.StyledLabel>
                    <S.StyledInput type="text" id="name" value={product.name} onChange={handleChange}></S.StyledInput>
                    <S.StyledLabel for="price">Price</S.StyledLabel>
                    <S.StyledInput type="number" id="price" value={product.price} onChange={handleChange}></S.StyledInput>
                    <S.StyledLabel for="image">Image(URL)</S.StyledLabel>
                    <S.StyledInput type="text" id="image" value={product.image} onChange={handleChange}></S.StyledInput>
                </S.StyledLabelInput>
                <S.StyledButton>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span class="material-symbols-outlined">
                        save
                    </span>
                </S.StyledButton>
            </S.StyledForm>
        </S.StyledContainer>
    )
}
