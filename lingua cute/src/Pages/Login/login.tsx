import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (email.trim().length === 0) {
      return;
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>LinguaLove</h1>
          <p>Learn languages with love</p>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <MdOutlineMail />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </div>
            <div className="input-wrapper">
              <TbLockPassword />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                id="showPasswd"
                className="password"
                onClick={() => setShowPassword(!showPassword)}
              ></button>
            </div>
            <Link to="/Reset">Forgot Password?</Link>
          <button type="submit" onClick={(e) => { e.preventDefault(); navigate('/Dashboard');}}>
            Sign In
            </button> 
            </form>
            <div className="divider">
              <span>or continue with</span>
            </div>
            <br />
          <button className="google" type="submit">
            <img src={googleIcon} alt="googleIcon" />
            Google
          </button>
          <p>
            New to LinguaLove? <Link to="/Register "onClick={(e) => e.stopPropagation()}>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
