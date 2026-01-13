import "./Dashboard.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <LeftBar />
      <div className="main-content">
        <Davhboard />
      </div>
    </div>
  );
};

export default Dashboard;