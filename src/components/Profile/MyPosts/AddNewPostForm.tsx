import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthValidation, required } from "../../../utils/validators";
import { Textarea } from "../../Common/FormsControls/Textarea";

type NewPostFormType = {
  newPostText: string;
};

const maxLengthValidationHandler = maxLengthValidation(10);

const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLengthValidationHandler]}
        component={Textarea}
        name={"newPostText"}
        placeholder={"enter your post message"}
      ></Field>
      <button>add post</button>
    </form>
  );
};

export const ReduxAddNewPostForm = reduxForm<NewPostFormType>({
  form: "addNewPostForm",
})(AddNewPostForm);
