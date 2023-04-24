import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Header} from './components/Header/header'
import {Home} from './components/Home/home'
import {Location} from './components/Location/location'
import {Contact} from './components/Contact/contact'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Location />
      <Contact />
    </Router>
  );
}

export default App;
