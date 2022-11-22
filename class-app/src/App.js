import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Routes, Route } from 'react-router-dom';
//import page components
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import { Route } from 'react-router-dom';

const NavData = [
  { name: "Home", path:"/", public:true},
  { name: "About", path:"/about", public:true},
  { name: "Contact", path:"/contact", public:true}
]

function App() {
  return (
    <div className="App">

      <Header title="My app" headernav={NavData} />
      <Routes>
        <Route path ="/" element={ <Home />} />
        <Route path ="/about" element={ <About />} />
        <Route path ="/contact" element={ <Contact />} />
      </Routes>
      <Footer year ="2022" />
    </div>
  );
}

export default App;
