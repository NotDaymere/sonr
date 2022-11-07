import {useEffect} from "react";
import "./assets/scss/style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sonr from "./components/Sonr";
import Cards from "./components/Cards";
import Steps from "./components/Steps";
import AOS from "aos";

function App() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <Sonr />
            <Cards />
            <Steps />
        </div>
    )
}

export default App;
