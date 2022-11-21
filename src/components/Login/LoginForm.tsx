import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/Input";
import { required } from "../../utils/validators";
import s from "../Common/FormsControls/formControl.module.css";

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"email"}
            placeholder={"Email"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            type={"password"}
            name={"password"}
            placeholder={"password"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field name={"rememberMe"} type={"checkbox"} component={Input} />
          remember me
        </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};

export const ReduxLoginForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);
