import "./Home.scss";
import QuizGame from "../../Components/QuizGame/QuizGame";
import Navigation from "../../Components/NavBar/Navigation";
import HeroSection from "../../Components/HeroSection/HeroSection";
import QuickTranslate from "../../Components/QuickTranslate/QuickTranslate";
import LearnYourWay from "../../Components/LearnYourWay/LearnYourWay";
import Footer from "../../Components/Footer/Footer";


const Home =()=>{
    return(
        <div className="navigationPage">
           <Navigation/>
           <HeroSection/>
           <QuickTranslate/>
           <br />
           <LearnYourWay/>
           <QuizGame/>
            <Footer/>
        </div>
    )
}
export default Home;