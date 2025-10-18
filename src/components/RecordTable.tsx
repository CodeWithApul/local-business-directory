import {
  DataGrid,
  type GridColDef,
  type GridValidRowModel,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

interface RecordTableProps<T extends GridValidRowModel> {
  title?: string;
  rows: T[];
  columns: GridColDef<T>[];
  getRowId?: (row: T) => string | number;
}

export default function RecordTable<T extends GridValidRowModel>({
  title,
  rows,
  columns,
}: RecordTableProps<T>) {
  return (
    <Box sx={{ mt: 2 }}>
      {title && (
        <Typography variant="h6" sx={{ padding: 4, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: 0,
          fontFamily: 'Inter, "Segoe UI", sans-serif',
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            fontSize: "0.95rem",
          },
        }}
      />
    </Box>
  );
}
