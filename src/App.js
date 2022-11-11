import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import "./assets/scss/style.scss";

//Components
import Header from "./components/Header/Header";

//Pages
import Home from "./components/Pages/Home/Home" 
import Blog from "./components/Pages/Blog/Blog";

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
                    <Route exact path='/blog' element={<Blog />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
