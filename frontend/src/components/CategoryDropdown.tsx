import { Autocomplete, Paper, Popper, TextField } from "@mui/material";

import { useCategorySearch } from "../hooks/useCategorySearch";

import type { Category } from "../types/Category";

export default function CategoryDropdown({
  categories,
  onChange,
  value,
}: {
  categories: Category[];
  onChange: (category: Category | null) => void;
  value: Category | null;
}) {
  const { searchText, setSearchText, filtered } = useCategorySearch(categories);

  return (
    <Autocomplete
      freeSolo
      fullWidth
      options={[]} // we render our own list
      value={null}
      inputValue={searchText || value?.name || ""}
      onInputChange={(_, v, reason) => {
        setSearchText(v);
        if (reason === "clear") {
          onChange(null);
        } // <-- reset selected category }
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select Category" />
      )}
      renderOption={() => null}
      PopperComponent={(props) => (
        <Popper {...props} placement="bottom-start" style={{ width: 400 }}>
          <Paper style={{ maxHeight: 300, overflowY: "auto", padding: 8 }}>
            {filtered.map((parent) => (
              <div key={parent?.id} style={{ marginBottom: 8 }}>
                <div
                  style={{
                    fontWeight: 600,
                    padding: "4px 0",
                    opacity: 0.8,
                  }}
                >
                  {parent?.name}
                </div>

                {parent?.children?.map((child) => (
                  <div
                    key={child.id}
                    onMouseDown={() => {
                      onChange(child);
                      setSearchText(child.name);
                    }}
                    style={{
                      paddingLeft: 16,
                      paddingTop: 4,
                      paddingBottom: 4,
                      cursor: "pointer",
                      borderRadius: 4,
                      backgroundColor:
                        value?.id === child.id ? "#e0e0e0" : "transparent",
                    }}
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            ))}
          </Paper>
        </Popper>
      )}
    />
  );
}
