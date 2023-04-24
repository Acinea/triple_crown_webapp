import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Header} from './components/Header/header'
import {Home} from './components/Home/home'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
