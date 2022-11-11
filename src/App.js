import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import "./assets/scss/style.scss";

//Components
import Header from "./components/Header/Header";

//Pages
import Home from "./components/Pages/Home/Home" 
import Blog from "./components/Pages/Blog/Blog";
import Article from "./components/Pages/Article/Article";

//Animation
import AOS from "aos";

function App() {

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
                    <Route exact path='/blog' element={<Blog />} />
                    <Route exact path='/article' element={<Article />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
