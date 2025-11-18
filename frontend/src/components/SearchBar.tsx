import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
// components/SearchBar.tsx
import {
    Box, Button, IconButton, InputAdornment, MenuItem, Stack, TextField, Tooltip
} from '@mui/material';

import type { Category } from "../services/categoryService";

const ITEM_HEIGHT = 40;
const MAX_ITEMS_VISIBLE = 5;

export interface ISearchBar {
  category: Category | null;
  onCategoryChange: (value: number) => void;
  keyword: string;
  onKeywordChange: (value: string) => void;
  categories: Category[];
  onSearch: () => void;
}
const SearchBar = ({
  category,
  onCategoryChange,
  keyword,
  onKeywordChange,
  categories,
  onSearch,
}: ISearchBar) => {
  const handleClear = () => onKeywordChange("");
  return (
    <Box sx={{ py: 1 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <TextField
          label="Search by keyword"
          variant="outlined"
          fullWidth
          onChange={(e) => onKeywordChange(e.target.value)}
          value={keyword}
          InputProps={{
            endAdornment: keyword && (
              <InputAdornment position="end">
                <Tooltip title="Clear search">
                  <IconButton onClick={handleClear} edge="end" size="small">
                    <ClearIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Category"
          select
          defaultValue="0"
          sx={{ minWidth: 180 }}
          onChange={(e) => onCategoryChange(Number(e.target.value))}
          value={category?.id}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: ITEM_HEIGHT * MAX_ITEMS_VISIBLE,
                },
              },
            },
          }}
          fullWidth
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          sx={{
            px: 4,
            width: {
              xs: "100%",
              sm: "200px",
            },
          }}
          onClick={onSearch}
        >
          <SearchIcon fontSize="small" /> Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
