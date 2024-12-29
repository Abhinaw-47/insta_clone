import { useState } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/features/auth";

export default function SignUp() {
  const [user, setUser] = useState({
    name: " ",
    email: " ",
    password: " ",
    username: " ",
  });

 const dispatch=useDispatch();
 const navigate=useNavigate();

  function handleChange(e) {
    const {value, name} = e.target;
    setUser({ ...user, [name]: value });
  
  }


  function handleSubmit(e){
    e.preventDefault();
    dispatch(Register(user, navigate))
    console.log('submit')
  }

  return (
    <div className={styles.container}>
      <form action="" className={styles.flexForm}  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mobile Number or Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="username"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
        <p className={styles.text}>
          {" "}
          People who use our service may have uploaded your contact information
          to Instagram. Learn more
        </p>
        <p className={styles.text}>
          By signing up, you agree to our Terms, Privacy Policy and Cookies
          Policy.
        </p>

        <button className={styles.signupBtn} type="submit">SignUp</button>
      </form>

      <p>
        Have an account?{""}{" "}
        <Link to="/auth" className={styles.btnlogin}>
          {" "}
          Log In
        </Link>{" "}
      </p>
    </div>
  );
}
