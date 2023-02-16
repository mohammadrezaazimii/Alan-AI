import { style } from "@mui/system";
import React from "react";
import styles from "./Goback.module.css";

const Goback = () => {
  return (
    <div className={styles.container}>
    <div className={styles.back}>
      <p>Try saying: </p>
      <p>Go back</p>
    </div>
    <div className={styles.back}>
      <p>Try saying: </p>
      <p>Open article</p>
      <span>number [2]</span>
    </div>
    </div>
  );
};

export default Goback;
