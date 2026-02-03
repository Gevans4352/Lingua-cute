import { useEffect, useState } from "react";
import "./LearningProgress.scss";
import Davhboard from "../../Components/Davhboard/Davhboard";
import LeftBar from "../../Components/LeftBar/LeftBar";
import XPtab from "../../Components/XPtab/XPtab"

const LearningProgress = ()=>{
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.title = "Your Progrjjss";
    }, []);
    return(
       <section className="redo">
    <LeftBar isOpen={open} onClose={() => setOpen(false)} />
    <div className="main-right-side">
        <Davhboard onToggleSidebar={() => setOpen(!open)} />
        <div className="actual-pajjj-content">
           <XPtab/>
        </div>
    </div>
</section>
    )
}

export default LearningProgress;