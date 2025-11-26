import { useCallback, useEffect, useState } from "react";

import {
  getBusinessByAuth,
  getBusinessById,
} from "../services/businessService";

// import { getBusinessById } from "../services/businessService";

import type { BusinessFormValues } from "../pages/forms/steps/BusinessForm";
export const useBusinessDetails = (id?: string) => {
  const [business, setBusiness] = useState<BusinessFormValues>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const refetchBusiness = useCallback(async () => {
    try {
      let b: BusinessFormValues;
      if (id) b = await getBusinessById(id);
      // b = dummyBusiness.find(
      //   (e) => e.id === id
      // ) as IBusiness; // unless we have a few business to test, keep it
      else b = await getBusinessByAuth();

      setBusiness(b ?? null);
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
