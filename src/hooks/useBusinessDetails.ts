import { useEffect, useState } from "react";
import { dummyBusiness, type IBusiness } from "../data/dummyData";

export const useBusinessDetails = (id: string) => {
  // fetch record from DB
  const [business, setBusiness] = useState<IBusiness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const businessMatch = dummyBusiness.find((e) => e.id === id);
      setBusiness(businessMatch ?? null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [id]);
  //   useEffect(() => {
  //     fetch(`/api/business/${businessId}`)
  //       .then(res => res.json())
  //       .then(setBusiness);
  //   }, [businessId]);
  return { business, loading, error };
};
