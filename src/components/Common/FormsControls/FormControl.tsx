import React from "react";
import s from "./formControl.module.css";

const FormControl = (props: any) => {
  const { children, meta } = props;
  const hasError = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default FormControl;
