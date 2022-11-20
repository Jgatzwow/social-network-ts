import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/Textarea";
import { maxLengthValidation, required } from "../../utils/validators";

type DialogsFormType = {
  newMessage: string;
};
const maxLengthValidationHandler = maxLengthValidation(50);
const DialogsForm: React.FC<InjectedFormProps<DialogsFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLengthValidationHandler]}
        component={Textarea}
        name={"newMessage"}
        placeholder={"enter your message"}
      />
      <button>Add Message</button>
    </form>
  );
};

export const ReduxDialogsForm = reduxForm<DialogsFormType>({
  form: "dialogAddMessageForm",
})(DialogsForm);
