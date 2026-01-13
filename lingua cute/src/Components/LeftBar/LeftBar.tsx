import "./LeftBar.scss"
import { IoHomeOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiSettings5Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
const LeftBar = () =>{
    return(
        <section className="leftBar">
            <p>Main Menu</p>
            <div className="menu">
                <button><span><IoHomeOutline /></span> Home</button>
                <button><span><LuBookOpen /></span> Learning Progress</button>
                <button><span><MdOutlineTranslate /></span> My Translation</button>
                <button><span><IoGameControllerOutline /></span> Games & Challenge</button>
                <button><span><IoTrophyOutline /></span> LeaderBoard</button>
            </div>
            <p>Account</p>
            <div className="accounts">
                <button><span><FiUser /></span> Profile</button>
                <button><span><RiSettings5Line /></span> Settings</button>
            </div>
            <button><span><IoLogOutOutline /></span> Logout</button>
        </section>
    )
}

export default LeftBar;