import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import "./QuickActions.scss";
import { MdOutlineTranslate } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      icon: <FiBookOpen />,
      details: "Learn while having fun ",
      label: "Continue Learning",
      bgColor: "#8b4555",
      link: "/LearningProgress"
    },
    {
      icon: <MdOutlineTranslate />,
      details: "Translate words and phrases",
      label: "Quick Translate",
      bgColor: "#8b4555",
      link: "/translate"
    },
    {
      icon: <IoGameControllerOutline />,
      label: "Play Games",
      details: "Pick off where you left off",
      bgColor: "#8b4555",
      link: "GameChallenges"
    },
  ];
  return (
    <div className="coverEverything">
      <h2 className="recact">Quick Actions</h2>
      <div className="actions-container">
{actions.map((action, index) => (
  <Link to={action.link} key={index} className="action-link">
    <div className="action-card">
      <div className="action-card-header">
        <div
          className="action-box"
          style={{ backgroundColor: action.bgColor }}
        >
          {action.icon}
        </div>
        <span className="arrow-icon">
          <FiArrowRight />
        </span>
      </div>
      <div className="action-value">{action.label}</div>
      <div className="action-label">{action.details}</div>
    </div>
  </Link>
))}

      </div>
    </div>
  );
};

export default QuickActions;
