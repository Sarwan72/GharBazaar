import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

function App() {
  

  return (
    <BrowserRouter>
    < Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route element={<PrivateRoute/>} >
        <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/Sign-in" element={<Signin/>} />
        <Route path="/Sign-up" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
