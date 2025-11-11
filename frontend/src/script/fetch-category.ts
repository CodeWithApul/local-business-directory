import { writeFile } from "node:fs";
const res = await fetch(
  `${import.meta.env.VITE_BACKEND_URL}/api/category/list`
);
if (!res.ok) {
  console.error(`Error during fetching category`, res.status);
} else {
  const data = await res.json();
  writeFile("../data/category.json", JSON.stringify(data), (err: Error) => {
    console.error(err);
  });
}
