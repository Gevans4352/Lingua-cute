import "./Davhboard.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";

interface DavhboardProps {
  onToggleSidebar?: (isOpen: boolean) => void;
}

const Davhboard: React.FC<DavhboardProps> = ({ onToggleSidebar }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        const newState = !open;
        setOpen(newState);
        if (onToggleSidebar) {
            onToggleSidebar(newState);
        }
    };

    return(
        <section className="navboard">
            <div className="left-group">
                <button onClick={handleToggle}>
                    <span><MdOutlineSpaceDashboard /></span>
                </button>
                <p>Dashboard</p>
            </div>
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