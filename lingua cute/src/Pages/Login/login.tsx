import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import "./Login.scss";

const Login = () => {
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
            <a href="#">Forgot Password?</a>
            <button type="submit">Sign In</button>
          </form>
            <div className="divider">
              <span>or continue with</span>
            </div>
            <br />
          <button className="google">
            <img src={googleIcon} alt="googleIcon" />
            Google
          </button>
          <p>
            New to LinguaLove? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
