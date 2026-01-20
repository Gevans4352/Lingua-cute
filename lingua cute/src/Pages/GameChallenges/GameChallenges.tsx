import { useEffect } from "react";
import "./GameChallenges.scss";

const GameChallenges = ()=>{
    useEffect(() => {
        document.title = "Games";
    }, []);
    return(
        <>
        Hello World
        </>
    )
}

export default GameChallenges;