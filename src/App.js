import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Header} from './components/Header/header'
import {Home} from './components/Home/home'
import {Price} from './components/Price/price'
import {Location} from './components/Location/location'
import {Contact} from './components/Contact/contact'
import {About} from './components/About/aboutus'
import {Footer} from './components/Footer/footer'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Location />
      <Contact />
      <About />
      <Footer />
    </Router>
  );
}

export default App;