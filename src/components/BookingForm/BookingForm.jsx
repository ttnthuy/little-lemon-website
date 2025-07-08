import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useMultiStepForm } from "../../hooks/useMultistepForm";
import styles from "./BookingForm.module.css";
import BookingDetails from "../BookingDetails/BookingDetails";
import CustomerDetails from "../CustomerDetails/CustomerDetails";
import SuccessState from "../SuccessState/SuccessState";
import { submitAPI } from "../../utilities/mockApi";

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    currentStepIndex,
    step: Step,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([BookingDetails, CustomerDetails]);

  const initialValues = {
    partySize: "",
    occasion: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeState: false,
  };

  const validationSchemas = [
    Yup.object({
      partySize: Yup.number()
        .transform((value, originalValue) => {
          return originalValue === "" ? null : Number(originalValue);
        })
        .typeError("Must be a number")
        .required("Party size is required")
        .integer("Must be an integer")
        .min(1, "Must be at least 1"),
      occasion: Yup.string().required("Occasion is required"),
      date: Yup.date()
        .transform((value, originalValue) => {
          return originalValue === "" ? undefined : new Date(originalValue);
        })
        .nullable()
        .required("Date is required")
        .min(new Date().setHours(0, 0, 0, 0), "Date must be in the future"),
      time: Yup.string().required("Time is required"),
    }),
    Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      agreeState: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("This box needs to be checked"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Phone number is not valid")
        .required("Phone number is required"),
    }),
  ];

  const handleSubmit = async (values, actions) => {
    const schema = validationSchemas[currentStepIndex];
    try {
      await schema.validate(values, { abortEarly: false });
      actions.setErrors({});

      if (!isLastStep) {
        next();
        return;
      }

      if (submitAPI(values)) {
        setIsSubmitted(true);
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (err) {
      const formErrors = {};
      if (err.name === "ValidationError" && Array.isArray(err.inner)) {
        err.inner.forEach((e) => {
          formErrors[e.path] = e.message;
        });
        actions.setErrors(formErrors);
      } else {
        console.error(err);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className={styles.formSection}>
      {isSubmitted ? (
        <SuccessState />
      ) : (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formikProps) => (
            <Form onSubmit={formikProps.handleSubmit}>
              <Step {...formikProps} />
              <div className={styles.formControlBtns}>
                {!isFirstStep && (
                  <button type="button" onClick={back}>
                    Previous
                  </button>
                )}
                <button type="submit">
                  {isLastStep ? "Confirm" : "Continue"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};

export default BookingForm;
