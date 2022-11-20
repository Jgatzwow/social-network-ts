import React from "react";
import { FormDataType, ReduxLoginForm } from "./LoginForm";

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };
  return (
    <div>
      <h2>Login</h2>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};
