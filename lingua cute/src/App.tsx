import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/ResetPassword/Reset";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LearningProgress from "./Pages/LearningProgress/LearningProgress";
import Translate from "./Pages/Translate/Translate";
import GameChallenges from "./Pages/GameChallenges/GameChallenges";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Settings from "./Pages/Settings/Settings";

import { useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import "./App.scss";
import axios from "axios"
import { DarkModeContext } from "./Context/DarkModeContext";
export interface ProtectedRouteProps {
  children: ReactNode;
}

const App = () => {
  const [user, setUser] = useState<any>(null);

useEffect(() => {
    const fetchUser = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(res.data);
            } catch (error) {
                localStorage.removeItem("token");
            }
        }
    };
    fetchUser();
}, []);


  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    console.log("App mounted - darkMode:", darkMode);
  }, []);
  useEffect(() => {
    console.log("darkMode changed to:", darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);
  console.log(darkMode);
  return (
    <BrowserRouter>
      <div className={`app-wrapper ${darkMode ? "dark-app" : "light-app"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/LearningProgress" element={<LearningProgress />} />
          <Route path="/Translate" element={<Translate />} />
          <Route path="/GameChallenges" element={<GameChallenges />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
