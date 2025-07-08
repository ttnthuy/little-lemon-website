import React from "react";
import styles from "./SuccessState.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const SuccessState = () => {
  const navigate = useNavigate();
  const confirmDay = new Date();

  return (
    <div className={styles.successCard}>
      <FontAwesomeIcon icon={faCircleCheck} size="4x" color="rgb(73, 94, 87)" />

      <h2 className={styles.successHeading}>Congratulation!</h2>

      <p className={styles.successMessage}>
        Your reservation is confirmed on{" "}
        <strong>
          {confirmDay.toLocaleDateString()} at {confirmDay.toLocaleTimeString()}
          .
        </strong>
      </p>

      <p className={styles.successMessage}>
        A confirmation email will be sent to you shortly regarding your
        reservation.
      </p>

      <button className={styles.closeButton} onClick={() => navigate("/")}>
        Close
      </button>
    </div>
  );
};

export default SuccessState;
