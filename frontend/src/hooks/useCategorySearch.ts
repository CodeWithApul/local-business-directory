import { useState } from "react";

import { filterCategories } from "../utils/filterCategories";

import type { Category } from "../types/Category";

export function useCategorySearch(categories: Category[], shouldFilter = true) {
  const [searchText, setSearchText] = useState("");

  const filtered = shouldFilter
    ? filterCategories(categories, searchText)
    : categories;

  return { searchText, setSearchText, filtered };
}
