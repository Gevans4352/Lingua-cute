import "./LeftBar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiSettings5Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <section className={`leftBar ${isOpen ? "open" : ""}`}>
        <h2>LinguaBloom</h2>
        <p>Main Menu</p>
        <div className="menu">
          <button>
            <span>
              <IoHomeOutline />
            </span>
            <span className="button-text">
              <Link to="/Dashboard">Home</Link>
            </span>
          </button>
          <button>
            <span>
              <LuBookOpen />
            </span>
            <Link to="/LearningProgress" className="a">
              <span className="button-text">Learning Progress</span>
            </Link>
          </button>
          <button>
            <span>
              <MdOutlineTranslate />
            </span>
            <Link to="/Translate" className="a">
              <span className="button-text">My Translation</span>
            </Link>
          </button>
          <button>
            <span>
              <IoGameControllerOutline />
            </span>
            <Link to="/GameChallenges" className="a">
              <span className="button-text">Games & Challenge</span>
            </Link>
          </button>
          <button>
            <span>
              <IoTrophyOutline />
            </span>
            <Link to="/LeaderBoard" className="a">
              <span className="button-text">LeaderBoard</span>
            </Link>
          </button>
        </div>
        <p>Account</p>
        <div className="accounts">
          <button>
            <span>
              <FiUser />
            </span>
            <Link to="/Profile" className="a">
              <span className="button-text">Profile</span>
            </Link>
          </button>
          <button>
            <span>
              <RiSettings5Line />
            </span>
            <Link to="/Settings">
              <span className="button-text">Settings</span>
            </Link>
          </button>
        </div>
        <button>
          <span>
            <IoLogOutOutline />
          </span>
          <Link to="/">
            <span className="button-tex">Logout</span>
          </Link>
        </button>
      </section>
    </>
  );
};

export default LeftBar;
