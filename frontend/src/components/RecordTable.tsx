import { useMemo } from "react";

import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import type { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
interface RecordTableProps<T extends GridValidRowModel> {
  title?: string;
  rows: T[];
  columns: GridColDef<T>[];
  getRowId?: (row: T) => string | number;
  headerAction?: React.ReactNode; // 👈 parent can pass a button here
  toDate?: string;
  fromDate?: string;
  setToDate?: (d: string) => void;
  setFromDate?: (d: string) => void;
}

export default function RecordTable<T extends GridValidRowModel>({
  title,
  rows,
  columns,
  headerAction,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}: RecordTableProps<T>) {
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const start = new Date(row.bookingStartTime).toISOString().slice(0, 10);
      const end = new Date(row.bookingEndTime).toISOString().slice(0, 10);

      const fromOk = !fromDate || start >= fromDate || end >= fromDate;
      const toOk = !toDate || start <= toDate || end <= toDate;

      return fromOk && toOk;
    });
  }, [rows, fromDate, toDate]);

  return (
    <Box sx={{ mt: 2 }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        {title && (
          <Typography variant="h6" sx={{ padding: 4, fontWeight: 600 }}>
            {title}
          </Typography>
        )}

        {headerAction}
      </Grid>
      {/* // FIXME: later to fix properly */}
      {setFromDate && setToDate && (
        <Stack direction="row" spacing={4} mb={2} mr={5} justifyContent="right">
          <TextField
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={fromDate ?? ""}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <TextField
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate ?? ""}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Stack>
      )}
      <DataGrid
        rows={filteredRows}
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
