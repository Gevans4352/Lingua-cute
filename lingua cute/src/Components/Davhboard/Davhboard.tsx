import "./Davhboard.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
const Davhboard = () =>{
    return(
        <section className="navboard">
            <button><span><MdOutlineSpaceDashboard /></span></button>
            <p>Dashboard</p>
           <nav className="davion">
            <ul>
               <li><FaRegBell /></li>
                <li>user</li>
            </ul>
           </nav>
        </section>
    )
}

export default Davhboard;