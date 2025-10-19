import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export function HorizontalLinearAlternativeLabelStepper({
  steps,
  activeStep,
}: {
  steps: { label: string; key: number }[];
  activeStep: number;
}) {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ margin: 2, marginTop: 2 }}
    >
      {steps.map(({ label, key }) => (
        <Step key={key}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
