import "./LeftBar.scss"
import { IoHomeOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiSettings5Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

interface LeftBarProps {
  isOpen?: boolean;
}

const LeftBar: React.FC<LeftBarProps> = ({ isOpen = false }) => {
    return(
        <section className={`leftBar ${isOpen ? 'open' : ''}`}>
            <h2>LinguaBloom</h2>
            <p>Main Menu</p>
            <div className="menu">
                <button><span><IoHomeOutline /></span> {!isOpen && 'Home'}</button>
                <button><span><LuBookOpen /></span> {!isOpen && 'Learning Progress'}</button>
                <button><span><MdOutlineTranslate /></span> {!isOpen && 'My Translation'}</button>
                <button><span><IoGameControllerOutline /></span> {!isOpen && 'Games & Challenge'}</button>
                <button><span><IoTrophyOutline /></span> {!isOpen && 'LeaderBoard'}</button>
            </div>
            <p>Account</p>
            <div className="accounts">
                <button><span><FiUser /></span> {!isOpen && 'Profile'}</button>
                <button><span><RiSettings5Line /></span> {!isOpen && 'Settings'}</button>
            </div>
            <button><span><IoLogOutOutline /></span> {!isOpen && 'Logout'}</button>
        </section>
    )
}

export default LeftBar;