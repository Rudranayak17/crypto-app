import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/footer";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={<CoinDetails/>} />
       
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgetpassword" element={<Forget/>} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
