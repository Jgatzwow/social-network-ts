export const required = (value: string) => {
  return value ? undefined : "Field is required";
};

export const maxLengthValidation = (maxLength: number) => (value: string) => {
  return value && value.length < maxLength
    ? undefined
    : `Max length is ${maxLength} symbols`;
};
