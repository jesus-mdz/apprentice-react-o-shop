import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import registerActions from '../../store/register/action';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const [isSubmitted, setIsSubmitted] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event, object) => {
    setIsSubmitted(true);
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
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}
    />
  );
}

export default RegisterForm;
