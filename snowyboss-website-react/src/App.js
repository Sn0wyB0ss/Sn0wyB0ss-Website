import './App.css';
import './index.css';
import Main from './pages/Main.js';
import Blog from './pages/Blog.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState} from 'react'

function App() {
    const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
        <Routes>
            <Route path ="/" element={<Main/>}/>
            <Route path ="/Sn0wyB0ss-Website" element={<Main/>}/>
            <Route path ="/Sn0wyB0ss-Website/Blog" element={<Blog/>}/>
            <Route path ="/Sn0wyB0ss-Website/Login" element={<Login setIsAuth={setIsAuth}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
