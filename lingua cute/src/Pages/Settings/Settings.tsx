import { useEffect } from "react";
import "./Settings.scss";

const Settings = ()=>{
    useEffect(() => {
        document.title = "Your Profile";
    }, []);
    return(
        <>
        Hello World
        </>
    )
}

export default Settings;