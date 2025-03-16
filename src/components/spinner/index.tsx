import React from "react";
import styles from "./index.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
