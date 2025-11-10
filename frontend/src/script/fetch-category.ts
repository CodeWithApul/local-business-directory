import { writeFile } from "node:fs";
const res = await fetch("http://localhost:5000/api/category/list");
if (!res.ok) {
  console.error(`Error during fetching category`, res.status);
}

if (res.ok) {
  const data = await res.json();
  writeFile(
    "/home/lightboy/code/local-business-directory/frontend/src/data/category.json",
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );
}
