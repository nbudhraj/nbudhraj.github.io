import logo from './logo.svg';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Typewriter from 'typewriter-effect';
import Home from './Home/Home'
import Work from './Work/Work'


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path='/' exact element={<Home />} />
        <Route exact path='/work' exact element={<Work />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
