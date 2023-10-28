import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Order from './components/Order';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/reservation" element={<BookingPage />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
