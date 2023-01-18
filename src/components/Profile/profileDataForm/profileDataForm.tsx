import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../Common/FormsControls/Input';
import {required} from '../../../utils/validators';
import {Textarea} from '../../Common/FormsControls/Textarea';
import s from '../../Common/FormsControls/formControl.module.css';

export type FormDataType = {
  fullName: string;
  lookingForAJobDescription: string;
  lookingForAJob: boolean;
  aboutMe: string
};


const ProfileDataForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
  const toggleEditMOde = () => {

  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Full name:</p>
        <Field
          name={'fullName'}
          placeholder={'Full name'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <p>Looking for a job:</p>
        <Field
          type={'checkbox'}
          name={'lookingForAJob'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <p>My professional skills:</p>
        <Field name={'lookingForAJobDescription'} placeholder={'professional Skills'} component={Textarea}/>
      </div>
      <div>
        <p>About me:</p>
        <Field name={'aboutMe'} placeholder={'Something about me'} component={Textarea}/>
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <button onClick={toggleEditMOde}>Save changes</button>

    </form>
  );
};
const ProfileDataFormRedux = reduxForm<FormDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux
