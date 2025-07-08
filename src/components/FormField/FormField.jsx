import React from "react";
import styles from "./FormField.module.css";
import { ErrorMessage, Field } from "formik";

const FormField = ({ label, name, type = "text", as, children, ...rest }) => {
  const isCheckbox = type === "checkbox";
  return (
    <div
      className={styles.formControl}
      style={isCheckbox ? { flexDirection: "row", flexWrap: "wrap" } : {}}
    >
      <label htmlFor={name} style={isCheckbox ? { order: 1 } : {}}>
        {label} <span>*</span>
      </label>
      <Field
        name={name}
        id={name}
        type={type}
        as={as}
        className={styles.field}
        style={isCheckbox ? { order: 0 } : {}}
        {...rest}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className={styles.formError}
        style={isCheckbox ? { order: 2, width: "100%" } : {}}
      />
    </div>
  );
};

export default FormField;
