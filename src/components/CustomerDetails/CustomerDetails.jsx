import React from "react";
import FormField from "../FormField/FormField";

const CustomerDetails = () => {
  return (
    <fieldset>
      <legend>Fill out your information</legend>

      <FormField
        label="First name"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
      />

      <FormField
        label="Last name"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
      />

      <FormField
        label="Email"
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
      />

      <FormField
        label="Phone number"
        name="phone"
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
      />

      <FormField
        label="By checking this box, you are agreeing to our term of services"
        name="agreeState"
        id="agreeState"
        type="checkbox"
      />
    </fieldset>
  );
};

export default CustomerDetails;
