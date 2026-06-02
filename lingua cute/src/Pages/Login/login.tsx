import { useEffect, useState } from "react";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg";
import "./Login.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<any>>;
};
const Login = ({ setUser }: LoginProps) => {
  type Errors = {
    email?: string;
    password?: string;
  };
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (email.trim() === "") {
      newErrors.email = "Email cannot be only spaces.";
    } else if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Email is invalid";
    }

    if (password === "") {
      newErrors.password = "Password is required.";
    } else if (password.trim() === "") {
      newErrors.password = "Password cannot be only spaces.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data);
      navigate("/Dashboard");
    } catch (error) {
      console.log(error);
      setErrors({
        password: "Invalid email or password",
      });
    }
  };

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
            <Link to="/Reset" forgot-password-link>
              Forgot Password?
            </Link>
            <button type="submit">Sign In</button>
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
            New to LinguaLove?{" "}
            <Link to="/Register " onClick={(e) => e.stopPropagation()}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
