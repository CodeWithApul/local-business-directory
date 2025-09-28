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
  const [businessFormData, setBusinessFormData] =
    useState<BusinessFormValues | null>(null);

  useScrollToTop(step); // Scroll to Top when step changes

  const onSubmitBusinessForm = (data: BusinessFormValues) => {
    setBusinessFormData(data);
    console.log(businessFormData);
    // FIXME: Trigger OTP send via backend
    // await sendOTP(data.email, data.phone);
    setStep(FormStep.OTPVerification);

    console.log("Form Data:", {
      ...data,
      // logo: data.logo[0]?.name,
    });
  };

  const onSubmitOTPForm = (otp: string) => {
    console.log("onSubmitOTPForm", "OTP => ", otp);
    const isValid = true; // await verifyOTP(otp, email);// FIXME:
    if (isValid) {
      setStep(FormStep.Success);
      // submitFormData(businessFormData); // save details to backend // FIXME:
    } else {
      toast.error("Invalid OTP");
    }
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
        <VerifyBusinessForm onSubmit={onSubmitOTPForm} />
      )}
      {step === FormStep.Success && <SuccessBusinessForm />}
    </Box>
  );
}

export default AddBusinessPage;

// Components:
// BusinessForm.tsx — form with validation + image upload
// Reuse ImageUpload.tsx, CategorySelect.tsx, etc.
