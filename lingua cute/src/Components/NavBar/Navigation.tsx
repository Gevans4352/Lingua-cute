import "./Navigation.scss";
import { IoHomeOutline } from "react-icons/io5";
import { PiTranslateThin } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/lokn.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const Navigation = () => {
useEffect(() => {
  const handleScroll = () => {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    if (window.scrollY > 50) {
      logo.classList.add('scrolled');
    } else {
      logo.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
    const navigate = useNavigate();
    const handleNavigation = (section: string) => {
  // If already on home page, just scroll
  if (window.location.pathname === '/') {
    document.getElementById(section)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    } else {
        navigate(`/#${section}`);
    }
    };
    
    return(
        <section className="logo">
            <img src={logo} alt="logo" />
            <p>LinguaBloom</p>
           <nav className="navigation">
            <ul>
                <p className="path"> <IoHomeOutline /> Home</p>
                <li onClick={() => handleNavigation('kwitee')}> <PiTranslateThin /> Translate</li>
                <li onClick={() => handleNavigation('lwenyourwei')}> <FiBookOpen /> Learn</li>
                <li  onClick={() => handleNavigation('warkwigeim')}> <IoGameControllerOutline /> Games</li>
                <p className="logl"> <CiUser /> <Link to="/Login">Login</Link></p>
            </ul>
           </nav>
        </section>
    )
}

export default Navigation; 