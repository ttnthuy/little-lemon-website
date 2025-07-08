import React, { useEffect, useReducer } from "react";
import { fetchAPI } from "../../utilities/mockApi";
import FormField from "../FormField/FormField";

// --- Reducer ---
function updateTimes(state, action) {
  if (action.type === "change_date") {
    const parsedDate =
      typeof action.payload === "string"
        ? new Date(action.payload)
        : action.payload;
    return fetchAPI(parsedDate);
  }
  throw Error("Unknown action.");
}

const BookingDetails = ({ values }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    if (values.date) {
      dispatch({ type: "change_date", payload: values.date });
    }
  }, [values.date]);

  return (
    <fieldset>
      <legend>Find a table for any occasion</legend>

      <FormField
        label="Date"
        name="date"
        type="date"
        id="date"
        min={new Date().toISOString().split("T")[0]}
      />

      <FormField label="Time" name="time" id="time" as="select">
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </FormField>

      <FormField label="Occasion" name="occasion" id="occasion" as="select">
        <option value="" disabled>
          Select occasion
        </option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
      </FormField>

      <FormField
        label="Party size"
        name="partySize"
        id="partySize"
        type="number"
        min="1"
        max="12"
        placeholder="Enter your party size"
      />
    </fieldset>
  );
};

export default BookingDetails;
