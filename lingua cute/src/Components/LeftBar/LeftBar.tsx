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
  onClose?: () => void;
}

const LeftBar: React.FC<LeftBarProps> = ({ isOpen = false, onClose }) => {
    const handleOverlayClick = () => {
        if (onClose && window.innerWidth <= 1024) {
            onClose();
        }
    };

    return(
        <>
            <div 
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
                onClick={handleOverlayClick}
            ></div>
            <section className={`leftBar ${isOpen ? 'open' : ''}`}>
                <h2>LinguaBloom</h2>
                <p>Main Menu</p>
                <div className="menu">
                    <button><span><IoHomeOutline /></span> <span className="button-text">Home</span></button>
                    <button><span><LuBookOpen /></span> <span className="button-text">Learning Progress</span></button>
                    <button><span><MdOutlineTranslate /></span> <span className="button-text">My Translation</span></button>
                    <button><span><IoGameControllerOutline /></span> <span className="button-text">Games & Challenge</span></button>
                    <button><span><IoTrophyOutline /></span> <span className="button-text">LeaderBoard</span></button>
                </div>
                <p>Account</p>
                <div className="accounts">
                    <button><span><FiUser /></span> <span className="button-text">Profile</span></button>
                    <button><span><RiSettings5Line /></span> <span className="button-text">Settings</span></button>
                </div>
                <button><span><IoLogOutOutline /></span> <span className="button-tex">Logout</span></button>
            </section>
        </>
    )
}

export default LeftBar;