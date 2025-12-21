import type { Category } from "../types/Category";

export function filterCategories(categories: Category[], searchTerm: string) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return categories
    .map((c) => {
      const matchParent = c.name.includes(lowerSearchTerm);
      const matchChildren = c.children?.filter((child) => {
        return child.name.toLowerCase().includes(lowerSearchTerm);
      });
      if (matchParent || matchChildren?.length)
        return { ...c, children: matchParent ? c.children : matchChildren };
    })
    .filter((c) => c !== undefined);
}
