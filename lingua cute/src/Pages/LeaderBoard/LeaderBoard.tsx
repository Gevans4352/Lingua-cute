import { useEffect } from "react";
import "./LeaderBoard.scss";

const LeaderBoard = ()=>{
    useEffect(() => {
        document.title = "Leaderboard";
    }, []);
    return(
        <>
        Hello World!
        </>
    )
}

export default LeaderBoard;