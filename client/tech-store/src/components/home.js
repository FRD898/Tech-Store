import React from "react";
import NavBar from "./navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import ListCards from "./listCards";
import AddProduct from "./addProduct";
export default function Home(props){
    return(<div>
        <ListCards></ListCards>
    </div>)
}