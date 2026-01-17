import { Link } from "react-router-dom";
import "./Register.scss";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import googleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        document.title = "Register";
    }, []);
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email.trim().length === 0) {
            alert("Email address is required.");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email address");
            return;
        }
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf(".") < email.indexOf("@")) {
            alert("Please enter a valid email address");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        if (!/\d/.test(password)) {
            alert("Password must contain at least one number.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/^[a-zA-Z0-9]+$/.test(name)) {
            alert("Username must only contain letters and numbers.");
            return;
        }
        if (setName.length > 20) {
            alert("Username cannot exceed 20 characters.");
            return;
        }

        try{
            const response = await fetch('http://localhost:5000/api/auth/register',{
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, password})
            });

            const data = await response.json();

            if(data.success){
                alert("registration successful!");
                setName("");
                setEmail("");
                setPassword("");
            }else{
                alert(data.message || "Registration failed!")
            }
        }
        catch(error){
            console.error("Error: ", error)
        }alert("Network error. Make sure backend is running on port 5000")
    }
    return(
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
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                        />
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
                      >
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </button>
                    </div>
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
                    Already have an account <Link to="/Login "onClick={(e) => e.stopPropagation()}>Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
    )
}

export default Register; 