import { BrowserRouter as Router} from 'react-router-dom';
import {Header} from './components/Header/header'
import {Home} from './components/Home/home'
import { Upcoming } from './components/Upcoming/upcoming';
import {Contact} from './components/Contact/contact'
import {About} from './components/About/aboutus'
import {Mail} from './components/Mail/mail'
import {Footer} from './components/Footer/footer'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Upcoming />
      <Contact />
      <About />
      <Mail />
      <Footer />
    </Router>
  );
}

export default App;
