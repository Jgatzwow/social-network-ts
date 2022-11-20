import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/Input";
import { required } from "../../utils/validators";

export type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"login"}
            placeholder={"Login"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name={"password"}
            placeholder={"Password"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field name={"rememberMe"} type={"checkbox"} component={Input} />
          remember me
        </div>
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
