import "./Dashboard.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
   <section className="redo">
    <LeftBar isOpen={open} />
    <div className="main-right-side">
        <Davhboard onToggleSidebar={setOpen} />
        <div className="actual-page-content">
          <p>Hello World</p>
        </div>
    </div>
</section>
  );
};

export default Dashboard;