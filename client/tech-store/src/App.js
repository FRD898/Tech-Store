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

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
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
    </BrowserRouter>
  );
}

export default App;
