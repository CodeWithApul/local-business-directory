import { Link, Box, Typography, Tooltip } from "@mui/material";
import { Phone, Email, LocationOn, HelpOutline } from "@mui/icons-material";
import { ContactType } from "../types/ContactTypes";

interface ContactRowProps extends React.ComponentProps<typeof Link> {
  type: ContactType;
  label: string;
  href: string;
}

const iconMap = {
  [ContactType.Phone]: Phone,
  [ContactType.Email]: Email,
  [ContactType.Map]: LocationOn,
};

const ContactRow: React.FC<ContactRowProps> = ({
  type,
  label,
  href,
  ...props
}) => {
  const IconComponent = iconMap[type] ?? HelpOutline;

  return (
    <Tooltip title={`Contact via ${type}`}>
      <Link
        href={href}
        underline="none"
        color="inherit"
        {...props}
        sx={{
          "&:hover": {
            bgcolor: "#f0f0f0",
            borderRadius: 1,
            cursor: "pointer",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconComponent color="primary" />
          <Typography variant="subtitle2">{label}</Typography>
        </Box>
      </Link>
    </Tooltip>
  );
};

export default ContactRow;
