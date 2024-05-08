import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={ <LandingPage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* Root route: '/' */