import styles from "./PostHeader.module.css";
import { GoKebabHorizontal } from "react-icons/go";

import { useState } from "react";

export default function PostHeader({creator}) {




  
  return (
    <div className={styles.flexHeader}>
      <div className={styles.flexSubheader}>
        <div>
          <img src="./nolan.png" alt="" className={styles.imgResize} />
        </div>
        <div className={styles.namedate}>
          <div className="username">{creator}</div>
          <div className="text">.1w</div>
        </div>
      </div>
      <div>
        <i><GoKebabHorizontal size={24} /></i>
        
        
      </div>
    </div>
  );
}
