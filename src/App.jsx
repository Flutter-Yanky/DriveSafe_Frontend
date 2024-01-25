import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Account from './pages/Account'
import Home from './pages/Home'
import Dlupload from './components/Dlupload'
import Rcupload from './components/Rcupload'
import { Route, Routes } from "react-router-dom"
import Fine from "./pages/Fine"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PLogin from './components/PLogin'

function App() {

  return (
    <div className="">      
      <Routes>  
        <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="signin" element={<Login/>}></Route>
        <Route path="signin/police" element={<PLogin/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path='account' element={<Account/>}></Route>
        <Route path='dlupload' element={<Dlupload/>}></Route>
        <Route path='rcupload' element={<Rcupload/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        
        <Route path='fine/:userId' element={<Fine/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
