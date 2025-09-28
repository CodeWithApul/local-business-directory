import { useEffect } from "react";

export default function useScrollToTop(trigger: unknown) {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [trigger]);
}
