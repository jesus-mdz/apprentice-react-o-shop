import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import registerActions from '../../store/register/action';
import { useDispatch } from 'react-redux';
import registerArray from './const/registerArray';

function RegisterForm({ className }) {
  const [isSubmitted, setIsSubmitted] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event, object) => {
    event.preventDefault();
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
      className={className}
      type="text"
      title="Register"
      inputArray={registerArray}
      primaryButton={{ title: 'Register' }}
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
