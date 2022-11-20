import React from "react";
import FormControl from "./FormControl";

export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
