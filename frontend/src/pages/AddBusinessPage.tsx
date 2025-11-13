import { useState } from "react";
import { toast } from "react-toastify";
import { Box, Typography } from "@mui/material";
import { HorizontalLinearAlternativeLabelStepper } from "../components/HorizontalLinearAlternativeLabelStepper";
import useScrollToTop from "../hooks/useScrollToTop";
import { addBusiness, sendOTP, verifyOTP } from "../services/businessService";
import BusinessForm from "./forms/steps/BusinessForm";
import SuccessBusinessForm from "./forms/steps/SuccessBusinessForm";
import VerifyBusinessForm from "./forms/steps/VerifyBusinessStepForm";

import type { BusinessFormValues } from "./forms/steps/BusinessForm";
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
    const res = await addBusiness(data);
    const { userId, error } = await res.json();

    if (!res.ok) {
      return toast.error(`Something went wrong ${error}`);
    }

    const otpRes = await sendOTP(data.email, data.phoneNumber, userId); // Trigger OTP send

    if (!otpRes.ok) {
      return toast.error("Failed to send OTP, try again later.");
    }
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setUserId(userId);
    setStep(FormStep.OTPVerification);

    toast.success(
      `We have send an OTP to ${data.email} and ${data.phoneNumber}`,
    );
  };

  const hanldSendOtpAgain = async (
    email: string,
    phoneNumber: string,
    userId: string,
  ) => {
    const res = await sendOTP(email, phoneNumber, userId);
    if (res.ok) {
      return toast.success(
        `We have send an OTP to ${email} and ${phoneNumber}`,
      );
    }

    toast.error("Failed to send OTP, try again later.");
  };

  const onSubmitOTPForm = async (otp: string, password: string) => {
    if (!userId) {
      return toast.error("User ID is missing. Please restart the process.");
    }
    const res = await verifyOTP(userId, otp, password);

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
        <BusinessForm
          mode="create"
          onSubmit={onSubmitBusinessForm}
          initialValues={{ category: "" }}
        />
      )}
      {step === FormStep.OTPVerification && (
        <VerifyBusinessForm
          onSubmit={onSubmitOTPForm}
          sendOtpAgain={() => hanldSendOtpAgain(email, phoneNumber, userId)}
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
