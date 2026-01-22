import { useEffect } from "react";
import "./LearningProgress.scss";

const LearningProgress = ()=>{
    useEffect(() => {
        document.title = "Your Progress";
    }, []);
    return(
        <div className="learning">
            
        </div>
    )
}

export default LearningProgress;