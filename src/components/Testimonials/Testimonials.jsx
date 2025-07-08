import React from "react";
import styles from "./Testimonials.module.css";
import { userTestimonials } from "../../data/testimonials";
import star from "../../assets/images/star.png";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonials}>
        <h2>Testimonials</h2>

        <ul className={styles.testimonialsContent}>
          {userTestimonials.map((userTestimonial) => (
            <li key={userTestimonial.id}>
              <div className={styles.customer}>
                <img src={userTestimonial.avatar} alt="avatar" />
                <div className={styles.customerInfo}>
                  <p>{userTestimonial.name}</p>
                  <p>{userTestimonial.address}</p>
                </div>
              </div>
              <div className={styles.rating}>
                {Array.from({ length: userTestimonial.rating }, (_, index) => (
                  <img key={index} src={star} alt="star icon" />
                ))}
              </div>
              <q>{userTestimonial.comment}</q>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
