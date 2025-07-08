import styles from "./Reservations.module.css";
import heroImg from "../../assets/images/restaurant.jpg";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BookingForm from "../../components/BookingForm/BookingForm";
const Reservations = () => {
  return (
    <section className={styles.bookingSection}>
      <img src={heroImg} alt="" />
      <div className={styles.booking}>
        <Breadcrumb />
        <BookingForm />
      </div>
    </section>
  );
};

export default Reservations;
