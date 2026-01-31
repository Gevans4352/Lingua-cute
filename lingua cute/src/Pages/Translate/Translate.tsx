import { useEffect, useState } from "react";
import "./Translate.scss";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Davhboard from "../../Components/Davhboard/Davhboard";

const Translate = ()=>{
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.title = "Your Translations";
    }, []);
    return(
        <section className="redo">
            <LeftBar isOpen={open} onClose={() => setOpen(false)} />
                <div className="main-right-side">
            <Davhboard onToggleSidebar={() => setOpen(!open)} />
                <div className="actual-page-content">
                    Hello World
               </div>
    </div>
</section>
    )
}

export default Translate;