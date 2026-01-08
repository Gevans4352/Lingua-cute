import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Reset.scss"

const Reset = ()=>{
    const [email, setEmail] = useState("");
    useEffect(() => {
        document.title = "Reset Password";
    }, []);
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
    }
    return(
    <div className="reset">
      <div className="card">
        <div className="right">
          <h1>Reset Password</h1>
          <p>We'll help you get back in</p>
          <br />
          <br />
          <p>Enter your email address and we'll send you a link to reset <br /> you password</p>
          <form onSubmit={handleReset}>
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
            <button type="submit">Send Reset Link</button>
          </form>
          <p>
            Remember your password? <Link to="/Login "onClick={(e) => e.stopPropagation()}>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
    )
}

export default Reset; 