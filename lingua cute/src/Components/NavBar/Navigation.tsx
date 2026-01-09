import "./Navigation.scss";
import { IoHomeOutline } from "react-icons/io5";
import { PiTranslateThin } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/lokn.png"
import { Link } from "react-router-dom";
const Navigation =()=>{
    return(
        <section className="logo">
            <img src={logo} alt="logo" />
            <p>LinguaBloom</p>
           <nav className="navigation">
            <ul>
                <p className="path"> <IoHomeOutline /> Home</p>
                <li> <PiTranslateThin /> Translate</li>
                <li> <FiBookOpen /> Learn</li>
                <li> <IoGameControllerOutline /> Games</li>
                <p className="logl"> <CiUser /> <Link to="/Login">Login</Link></p>
            </ul>
           </nav>
        </section>
    )
}

export default Navigation; 