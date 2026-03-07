import { useEffect, useState } from "react";
import "./Settings.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";
import AllSettings from "../../Components/AllSettings/AllSettings";

const Settings = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.title = "Settings";
  }, []);

  return (
    <section className="redo">
      <LeftBar isOpen={open} onClose={() => setOpen(false)} />
      <div className="main-right-side">
        <Davhboard onToggleSidebar={() => setOpen(!open)} />
        <div className="actual-page-content"><AllSettings/></div> 
      </div>
    </section>
  );
};

export default Settings;
