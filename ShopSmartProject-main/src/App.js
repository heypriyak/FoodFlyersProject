import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import CartItems from './Components/CartItems/CartItems';
import Company from './Pages/Company'
import Offices from './Pages/Offices'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CheckoutSuccess from './Components/CheckoutSuccess';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>

      <Route path="/company" element={<Company />} />
      <Route path="/offices" element={<Offices />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product/>}>
      

        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<CartItems/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/checkout-success' element={<CheckoutSuccess />} />
     </Routes>

     <Testimonials />
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
