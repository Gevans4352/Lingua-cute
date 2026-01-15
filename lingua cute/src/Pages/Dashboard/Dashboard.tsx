import "./Dashboard.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";
import MainDashboard from "../../Components/MainDashboard/MainDashBoard";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
   <section className="redo">
    <LeftBar isOpen={open} onClose={() => setOpen(false)} />
    <div className="main-right-side">
        <Davhboard onToggleSidebar={() => setOpen(!open)} />
        <div className="actual-page-content">
          <MainDashboard/>
        </div>
    </div>
</section>
  );
};

export default Dashboard;