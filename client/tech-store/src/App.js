import './App.css';
import Login from './components/login';
import Card from './components/card';
import ListCards from './components/listCards';
import AddProduct from './components/addProduct';
import Home from './components/home';
import NavBar from './components/navBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path='products' element={<ListCards></ListCards>}></Route>
        <Route path='add' element={<AddProduct></AddProduct>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
