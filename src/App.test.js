import { render, screen } from "@testing-library/react";
import BookingDetails, {
  updateTimes,
} from "./components/BookingDetails/BookingDetails";
import { fetchAPI } from "./utilities/mockApi";
import { Formik } from "formik";

jest.mock("./utilities/mockApi", () => ({
  fetchAPI: jest.fn(),
}));

describe("Booking Details", () => {
  test("Renders the Booking Details legend", () => {
    render(
      <Formik
        initialValues={{ date: "", time: "", occasion: "", partySize: "" }}
        onSubmit={jest.fn()}
      >
        {({ values, setFieldValue }) => (
          <BookingDetails values={values} setFieldValue={setFieldValue} />
        )}
      </Formik>
    );
    const legendElement = screen.getByText("Find a table for any occasion");
    expect(legendElement).toBeInTheDocument();
  });

  test("returns the same value that is provided by fetchAPI", () => {
    const availableTimes = ["18:00", "19:00"];
    const date = "07/08/2025";
    const parsedDate = new Date(date);

    fetchAPI.mockReturnValue(availableTimes);

    const result = updateTimes([], {
      type: "change_date",
      payload: date,
    });

    expect(fetchAPI).toHaveBeenCalledWith(parsedDate);
    expect(result).toEqual(availableTimes);
  });
});
