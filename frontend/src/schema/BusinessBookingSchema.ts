import * as yup from "yup";

export const BusinessBookingSchema = yup
  .object({
    id: yup.number().typeError("Booking ID must be a number").optional(), // Optional for create, required for update
    businessId: yup
      .number()
      .typeError("Business ID must be a number")
      .optional(), // Optional for update
    bookingStartTime: yup
      .string()
      .required("Booking start time is required")
      .test(
        "is-valid-date",
        "Booking start time must be a valid ISO date string",
        (value) => {
          return value ? !isNaN(Date.parse(value)) : false;
        }
      ),
    bookingEndTime: yup
      .string()
      .required("Booking end time is required")
      .test(
        "is-valid-date",
        "Booking end time must be a valid ISO date string",
        (value) => {
          return value ? !isNaN(Date.parse(value)) : false;
        }
      ),
    status: yup
      .string()
      .required("Status is required")
      .oneOf(
        ["confirmed", "pending", "cancelled"],
        "Status must be one of: confirmed, pending, cancelled"
      ),
  })
  .test(
    "start-before-end",
    "Booking start time must be before booking end time",
    (schema) => {
      const start = schema.bookingStartTime
        ? Date.parse(schema.bookingStartTime)
        : null;
      const end = schema.bookingEndTime
        ? Date.parse(schema.bookingEndTime)
        : null;
      return start && end ? start < end : true;
    }
  );
