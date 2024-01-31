import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import DealOfDay from './components/DealOfDay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
    <NavBar/>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Contact/> */}
      <DealOfDay/>
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
