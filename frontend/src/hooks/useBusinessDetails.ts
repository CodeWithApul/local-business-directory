import { useCallback, useEffect, useState } from "react";

import {
  getBusinessByAuth,
  getBusinessById,
} from "../services/businessService";

// import { getBusinessById } from "../services/businessService";
export type Business = {
  businessId?: string;
  businessName: string;
  category: string;
  categoryName: string;
  ownerName: string;
  email: string;
  description: string;
  phoneNumber: string;
  logo: string;
  media: string[];
  street: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  lat: number;
  lon: number;
};

export const useBusinessDetails = (id?: string) => {
  const [business, setBusiness] = useState<Business>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const refetchBusiness = useCallback(async () => {
    try {
      let b: Business;
      if (id) b = await getBusinessById(id);
      // b = dummyBusiness.find(
      //   (e) => e.id === id
      // ) as IBusiness; // unless we have a few business to test, keep it
      else b = await getBusinessByAuth();

      setBusiness(b);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    refetchBusiness();
  }, [refetchBusiness]);

  return { business, loading, error, refetchBusiness, setBusiness };
};
