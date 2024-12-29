import styles from "./Form.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Auth, SignIN } from "../../redux/features/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";









export default function Form() {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const[Password, setPassword]=useState(' ');
  // const[email, setEmail]=useState('');
  const[credential, setCredential]=useState({
    email:" ",
    password:" "

  });


  const googleSuccess=(res)=>{
    const decoded=jwtDecode(res.credential)
    dispatch(Auth(decoded))
    navigate("/")
    
 
  };


  const googleError=(err)=>{
    console.log(err);
  }


  function handleChange(e) {
    const {value, name} = e.target;
    setCredential({ ...credential, [name]: value });
    // console.log("submit login");
  
  }
  
  function handleSubmit(e) {
    e.preventDefault();

        dispatch(SignIN(credential, navigate))
        console.log('login-sbmit')
        console.log(credential)
 
    
  }

  

  

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.flexForm}>
        <img
          src="./Instagramword_logo.png"
          alt=""
          className={styles.instagramlogo}
        />
        <input placeholder="Phone number, username or email address" name="email" value={credential.email} onChange={handleChange} />
        <input placeholder="Password" value={credential.password} name="password" onChange={handleChange} />
        <button type="submit" className={styles.btnlogin}>
          Log in
        </button>
        <p>__________ OR ___________</p>
        <GoogleLogin onSuccess={googleSuccess} onError={googleError}/>
        <button> Forgot Password?</button>
      </form>
    </div>
  );
}
