import { CategoryFormSchema } from "./ValidationSchema";
import { type InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormHelperText,
} from "@mui/material";

export type CategoryFormValues = InferType<typeof CategoryFormSchema>;

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: yupResolver(CategoryFormSchema),
  });

  const onSubmit = (values: CategoryFormValues) => {
    console.log(values);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Category Name"
          variant="outlined"
          fullWidth
          required
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <FormControlLabel
          label="Active"
          control={
            <Checkbox
              defaultChecked
              slotProps={{ input: { "aria-label": "Active?" } }}
              {...register("isActive")}
            />
          }
        />
        {errors.isActive && (
          <FormHelperText error>{errors.isActive.message}</FormHelperText>
        )}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
