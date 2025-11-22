import { useCallback, useEffect, useState } from "react";

import { dummyBusiness } from "../data/dummyData";

// import { getBusinessById } from "../services/businessService";

import type { IBusiness } from "../data/dummyData";

export const useBusinessDetails = (id: string) => {
  const [business, setBusiness] = useState<IBusiness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const refetchBusiness = useCallback(async () => {
    try {
      // let b = await getBusinessById(id);
      const b = dummyBusiness.find((e) => e.id === id); // unless we have a few business to test, keep it

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

  return { business, loading, error, refetchBusiness };
};
