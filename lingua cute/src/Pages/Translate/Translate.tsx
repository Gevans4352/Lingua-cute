import { useEffect } from "react";
import "./Translate.scss";

const Translate = ()=>{
    useEffect(() => {
        document.title = "Your Translations";
    }, []);
    return(
        <>
        Hello World
        </>
    )
}

export default Translate;