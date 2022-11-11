//Styles
import "./Home.scss";

//Components
import Hero from "./elements/Hero/Hero";
import Features from "./elements/Features/Features";
import Sonr from "./elements/Sonr/Sonr";
import Cards from "./elements/Cards/Cards";
import Steps from "./elements/Steps/Steps";

function Home () {
    return (
        <div className="Home">
            <Hero />
            <Features />
            <Sonr />
            <Cards />
            <Steps />
        </div>
    )
}

export default Home;