import { Card, CardContent, Stack, Typography } from "@mui/material";
import ContactRow from "../components/ContactRow";
import { ContactType } from "../types/ContactTypes";

interface ContactDetailsProps {
  phone: string;
  email?: string;
  address: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  phone,
  email,
  address,
}) => {
  return (
    <Card>
      <CardContent sx={{ pt: 1 }}>
        <Typography
          variant="h6"
          sx={{ pb: 0, fontWeight: 500, borderBottom: "1px solid" }}
        >
          Contact Details
        </Typography>
        <Stack spacing={1} sx={{ pt: 1 }}>
          <ContactRow
            href={`tel:${phone}`}
            label={phone}
            type={ContactType.Phone}
          />
          <ContactRow
            href={`mailto:${email}`}
            label={email ?? ""}
            type={ContactType.Email}
          />
          <ContactRow
            aria-label={`Directions to ${address}`}
            href={``}
            label={address}
            type={ContactType.Map}
            target="_blank"
            rel="noopener"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
