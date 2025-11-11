export const setFormData = (
  values: Record<string, string | Blob>
): FormData => {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
