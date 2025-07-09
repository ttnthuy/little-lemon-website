import React, { useReducer } from "react";
import { fetchAPI } from "../../utilities/mockApi";
import FormField from "../FormField/FormField";

// --- Reducer ---
export function updateTimes(state, action) {
  if (action.type === "change_date") {
    const parsedDate =
      typeof action.payload === "string"
        ? new Date(action.payload)
        : action.payload;
    return fetchAPI(parsedDate);
  }
  throw Error("Unknown action.");
}

const BookingDetails = ({ values, setFieldValue }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  return (
    <fieldset>
      <legend>Find a table for any occasion</legend>

      <FormField
        label="Date"
        name="date"
        type="date"
        id="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => {
          const value = e.target.value;
          setFieldValue("date", value);
          dispatch({ type: "change_date", payload: e.target.value });
        }}
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
