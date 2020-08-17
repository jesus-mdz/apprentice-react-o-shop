import React from 'react';
import Form from '../Shared/Form/Form';

function LoginForm() {
  return (
    <Form
      type="text"
      title="Login"
      inputArray={['username', 'password']}
      tertiaryButton={{ title: 'Register', link: '/register' }}
    />
  );
}

export default LoginForm;
