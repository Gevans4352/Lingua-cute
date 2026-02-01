import { FaFantasyFlightGames, FaTrophy } from "react-icons/fa";
import "./RecentActivity.scss";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoBook } from "react-icons/io5";

const Load = () => {
  const activity = [
    {
      icon: <IoBook />,
      label: 'Completed "Basic Greetings" lesson',
      value: "2 hours ago",

      xp: "70xp",
    },
    {
      icon: <FaFantasyFlightGames />,
      label: "Won Word Match Game",
      value: "5 hours ago",

      xp: "70xp",
    },
    {
      icon: <IoMdCheckmarkCircle />,
      label: "Translated 10 phrases",
      value: "Yesterday",

      xp: "70xp",
    },

    {
      icon: <FaTrophy />,
      label: "Achieved 7-day streak",
      value: "Yesterday",

      xp: "70xp",
    },
  ];
  return (
    <div className="everythingIn">
      <h2 className="recact">Recent Activity</h2>
      <div className="mainWraped">
        <div className="activity-container">
          <div className="activity-list">
            {activity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-left">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-info">
                    <div className="activity-title">{activity.label}</div>
                    <div className="activity-time">{activity.value}</div>
                  </div>
                </div>
                <div className="activity-xp">{activity.xp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Load;
