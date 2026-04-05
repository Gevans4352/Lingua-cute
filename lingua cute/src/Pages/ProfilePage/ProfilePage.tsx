import { useState, useEffect } from "react";
import Davhboard from "../../Components/Davhboard/Davhboard";
import LeftBar from "../../Components/LeftBar/LeftBar";
import "./ProfilePage.scss";
import AllProfile from "../../Components/AllProfile/AllProfile";
import AllProfileSecond from "../../Components/AllProfileSecond/AllProfileSecond";
import AllProfileThird from "../../Components/AllProfileThird/AllProfileThird";
import AllProfileFourth from "../../Components/AllProfileFourth/AllProfileFourth";

const ProfilePage = ()=>{
  const [open, setOpen] = useState(false);
    useEffect(() => {
      document.title = "Profile";
    }, []);
      return(
        <section className="redo">
          <LeftBar isOpen={open} onClose={() => setOpen(false)} />
            <div className="main-right-side">
              <Davhboard onToggleSidebar={() => setOpen(!open)} />
                <div className="actual-page-content">
                  <AllProfile/>
                  <AllProfileSecond/>
                  <AllProfileThird currentXP={0} maxXP={0} level={0} levelLabel={""}/>
                  <AllProfileFourth/>
                  </div> 
            </div>
        </section>
      )
}

export default ProfilePage;