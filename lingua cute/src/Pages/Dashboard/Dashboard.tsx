import "./Dashboard.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";
import MainDashboard from "../../Components/MainDashboard/MainDashBoard";
import Streaks from "../../Components/Streaks/Streaks";
import QuickActions from "../../Components/QuickActions/QuickActions";
import { useEffect, useState } from "react";
import RecentActivity from "../../Components/RecentActivity/RecentActivity";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
      document.title = "Dashboard";
    }, []);

  return (
   <section className="redo">
    <LeftBar isOpen={open} onClose={() => setOpen(false)} />
    <div className="main-right-side">
        <Davhboard onToggleSidebar={() => setOpen(!open)} />
        <div className="actual-page-content">
          <MainDashboard/>
          <Streaks/>
          <h2  className="juswork">Quick Actions</h2>
          <QuickActions/>
          <h2  className="juswork">Recent Activity</h2>
          <RecentActivity/>
        </div>
    </div>
</section>
  );
};

export default Dashboard;