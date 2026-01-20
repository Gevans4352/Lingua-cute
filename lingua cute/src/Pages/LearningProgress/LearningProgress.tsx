import { useEffect } from "react";
import "./LearningProgress.scss";

const LearningProgress = ()=>{
    useEffect(() => {
        document.title = "Your Progress";
    }, []);
    return(
        <>
        Hello World 
        </>
    )
}

export default LearningProgress;