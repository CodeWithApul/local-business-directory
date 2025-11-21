import { useEffect, useState } from "react";

import { getBookings } from "../services/businessService";

import type { BusinessBookingValues } from "../schema/BusinessBookingSchema";

export const useBusinessBookings = () => {
  const [bookings, setBookings] = useState<BusinessBookingValues[]>([]);
  const refetch = async () => {
    const bookings = await getBookings();
    setBookings(bookings);
  };
  useEffect(() => {
    refetch();
  }, []);

  return { bookings, setBookings, refetch };
};
