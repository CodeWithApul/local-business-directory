import { type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import RecordTable from "../components/RecordTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { green, orange } from "@mui/material/colors";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Booking {
  id: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  status: string;
}

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "Action",
//     headerName: "Action",
//     sortable: false,
//   },
//   // {
//   //   field: "fullName",
//   //   headerName: "Full name",
//   //   description: "This column has a value getter and is not sortable.",
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
//   // },
// ];

const sampleRows: Booking[] = [
  {
    id: "1",
    startDate: "2025-10-07",
    startTime: "10:00 AM",
    endDate: "2025-10-07",
    endTime: "11:00 AM",
    status: "Published",
  },
  {
    id: "2",
    startDate: "2025-10-08",
    startTime: "2:00 PM",
    endDate: "2025-10-08",
    endTime: "3:00 PM",
    status: "Pending",
  },
];

const ShopBookings = () => {
  const columns: GridColDef<Booking>[] = [
    {
      field: "fromDate",
      headerName: "From Date",
      flex: 1,
      renderCell: (params) =>
        `${params.row.startDate || ""} ${params.row.startTime || ""}`,
    },
    {
      field: "toDate",
      headerName: "To Date",
      flex: 1,
      renderCell: (params) =>
        `${params.row.endDate || ""} ${params.row.endTime || ""}`,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const isPublished = params.value === "Published";
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
            {isPublished ? (
              <CheckCircleIcon sx={{ color: green[600] }} />
            ) : (
              <HourglassEmptyIcon sx={{ color: orange[600] }} />
            )}
            <Typography variant="body2">{params.value}</Typography>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <button
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleViewClick(params.row.id)}
        >
          View
        </button>
      ),
    },
  ];

  const handleViewClick = (id: string) => {
    // alert(`View details for booking ID: ${id}`);
    // show booking details in a modal or navigate to a detail page
    setActiveRecordId(id);
    setLoading(true);
    handleOpen();
  };
  const [open, setOpen] = useState(false);
  const [activeRecordId, setActiveRecordId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    console.log("Active Record ID:", activeRecordId);
    // fetch record details using activeRecordId if needed
    setTimeout(() => setLoading(false), 500); // simulate loading
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    // const from_date = formJson.from_date;
    console.log(formData, formJson);
    handleClose();
  };
  return (
    <Paper elevation={6}>
      <RecordTable title="Your Bookings" rows={sampleRows} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Your Booking</DialogTitle>

        <DialogContent>
          <DialogContentText>Enter Your Booking Details</DialogContentText>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 100,
                width: 400,
                mt: 2,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              id="subscription-form"
            >
              <TextField
                autoFocus
                required
                margin="dense"
                id="from_date"
                name="from_date"
                label="From Date & Time"
                type="datetime-local"
                fullWidth
                variant="standard"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField
                required
                margin="dense"
                id="to_date"
                name="to_date"
                label="To Date & Time"
                type="datetime-local"
                fullWidth
                variant="standard"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <FormControlLabel control={<Checkbox />} label="I'm Booked" />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ShopBookings;
