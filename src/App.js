import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import "./assets/scss/style.scss";

//Components
import Header from "./components/Header/Header";

//Pages
import Home from "./components/Pages/Home/Home" 
import About from "./components/Pages/About/About";
import Technology from "./components/Pages/Technology/Technology";
import Blog from "./components/Pages/Blog/Blog";
import Article from "./components/Pages/Article/Article";
import Job from "./components/Pages/Job/Job";

//Animation
import AOS from "aos";

function App() {
    console.log('deploy on vercel');
    useEffect(() => {
        AOS.init({
            once: true,
            anchorPlacement: 'top-bottom bottom-top',
        });
        AOS.refresh();
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/technology' element={<Technology />} />
                    <Route exact path='/blog' element={<Blog />} />
                    <Route exact path='/article' element={<Article />} />
                    <Route exact path='/job' element={<Job />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
