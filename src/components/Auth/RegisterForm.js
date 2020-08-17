import React from 'react';
import Form from '../Shared/Form/Form';
import registerActions from '../../store/register/action';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const dispatch = useDispatch();

  const onSubmit = (event, object) => {
    if (
      object.firstName !== '' &&
      object.lastName !== '' &&
      object.username !== '' &&
      object.password !== ''
    ) {
      dispatch(registerActions.register(object));
    } else {
      event.preventDefault();
    }
  };

  return (
    <Form
      type="text"
      title="Register"
      inputArray={['First Name', 'Last Name', 'Username', 'Password']}
      tertiaryButton={{ title: 'Cancel', link: '/login' }}
      restart={() => {
        return null;
      }}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterForm;
