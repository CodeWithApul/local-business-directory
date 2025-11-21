import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { green, orange } from "@mui/material/colors";
import Paper from "@mui/material/Paper";

import RecordTable from "../components/RecordTable";
import { useBusinessBookings } from "../hooks/useBusinessBookings";
import { BusinessBookingSchema } from "../schema/BusinessBookingSchema";
import {
  createBooking,
  deleteBookingByBookingId,
  getBookingById,
  toDatetimeLocalString,
  updateBooking,
} from "../services/businessService";

import type { BusinessBookingValues } from "../schema/BusinessBookingSchema";

import type { GridColDef } from "@mui/x-data-grid";

const ShopBookings = () => {
  const [open, setOpen] = useState(false);
  const [activeRecordId, setActiveRecordId] = useState<number | null>(null);
  const [booking, setBooking] = useState<BusinessBookingValues | null>(null);
  const { bookings, setBookings, refetch } = useBusinessBookings();
  const [loading, setLoading] = useState(false);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessBookingValues>({
    defaultValues: booking || {
      bookingStartTime: "",
      bookingEndTime: "",
      description: "",
    },
    resolver: yupResolver(BusinessBookingSchema),
  });
  const columns: GridColDef<BusinessBookingValues>[] = [
    {
      field: "fromDate",
      headerName: "From Date",
      flex: 1,
      renderCell: (params) => {
        if (!params.row.bookingStartTime) return "";
        return new Date(params.row.bookingStartTime).toLocaleString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      },
    },
    {
      field: "toDate",
      headerName: "To Date",
      flex: 1,
      renderCell: (params) => {
        if (!params.row.bookingEndTime) return "";
        return new Date(params.row.bookingEndTime).toLocaleString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      },
      // Output: "Nov 20 2025, 5:52 pm"
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const isBooked = params.value === "booked";
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
            {isBooked ? (
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
        <>
          <Button
            sx={{
              cursor: "pointer",
            }}
            onClick={() => handleUpdate(parseInt(params.row.id))}
            startIcon={<EditIcon />}
            variant="contained"
          >
            Edit
          </Button>
          <Button
            sx={{
              cursor: "pointer",
              ml: 2,
            }}
            onClick={() => handleDelete(parseInt(params.row.id))}
            startIcon={<DeleteIcon />}
            color="error"
            variant="outlined"
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const handleUpdate = async (id: number) => {
    setActiveRecordId(id);
    handleOpen();
  };

  const handleNew = () => {
    setActiveRecordId(null);
    setBooking(null);
    handleOpen();
  };
  const handleDelete = async (id: number) => {
    setActiveRecordId(id);
    try {
      const c = confirm("Are you sure to delete this booking?");
      if (c) {
        setLoading(true);

        await deleteBookingByBookingId(id);
        setBookings((prev) =>
          prev.filter((booking) => parseInt(booking.id) !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    } finally {
      setLoading(false);
      setActiveRecordId(null);
    }
  };

  useEffect(() => {
    const getActiveBooking = async () => {
      if (activeRecordId) {
        setLoading(true);
        try {
          const booking: BusinessBookingValues = await getBookingById(
            activeRecordId
          );
          setBooking(booking);
        } catch (err) {
          console.error(err);
          setBooking(null);
        } finally {
          setLoading(false);
        }
      }
    };
    getActiveBooking();
  }, [activeRecordId]);
  // watch for booking changes
  useEffect(() => {
    if (booking) {
      reset({
        ...booking,
        bookingStartTime: toDatetimeLocalString(booking.bookingStartTime),
        bookingEndTime: toDatetimeLocalString(booking.bookingEndTime),
      }); // 👈 updates form values when booking changes
    }
  }, [booking, reset]);

  const handleOpen = () => {
    reset(
      booking || {
        bookingStartTime: "",
        bookingEndTime: "",
        description: "",
      }
    );
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = async (data: BusinessBookingValues) => {
    try {
      if (data.id) await updateBooking(data);
      else await createBooking(data);
    } catch (error) {
      toast.error(`Something breaks up! Try after some time!`);
      console.error(error);
    } finally {
      handleClose();
      setBooking(null);
      setActiveRecordId(null);
      refetch();
    }
  };
  return (
    <Box sx={{ margin: "auto", padding: 2 }}>
      <Paper elevation={6}>
        <RecordTable
          title="Your Bookings"
          rows={bookings}
          columns={columns}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          headerAction={
            <Button
              variant="contained"
              color="primary"
              onClick={handleNew}
              sx={{ mr: 4 }}
            >
              + Add Booking
            </Button>
          }
        />
        <Dialog open={open} onClose={handleClose}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <DialogTitle>
              {activeRecordId ? "Update" : "Create"} Booking
            </DialogTitle>
            {errors.id?.message}

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
                <>
                  <input
                    type="hidden"
                    {...register("id")}
                    value={activeRecordId ?? ""}
                  />
                  <input
                    type="hidden"
                    {...register("businessId")}
                    value={booking?.businessId ?? ""}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="From Date & Time"
                    type="datetime-local"
                    fullWidth
                    variant="standard"
                    slotProps={{ inputLabel: { shrink: true } }}
                    {...register("bookingStartTime")}
                    error={!!errors.bookingStartTime}
                    helperText={errors.bookingStartTime?.message}
                  />
                  <TextField
                    required
                    margin="dense"
                    label="To Date & Time"
                    type="datetime-local"
                    fullWidth
                    variant="standard"
                    slotProps={{ inputLabel: { shrink: true } }}
                    {...register("bookingEndTime")}
                    error={!!errors.bookingEndTime}
                    helperText={errors.bookingEndTime?.message}
                  />
                  <TextField
                    label="Enter a few details about your booking (optional)"
                    slotProps={{ inputLabel: { shrink: true } }}
                    fullWidth
                    multiline
                    rows={3}
                    variant="filled"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                  {/* <FormControl error={!!errors.status}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...register("status", {
                            validate: (v) =>
                              v || "You must confirm booking status",
                          })}
                        />
                      }
                      label="I'm Booked"
                    />
                    {errors.status && (
                      <FormHelperText>{errors.status.message}</FormHelperText>
                    )}
                  </FormControl> */}
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">
                {activeRecordId ? "Update" : "Create"}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default ShopBookings;
