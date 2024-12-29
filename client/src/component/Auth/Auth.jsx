import styles from "./Auth.module.css";
import Form from '../Form/Form'
import { Link } from "react-router-dom";


export default function Auth() {
  
  return (
    <div
      className={`${styles.body} ${styles.container} ${styles.flexAuth} ${styles.poppins} `}
    >
      <div  className={styles.item}>
        <img src="./auth.png" alt="" />
      </div>
      <div className={styles.item2}>
        <Form />
        <div>Dont have an account? <Link to="/auth/signup" >Sign up</Link>   </div>
      </div>
    </div>
  );
}
