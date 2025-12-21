import { useState } from "react";

import { filterCategories } from "../utils/filterCategories";

import type { Category } from "../types/Category";

export function useCategorySearch(categories: Category[]) {
  const [searchText, setSearchText] = useState("");

  const filtered = filterCategories(categories, searchText);

  return { searchText, setSearchText, filtered };
}
