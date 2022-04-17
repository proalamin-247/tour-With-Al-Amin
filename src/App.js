import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Packages from './Pages/Home/Packages/Packages';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/packages' element={<Packages></Packages>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
