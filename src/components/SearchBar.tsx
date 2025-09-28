// components/SearchBar.tsx
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
const ITEM_HEIGHT = 40;
const MAX_ITEMS_VISIBLE = 5;

export interface ISearchBar {
  category: string;
  onCategoryChange: (value: string) => void;
  keyword: string;
  onKeywordChange: (value: string) => void;
  categories: string[];
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
          defaultValue="All"
          sx={{ minWidth: 180 }}
          onChange={(e) => onCategoryChange(e.target.value)}
          value={category}
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
            <MenuItem key={cat} value={cat}>
              {cat}
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
