import { useEffect, useState } from "react";
// import { MdOutlineMail } from "react-icons/md";
// import { TbLockPassword } from "react-icons/tb";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email.trim()) {
    alert("Email is required");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }
  if (!password.trim()) {
    alert("Password is required");
    return;
  }
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }
    // save user
    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/Dashboard");
  } catch (err) {
    alert("Not Found");
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
                >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            <Link to="/Reset" forgot-password-link>Forgot Password?</Link>
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
