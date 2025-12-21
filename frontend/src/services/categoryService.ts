import type { Category } from "../types/Category";
const BASE_API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

export const getCategories = async (): Promise<Category[]> => {
  const result = await fetch(`${BASE_API_URL}/category/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const listCategories: Category[] = await result.json();
  // Step 1: Extract unique categories
  function uniqueCategories(listCategories: Category[]): Category[] {
    const seen = new Set<string>();
    return listCategories.filter((cat) => {
      if (seen.has(cat.name)) return false;
      seen.add(cat.name);
      return true;
    });
  }
  const uniqueList = uniqueCategories(listCategories);
  // Step 2: Sort alphabetically
  const sortedCategories = uniqueList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Step 3: Add "All" at the beginning
  const searchCategories = [{ id: 0, name: "All" }, ...sortedCategories];

  return searchCategories;
};
