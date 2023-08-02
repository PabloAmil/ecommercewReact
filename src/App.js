import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Menu from './components/Menu';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter basename='ecommercewReact/'> 
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='menu' element={<Menu />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
