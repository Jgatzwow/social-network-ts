import React from "react";
import FormControl from "./FormControl";

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
