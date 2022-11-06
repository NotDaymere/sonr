import "./assets/scss/style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sonr from "./components/Sonr";
import Cards from "./components/Cards";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Features />
        <Sonr />
        <Cards />
        <Steps />
    </div>
  );
}

export default App;
