//Styles
import "./Home.scss";

import { useState, useEffect } from "react";

//Components
import Preloader from "../../Preloader/Preloader";
import Hero from "./elements/Hero/Hero";
import Features from "./elements/Features/Features";
import Sonr from "./elements/Sonr/Sonr";
import Cards from "./elements/Cards/Cards";
import Steps from "./elements/Steps/Steps";
import Production from "./elements/Production/Production";

function Home () {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoader(true)
        }, 2000)
    }, [])

    return (
        <div className="Home">
            {!loader
            ?
                <Preloader />
            :
                <div>
                    <Hero />
                    <Features />
                    <Sonr />
                    <Cards />
                    <Steps />
                    <Production />
                </div>
            }
            
        </div>
    )
}

export default Home;