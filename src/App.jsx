import { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import DealOfDay from './components/DealOfDay'
import Cart from './components/Cart'
import Header from './components/Header/Header'
import BannerHome from './components/BannerHome/BannerHome';
import Filter from './components/Filter/Filter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    {/* <NavBar/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Contact/> */}
      {/* <DealOfDay/> */}
      
      <Header/>
        {/* <Cart/> */}
        {/* <BannerHome/> */}
      <Filter/>

      
     
    </div>
  )
}

export default App


/*


 {
                      productDetails.map((product) => (
                        <Product key={product.id} productName={product.productName} proDesc={product.proDesc} price={product.price}/>
                      ))  
                    }
*/
