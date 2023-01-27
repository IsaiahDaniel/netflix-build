import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

import { auth } from "../../firebase";
import "./login.css";
import Loader from "../../components/Indicators/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { toggleVisible } =  useSelector((state) => state.visibility);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin ran");
    try {
        setLoading(true);
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("user", user);
        navigate("/profile");
        setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }

    setEmail("");
    setPassword("");

  }

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("handleSignup ran..")
    try {
        setLoading(true);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("user handleSignup", user);
        navigate("/profile")
        setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }

    setEmail("");
    setPassword("");

  }

  return (
    <div className="login">
      { toggleVisible ? (
        <form onSubmit={handleLogin} className="signup__content">
          <h3 style={{ color: "white" }}>Sign In</h3>
          <div>
            <Input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "90%", borderRadius: "10px" }} />
          </div>
          <br />
          <div>
            <Input placeholder="Enter password" inputType="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "90%", borderRadius: "10px" }}  />
          </div>
          <br />
          <div style={{ width: "100%" }}>
            <Button buttonType={"submit"} disabled={loading} styles={{ width: "100%", display: "flex", alignItems: "center", justifyContent:"center", textAlign: "center" }}>
              <span style={{ marginRight: "20px" }}>Sign In</span>
              { loading && <Loader spinner /> }
            </Button>
          </div>
          <h4>
            <span style={{ color: "gray" }}>New to Netflix? </span>
            <span style={{ textDecoration: "underline" }} onClick={handleSignup}>Sign Up Now</span>
          </h4>
        </form>
      ) : (
      <div className="login__content">
        <h1>Unlimited flims, TV programmes and More.</h1>
        <h3>Watch Anywhere. cancel anytime</h3>
        <p>Ready to Watch? Enter your email to create or restart your membership</p>
        <br />
        <form className="login__cta">
          <Input placeholder="Enter Email" />
          <Button styles={{paddingLeft: "50px", paddingRight: "50px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}>
            Get Started
          </Button>
        </form>
      </div>
       
      ) }
    </div>
  );
};

export default Login;
