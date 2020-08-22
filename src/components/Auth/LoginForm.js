import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import loginActions from '../../store/login/action';
import { useDispatch } from 'react-redux';

function LoginForm() {
  const [isSubmitted, setIsSubmitted] = useState('');
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
      type="text"
      title="Login"
      inputArray={['username', 'password']}
      tertiaryButton={{ title: 'Register', link: '/register' }}
      restart={loginActions.logout}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}
    />
  );
}

export default LoginForm;
