import * as yup from "yup";

export const BusinessBookingSchema = yup
  .object({
    id: yup.string().default(""),
    businessId: yup.string().default(""),
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
    // status: yup.boolean().required("Status is required"),
    // // .oneOf([true], "You must confirm booking status"),
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

export type BusinessBookingValues = yup.InferType<typeof BusinessBookingSchema>;
