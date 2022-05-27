import './App.css';
import Login from './components/Login/login';
import Card from './components/Products/card';
import ListCards from './components/Products/listCards';
import AddProduct from './components/AddProduct/addProduct';
import Home from './components/Home/home';
import NavBar from './components/NavBar/navBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [status,setStatus] = useState({authenticated:localStorage.getItem('logged')})
  return (
    <BrowserRouter>
      {status.authenticated?
        <div>
        <NavBar setStatus={setStatus}></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="login" element={<Login setStatus={setStatus} ></Login>}></Route>
          <Route path='products' element={<ListCards></ListCards>}></Route>
          <Route path='add' element={<AddProduct></AddProduct>}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
        </Routes>
        </div>
        :
        <div>
        <Login setStatus={setStatus}></Login>
        <Routes>
          <Route path="login" element={<Login setStatus={setStatus}></Login>}></Route>
        </Routes>
        </div>
      }
    </BrowserRouter>
  );
}

export default App;
