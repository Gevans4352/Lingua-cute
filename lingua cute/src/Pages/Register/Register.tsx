import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  type Errors = {
    email?: string;
    password?: string;
    name?: string;
  };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  useDocumentTitle("Register");
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        //SAVE TOKEN & USER
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/login");
      } else {
        setErrors({ email: data.message });
      }
    } catch (error) {
      console.error(error);
    }

    const newErrors: Errors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email address is required.";
    }
    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "0" && password[i] <= "9") {
        hasNumber = true;
        break;
      }
    }
    if (!hasNumber) {
      newErrors.password = "Password must contain at least one number.";
    }
    let hasLetter = false;
    for (let i = 0; i < password.length; i++) {
      if (
        (password[i] >= "a" && password[i] <= "z") ||
        (password[i] >= "A" && password[i] <= "Z")
      ) {
        hasLetter = true;
        break;
      }
    }
    if (!hasLetter) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    }
    let isValid = true;
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const isLetter =
        (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
      const isNumber = char >= "0" && char <= "9";
      if (!isLetter && !isNumber) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      newErrors.name = "Username must only contain letters and numbers.";
    }
    if (setName.length > 20) {
      newErrors.name = "Username cannot exceed 20 characters.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    navigate("/Login");
  };

  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>LinguaLove</h1>
          <p>Learn languages with love</p>
          <form onSubmit={handleRegister}>
            <div className="input-wrapper">
              <CiUser />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
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
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="input-wrapper">
              <TbLockPassword />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                name="password"
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
            {errors.password && <p className="error-text">{errors.password}</p>}
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
            Already have an account{" "}
            <Link to="/Login " onClick={(e) => e.stopPropagation()}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
