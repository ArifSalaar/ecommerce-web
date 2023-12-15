import Layout from './components/layout'
import ProductCart from './pages/ProductCart/ProductCart'
import Desktop from './pages/Desktop/Desktop'
import Checkout from './pages/checkout/Checkout'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Cart from './pages/Cart/Cart'
import Orderlist from './pages/Orderlist/OrderList'
import Laptop from './pages/Laptop/Laptop'
import Manwtach from './pages/Manwatch/Manwtach'
import Oven from './pages/Oven/Oven'
import Motorbike from './pages/Motorbike/Motorbike'
import Refrigerator from './pages/Refrigerator/Refrigerator'
import Smartphone from './pages/Smartphone/Smartphone'
import Smarttv from './pages/Smarttv/Smarttv'
import Split from './pages/Split/Split'
import Speaker from './pages/Speaker/Speaker'
import Usertransactions from './pages/Usertransactions/Usertransactions'
import DesktopProuct from './pages/Desktop/DesktopProuct'
import Signup from './pages/Signup/Signup'
import Stepsmenu from './pages/Steps/Steps'
import Payment from './pages/Paymentmethod/Payment'
import PaymentSquare from './pages/Paymentmethod/PaymentSquare'
import Products from './pages/products/Products'
import Crt from './pages/Home/Crt'

function App () {



  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/products' element={<ProductCart />} />
        <Route path='/product' element={<Products />} />
        <Route path='/desktop'  element={<Desktop />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/manwtach' element={<Manwtach />} />
        <Route path='/oven' element={<Oven />} />
        <Route path='/motorbike' element={<Motorbike />} />
        <Route path='/refrigerator' element={<Refrigerator />} />
        <Route path='/smartphone' element={<Smartphone />} />
        <Route path='/smarttv' element={<Smarttv />} />
        <Route path='/speaker' element={<Speaker />} />
        <Route path='/split' element={<Split />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Orderlist' element={<Orderlist />} />
        <Route path='/usertransactions' element={<Usertransactions />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/crt' element={<Crt />} />
       
       
        <Route path='/signup' element={<Signup />} />
        <Route path='/stepsmenu' element={<Stepsmenu />} />
        <Route path='/prouctdetail' element={<DesktopProuct />} />
        <Route path='/paymentsquare' element={<PaymentSquare />} />
        
      </Routes>
    </div>
  )
}

export default App
