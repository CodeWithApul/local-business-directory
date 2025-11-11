import { Box, Typography } from "@mui/material";

import BusinessForm, {
  type BusinessFormValues,
} from "./forms/steps/BusinessForm";
import VerifyBusinessForm from "./forms/steps/VerifyBusinessStepForm";
import SuccessBusinessForm from "./forms/steps/SuccessBusinessForm";
import { useState } from "react";
import { toast } from "react-toastify";
import { HorizontalLinearAlternativeLabelStepper } from "../components/HorizontalLinearAlternativeLabelStepper";
import useScrollToTop from "../hooks/useScrollToTop";
import { setFormData } from "../utils/createFormData";

enum FormStep {
  InitialDetails = 0,
  OTPVerification = 1,
  Success = 2,
}

const steps: { key: FormStep; label: string }[] = [
  { key: FormStep.InitialDetails, label: "Enter Details" },
  { key: FormStep.OTPVerification, label: "Verify OTP" },
  { key: FormStep.Success, label: "Completed" },
];

function AddBusinessPage() {
  const [step, setStep] = useState<FormStep>(FormStep.InitialDetails);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useScrollToTop(step); // Scroll to Top when step changes

  const onSubmitBusinessForm = async (data: BusinessFormValues) => {
    const formData = setFormData({
      logo: data.logo[0],
      businessName: data.businessName,
      ownerName: data.ownerName,
      street: data.street,
      country: data.country,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      phoneNumber: data.phoneNumber,
      email: data.email,
      category: data.category,
      description: data.description,
    });

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/business/create`,

      {
        method: "POST",
        body: formData,
      }
    );
    const json = await res.json();

    // FIXME: Trigger OTP send via backend
    // await sendOTP(data.email, data.phone);
    if (!res.ok) {
      return toast.error(`Something went wrong ${json.error}`);
    }

    const otpRes = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/generate-otp`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          userId: json.userId,
          phoneNumber: data.phoneNumber,
        }),
      }
    );

    if (!otpRes.ok) {
      return toast.error("Failed to send otp, try again later.");
    }
    setUserId(json.userId);
    setPhoneNumber(data.phoneNumber);
    setEmail(data.email);
    setStep(FormStep.OTPVerification);

    toast.error(`We have send an OTP to ${data.email} and ${data.phoneNumber}`);
  };

  const onSubmitOTPForm = async (otp: string, password: string) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/verify-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otp, userId: userId, password: password }),
      }
    );

    if (!res.ok) {
      return toast.error("Invalid OTP");
    }
    setStep(FormStep.Success);
    toast.success("You account has been created.");
  };
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 5 }}>
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: 700 }}>
        Register your Business
      </Typography>
      <HorizontalLinearAlternativeLabelStepper
        activeStep={step}
        steps={steps}
      />

      {step === FormStep.InitialDetails && (
        <BusinessForm mode="create" onSubmit={onSubmitBusinessForm} />
      )}
      {step === FormStep.OTPVerification && (
        <VerifyBusinessForm
          email={email}
          userId={userId}
          phoneNumber={phoneNumber}
          onSubmit={onSubmitOTPForm}
        />
      )}
      {step === FormStep.Success && <SuccessBusinessForm />}
    </Box>
  );
}

export default AddBusinessPage;

// Components:
// BusinessForm.tsx — form with validation + image upload
// Reuse ImageUpload.tsx, CategorySelect.tsx, etc.
