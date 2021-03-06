import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import loginActions from '../../store/login/action';
import { useDispatch } from 'react-redux';
import loginArray from './const/loginArray';

function LoginForm({ className }) {
  const [isSubmitted, setIsSubmitted] = useState('');
  const [allInputsObject, setAllInputsObject] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (event, object) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (object.username !== '' && object.password !== '') {
      dispatch(loginActions.login(object));
    } else {
      event.preventDefault();
    }
  };

  return (
    <Form
      className={className}
      type="text"
      title="Login"
      inputArray={loginArray}
      primaryButton={{ title: 'Login' }}
      tertiaryButton={{ title: 'Register', link: '/register' }}
      restart={loginActions.logout}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}
      allInputsObject={allInputsObject}
      setAllInputsObject={setAllInputsObject}
    />
  );
}

export default LoginForm;
