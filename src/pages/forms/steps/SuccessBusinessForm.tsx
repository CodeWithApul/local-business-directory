import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SuccessBusinessForm() {
  return (
    <Box textAlign="center" py={5}>
      <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
      <Typography variant="h4" mt={2}>
        Success!
      </Typography>
      <Typography variant="body1">
        Your form has been submitted successfully.
      </Typography>
    </Box>
  );
}

export default SuccessBusinessForm;
