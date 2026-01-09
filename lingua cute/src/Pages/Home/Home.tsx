import Navigation from "../../Components/NavBar/Navigation";
import HeroSection from "../../Components/HeroSection/HeroSection";
import QuickTranslate from "../../Components/QuickTranslate/QuickTranslate";
import "./Home.scss"
const Home =()=>{
    return(
        <div className="navigationPage">
           <Navigation/>
           <HeroSection/>
           <QuickTranslate/>
        </div>
    )
}
export default Home;