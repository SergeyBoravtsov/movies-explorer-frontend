import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main-page">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}

export default Main;
