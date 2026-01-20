import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/ResetPassword/Reset";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LearningProgress from "./Pages/LearningProgress/LearningProgress"
import Translate from "./Pages/Translate/Translate";
import GameChallenges from "./Pages/GameChallenges/GameChallenges";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Settings from "./Pages/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/LearningProgress" element={<LearningProgress/>} />
        <Route path="/Translate" element={<Translate/>} />
        <Route path="/GameChallenges" element={<GameChallenges/>} />
        <Route path="/LeaderBoard" element={<LeaderBoard/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/Settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;